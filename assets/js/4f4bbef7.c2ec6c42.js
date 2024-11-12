"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[141649],{15680:(e,t,n)=>{n.d(t,{xA:()=>o,yg:()=>s});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),d=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=d(e.components);return a.createElement(m.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,o=g(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,s=u["".concat(m,".").concat(p)]||u[p]||y[p]||l;return n?a.createElement(s,i(i({ref:t},o),{},{components:n})):a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var g={};for(var m in t)hasOwnProperty.call(t,m)&&(g[m]=t[m]);g.originalType=e,g[u]="string"==typeof e?e:r,i[1]=g;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},359860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>g,toc:()=>d});var a=n(58168),r=(n(296540),n(15680));const l={title:"audit_log",language:"en"},i=void 0,g={unversionedId:"admin-manual/system-tables/internal_schema/audit_log",id:"version-3.0/admin-manual/system-tables/internal_schema/audit_log",title:"audit_log",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/system-tables/internal_schema/audit_log.md",sourceDirName:"admin-manual/system-tables/internal_schema",slug:"/admin-manual/system-tables/internal_schema/audit_log",permalink:"/docs/3.0/admin-manual/system-tables/internal_schema/audit_log",draft:!1,tags:[],version:"3.0",frontMatter:{title:"audit_log",language:"en"},sidebar:"docs",previous:{title:"user",permalink:"/docs/3.0/admin-manual/system-tables/mysql/user"},next:{title:"column_statistics",permalink:"/docs/3.0/admin-manual/system-tables/internal_schema/column_statistics"}},m={},d=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2},{value:"Description",id:"description",level:2}],o={toc:d},u="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"overview"},"Overview"),(0,r.yg)("p",null,"Store audit logs"),(0,r.yg)("h2",{id:"database"},"Database"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"__internal_schema")),(0,r.yg)("h2",{id:"table-information"},"Table Information"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Description"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query_id"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(48)"),(0,r.yg)("td",{parentName:"tr",align:null},"ID of the Query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"time"),(0,r.yg)("td",{parentName:"tr",align:null},"datetime(3)"),(0,r.yg)("td",{parentName:"tr",align:null},"Time when the query was executed(in milliseconds)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"client_ip"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"IP address of the client sending the query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"User")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"catalog"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"Current Catalog during statement execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"db"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"Current Database during statement execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"state"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"Execution status of the statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"error_code"),(0,r.yg)("td",{parentName:"tr",align:null},"int"),(0,r.yg)("td",{parentName:"tr",align:null},"Error code")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"error_message"),(0,r.yg)("td",{parentName:"tr",align:null},"text"),(0,r.yg)("td",{parentName:"tr",align:null},"Error message")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"query_time"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Execution time of the statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Amount of data scanned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scan_rows"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of rows scanned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"return_rows"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of rows returned")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"shuffleSendRows"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The number of rows transferred between nodes during statement execution. Supported since version 3.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"shuffleSendBytes"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of data transferred between nodes during statement execution. Supported since version 3.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scanBytesFromLocalStorage"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of data read from the local disk. Supported since version 3.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"scanBytesFromRemoteStorage"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"The amount of data read from the remote storage. Supported since version 3.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stmt_id"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Statement ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stmt_type"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Statement type. Supported since version 3.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_query"),(0,r.yg)("td",{parentName:"tr",align:null},"tinyint"),(0,r.yg)("td",{parentName:"tr",align:null},"Whether it is a query")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"is_nereids"),(0,r.yg)("td",{parentName:"tr",align:null},"booean"),(0,r.yg)("td",{parentName:"tr",align:null},"Is using Nereids Optimizer.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"frontend_ip"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"IP address of the connected Frontend")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"cpu_time_ms"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Cumulative CPU time (in milliseconds) consumed by the Backend for statement execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sql_hash"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"Hash value of the statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sql_digest"),(0,r.yg)("td",{parentName:"tr",align:null},"varchar(128)"),(0,r.yg)("td",{parentName:"tr",align:null},"Digest (signature) of the statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"peak_memory_bytes"),(0,r.yg)("td",{parentName:"tr",align:null},"bigint"),(0,r.yg)("td",{parentName:"tr",align:null},"Peak memory usage of the Backend during statement execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"workload_group"),(0,r.yg)("td",{parentName:"tr",align:null},"text"),(0,r.yg)("td",{parentName:"tr",align:null},"Workload Group used for statement execution")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"compute_group"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"In storage and computation decouped mode, the compute group used by the execution statement. Supported since version 3.0.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"trace_id"),(0,r.yg)("td",{parentName:"tr",align:null},"string"),(0,r.yg)("td",{parentName:"tr",align:null},"Trace ID set when executing the statement")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"stmt"),(0,r.yg)("td",{parentName:"tr",align:null},"text"),(0,r.yg)("td",{parentName:"tr",align:null},"Statement text")))),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"client_ip"),": If a proxy service is used and the IP pass-through is not enabled, the proxy service IP may be recorded here instead of the real client IP."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"state"),": ",(0,r.yg)("inlineCode",{parentName:"li"},"EOF")," indicates that the query is executed successfully. ",(0,r.yg)("inlineCode",{parentName:"li"},"OK")," indicates that the DDL and DML statements are executed successfully. ",(0,r.yg)("inlineCode",{parentName:"li"},"ERR")," indicates that the statement execution fails.")))}y.isMDXComponent=!0}}]);