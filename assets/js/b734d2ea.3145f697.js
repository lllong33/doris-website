"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[117615],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>u});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(a),y=n,u=c["".concat(s,".").concat(y)]||c[y]||d[y]||l;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},557432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=a(58168),n=(a(296540),a(15680));const l={title:"SHOW-LOAD",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-LOAD",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",title:"SHOW-LOAD",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-LOAD.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-LOAD",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-LOAD",language:"en"},sidebar:"docs",previous:{title:"SHOW-TABLETS",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLETS"},next:{title:"SHOW-TABLES",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-TABLES"}},s={},p=[{value:"SHOW-LOAD",id:"show-load",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],m={toc:p},c="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(c,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"show-load"},"SHOW-LOAD"),(0,n.yg)("h3",{id:"name"},"Name"),(0,n.yg)("p",null,"SHOW LOAD"),(0,n.yg)("h3",{id:"description"},"Description"),(0,n.yg)("p",null,"This statement is used to display the execution of the specified import task"),(0,n.yg)("p",null,"grammar:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD\n[FROM db_name]\n[\n   WHERE\n   [LABEL [ = "your_label" | LIKE "label_matcher"]]\n   [STATE = ["PENDING"|"ETL"|"LOADING"|"FINISHED"|"CANCELLED"|]]\n]\n[ORDER BY...]\n[LIMIT limit][OFFSET offset];\n')),(0,n.yg)("p",null,"illustrate:"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If db_name is not specified, the current default db is used")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If LABEL LIKE is used, it will match import tasks whose label contains label_matcher")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If LABEL = is used, it will match the specified label exactly")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If STATE is specified, matches the LOAD state")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"You can use ORDER BY to sort on any combination of columns")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If LIMIT is specified, limit matching records are displayed. Otherwise show all")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If OFFSET is specified, the query results are displayed starting at offset offset. By default the offset is 0.")),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"If you are using broker/mini load, the connections in the URL column can be viewed using the following command:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD WARNINGS ON 'url'\n")))),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Show all import tasks for default db"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Display the import tasks of the specified db, the label contains the string "2014_01_02", and display the oldest 10'),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Display the import tasks of the specified db, specify the label as "load_example_db_20140102" and sort by LoadStartTime in descending order'),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" ORDER BY LoadStartTime DESC;\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},'Display the import task of the specified db, specify the label as "load_example_db_20140102", the state as "loading", and sort by LoadStartTime in descending order'),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD FROM example_db WHERE LABEL = "load_example_db_20140102" AND STATE = "loading" ORDER BY LoadStartTime DESC;\n'))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Display the import tasks of the specified db and sort them in descending order by LoadStartTime, and display 10 query results starting from offset 5"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 5,10;\nSHOW LOAD FROM example_db ORDER BY LoadStartTime DESC limit 10 offset 5;\n"))),(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("p",{parentName:"li"},"Small batch import is a command to check the import status"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre"},"curl --location-trusted -u {user}:{passwd} http://{hostname}:{port}/api/{database}/_load_info?label={labelname}\n")))),(0,n.yg)("h3",{id:"keywords"},"Keywords"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre"},"SHOW, LOAD\n")),(0,n.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);