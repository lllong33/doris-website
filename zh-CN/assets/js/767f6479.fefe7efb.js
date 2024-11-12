"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[340373],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>d});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=a.createContext({}),p=function(e){var t=a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(g.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,g=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,d=s["".concat(g,".").concat(m)]||s[m]||y[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var g in t)hasOwnProperty.call(t,g)&&(o[g]=t[g]);o.originalType=e,o[s]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},783436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(58168),r=(n(296540),n(15680));const l={title:"Kettle Doris Plugin",language:"zh-CN"},i=void 0,o={unversionedId:"ecosystem/kettle",id:"version-1.2/ecosystem/kettle",title:"Kettle Doris Plugin",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/ecosystem/kettle.md",sourceDirName:"ecosystem",slug:"/ecosystem/kettle",permalink:"/zh-CN/docs/1.2/ecosystem/kettle",draft:!1,tags:[],version:"1.2",frontMatter:{title:"Kettle Doris Plugin",language:"zh-CN"},sidebar:"ecosystem",previous:{title:"Seatunnel Doris Sink",permalink:"/zh-CN/docs/1.2/ecosystem/seatunnel"},next:{title:"Kyuubi",permalink:"/zh-CN/docs/1.2/ecosystem/kyuubi"}},g={},p=[{value:"Kettle Doris Plugin",id:"kettle-doris-plugin",level:2},{value:"\u5173\u4e8e Kettle",id:"\u5173\u4e8e-kettle",level:2},{value:"\u4f7f\u7528\u624b\u518c",id:"\u4f7f\u7528\u624b\u518c",level:2},{value:"\u4e0b\u8f7dKettle\u5b89\u88c5",id:"\u4e0b\u8f7dkettle\u5b89\u88c5",level:3},{value:"\u7f16\u8bd1Kettle Doris Plugin",id:"\u7f16\u8bd1kettle-doris-plugin",level:3},{value:"\u6784\u5efa\u4f5c\u4e1a",id:"\u6784\u5efa\u4f5c\u4e1a",level:3},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:3}],u={toc:p},s="wrapper";function y(e){let{components:t,...n}=e;return(0,r.yg)(s,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"kettle-doris-plugin"},"Kettle Doris Plugin"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://pentaho.com/"},"Kettle")," Doris\u7684\u63d2\u4ef6\uff0c\u7528\u4e8e\u5728Kettle\u4e2d\u901a\u8fc7 Stream Load \u5c06\u5176\u4ed6\u6570\u636e\u6e90\u7684\u6570\u636e\u5199\u5165\u5230 Doris \u4e2d\u3002"),(0,r.yg)("p",null,"\u8fd9\u4e2a\u63d2\u4ef6\u662f\u5229\u7528 Doris \u7684 Stream Load \u529f\u80fd\u8fdb\u884c\u6570\u636e\u5bfc\u5165\u7684\u3002\u9700\u8981\u914d\u5408 Kettle \u670d\u52a1\u4e00\u8d77\u4f7f\u7528\u3002"),(0,r.yg)("h2",{id:"\u5173\u4e8e-kettle"},"\u5173\u4e8e Kettle"),(0,r.yg)("p",null,"Kettle \u662f\u4e00\u6b3e\u5f00\u6e90\u7684ETL\uff08Extract, Transform, Load\uff09\u5de5\u5177\uff0c\u6700\u65e9\u7531 Pentaho \u516c\u53f8\u5f00\u53d1\uff0cKettle \u662f Pentaho \u4ea7\u54c1\u5957\u4ef6\u4e2d\u7684\u6838\u5fc3\u7ec4\u4ef6\u4e4b\u4e00\uff0c\u4e3b\u8981\u7528\u4e8e\u6570\u636e\u96c6\u6210\u548c\u6570\u636e\u5904\u7406\uff0c\u80fd\u591f\u8f7b\u677e\u5b8c\u6210\u4ece\u5404\u79cd\u6765\u6e90\u63d0\u53d6\u6570\u636e\u3001\u5bf9\u6570\u636e\u8fdb\u884c\u6e05\u6d17\u548c\u8f6c\u6362\uff0c\u5e76\u5c06\u5176\u52a0\u8f7d\u5230\u76ee\u6807\u7cfb\u7edf\u4e2d\u7684\u4efb\u52a1\u3002"),(0,r.yg)("p",null,"\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u9605\uff1a",(0,r.yg)("inlineCode",{parentName:"p"},"https://pentaho.com/")),(0,r.yg)("h2",{id:"\u4f7f\u7528\u624b\u518c"},"\u4f7f\u7528\u624b\u518c"),(0,r.yg)("h3",{id:"\u4e0b\u8f7dkettle\u5b89\u88c5"},"\u4e0b\u8f7dKettle\u5b89\u88c5"),(0,r.yg)("p",null,"Kettle \u4e0b\u8f7d\u5730\u5740\uff1a ",(0,r.yg)("a",{parentName:"p",href:"https://pentaho.com/download/#download-pentaho"},"https://pentaho.com/download/#download-pentaho"),"\n\u4e0b\u8f7d\u540e\u89e3\u538b\uff0c\u8fd0\u884cspoon.sh\u5373\u53ef\u542f\u52a8kettle\n\u4e5f\u53ef\u4ee5\u81ea\u884c\u7f16\u8bd1\uff0c\u53c2\u8003",(0,r.yg)("a",{parentName:"p",href:"https://github.com/pentaho/pentaho-kettle?tab=readme-ov-file#how-to-build"},"\u7f16\u8bd1\u7ae0\u8282")),(0,r.yg)("h3",{id:"\u7f16\u8bd1kettle-doris-plugin"},"\u7f16\u8bd1Kettle Doris Plugin"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd doris/extension/kettle\nmvn clean package -DskipTests\n")),(0,r.yg)("p",null,"\u7f16\u8bd1\u5b8c\u6210\u540e\uff0c\u5c06\u63d2\u4ef6\u5305\u89e3\u538b\u540e\u62f7\u8d1d\u5230kettle\u7684plugins\u76ee\u5f55\u4e0b"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd assemblies/plugin/target\nunzip doris-stream-loader-plugins-9.4.0.0-343.zip \ncp -r doris-stream-loader ${KETTLE_HOME}/plugins/\nmvn clean package -DskipTests\n")),(0,r.yg)("h3",{id:"\u6784\u5efa\u4f5c\u4e1a"},"\u6784\u5efa\u4f5c\u4e1a"),(0,r.yg)("p",null,"\u5728Kettle\u4e2d\u7684\u6279\u91cf\u52a0\u8f7d\u4e2d\u627e\u5230Doris Stream Loader\uff0c\u6784\u5efa\u4f5c\u4e1a\n",(0,r.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/doris/refs/heads/master/extension/kettle/images/create_zh.png",alt:"create_zh.png"})),(0,r.yg)("p",null,"\u70b9\u51fb\u5f00\u59cb\u8fd0\u884c\u4f5c\u4e1a\u5373\u53ef\u5b8c\u6210\u6570\u636e\u540c\u6b65\n",(0,r.yg)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/doris/refs/heads/master/extension/kettle/images/running_zh.png",alt:"running_zh.png"})),(0,r.yg)("h3",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Key"),(0,r.yg)("th",{parentName:"tr",align:null},"Default Value"),(0,r.yg)("th",{parentName:"tr",align:null},"Required"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Step name"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b65\u9aa4\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fenodes"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris FE http \u5730\u5740\uff0c\u652f\u6301\u591a\u4e2a\u5730\u5740\uff0c\u4f7f\u7528\u9017\u53f7\u5206\u9694")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u7684\u5199\u5165\u6570\u636e\u5e93")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76ee\u6807\u8868"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Doris \u7684\u5199\u5165\u8868")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u6237\u540d"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u7528\u6237\u540d")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bc6\u7801"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8bbf\u95ee Doris \u7684\u5bc6\u7801")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u6b21\u5bfc\u5165\u6700\u5927\u884c\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"10000"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u6b21\u5bfc\u5165\u7684\u6700\u5927\u884c\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u6b21\u5bfc\u5165\u6700\u5927\u5b57\u8282"),(0,r.yg)("td",{parentName:"tr",align:null},"10485760(10MB)"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5355\u6b21\u5bfc\u5165\u7684\u6700\u5927\u5b57\u8282\u5927\u5c0f")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u91cd\u8bd5\u6b21\u6570"),(0,r.yg)("td",{parentName:"tr",align:null},"3"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5bfc\u5165\u5931\u8d25\u4e4b\u540e\u7684\u91cd\u8bd5\u6b21\u6570")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"StreamLoad\u5c5e\u6027"),(0,r.yg)("td",{parentName:"tr",align:null},"--"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Streamload\u7684\u8bf7\u6c42\u5934")))))}y.isMDXComponent=!0}}]);