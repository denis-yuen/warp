"use strict";(self.webpackChunkwebsite_2=self.webpackChunkwebsite_2||[]).push([[2726],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,g=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},m),{},{components:a})):n.createElement(g,i({ref:e},m))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},659:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return u}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i={sidebar_position:3},p="What tags are included in an Optimus BAM file?",o={unversionedId:"Pipelines/Optimus_Pipeline/Bam_tags",id:"Pipelines/Optimus_Pipeline/Bam_tags",isDocsHomePage:!1,title:"What tags are included in an Optimus BAM file?",description:"The Optimus Pipeline outputs a barcoded BAM file of aligned reads. There are multiple tags within the BAM file, including standard tags from 10X genomics and Sequence Alignment Map (SAM) files. The table below details the tags used by the Optimus Pipeline and the relevant sources/tools from which the pipeline obtains the tags.",source:"@site/docs/Pipelines/Optimus_Pipeline/Bam_tags.md",sourceDirName:"Pipelines/Optimus_Pipeline",slug:"/Pipelines/Optimus_Pipeline/Bam_tags",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Bam_tags",editUrl:"https://github.com/broadinstitute/warp/edit/develop/website/docs/Pipelines/Optimus_Pipeline/Bam_tags.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1634754963,formattedLastUpdatedAt:"10/20/2021",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Optimus v5.0.0 Methods",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/optimus.methods"},next:{title:"Optimus Count Matrix Overview",permalink:"/warp/docs/Pipelines/Optimus_Pipeline/Loom_schema"}},s=[],m={toc:s};function u(t){var e=t.components,a=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"what-tags-are-included-in-an-optimus-bam-file"},"What tags are included in an Optimus BAM file?"),(0,l.kt)("p",null,"The Optimus Pipeline outputs a barcoded BAM file of aligned reads. There are multiple tags within the BAM file, including standard tags from ",(0,l.kt)("a",{parentName:"p",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X genomics")," and ",(0,l.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"Sequence Alignment Map (SAM) files"),". The table below details the tags used by the Optimus Pipeline and the relevant sources/tools from which the pipeline obtains the tags."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Optimus Pipeline BAM Tag"),(0,l.kt)("th",{parentName:"tr",align:null},"Details"),(0,l.kt)("th",{parentName:"tr",align:null},"Source"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AS"),(0,l.kt)("td",{parentName:"tr",align:null},"Alignment score generated by aligner"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CB"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium cellular barcode sequence that is error-corrected and confirmed against a list of known-good barcode sequences"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CR"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium cellular barcode sequence as reported by the sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"CY"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium cellular barcode read quality. Phred scores as reported by sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GX"),(0,l.kt)("td",{parentName:"tr",align:null},"Gene ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR/blob/master/docs/STARsolo.md"},"STAR aligner"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GN"),(0,l.kt)("td",{parentName:"tr",align:null},"Gene names"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR/blob/master/docs/STARsolo.md"},"STAR aligner"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GS"),(0,l.kt)("td",{parentName:"tr",align:null},"Reserved for backwards compatibility reasons"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HI"),(0,l.kt)("td",{parentName:"tr",align:null},"Query hit index"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MD"),(0,l.kt)("td",{parentName:"tr",align:null},"String for mismatching indexes"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NH"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of reported alignments that contain the query in the current record"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NM"),(0,l.kt)("td",{parentName:"tr",align:null},"Edit difference to the reference"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RG"),(0,l.kt)("td",{parentName:"tr",align:null},"Read group"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://samtools.github.io/hts-specs/SAMtags.pdf"},"SAM"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UB"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium molecular barcode sequence that is error-corrected among other molecular barcodes with the same cellular barcode and gene alignment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UG"),(0,l.kt)("td",{parentName:"tr",align:null},"Read group ID"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/CGATOxford/UMI-tools"},"Umi-tools"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UR"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium molecular barcode sequence as reported by the sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UY"),(0,l.kt)("td",{parentName:"tr",align:null},"Chromium molecular barcode read quality. Phred scores as reported by sequencer"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"XF"),(0,l.kt)("td",{parentName:"tr",align:null},"Extra alignment flags"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://support.10xgenomics.com/single-cell-gene-expression/software/pipelines/latest/output/bam"},"10X Genomics"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jI"),(0,l.kt)("td",{parentName:"tr",align:null},"[jI:B:I,Start1,End1,Start2,End2,...]"," Start and End of introns for all junctions (1-based)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"jM"),(0,l.kt)("td",{parentName:"tr",align:null},"[jM:B:c,M1,M2,...]"," Intron motifs for all junctions (i.e. N in CIGAR)"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nM"),(0,l.kt)("td",{parentName:"tr",align:null},"The number of mismatches per (paired) alignment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexdobin/STAR"},"STAR"))))))}u.isMDXComponent=!0}}]);