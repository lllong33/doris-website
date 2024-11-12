"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[14772],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var m=r.createContext({}),s=function(e){var n=r.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(m.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(t),d=i,f=c["".concat(m,".").concat(d)]||c[d]||p[d]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var m in n)hasOwnProperty.call(n,m)&&(l[m]=n[m]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},706479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(58168),i=(t(296540),t(15680));const o={title:"FROM_UNIXTIME",language:"zh-CN"},a=void 0,l={unversionedId:"sql-manual/sql-functions/date-time-functions/from-unixtime",id:"sql-manual/sql-functions/date-time-functions/from-unixtime",title:"FROM_UNIXTIME",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/date-time-functions/from-unixtime.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/from-unixtime",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from-unixtime",draft:!1,tags:[],version:"current",frontMatter:{title:"FROM_UNIXTIME",language:"zh-CN"},sidebar:"docs",previous:{title:"FROM_SECOND",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/from-second"},next:{title:"UNIX_TIMESTAMP",permalink:"/zh-CN/docs/dev/sql-manual/sql-functions/date-time-functions/unix-timestamp"}},m={},s=[{value:"from_unixtime",id:"from_unixtime",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},c="wrapper";function p(e){let{components:n,...t}=e;return(0,i.yg)(c,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"from_unixtime"},"from_unixtime"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_UNIXTIME(BIGINT unix_timestamp[, VARCHAR string_format])")),(0,i.yg)("p",null,"\u5c06 unix \u65f6\u95f4\u6233\u8f6c\u5316\u4e3a\u5bf9\u5e94\u7684 time \u683c\u5f0f\uff0c\u8fd4\u56de\u7684\u683c\u5f0f\u7531 ",(0,i.yg)("inlineCode",{parentName:"p"},"string_format")," \u6307\u5b9a"),(0,i.yg)("p",null,"\u652f\u6301 ",(0,i.yg)("inlineCode",{parentName:"p"},"date_format")," \u4e2d\u7684 format \u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a %Y-%m-%d %H:%i:%s"),(0,i.yg)("p",null,"\u4f20\u5165\u7684\u662f\u6574\u578b\uff0c\u8fd4\u56de\u7684\u662f\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,i.yg)("p",null,"\u76ee\u524d\u652f\u6301\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"unix_timestamp")," \u8303\u56f4\u4e3a ",(0,i.yg)("inlineCode",{parentName:"p"},"[0, 32536771199]"),"\uff0c\u8d85\u51fa\u8303\u56f4\u7684 ",(0,i.yg)("inlineCode",{parentName:"p"},"unix_timestamp")," \u5c06\u4f1a\u5f97\u5230 NULL"),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select from_unixtime(1196440219);\n+---------------------------+\n| from_unixtime(1196440219) |\n+---------------------------+\n| 2007-12-01 00:30:19       |\n+---------------------------+\n\nmysql> select from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss');\n+--------------------------------------------------+\n| from_unixtime(1196440219, 'yyyy-MM-dd HH:mm:ss') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d');\n+-----------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d') |\n+-----------------------------------------+\n| 2007-12-01                              |\n+-----------------------------------------+\n\nmysql> select from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s');\n+--------------------------------------------------+\n| from_unixtime(1196440219, '%Y-%m-%d %H:%i:%s') |\n+--------------------------------------------------+\n| 2007-12-01 00:30:19                              |\n+--------------------------------------------------+\n")),(0,i.yg)("p",null,"\u5bf9\u4e8e\u8d85\u8fc7\u8303\u56f4\u7684\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5\u91c7\u7528from_second\u51fd\u6570\n",(0,i.yg)("inlineCode",{parentName:"p"},"DATETIME FROM_SECOND(BIGINT unix_timestamp)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"mysql> select from_second(21474836470);\n+--------------------------+\n| from_second(21474836470) |\n+--------------------------+\n| 2650-07-06 16:21:10      |\n+--------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"FROM_UNIXTIME,FROM,UNIXTIME\n")))}p.isMDXComponent=!0}}]);