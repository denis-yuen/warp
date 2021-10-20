"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[1051],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return t?i.createElement(h,o(o({ref:n},c),{},{components:t})):i.createElement(h,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5930:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var i=t(7462),a=t(3366),r=(t(7294),t(3905)),o={sidebar_position:4},s="Version and Release Pipelines",l={unversionedId:"About_WARP/VersionAndReleasePipelines",id:"About_WARP/VersionAndReleasePipelines",isDocsHomePage:!1,title:"Version and Release Pipelines",description:"WARP Pipelines are versioned semantically, allowing you to determine how and when your data was created (provenance). This promotes compatibility across datasets and ensures that analyses can be reproduced by the global scientific community. Semantic version numbers (written as major.minor.patch) are human readable and give immediate insight into the compatibility of pipeline outputs (see the Versioning Guidelines below).",source:"@site/docs/About_WARP/VersionAndReleasePipelines.md",sourceDirName:"About_WARP",slug:"/About_WARP/VersionAndReleasePipelines",permalink:"/warp/docs/About_WARP/VersionAndReleasePipelines",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/About_WARP/VersionAndReleasePipelines.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1634754963,formattedLastUpdatedAt:"10/20/2021",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Testing Pipelines",permalink:"/warp/docs/About_WARP/TestingPipelines"},next:{title:"CEMBA Overview",permalink:"/warp/docs/Pipelines/CEMBA_MethylC_Seq_Pipeline/README"}},p=[{value:"Versioning Requirements",id:"versioning-requirements",children:[]},{value:"Versioning Guidelines",id:"versioning-guidelines",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"version-and-release-pipelines"},"Version and Release Pipelines"),(0,r.kt)("p",null,"WARP Pipelines are versioned semantically, allowing you to determine how and when your data was created (provenance). This promotes compatibility across datasets and ensures that analyses can be reproduced by the global scientific community. Semantic version numbers (written as major.minor.patch) are human readable and give immediate insight into the compatibility of pipeline outputs (see the ",(0,r.kt)("a",{parentName:"p",href:"#versioning-guidelines"},"Versioning Guidelines")," below)."),(0,r.kt)("p",null,"Versions of each pipeline are packaged into releases and published on GitHub (see the WARP ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/releases"},"releases page"),"). A published release of a pipeline version in GitHub has passed scientific tests (read more in ",(0,r.kt)("a",{parentName:"p",href:"/warp/docs/About_WARP/TestingPipelines"},"TestingPipelines"),") and is available to be used in production systems."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"To discover and search releases, use the WARP command-line tool ",(0,r.kt)("a",{parentName:"h5",href:"https://github.com/broadinstitute/warp/tree/develop/wreleaser"},"Wreleaser"),".")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"})),(0,r.kt)("h2",{id:"versioning-requirements"},"Versioning Requirements"),(0,r.kt)("p",null,"All versioned pipelines must have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A release version number in the main workflow WDL. The version number is in the form ",(0,r.kt)("inlineCode",{parentName:"li"},"major.minor.patch")," and is included as a field in the standardized format ",(0,r.kt)("inlineCode",{parentName:"li"},'String pipeline_version = "1.0.0"'),"."),(0,r.kt)("li",{parentName:"ul"},"A cumulative changelog file containing the changes introduced in the PR and all previous changes in reverse chronological order. Changelog entries are to be formatted according to the ",(0,r.kt)("a",{parentName:"li",href:"/warp/docs/contribution/contribute_to_warp/changelog_style"},"changelog style guide")," and will include the version number, date of last commit, and a bulleted list of changes since the last release.")),(0,r.kt)("h2",{id:"versioning-guidelines"},"Versioning Guidelines"),(0,r.kt)("p",null,"In WARP, a pipeline requires a version change when any change is made to the pipeline\u2019s main WDL workflow or any of the WDL workflow dependencies. If a change requires a new pipeline version number, the changes and new version number are demarcated in the pipeline\u2019s changelog."),(0,r.kt)("p",null,"Pipeline version numbers are updated based the following  guidelines:"),(0,r.kt)("h4",{id:"major-changes"},"Major changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any qualitative change to the pipeline\u2019s scientific outputs. If you use the pipeline\u2019s data output, this change indicates a possible need to reprocess data analyzed with a previous release version."),(0,r.kt)("li",{parentName:"ul"},"Any breaking changes to the pipeline, including input/output refactors, renaming of the pipeline, and changes to input/output formats.")),(0,r.kt)("h4",{id:"minor-changes"},"Minor changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Addition of new outputs that don\u2019t impact previous outputs; for example, adding a new md5 checksum output or outputting new QC metrics."),(0,r.kt)("li",{parentName:"ul"},"Changes to the pipeline that do not qualitatively impact the scientific outputs, but may produce slightly different outputs (no data reprocessing needed).")),(0,r.kt)("h4",{id:"patch-micro-changes"},"Patch (micro) changes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Memory changes, internal refactor or variable name changes, speed or cost optimizations, comments, metadata."),(0,r.kt)("li",{parentName:"ul"},"Addition of optional inputs.")),(0,r.kt)("p",null,"When pipelines are promoted to the master branch, a script packages the pipeline for release on GitHub. A release contains three components:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"A release name comprising the pipeline name and version number listed in the changelog (i.e. SmartSeq2SingleSample_v5.0.0)"),(0,r.kt)("li",{parentName:"ol"},"Release notes comprising the corresponding version changelog entry"),(0,r.kt)("li",{parentName:"ol"},"Artifacts including the main workflow WDL, a zip of all workflow dependencies, and when applicable, an options file")),(0,r.kt)("p",null,"Upon release, the pipeline is automatically pushed to Dockstore based on the WARP ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/broadinstitute/warp/blob/develop/.dockstore.yml"},"Dockstore configuration"),"."),(0,r.kt)("p",null,"To support early integration testing of our pipelines, we also maintain a floating \u201cdev\u201d pre-release for each pipeline named \u201cPipelineName_develop\u201d."))}u.isMDXComponent=!0}}]);