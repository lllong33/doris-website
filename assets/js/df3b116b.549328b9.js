"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[739208],{15680:(e,n,i)=>{i.d(n,{xA:()=>c,yg:()=>m});var t=i(296540);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=t.createContext({}),p=function(e){var n=t.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(i),d=a,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||r;return i?t.createElement(m,o(o({ref:n},c),{},{components:i})):t.createElement(m,o({ref:n},c))}));function m(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},743863:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var t=i(58168),a=(i(296540),i(15680));const r={title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},o=void 0,l={unversionedId:"query-acceleration/pipeline-execution-engine",id:"version-3.0/query-acceleration/pipeline-execution-engine",title:"Pipeline Execution Engine",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/query-acceleration/pipeline-execution-engine.md",sourceDirName:"query-acceleration",slug:"/query-acceleration/pipeline-execution-engine",permalink:"/docs/3.0/query-acceleration/pipeline-execution-engine",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Pipeline Execution Engine",language:"en",toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Query Optimizers",permalink:"/docs/3.0/query-acceleration/query-optimizer"},next:{title:"Statistics",permalink:"/docs/3.0/query-acceleration/statistics"}},s={},p=[{value:"Principle",id:"principle",level:2},{value:"Usage",id:"usage",level:2},{value:"Query",id:"query",level:3},{value:"Load",id:"load",level:3}],c={toc:p},u="wrapper";function g(e){let{components:n,...r}=e;return(0,a.yg)(u,(0,t.A)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The Pipeline Execution Engine is an experimental feature in Apache Doris 2.0, which was later optimized and upgraded in version 2.1 (i.e., PipelineX). In versions 3.0 and later, PipelineX is used as the only execution engine in Doris and renamed to Pipeline Execution Engine."),(0,a.yg)("p",null,"The goal of pipeline execution engine is to replace the current execution engine of Doris's volcano model, fully release the computing power of multi-core CPUs, and limit the number of Doris's query threads to solve the problem of Doris's execution thread bloat."),(0,a.yg)("p",null,"Its specific design, implementation and effects can be found in ","[DSIP-027]","(",(0,a.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-027%3A+Support+Pipeline+Exec+Engine"},"DSIP-027: Support Pipeline Exec Engine - DORIS - Apache Software Foundation"),") and ","[DSIP-035]","(",(0,a.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/DORIS/DSIP-035%3A+PipelineX+Execution+Engine"},"DSIP-035: PipelineX Execution Engine - DORIS - Apache Software Foundation"),")."),(0,a.yg)("h2",{id:"principle"},"Principle"),(0,a.yg)("p",null,"The current Doris SQL execution engine is designed based on the traditional volcano model, which has the following problems in a single multi-core scenario:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Inability to take full advantage of multi-core computing power to improve query performance,",(0,a.yg)("strong",{parentName:"p"},"most scenarios require manual setting of parallelism")," for performance tuning, which is almost difficult to set in production environments.")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Each instance of a standalone query corresponds to one thread of the thread pool, which introduces two additional problems."),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Once the thread pool is hit full. ",(0,a.yg)("strong",{parentName:"li"},"Doris' query engine will enter a pseudo-deadlock")," and will not respond to subsequent queries. ",(0,a.yg)("strong",{parentName:"li"},"At the same time there is a certain probability of entering a logical deadlock")," situation: for example, all threads are executing an instance's probe task."),(0,a.yg)("li",{parentName:"ul"},"Blocking arithmetic will take up thread resources,",(0,a.yg)("strong",{parentName:"li"},"blocking thread resources can not be yielded to instances that can be scheduled"),", the overall resource utilization does not go up."))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Blocking arithmetic relies on the OS thread scheduling mechanism, ",(0,a.yg)("strong",{parentName:"p"},"thread switching overhead (especially in the scenario of system mixing))")))),(0,a.yg)("p",null,"The resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs."),(0,a.yg)("p",null,"And as shown in the figure below (quoted from","[Push versus pull-based loop fusion in query engines]","(",(0,a.yg)("a",{parentName:"p",href:"https://www.cambridge.org/core/services/aop-cambridge-core/content/view/D67AE4899E87F4B5102F859B0FC02045/S0956796818000102a.pdf/div-class-title-push-versus-pull-based-loop-fusion-in-query-engines-div.pdf"},"jfp_1800010a (cambridge.org)"),")\uff09\uff0cThe resulting set of problems drove Doris to implement an execution engine adapted to the architecture of modern multi-core CPUs.\uff1a"),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"image.png",src:i(340524).A,width:"2560",height:"1060"})),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Transformation of the traditional pull pull logic-driven execution process into a data-driven execution engine for the push model")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Blocking operations are asynchronous, reducing the execution overhead caused by thread switching and thread blocking and making more efficient use of the CPU")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Controls the number of threads to be executed and reduces the resource congestion of large queries on small queries in mixed load scenarios by controlling time slice switching")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In terms of execution concurrency, pipelineX introduces local exchange optimization to fully utilize CPU resources, and distribute data evenly across different tasks to minimize data skewing. In addition, pipelineX will no longer be constrained by the number of tablets.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Logically, multiple pipeline tasks share all shared states of the same pipeline and eliminate additional initialization overhead, such as expressions and some const variables.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"In terms of scheduling logic, the blocking conditions of all pipeline tasks are encapsulated using Dependency, and the execution logic of the tasks is triggered by external events (such as rpc completion) to enter the runnable queue, thereby eliminating the overhead of blocking polling threads.")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Profile: Provide users with simple and easy to understand metrics."))),(0,a.yg)("p",null,"This improves the efficiency of CPU execution on mixed-load SQL and enhances the performance of SQL queries."),(0,a.yg)("h2",{id:"usage"},"Usage"),(0,a.yg)("h3",{id:"query"},"Query"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"enable_pipeline_engine"),(0,a.yg)("p",{parentName:"li"},"Setting the session variable ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_pipeline_engine")," to ",(0,a.yg)("inlineCode",{parentName:"p"},"true")," will make BE to use the Pipeline execution engine when performing query execution."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_pipeline_engine = true;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"parallel_pipeline_task_num"),(0,a.yg)("p",{parentName:"li"},"The ",(0,a.yg)("inlineCode",{parentName:"p"},"parallel_pipeline_task_num")," represents the number of Pipeline Tasks for a SQL query to be queried concurrently.The default configuration of Doris is ",(0,a.yg)("inlineCode",{parentName:"p"},"0"),", in which case the number of Pipeline Tasks will be automatically set to half of the minimum number of CPUs in the current cluster machine. You can also adjust it according to your own situation."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set parallel_pipeline_task_num = 0;\n")),(0,a.yg)("p",{parentName:"li"},"You can limit the automatically configured concurrency by setting ",(0,a.yg)("inlineCode",{parentName:"p"},"max_instance_num"),"\uff08The default value is 64)")),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"enable_local_shuffle"),(0,a.yg)("p",{parentName:"li"},"Set ",(0,a.yg)("inlineCode",{parentName:"p"},"enable_local_shuffle")," to true will enable local shuffle optimization. Local shuffle will try to evenly distribute data among different pipeline tasks to avoid data skewing as much as possible."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set enable_local_shuffle = true;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"ignore_storage_data_distribution"),(0,a.yg)("p",{parentName:"li"},"Settings ",(0,a.yg)("inlineCode",{parentName:"p"},"ignore_storage_data_distribution")," is true, it means ignoring the data distribution of the storage layer. When used in conjunction with local shuffle, the concurrency capability of the pipelineX engine will no longer be constrained by the number of storage layer tables, thus fully utilizing machine resources."),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"set ignore_storage_data_distribution = true;\n")))),(0,a.yg)("h3",{id:"load"},"Load"),(0,a.yg)("p",null,"The engine selected for import are detailed in the ",(0,a.yg)("a",{parentName:"p",href:"../data-operate/import/load-manual"},"Load")," documentation."))}g.isMDXComponent=!0},340524:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/pipeline-execution-engine-85f911b7c7e47dc429f39213654957d5.png"}}]);