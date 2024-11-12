"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[677721],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>y});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,y=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(y,s(s({ref:t},p),{},{components:n})):r.createElement(y,s({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<l;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},632693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const l={title:"SHOW-LOAD-WARNINGS",language:"en"},s=void 0,o={unversionedId:"sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",id:"sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",title:"SHOW-LOAD-WARNINGS",description:"\x3c!--",source:"@site/docs/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS.md",sourceDirName:"sql-manual/sql-statements/Show-Statements",slug:"/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-WARNINGS",draft:!1,tags:[],version:"current",frontMatter:{title:"SHOW-LOAD-WARNINGS",language:"en"},sidebar:"docs",previous:{title:"SHOW-LOAD-PROFILE",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-LOAD-PROFILE"},next:{title:"SHOW-INDEX",permalink:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-INDEX"}},i={},c=[{value:"SHOW-LOAD-WARNINGS",id:"show-load-warnings",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"show-load-warnings"},"SHOW-LOAD-WARNINGS"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"SHOW LOAD WARNINGS"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"If the import task fails and the error message is ",(0,a.yg)("inlineCode",{parentName:"p"},"ETL_QUALITY_UNSATISFIED"),", it means that there is an import quality problem. If you want to see these import tasks with quality problems, change the statement to complete this operation."),(0,a.yg)("p",null,"grammar:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS\n[FROM db_name]\n[\n    WHERE\n    [LABEL[="your_label"]]\n    [LOAD_JOB_ID = ["job id"]]\n]\n')),(0,a.yg)("p",null,"1) If db_name is not specified, the current default db is used\n1) If LABEL = is used, it matches the specified label exactly\n1) If LOAD_JOB_ID is specified, match the specified JOB ID exactly"),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},(0,a.yg)("p",{parentName:"li"},'Display the data with quality problems in the import task of the specified db, and specify the label as "load_demo_20210112"'),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-sql"},'SHOW LOAD WARNINGS FROM demo WHERE LABEL = "load_demo_20210112"\n')))),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"SHOW, LOAD, WARNINGS\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}u.isMDXComponent=!0}}]);