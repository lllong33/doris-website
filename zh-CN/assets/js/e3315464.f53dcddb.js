"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[168434],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var r=n(296540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},O=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),O=a,d=u["".concat(i,".").concat(O)]||u[O]||m[O]||o;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=O;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}O.displayName="MDXCreateElement"},819158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(58168),a=(n(296540),n(15680));const o={title:"DROP-REPOSITORY",language:"zh-CN"},l=void 0,s={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",title:"DROP-REPOSITORY",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/DROP-REPOSITORY",draft:!1,tags:[],version:"3.0",frontMatter:{title:"DROP-REPOSITORY",language:"zh-CN"},sidebar:"docs",previous:{title:"CREATE-REPOSITORY",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/CREATE-REPOSITORY"},next:{title:"BACKUP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Backup-and-Restore/BACKUP"}},i={},c=[{value:"DROP-REPOSITORY",id:"drop-repository",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(u,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"drop-repository"},"DROP-REPOSITORY"),(0,a.yg)("h3",{id:"name"},"Name"),(0,a.yg)("p",null,"DROP  REPOSITORY"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u5220\u9664\u4e00\u4e2a\u5df2\u521b\u5efa\u7684\u4ed3\u5e93\u3002\u4ec5 root \u6216 superuser \u7528\u6237\u53ef\u4ee5\u5220\u9664\u4ed3\u5e93\u3002"),(0,a.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP REPOSITORY `repo_name`;\n")),(0,a.yg)("p",null,"\u8bf4\u660e\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"\u5220\u9664\u4ed3\u5e93\uff0c\u4ec5\u4ec5\u662f\u5220\u9664\u8be5\u4ed3\u5e93\u5728 Palo \u4e2d\u7684\u6620\u5c04\uff0c\u4e0d\u4f1a\u5220\u9664\u5b9e\u9645\u7684\u4ed3\u5e93\u6570\u636e\u3002\u5220\u9664\u540e\uff0c\u53ef\u4ee5\u518d\u6b21\u901a\u8fc7\u6307\u5b9a\u76f8\u540c\u7684 broker \u548c LOCATION \u6620\u5c04\u5230\u8be5\u4ed3\u5e93\u3002 ")),(0,a.yg)("h3",{id:"example"},"Example"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u5220\u9664\u540d\u4e3a bos_repo \u7684\u4ed3\u5e93\uff1a")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DROP REPOSITORY `bos_repo`;\n")),(0,a.yg)("h3",{id:"keywords"},"Keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"DROP, REPOSITORY\n")),(0,a.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);