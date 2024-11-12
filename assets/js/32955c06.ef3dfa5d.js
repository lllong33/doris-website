"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[49464],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>f});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),y=a,f=d["".concat(o,".").concat(y)]||d[y]||p[y]||i;return t?r.createElement(f,l(l({ref:n},u),{},{components:t})):r.createElement(f,l({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=y;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<i;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},749387:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=t(58168),a=(t(296540),t(15680));const i={title:"l2_distance",language:"en"},l=void 0,s={unversionedId:"sql-manual/sql-functions/distance-functions/l2-distance",id:"sql-manual/sql-functions/distance-functions/l2-distance",title:"l2_distance",description:"\x3c!--",source:"@site/docs/sql-manual/sql-functions/distance-functions/l2-distance.md",sourceDirName:"sql-manual/sql-functions/distance-functions",slug:"/sql-manual/sql-functions/distance-functions/l2-distance",permalink:"/docs/dev/sql-manual/sql-functions/distance-functions/l2-distance",draft:!1,tags:[],version:"current",frontMatter:{title:"l2_distance",language:"en"},sidebar:"docs",previous:{title:"l1_distance",permalink:"/docs/dev/sql-manual/sql-functions/distance-functions/l1-distance"},next:{title:"IGNORE",permalink:"/docs/dev/sql-manual/sql-functions/debug-functions/ignore"}},o={},c=[{value:"l2_distance",id:"l2_distance",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.yg)(d,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"l2_distance"},"l2_distance"),(0,a.yg)("h3",{id:"description"},"description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-sql"},"DOUBLE l2_distance(ARRAY<T> array1, ARRAY<T> array2)\n")),(0,a.yg)("p",null,"Calculates the distance between two points (the values of the vectors are the coordinates) in Euclidean space.\nReturn NULL if input array is NULL or any element of array is NULL."),(0,a.yg)("h4",{id:"notice"},"Notice"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"nested type of input array support: TINYINT, SMALLINT, INT, BIGINT, LARGEINT, FLOAT, DOUBLE"),(0,a.yg)("li",{parentName:"ul"},"input array1 and array2 should have the same element size")),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"sql> SELECT l2_distance([1, 2], [2, 3]);\n+---------------------------------------+\n| l2_distance(ARRAY(1, 2), ARRAY(2, 3)) |\n+---------------------------------------+\n|                    1.4142135623730951 |\n+---------------------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"L2_DISTANCE,DISTANCE,L2,ARRAY\n")))}p.isMDXComponent=!0}}]);