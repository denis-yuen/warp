import base64
import json
import requests
import traceback
from time import sleep
from datetime import datetime, timezone
from urllib.parse import quote
from google.auth.transport.requests import Request
from google.oauth2 import service_account
from google.auth import credentials
import argparse
import sys
import os
import logging
import time
import subprocess
from google.cloud import storage


# Configure logging to display INFO level and above messages
logging.basicConfig(
    level=logging.INFO,  # This will show INFO and higher levels (INFO, WARNING, ERROR, CRITICAL)
    format='%(asctime)s - %(levelname)s - %(message)s'
)

class FirecloudAPI:
    def __init__(self, workspace_namespace, workspace_name, sa_json_b64, user, action, method_namespace, method_name):
        self.sa_json_b64 = sa_json_b64
        self.namespace = workspace_namespace
        self.workspace_name = workspace_name
        self.user = user  # Store the user email
        self.base_url = "https://api.firecloud.org/api"
        self.action = action
        self.method_namespace = method_namespace
        self.method_name = method_name

        # Setup credentials once during initialization
        scopes = ['profile', 'email', 'openid']
        decoded_sa = base64.b64decode(sa_json_b64).decode('utf-8')
        sa_credentials = service_account.Credentials.from_service_account_info(
            json.loads(decoded_sa),
            scopes=scopes
        )
        self.delegated_creds = sa_credentials.with_subject(user)

    def build_auth_headers(self, token: str):
        if not self.delegated_creds.valid:
            logging.info("Refreshing credentials.")
            self.delegated_creds.refresh(Request())
        token = self.delegated_creds.token
        return {
            "content-type": "application/json",
            "Authorization": f"Bearer {token}",
        }

    def get_user_token(self, credentials: credentials):
        """
        Get test user's access token
        """
        # if token is expired or about to expire in 10 seconds, refresh and then use it
        if not credentials.valid:
            logging.info("Fetching user's new access token")
            credentials.refresh(Request())
            logging.info("Token refreshed.")
        else:
            expiry_timestamp = credentials.expiry.replace(tzinfo=timezone.utc).timestamp()
            now_timestamp = datetime.now(timezone.utc).timestamp()
            # if token is about to expire in 1 minute, refresh and then use it
            if expiry_timestamp - now_timestamp < 60:
                logging.info("Fetching user's new access token")
                credentials.refresh(Request())
                logging.info("Token refreshed.")

        return credentials.token

    def submit_job(self, submission_data_file):
        token = self.get_user_token(self.delegated_creds)
        headers = self.build_auth_headers(token)
        url = f"{self.base_url}/workspaces/{self.namespace}/{quote(self.workspace_name)}/submissions"
        response = requests.post(url, json=submission_data_file, headers=headers)

        # Print status code and response body for debugging
        logging.info(f"Response status code for submitting job: {response.status_code}")
        logging.info(f"Response body: {response.text}")

        if response.status_code == 201:
            try:
                # Parse the response as JSON
                response_json = response.json()

                # Extract the submissionId
                submission_id = response_json.get("submissionId", None)
                if submission_id:
                    logging.info(f"Submission ID extracted: {submission_id}")
                    return submission_id
                else:
                    logging.error("Error: submissionId not found in the response.")
                    return None
            except json.JSONDecodeError:
                logging.error("Error: Failed to parse JSON response.")
                return None
        else:
            logging.error(f"Failed to submit job. Status code: {response.status_code}")
            logging.error(f"Response body: {response.text}")
            return None


    def upload_test_inputs(self, pipeline_name, test_inputs, branch_name):
        """
        Uploads test inputs to the workspace via Firecloud API.

        :param test_inputs: JSON data containing test inputs
        :return: True if successful, False otherwise
        """
        # Construct the API endpoint URL for the method configuration
        # properly encode the space in WARP Tests as %20 using from urllib.parse import quote
        url = f"{self.base_url}/workspaces/{self.namespace}/{quote(self.workspace_name)}/method_configs/{self.namespace}/{pipeline_name}"

        token = self.get_user_token(self.delegated_creds)
        headers = self.build_auth_headers(token)

        # get the current method configuration
        response = requests.get(url, headers=headers)
        config = response.json()
        print(f"Current method configuration: {json.dumps(config, indent=2)}")
        # update the config with the new inputs
        print(f"Opening test inputs file: {test_inputs}")
        with open(test_inputs, 'r') as file:
            inputs_json = json.load(file)
            print("Test inputs loaded successfully.")
            inputs_json = self.quote_values(inputs_json)
            config["inputs"] = inputs_json

        # Construct the methodUri with the branch name
        base_url = "github.com/broadinstitute/warp/{pipeline_name}"
        method_uri = f"dockstore://{quote(base_url)}/{branch_name}"
        print(f"Updating methodUri with branch name: {method_uri}")
        config["methodRepoMethod"]["methodUri"] = method_uri

        print(f"Updating methodVersion with branch name: {branch_name}")
        config["methodRepoMethod"]["methodVersion"] = branch_name

        # We need to increment the methodConfigVersion by 1 every time we update the method configuration
        config["methodConfigVersion"] += 1  # Increment version number by  1
        print(f"Updated method configuration: {json.dumps(config, indent=2)}")


        # post the updated method config to the workspace
        response = requests.post(url, headers=headers, json=config)
        print(f"Response status code for uploading inputs: {response.status_code}")
        print(f"Response text: {response.text}")

        # Check if the test inputs were uploaded successfully
        if response.status_code == 200:
            print("Test inputs uploaded successfully.")
            return True
        else:
            print(f"Failed to upload test inputs. Status code: {response.status_code}")
            return False

    def poll_job_status(self, submission_id):
        """
        Polls the status of a submission until it is complete and returns a dictionary of workflow IDs and their statuses.

        :param submission_id: The ID of the submission to poll
        :return: Dictionary with workflow IDs as keys and their statuses as values
        """
        # Construct the API endpoint URL for polling submission status
        status_url = f"{self.base_url}/workspaces/{self.namespace}/{self.workspace_name}/submissions/{submission_id}"
        workflow_status_map = {}

        # Continuously poll the status of the submission until completion
        while True:
            # Get the token and headers
            token = self.get_user_token(self.delegated_creds)
            headers = self.build_auth_headers(token)
            status_response = requests.get(status_url, headers=headers)

            # Check if the response status code is successful (200)
            if status_response.status_code != 200:
                logging.error(f"Error: Received status code {status_response.status_code}")
                logging.info(f"Response content: {status_response.text}")
                return {}
            try:
                # Parse the response as JSON
                status_data = status_response.json()
            except json.JSONDecodeError:
                logging.error("Error decoding JSON response.")
                logging.info(f"Response content: {status_response.text}")
                return {}

            # Retrieve workflows and their statuses
            workflows = status_data.get("workflows", [])
            for workflow in workflows:
                workflow_id = workflow.get("workflowId")
                workflow_status = workflow.get("status")
                if workflow_id and workflow_status:
                    workflow_status_map[workflow_id] = workflow_status

            # Check if the submission is complete
            submission_status = status_data.get("status", "")
            if submission_status == "Done":
                break

            # Wait for 20 seconds before polling again
            time.sleep(20)

        return workflow_status_map

    def quote_values(self, inputs_json):
        return {key: f'"{value}"' for key, value in inputs_json.items()}

    def get_workflow_outputs(self, submission_id, workflow_id, pipeline_name):
        """
        Fetches workflow outputs from the Firecloud API.

        :param submission_id: The ID of the submission
        :param workflow_id: The ID of the workflow
        :param pipeline_name: The name of the pipeline whose outputs are required
        :return: Outputs dictionary and a list of output values
        """
        # Construct the API endpoint URL for fetching workflow outputs
        url = f"{self.base_url}/workspaces/{self.namespace}/{self.workspace_name}/submissions/{submission_id}/workflows/{workflow_id}/outputs"
        response = requests.get(url, headers=self.headers)

        # Check if the API request was successful
        if response.status_code == 200:
            json_response = response.json()
            # Extract outputs for the specified pipeline name
            outputs = json_response.get('tasks', {}).get(pipeline_name, {}).get('outputs', {})
            output_values = list(outputs.values())
            return outputs, output_values
        else:
            logging.error(f"Failed to retrieve workflow outputs. Status code: {response.status_code}")
            return None, None

   # def gsutil_copy(self, source, destination):
   #     """
   #     Copies files between GCS locations using gsutil with authentication.
