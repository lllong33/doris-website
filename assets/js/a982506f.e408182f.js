"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[103764],{15680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>d});var r=t(296540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},y=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,d=p["".concat(l,".").concat(y)]||p[y]||f[y]||o;return t?r.createElement(d,c(c({ref:n},u),{},{components:t})):r.createElement(d,c({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},276747:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(58168),a=(t(296540),t(15680));const o={title:"CONCAT",language:"en"},c=void 0,i={unversionedId:"sql-manual/sql-functions/string-functions/concat",id:"version-2.0/sql-manual/sql-functions/string-functions/concat",title:"CONCAT",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/concat.md",sourceDirName:"sql-manual/sql-functions/string-functions",slug:"/sql-manual/sql-functions/string-functions/concat",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/concat",draft:!1,tags:[],version:"2.0",frontMatter:{title:"CONCAT",language:"en"},sidebar:"docs",previous:{title:"CHAR",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/char"},next:{title:"CONCAT_WS",permalink:"/docs/2.0/sql-manual/sql-functions/string-functions/concat-ws"}},l={},s=[{value:"concat",id:"concat",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],u={toc:s},p="wrapper";function f(e){let{components:n,...t}=e;return(0,a.yg)(p,(0,r.A)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"concat"},"concat"),(0,a.yg)("h3",{id:"description"},"Description"),(0,a.yg)("h4",{id:"syntax"},"Syntax"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"VARCHAR concat (VARCHAR,...)")),(0,a.yg)("p",null,"Connect multiple strings and return NULL if any of the parameters is NULL"),(0,a.yg)("h3",{id:"example"},"example"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"mysql> select concat(\"a\", \"b\");\n+------------------+\n| concat('a', 'b') |\n+------------------+\n| ab               |\n+------------------+\n\nmysql> select concat(\"a\", \"b\", \"c\");\n+-----------------------+\n| concat('a', 'b', 'c') |\n+-----------------------+\n| abc                   |\n+-----------------------+\n\nmysql> select concat(\"a\", null, \"c\");\n+------------------------+\n| concat('a', NULL, 'c') |\n+------------------------+\n| NULL                   |\n+------------------------+\n")),(0,a.yg)("h3",{id:"keywords"},"keywords"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre"},"CONCAT\n")))}f.isMDXComponent=!0}}]);