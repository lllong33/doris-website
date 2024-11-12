"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[473041],{15680:(e,t,a)=>{a.d(t,{xA:()=>p,yg:()=>f});var n=a(296540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=y(e,["components","mdxType","originalType","parentName"]),g=d(a),m=r,f=g["".concat(o,".").concat(m)]||g[m]||s[m]||l;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var y={};for(var o in t)hasOwnProperty.call(t,o)&&(y[o]=t[o]);y.originalType=e,y[g]="string"==typeof e?e:r,i[1]=y;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},105835:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>y,toc:()=>d});var n=a(58168),r=(a(296540),a(15680));const l={title:"YEARWEEK",language:"en"},i=void 0,y={unversionedId:"sql-manual/sql-functions/date-time-functions/yearweek",id:"sql-manual/sql-functions/date-time-functions/yearweek",title:"YEARWEEK",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/date-time-functions/yearweek.md",sourceDirName:"sql-manual/sql-functions/date-time-functions",slug:"/sql-manual/sql-functions/date-time-functions/yearweek",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/yearweek",draft:!1,tags:[],version:"current",frontMatter:{title:"YEARWEEK",language:"en"},sidebar:"docs",previous:{title:"WEEKOFYEAR",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/weekofyear"},next:{title:"DAYNAME",permalink:"/docs/dev/sql-manual/sql-functions/date-time-functions/dayname"}},o={},d=[{value:"yearweek",id:"yearweek",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],p={toc:d},g="wrapper";function s(e){let{components:t,...a}=e;return(0,r.yg)(g,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"yearweek"},"yearweek"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"INT YEARWEEK(DATE date[, INT mode])")),(0,r.yg)("p",null,"Returns year and week for a date.The value of the mode argument defaults to 0.\nWhen the week of the date belongs to the previous year, the year and week of the previous year are returned;\nwhen the week of the date belongs to the next year, the year of the next year is returned and the week is 1."),(0,r.yg)("p",null,"The following table describes how the mode argument works."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Mode"),(0,r.yg)("th",{parentName:"tr",align:"left"},"First day of week"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Range"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Week 1 is the first week \u2026"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"0"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Sunday in this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"1"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"2"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Sunday in this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"3"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"4"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"5"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Monday in this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"6"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Sunday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with 4 or more days this year")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},"7"),(0,r.yg)("td",{parentName:"tr",align:"left"},"Monday"),(0,r.yg)("td",{parentName:"tr",align:"left"},"1-53"),(0,r.yg)("td",{parentName:"tr",align:"left"},"with a Monday in this year")))),(0,r.yg)("p",null,"The parameter is Date or Datetime type"),(0,r.yg)("h3",{id:"example"},"example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select yearweek('2021-1-1');\n+----------------------+\n| yearweek('2021-1-1') |\n+----------------------+\n|               202052 |\n+----------------------+\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select yearweek('2020-7-1');\n+----------------------+\n| yearweek('2020-7-1') |\n+----------------------+\n|               202026 |\n+----------------------+\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"mysql> select yearweek('2024-12-30',1);\n+------------------------------------+\n| yearweek('2024-12-30 00:00:00', 1) |\n+------------------------------------+\n|                             202501 |\n+------------------------------------+\n")),(0,r.yg)("h3",{id:"keywords"},"keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"YEARWEEK\n")))}s.isMDXComponent=!0}}]);