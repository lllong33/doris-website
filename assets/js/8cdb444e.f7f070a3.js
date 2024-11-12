"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[828435],{15680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>p});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=c(t),m=a,p=y["".concat(s,".").concat(m)]||y[m]||d[m]||o;return t?n.createElement(p,l(l({ref:r},u),{},{components:t})):n.createElement(p,l({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},552275:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const o={title:"Workload Fusing",language:"en"},l=void 0,i={unversionedId:"admin-manual/resource-admin/workload-fusing",id:"version-3.0/admin-manual/resource-admin/workload-fusing",title:"Workload Fusing",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/admin-manual/resource-admin/workload-fusing.md",sourceDirName:"admin-manual/resource-admin",slug:"/admin-manual/resource-admin/workload-fusing",permalink:"/docs/3.0/admin-manual/resource-admin/workload-fusing",draft:!1,tags:[],version:"3.0",frontMatter:{title:"Workload Fusing",language:"en"},sidebar:"docs",previous:{title:"Resource Group",permalink:"/docs/3.0/admin-manual/resource-admin/multi-tenant"},next:{title:"Use Workload Group limit memory",permalink:"/docs/3.0/admin-manual/resource-admin/use-workload-mem-limit"}},s={},c=[{value:"Workload Fusing Test",id:"workload-fusing-test",level:2},{value:"Test Env",id:"test-env",level:3},{value:"Workload Fusing By Memory",id:"workload-fusing-by-memory",level:3},{value:"Workload Fusing By Scan Rows",id:"workload-fusing-by-scan-rows",level:3},{value:"Workload Fusing By Query Time",id:"workload-fusing-by-query-time",level:3},{value:"NOTE",id:"note",level:3}],u={toc:c},y="wrapper";function d(e){let{components:r,...t}=e;return(0,a.yg)(y,(0,n.A)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Workload Fusing is typically applied in scenarios where certain queries excessively consume resources, leading to a decline in the overall availability of the online cluster. In such cases, the cluster can be restored to normal operation by detecting and blocking the abnormal big queries during runtime."),(0,a.yg)("p",null,"If users have already grouped their workload based on query latency, such as assigning big queries to one Workload Group and small queries to another, the big query circuit breaking method can also be used to improve the availability of the small query group."),(0,a.yg)("p",null,"Currently, the big query circuit breaking strategy is mainly implemented through the Workload Policy feature, allowing users to configure specific policies to achieve automatic circuit breaking of big queries."),(0,a.yg)("h2",{id:"workload-fusing-test"},"Workload Fusing Test"),(0,a.yg)("h3",{id:"test-env"},"Test Env"),(0,a.yg)("p",null,"1FE,1BE(96 cores), test data is clickbench."),(0,a.yg)("h3",{id:"workload-fusing-by-memory"},"Workload Fusing By Memory"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Test sql is q29, the query 's peak memory is\uff08peakMemoryBytes\uff098G in fe.audit.log.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"|User=root|Ctl=internal|Db=hits|State=EOF|ErrorCode=0|ErrorMessage=|Time(ms)=4614|ScanBytes=13107527680|ScanRows=81032736|ReturnRows=11|StmtId=526|QueryId=e5b6c62d624146e4-b7291221492a7cc2|IsQuery=true|isNereids=true|feIp=10.16.10.8|StmtType=SELECT|Stmt=SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25|CpuTimeMS=105631|ShuffleSendBytes=0|ShuffleSendRows=0|SqlHash=b03d48a7e6849912003ad1cff9519957|peakMemoryBytes=8741352477|SqlDigest=|cloudClusterName=UNKNOWN|TraceId=|WorkloadGroup=normal|FuzzyVariables=|scanBytesFromLocalStorage=0|scanBytesFromRemoteStorage=0\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Create a policy which kill the query which using memory exceeds 1G.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"create workload policy cancel_1g_query conditions(query_be_memory_bytes > 1073741824) actions(cancel_query);\n\nmysql [information_schema]>select * from workload_policy;\n+-------+-----------------+------------------------------------+--------------+----------+---------+---------+----------------+\n| ID    | NAME            | CONDITION                          | ACTION       | PRIORITY | ENABLED | VERSION | WORKLOAD_GROUP |\n+-------+-----------------+------------------------------------+--------------+----------+---------+---------+----------------+\n| 11313 | cancel_1g_query | query_be_memory_bytes > 1073741824 | cancel_query |        0 |       1 |       0 |                |\n+-------+-----------------+------------------------------------+--------------+----------+---------+---------+----------------+\n1 row in set (0.02 sec)\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Test again, we can see query is killed by policy cancel_1g_query.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"    mysql [information_schema]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits.hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INTERNAL_ERROR]query ceb0553d359e454f-8939599b2e602d07 cancelled by workload policy: cancel_1g_query, id:11313\n")),(0,a.yg)("h3",{id:"workload-fusing-by-scan-rows"},"Workload Fusing By Scan Rows"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create the policy.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// disable other policy first.\nalter workload policy cancel_1g_query properties('enabled'='false');\n\ncreate workload policy canel_scan_5kw_query conditions(be_scan_rows > 50000000) actions(cancel_query);\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Test query, the query failed because of cancel_1g_query.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits.hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\n\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INTERNAL_ERROR]query f9d15001bfc94322-9b63a8b84aef9dee cancelled by workload policy: canel_scan_5kw_query, id:11314\n")),(0,a.yg)("p",null,"It is important to note that be_scan_rows mainly tracks the amount of data scanned by a query on a single BE. In a production environment, the data for a table is usually distributed across multiple BEs, and the number of rows scanned by a query as seen in the audit is the sum from all BEs."),(0,a.yg)("p",null,"Therefore, when a query fails due to the SCAN data volume, the number of scanned rows in the audit is typically much larger than the value configured in the Policy."),(0,a.yg)("h3",{id:"workload-fusing-by-query-time"},"Workload Fusing By Query Time"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Create the policy.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"// disable other policy first.\nalter workload policy canel_scan_5kw_query properties('enabled'='false');\n\ncreate workload policy cancel_time_1s_query conditions(query_time > 1000) actions(cancel_query);\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Test query, it may be failed because of cancel_time_1s_query.")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits.hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INTERNAL_ERROR]query c6aebdf403e24c62-965daf0bdff179f7 cancelled by workload policy: cancel_time_1s_query, id:11315\n")),(0,a.yg)("h3",{id:"note"},"NOTE"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Currently, the time interval for the Frontend (FE) to synchronize Workload Policy metadata to the Backend (BE) is 30 seconds, meaning that it may take up to 30 seconds for any policy changes to take effect."),(0,a.yg)("li",{parentName:"ol"},"Currently, the Backend (BE) executes the strategies configured in the Policy through a scheduled thread with a time interval of 500ms. This means that if a query is very short and completes within 500ms, it may not be subject to the Workload Policy constraints.")))}d.isMDXComponent=!0}}]);