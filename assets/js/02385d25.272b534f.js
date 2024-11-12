"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[280616],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var r=a(296540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=n,d=u["".concat(s,".").concat(y)]||u[y]||p[y]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<l;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},201436:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=a(58168),n=(a(296540),a(15680));const l={title:"character_sets",language:"en"},i=void 0,o={unversionedId:"admin-manual/system-tables/information_schema/character_sets",id:"version-2.1/admin-manual/system-tables/information_schema/character_sets",title:"character_sets",description:"\x3c!--",source:"@site/versioned_docs/version-2.1/admin-manual/system-tables/information_schema/character_sets.md",sourceDirName:"admin-manual/system-tables/information_schema",slug:"/admin-manual/system-tables/information_schema/character_sets",permalink:"/docs/admin-manual/system-tables/information_schema/character_sets",draft:!1,tags:[],version:"2.1",frontMatter:{title:"character_sets",language:"en"},sidebar:"docs",previous:{title:"catalog_meta_cache_statistics",permalink:"/docs/admin-manual/system-tables/information_schema/catalog_meta_cache_statistics"},next:{title:"collations",permalink:"/docs/admin-manual/system-tables/information_schema/collations"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Database",id:"database",level:2},{value:"Table Information",id:"table-information",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"overview"},"Overview"),(0,n.yg)("p",null,"View the supported character sets. This table is only used for compatibility with MySQL behavior and does not truly reflect the character sets used by Doris."),(0,n.yg)("h2",{id:"database"},"Database"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"information_schema")),(0,n.yg)("h2",{id:"table-information"},"Table Information"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Column Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Type"),(0,n.yg)("th",{parentName:"tr",align:null},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"CHARACTER_SET_NAME"),(0,n.yg)("td",{parentName:"tr",align:null},"varchar(512)"),(0,n.yg)("td",{parentName:"tr",align:null},"The name of the character set")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"DEFAULT_COLLATE_NAME"),(0,n.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:null},"The default collation name")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"DESCRIPTION"),(0,n.yg)("td",{parentName:"tr",align:null},"varchar(64)"),(0,n.yg)("td",{parentName:"tr",align:null},"A detailed description of the character set")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MAXLEN"),(0,n.yg)("td",{parentName:"tr",align:null},"bigint"),(0,n.yg)("td",{parentName:"tr",align:null},"The maximum number of bytes occupied by a single character in the character set")))))}p.isMDXComponent=!0}}]);