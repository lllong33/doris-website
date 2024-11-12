"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[774936],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>E});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,E=u["".concat(s,".").concat(d)]||u[d]||m[d]||l;return n?a.createElement(E,o(o({ref:t},p),{},{components:n})):a.createElement(E,o({ref:t},p))}));function E(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},514109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=n(58168),r=(n(296540),n(15680));const l={title:"CANCEL-RESTORE",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",id:"version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",title:"CANCEL-RESTORE",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CANCEL-RESTORE",draft:!1,tags:[],version:"2.1",frontMatter:{title:"CANCEL-RESTORE",language:"zh-CN"},sidebar:"docs",previous:{title:"RESTORE",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/RESTORE"},next:{title:"STREAM-LOAD",permalink:"/zh-CN/docs/sql-manual/sql-statements/Data-Manipulation-Statements/Load/STREAM-LOAD"}},s={},c=[{value:"CANCEL-RESTORE",id:"cancel-restore",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"cancel-restore"},"CANCEL-RESTORE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"CANCEL  RESTORE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u53d6\u6d88\u4e00\u4e2a\u6b63\u5728\u8fdb\u884c\u7684 RESTORE \u4efb\u52a1\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL RESTORE FROM db_name;\n")),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"\u5f53\u53d6\u6d88\u5904\u4e8e COMMIT \u6216\u4e4b\u540e\u9636\u6bb5\u7684\u6062\u590d\u5de6\u53f3\u65f6\uff0c\u53ef\u80fd\u5bfc\u81f4\u88ab\u6062\u590d\u7684\u8868\u65e0\u6cd5\u8bbf\u95ee\u3002\u6b64\u65f6\u53ea\u80fd\u901a\u8fc7\u518d\u6b21\u6267\u884c\u6062\u590d\u4f5c\u4e1a\u8fdb\u884c\u6570\u636e\u6062\u590d\u3002 ")),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"\u53d6\u6d88 example_db \u4e0b\u7684 RESTORE \u4efb\u52a1\u3002")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"CANCEL RESTORE FROM example_db;\n")),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CANCEL, RESTORE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);