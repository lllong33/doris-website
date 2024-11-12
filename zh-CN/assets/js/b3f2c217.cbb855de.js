"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[32945],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>N});var r=a(296540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=r.createContext({}),g=function(e){var n=r.useContext(i),a=n;return e&&(a="function"==typeof e?e(n):p(p({},n),e)),a},c=function(e){var n=g(e.components);return r.createElement(i.Provider,{value:n},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=g(a),y=t,N=m["".concat(i,".").concat(y)]||m[y]||s[y]||l;return a?r.createElement(N,p(p({ref:n},c),{},{components:a})):r.createElement(N,p({ref:n},c))}));function N(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,p=new Array(l);p[0]=y;var o={};for(var i in n)hasOwnProperty.call(n,i)&&(o[i]=n[i]);o.originalType=e,o[m]="string"==typeof e?e:t,p[1]=o;for(var g=2;g<l;g++)p[g]=a[g];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},107561:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var r=a(58168),t=(a(296540),a(15680));const l={title:"GRANT",language:"zh-CN"},p=void 0,o={unversionedId:"sql-manual/sql-reference/Account-Management-Statements/GRANT",id:"version-2.0/sql-manual/sql-reference/Account-Management-Statements/GRANT",title:"GRANT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-reference/Account-Management-Statements/GRANT.md",sourceDirName:"sql-manual/sql-reference/Account-Management-Statements",slug:"/sql-manual/sql-reference/Account-Management-Statements/GRANT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/GRANT",draft:!1,tags:[],version:"2.0",frontMatter:{title:"GRANT",language:"zh-CN"},sidebar:"docs",previous:{title:"LDAP",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/LDAP"},next:{title:"REVOKE",permalink:"/zh-CN/docs/2.0/sql-manual/sql-reference/Account-Management-Statements/REVOKE"}},i={},g=[{value:"GRANT",id:"grant",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:g},m="wrapper";function s(e){let{components:n,...a}=e;return(0,t.yg)(m,(0,r.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("h2",{id:"grant"},"GRANT"),(0,t.yg)("h3",{id:"name"},"Name"),(0,t.yg)("p",null,"GRANT"),(0,t.yg)("h3",{id:"description"},"Description"),(0,t.yg)("p",null,"GRANT \u547d\u4ee4\u6709\u5982\u4e0b\u529f\u80fd\uff1a"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u7684\u6743\u9650\u6388\u4e88\u67d0\u7528\u6237\u6216\u89d2\u8272\u3002"),(0,t.yg)("li",{parentName:"ol"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237\u3002")),(0,t.yg)("blockquote",null,(0,t.yg)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a"),(0,t.yg)("p",{parentName:"blockquote"},'2.0 \u53ca\u4e4b\u540e\u7248\u672c\u652f\u6301"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u7528\u6237"')),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]\n\nGRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]\n\nGRANT role_list TO user_identity\n")),(0,t.yg)("p",null,"GRANT privilege_list ON WORKLOAD GROUP workload_group_name TO user_identity ","[ROLE role_name]","\nprivilege_list \u662f\u9700\u8981\u8d4b\u4e88\u7684\u6743\u9650\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\u3002\u5f53\u524d Doris \u652f\u6301\u5982\u4e0b\u6743\u9650\uff1a"),(0,t.yg)("p",null,"NODE_PRIV\uff1a\u96c6\u7fa4\u8282\u70b9\u64cd\u4f5c\u6743\u9650\uff0c\u5305\u62ec\u8282\u70b9\u4e0a\u4e0b\u7ebf\u7b49\u64cd\u4f5c\u3002\u540c\u65f6\u62e5\u6709 Grant_priv \u548c Node_priv \u7684\u7528\u6237\uff0c\u53ef\u4ee5\u5c06\u8be5\u6743\u9650\u8d4b\u4e88\u5176\u4ed6\u7528\u6237\u3002\nADMIN_PRIV\uff1a\u9664 NODE_PRIV \u4ee5\u5916\u7684\u6240\u6709\u6743\u9650\u3002\nGRANT_PRIV: \u64cd\u4f5c\u6743\u9650\u7684\u6743\u9650\u3002\u5305\u62ec\u521b\u5efa\u5220\u9664\u7528\u6237\u3001\u89d2\u8272\uff0c\u6388\u6743\u548c\u64a4\u6743\uff0c\u8bbe\u7f6e\u5bc6\u7801\u7b49\u3002\nSELECT_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u8bfb\u53d6\u6743\u9650\nLOAD_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5bfc\u5165\u6743\u9650\nALTER_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684 schema \u53d8\u66f4\u6743\u9650\nCREATE_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u521b\u5efa\u6743\u9650\nDROP_PRIV\uff1a\u5bf9\u6307\u5b9a\u7684\u5e93\u6216\u8868\u7684\u5220\u9664\u6743\u9650\nUSAGE_PRIV: \u5bf9\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u548c workload group \u6743\u9650\nSHOW_VIEW_PRIV: \u67e5\u770b",(0,t.yg)("inlineCode",{parentName:"p"},"view"),"\u521b\u5efa\u8bed\u53e5\u7684\u6743\u9650 (\u4ece 2.0.3 \u7248\u672c\u5f00\u59cb\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"SELECT_PRIV"),"\u548c",(0,t.yg)("inlineCode",{parentName:"p"},"LOAD_PRIV"),"\u6743\u9650\u4e0d\u80fd",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE view_name"),"\uff0c\u62e5\u6709",(0,t.yg)("inlineCode",{parentName:"p"},"CREATE_PRIV"),"\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"ALTER_PRIV"),"\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"DROP_PRIV"),"\uff0c",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW_VIEW_PRIV"),"\u6743\u9650\u9879\u4e2d\u7684\u4efb\u4f55\u4e00\u4e2a\uff0c\u6709\u6743",(0,t.yg)("inlineCode",{parentName:"p"},"SHOW CREATE TABLE view_name"),")"),(0,t.yg)("p",null,"\u65e7\u7248\u6743\u9650\u4e2d\u7684 ALL \u548c READ_WRITE \u4f1a\u88ab\u8f6c\u6362\u6210\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\uff1b\nREAD_ONLY \u4f1a\u88ab\u8f6c\u6362\u4e3a SELECT_PRIV\u3002"),(0,t.yg)("p",null,"\u6743\u9650\u5206\u7c7b\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"1. \u8282\u70b9\u6743\u9650\uff1aNODE_PRIV\n2. \u5e93\u8868\u6743\u9650\uff1aSELECT_PRIV,LOAD_PRIV,ALTER_PRIV,CREATE_PRIV,DROP_PRIV\n3. \u8d44\u6e90\u6743\u9650\u548c workload group \u6743\u9650\uff1aUSAGE_PRIV\n")),(0,t.yg)("p",null,"priv_level \u652f\u6301\u4ee5\u4e0b\u56db\u79cd\u5f62\u5f0f\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"1. *.*.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6240\u6709 catalog \u53ca\u5176\u4e2d\u7684\u6240\u6709\u5e93\u8868\n2. catalog_name.*.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a catalog \u4e2d\u7684\u6240\u6709\u5e93\u8868\n3. catalog_name.db.* \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6240\u6709\u8868\n4. catalog_name.db.tbl \u6743\u9650\u53ef\u4ee5\u5e94\u7528\u4e8e\u6307\u5b9a\u5e93\u4e0b\u7684\u6307\u5b9a\u8868\n\n\u8fd9\u91cc\u6307\u5b9a\u7684 catalog_name \u6216\u5e93\u6216\u8868\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u5e93\u548c\u8868\u3002\n")),(0,t.yg)("p",null,"resource_name \u652f\u6301\u4ee5\u4e0b\u4e24\u79cd\u5f62\u5f0f\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"1. * \u6743\u9650\u5e94\u7528\u4e8e\u6240\u6709\u8d44\u6e90\n2. resource \u6743\u9650\u5e94\u7528\u4e8e\u6307\u5b9a\u8d44\u6e90\n\n\u8fd9\u91cc\u6307\u5b9a\u7684\u8d44\u6e90\u53ef\u4ee5\u662f\u4e0d\u5b58\u5728\u7684\u8d44\u6e90\u3002\u53e6\u5916\uff0c\u8fd9\u91cc\u7684\u8d44\u6e90\u8bf7\u8ddf\u5916\u90e8\u8868\u533a\u5206\u5f00\uff0c\u6709\u4f7f\u7528\u5916\u90e8\u8868\u7684\u60c5\u51b5\u8bf7\u90fd\u4f7f\u7528 catalog \u4f5c\u4e3a\u66ff\u4ee3\u3002\n")),(0,t.yg)("p",null,"workload",(0,t.yg)("em",{parentName:"p"},"group_name \u53ef\u6307\u5b9a workload group \u540d\uff0c\u652f\u6301 ",(0,t.yg)("inlineCode",{parentName:"em"},"%"),"\u548c`"),(0,t.yg)("inlineCode",{parentName:"p"},"\u5339\u914d\u7b26\uff0c"),"%",(0,t.yg)("inlineCode",{parentName:"p"},"\u53ef\u5339\u914d\u4efb\u610f\u5b57\u7b26\u4e32\uff0c"),"_`\u5339\u914d\u4efb\u610f\u5355\u4e2a\u5b57\u7b26\u3002"),(0,t.yg)("p",null,"user_identity\uff1a"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"\u8fd9\u91cc\u7684 user_identity \u8bed\u6cd5\u540c CREATE USER\u3002\u4e14\u5fc5\u987b\u4e3a\u4f7f\u7528 CREATE USER \u521b\u5efa\u8fc7\u7684 user_identity\u3002user_identity \u4e2d\u7684host\u53ef\u4ee5\u662f\u57df\u540d\uff0c\u5982\u679c\u662f\u57df\u540d\u7684\u8bdd\uff0c\u6743\u9650\u7684\u751f\u6548\u65f6\u95f4\u53ef\u80fd\u4f1a\u67091\u5206\u949f\u5de6\u53f3\u7684\u5ef6\u8fdf\u3002\n\n\u4e5f\u53ef\u4ee5\u5c06\u6743\u9650\u8d4b\u4e88\u6307\u5b9a\u7684 ROLE\uff0c\u5982\u679c\u6307\u5b9a\u7684 ROLE \u4e0d\u5b58\u5728\uff0c\u5219\u4f1a\u81ea\u52a8\u521b\u5efa\u3002\n")),(0,t.yg)("p",null,"role_list \u662f\u9700\u8981\u8d4b\u4e88\u7684\u89d2\u8272\u5217\u8868\uff0c\u4ee5\u9017\u53f7\u5206\u9694\uff0c\u6307\u5b9a\u7684\u89d2\u8272\u5fc5\u987b\u5b58\u5728\u3002"),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("ol",null,(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709 catalog \u548c\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV ON *.*.* TO 'jack'@'%';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u7528\u6237"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u5e93\u8868\u7684\u6743\u9650\u7ed9\u89d2\u8272"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6388\u4e88\u6240\u6709\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u7528\u6237"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u6388\u4e88\u6307\u5b9a\u8d44\u6e90\u7684\u4f7f\u7528\u6743\u9650\u7ed9\u89d2\u8272"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';\n")))),(0,t.yg)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,t.yg)("p",{parentName:"admonition"},"\u8be5\u529f\u80fd\u81ea Apache Doris  2.0 \u7248\u672c\u8d77\u652f\u6301")),(0,t.yg)("ol",{start:7},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a\u89d2\u8272\u6388\u4e88\u67d0\u7528\u6237"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT 'role1','role2' TO 'jack'@'%';\n")))),(0,t.yg)("ol",{start:8},(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a workload group\u2018g1\u2019\u6388\u4e88\u7528\u6237 jack"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5339\u914d\u6240\u6709 workload group \u6388\u4e88\u7528\u6237 jack"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5c06\u6307\u5b9a workload group\u2018g1\u2019\u6388\u4e88\u89d2\u8272 my_role"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role';\n"))),(0,t.yg)("li",{parentName:"ol"},(0,t.yg)("p",{parentName:"li"},"\u5141\u8bb8 jack \u67e5\u770b db1 \u4e0b view1 \u7684\u521b\u5efa\u8bed\u53e5"),(0,t.yg)("pre",{parentName:"li"},(0,t.yg)("code",{parentName:"pre",className:"language-sql"},"GRANT SHOW_VIEW_PRIV ON db1.view1 TO 'jack'@'%';\n")))),(0,t.yg)("h3",{id:"keywords"},"Keywords"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"GRANT\n")),(0,t.yg)("h3",{id:"best-practice"},"Best Practice"))}s.isMDXComponent=!0}}]);