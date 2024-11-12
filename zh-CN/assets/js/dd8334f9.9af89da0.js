"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[485406],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>O});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=r,O=u["".concat(p,".").concat(g)]||u[g]||m[g]||l;return n?a.createElement(O,o(o({ref:t},c),{},{components:n})):a.createElement(O,o({ref:t},c))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},49976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(58168),r=(n(296540),n(15680));const l={title:"ALTER-COLOCATE-GROUP",language:"zh-CN"},o=void 0,i={unversionedId:"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",id:"version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",title:"ALTER-COLOCATE-GROUP",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP.md",sourceDirName:"sql-manual/sql-statements/Data-Definition-Statements/Alter",slug:"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-COLOCATE-GROUP",draft:!1,tags:[],version:"3.0",frontMatter:{title:"ALTER-COLOCATE-GROUP",language:"zh-CN"},sidebar:"docs",previous:{title:"ALTER-RESOURCE",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-RESOURCE"},next:{title:"ALTER-WORKLOAD-GROUP",permalink:"/zh-CN/docs/3.0/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"}},p={},s=[{value:"ALTER-COLOCATE-GROUP",id:"alter-colocate-group",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"alter-colocate-group"},"ALTER-COLOCATE-GROUP"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"ALTER COLOCATE GROUP"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"\u8be5\u8bed\u53e5\u7528\u4e8e\u4fee\u6539 Colocation Group \u7684\u5c5e\u6027\u3002"),(0,r.yg)("p",null,"\u8bed\u6cd5\uff1a"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER COLOCATE GROUP  [database.]group\nSET (\n    property_list\n);\n")),(0,r.yg)("p",null,"\u6ce8\u610f\uff1a"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u5982\u679c colocate group \u662f\u5168\u5c40\u7684\uff0c\u5373\u5b83\u7684\u540d\u79f0\u662f\u4ee5 ",(0,r.yg)("inlineCode",{parentName:"p"},"__global__")," \u5f00\u5934\u7684\uff0c\u90a3\u5b83\u4e0d\u5c5e\u4e8e\u4efb\u4f55\u4e00\u4e2a Database\uff1b")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"property_list \u662f colocation group \u5c5e\u6027\uff0c\u76ee\u524d\u53ea\u652f\u6301\u4fee\u6539",(0,r.yg)("inlineCode",{parentName:"p"},"replication_num")," \u548c ",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation"),"\u3002\n\u4fee\u6539 colocation group \u7684\u8fd9\u4e24\u4e2a\u5c5e\u6027\u4fee\u6539\u4e4b\u540e\uff0c\u540c\u65f6\u628a\u8be5 group \u7684\u8868\u7684\u5c5e\u6027",(0,r.yg)("inlineCode",{parentName:"p"},"default.replication_allocation")," \u3001\n\u5c5e\u6027",(0,r.yg)("inlineCode",{parentName:"p"},"dynamic.replication_allocation "),"\u3001\u4ee5\u53ca\u5df2\u6709\u5206\u533a\u7684",(0,r.yg)("inlineCode",{parentName:"p"},"replication_allocation"),"\u6539\u6210\u8ddf\u5b83\u4e00\u6837\u3002"))),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u4e00\u4e2a\u5168\u5c40 group \u7684\u526f\u672c\u6570"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'# \u5efa\u8868\u65f6\u8bbe\u7f6e "colocate_with" = "__global__foo"\n\nALTER COLOCATE GROUP __global__foo\nSET (\n    "replication_num"="1"\n);\n'))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},"\u4fee\u6539\u4e00\u4e2a\u975e\u5168\u5c40 group \u7684\u526f\u672c\u6570"),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'   # \u5efa\u8868\u65f6\u8bbe\u7f6e "colocate_with" = "bar"\uff0c\u4e14\u8868\u5c5e\u4e8e Database example_db\n   \n   ALTER COLOCATE GROUP example_db.bar\n   SET (\n       "replication_num"="1"\n   );\n')))),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"ALTER, COLOCATE , GROUP\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}m.isMDXComponent=!0}}]);