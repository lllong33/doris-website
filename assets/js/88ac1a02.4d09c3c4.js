"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[231567],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,y=m["".concat(s,".").concat(u)]||m[u]||d[u]||l;return r?n.createElement(y,i(i({ref:t},c),{},{components:r})):n.createElement(y,i({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},620646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const l={title:"SHOW-EXPORT",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",id:"version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",title:"SHOW-EXPORT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT.md",sourceDirName:"sql-manual/sql-reference/Show-Statements",slug:"/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EXPORT",draft:!1,tags:[],version:"2.0",frontMatter:{title:"SHOW-EXPORT",language:"en"},sidebar:"docs",previous:{title:"SHOW-EVENTS",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-EVENTS"},next:{title:"SHOW-ENCRYPT-KEY",permalink:"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-ENCRYPT-KEY"}},s={},p=[{value:"SHOW-EXPORT",id:"show-export",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-export"},"SHOW-EXPORT"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW EXPORT"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"This statement is used to display the execution of the specified export task"),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW EXPORT\n[FROM db_name]\n  [\n    WHERE\n      [ID=your_job_id]\n      [STATE = ["PENDING"|"EXPORTING"|"FINISHED"|"CANCELLED"]]\n      [LABEL=your_label]\n   ]\n[ORDER BY...]\n[LIMIT limit];\n')),(0,a.yg)("p",null,"illustrate:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"  1. If db_name is not specified, the current default db is used\n  2. If STATE is specified, matches EXPORT state\n  3. You can use ORDER BY to sort any combination of columns\n  4. If LIMIT is specified, limit matching records are displayed. Otherwise show all\n")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Show all export tasks of default db"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"SHOW EXPORT;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Display the export tasks of the specified db, sorted by StartTime in descending order"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"}," SHOW EXPORT FROM example_db ORDER BY StartTime DESC;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'Display the export tasks of the specified db, the state is "exporting", and sort by StartTime in descending order'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW EXPORT FROM example_db WHERE STATE = "exporting" ORDER BY StartTime DESC;\n'))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Display the export task of the specified db and specified job_id"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"  SHOW EXPORT FROM example_db WHERE ID = job_id;\n"))),(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},"Display the specified db and specify the export task of the label"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},' SHOW EXPORT FROM example_db WHERE LABEL = "mylabel";\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, EXPORT\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);