#
   #     :param source: The source GCS path (e.g., "gs://bucket/source_file").
   #     :param destination: The destination GCS path (e.g., "gs://bucket/destination_file").
   #     :return: Output of the gsutil command.
   #     """
   #     # Retrieve a valid user token
   #     token = self.get_user_token(self.delegated_creds)
#
   #     # Set up the environment variable for gsutil authentication
   #     os.environ['GOOGLE_OAUTH_ACCESS_TOKEN'] = token
#
   #     # Prepare the gsutil command
   #     command = ["gsutil", "cp", source, destination]
   #     #echo the command
   #     print(f"Running command: {' '.join(command)}")


    #    try:
    #        # Execute the gsutil copy command
    #        result = subprocess.run(command, capture_output=True, text=True, check=True)
#
    #        # Return the command output
    #        return result.stdout
    #    except subprocess.CalledProcessError as e:
    #        logging.error(f"gsutil copy failed: {e.stderr}")
    #        raise RuntimeError(f"gsutil copy failed: {e.stderr}") from e
    #        exit(1)


    def gcloud_auth_list(self):
        try:
            # Run the gcloud auth list command and capture output
            result = subprocess.run(
                ["gcloud", "auth", "list", "--format=json"],
                capture_output=True,
                text=True,
                check=True
            )
            # Parse the result as JSON
            auth_list = json.loads(result.stdout)
            # Output the result
            logging.info(f"gcloud auth list output: {json.dumps(auth_list, indent=2)}")
            return auth_list
        except subprocess.CalledProcessError as e:
            logging.error(f"Error executing 'gcloud auth list': {e.stderr}")
            return None

    def gsutil_copy(self, source, destination):
        client = storage.Client()  # Uses GOOGLE_APPLICATION_CREDENTIALS implicitly
        source_bucket_name, source_blob_name = source.replace("gs://", "").split("/", 1)
        destination_bucket_name, destination_blob_name = destination.replace("gs://", "").split("/", 1)

        source_bucket = client.bucket(source_bucket_name)
        source_blob = source_bucket.blob(source_blob_name)
        destination_bucket = client.bucket(destination_bucket_name)

        source_bucket.copy_blob(source_blob, destination_bucket, destination_blob_name)


    def main(self):
        logging.info("Starting process based on action.")

        if self.action == "submit_job":
            submission_id = self.submit_job()
            logging.info(f"Job submission complete with ID: {submission_id}")
        elif self.action == "upload_test_inputs":
            success = self.upload_test_inputs(self.pipeline_name, self.test_input_file, self.branch_name)
            if success:
                logging.info("Test inputs uploaded successfully.")
            else:
                logging.error("Failed to upload test inputs.")
        elif self.action == "poll_job_status":
            status = self.poll_job_status()
            logging.info(f"Final job status: {status}")
        elif self.action == "get_workflow_outputs":
            if not args.submission_id or not args.workflow_id or not args.pipeline_name:
                parser.error("Arguments --submission_id, --workflow_id, and --pipeline_name are required for 'get_workflow_outputs'")
            # Fetch workflow outputs
            outputs, output_values = self.get_workflow_outputs(args.submission_id, args.workflow_id, args.pipeline_name)
            if outputs:
                logging.info(f"Workflow outputs: {json.dumps(outputs, indent=2)}")
                logging.info(f"Output values: {output_values}")
            else:
                logging.error("Failed to retrieve workflow outputs.")
        else:
            logging.error(f"Unknown action: {self.action}")


if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("--sa-json-b64", required=True, help="Base64 encoded service account JSON")
    parser.add_argument("--user", required=True, help="User email for impersonation")
    parser.add_argument("--workspace-namespace", required=True, help="Namespace of the workspace.")
    parser.add_argument("--workspace-name", required=True, help="Name of the workspace.")
    parser.add_argument("--pipeline_name", help="Pipeline name (required for 'upload_test_inputs')")
    parser.add_argument("--test_input_file", help="Path to test input file (required for 'upload_test_inputs')")
    parser.add_argument("--branch_name", help="Branch name for the method repository (required for 'upload_test_inputs')")
    parser.add_argument("--method_namespace", help="Method namespace")
    parser.add_argument("--method_name", help="Method name")
    parser.add_argument('--submission_data_file', help='Path to submission data JSON file (required for submit)')
    parser.add_argument('--submission_id', help='Submission ID (required for poll_job_status)')
    parser.add_argument('--workflow_id', help='Workflow ID (required for get_workflow_outputs)')
    parser.add_argument("--source", help="Source GCS path for gsutil copy")
    parser.add_argument("--destination", help="Destination GCS path for gsutil copy")
    parser.add_argument("action", choices=["submit_job", "upload_test_inputs", "poll_job_status", "get_workflow_outputs", "gsutil_copy"],
                    help="Action to perform: 'submit_job', 'upload_test_inputs', 'poll_job_status', 'get_workflow_outputs', or 'gsutil_copy'")

    args = parser.parse_args()

    # Pass action to the FirecloudAPI constructor
    api = FirecloudAPI(
        sa_json_b64=args.sa_json_b64,
        user=args.user,
        workspace_namespace=args.workspace_namespace,
        workspace_name=args.workspace_name,
        action=args.action,
        method_namespace=args.method_namespace,
        method_name=args.method_name
    )

    # Example: Checking the gcloud auth list before proceeding
    auth_list = api.gcloud_auth_list()
    if auth_list:
        logging.info("Authenticated accounts:")
        for account in auth_list:
            logging.info(f"Account: {account['account']}, Active: {account['active']}")
    else:
        logging.error("Failed to retrieve gcloud authentication list.")

    # Perform the selected action
    if args.action == "upload_test_inputs":
        # Check for required arguments for upload_test_inputs action
        if not args.pipeline_name or not args.test_input_file or not args.branch_name:
            parser.error("Arguments --pipeline_name, --test_input_file, and --branch_name are required for 'upload_test_inputs'")
        # Call the function to upload test inputs
        api.upload_test_inputs(args.pipeline_name, args.test_input_file, args.branch_name)

    elif args.action == "submit_job":
        # Check for required argument for submit_job action
        if not args.submission_data_file:
            parser.error("Argument --submission_data_file is required for 'submit_job'")
        # Load the submission data from the provided file
        else:
            with open(args.submission_data_file, 'r') as file:
                submission_data = json.load(file)
            # Submit the job with the loaded submission data
            submission_id = api.submit_job(submission_data)
            print(submission_id)

    elif args.action == "poll_job_status":
        if not args.submission_id:
            parser.error("Argument --submission_id is required for 'poll_job_status'")
        else:
            # Poll the job status with the provided submission ID
            workflow_status_map = api.poll_job_status(args.submission_id)

            # Convert the dictionary to a JSON string and print it
            if workflow_status_map:
                print(json.dumps(workflow_status_map))  # Output the dictionary as a JSON string for bash parsing
            else:
                print("No workflows found or an error occurred.")
    elif args.action == "gsutil_copy":
        if not args.source or not args.destination:
            parser.error("Arguments --source and --destination are required for 'gsutil_copy'")
        else:
            # Perform the gsutil copy
            try:
                output = api.gsutil_copy(args.source, args.destination)
                logging.info("File copy successful.")
                print(output)
            except RuntimeError as e:
                logging.error(f"Error during gsutil copy: {e}")

