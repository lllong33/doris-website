"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[978523],{15680:(n,t,e)=>{e.d(t,{xA:()=>c,yg:()=>b});var r=e(296540);function i(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function a(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function o(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?a(Object(e),!0).forEach((function(t){i(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function m(n,t){if(null==n)return{};var e,r,i=function(n,t){if(null==n)return{};var e,r,i={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(i[e]=n[e]);return i}(n,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(i[e]=n[e])}return i}var p=r.createContext({}),s=function(n){var t=r.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):o(o({},t),n)),e},c=function(n){var t=s(n.components);return r.createElement(p.Provider,{value:t},n.children)},l="mdxType",u={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(n,t){var e=n.components,i=n.mdxType,a=n.originalType,p=n.parentName,c=m(n,["components","mdxType","originalType","parentName"]),l=s(e),_=i,b=l["".concat(p,".").concat(_)]||l[_]||u[_]||a;return e?r.createElement(b,o(o({ref:t},c),{},{components:e})):r.createElement(b,o({ref:t},c))}));function b(n,t){var e=arguments,i=t&&t.mdxType;if("string"==typeof n||i){var a=e.length,o=new Array(a);o[0]=_;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=n,m[l]="string"==typeof n?n:i,o[1]=m;for(var s=2;s<a;s++)o[s]=e[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}_.displayName="MDXCreateElement"},262283:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>m,toc:()=>s});var r=e(58168),i=(e(296540),e(15680));const a={title:"BITMAP_AND_COUNT",language:"zh-CN"},o=void 0,m={unversionedId:"sql-manual/sql-functions/bitmap-functions/bitmap-and-count",id:"version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-count",title:"BITMAP_AND_COUNT",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-count.md",sourceDirName:"sql-manual/sql-functions/bitmap-functions",slug:"/sql-manual/sql-functions/bitmap-functions/bitmap-and-count",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-count",draft:!1,tags:[],version:"2.0",frontMatter:{title:"BITMAP_AND_COUNT",language:"zh-CN"},sidebar:"docs",previous:{title:"BITMAP_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-count"},next:{title:"BITMAP_AND_NOT_COUNT,BITMAP_ANDNOT_COUNT",permalink:"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-and-not-count"}},p={},s=[{value:"bitmap_and_count",id:"bitmap_and_count",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}],c={toc:s},l="wrapper";function u(n){let{components:t,...e}=n;return(0,i.yg)(l,(0,r.A)({},c,e,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"bitmap_and_count"},"bitmap_and_count"),(0,i.yg)("h3",{id:"description"},"description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"BigIntVal bitmap_and_count(BITMAP lhs, BITMAP rhs, ...)")),(0,i.yg)("p",null,"\u8ba1\u7b97\u4e24\u4e2a\u53ca\u4ee5\u4e0a\u8f93\u5165bitmap\u7684\u4ea4\u96c6\uff0c\u8fd4\u56de\u4ea4\u96c6\u7684\u4e2a\u6570."),(0,i.yg)("h3",{id:"example"},"example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"MySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_empty());\n+---------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_empty()) |\n+---------------------------------------------------------------+\n|                                                             0 |\n+---------------------------------------------------------------+\n\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_from_string('1,2,3'));\n+----------------------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2,3')) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'),bitmap_from_string('3,4,5'));\n+----------------------------------------------------------------------------+\n| bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('3,4,5')) |\n+----------------------------------------------------------------------------+\n|                                                                          1 |\n+----------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'));\n+-------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'))) |\n+-------------------------------------------------------------------------------------------------------------+\n|                                                                                                           2 |\n+-------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'),bitmap_empty());\n+-----------------------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), bitmap_empty())) |\n+-----------------------------------------------------------------------------------------------------------------------------+\n|                                                                                                                           0 |\n+-----------------------------------------------------------------------------------------------------------------------------+\n\nMySQL> select bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL);\n+-------------------------------------------------------------------------------------------------------------------+\n| (bitmap_and_count(bitmap_from_string('1,2,3'), bitmap_from_string('1,2'), bitmap_from_string('1,2,3,4,5'), NULL)) |\n+-------------------------------------------------------------------------------------------------------------------+\n|                                                                                                              NULL |\n+-------------------------------------------------------------------------------------------------------------------+\n")),(0,i.yg)("h3",{id:"keywords"},"keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"BITMAP_AND_COUNT,BITMAP\n")))}u.isMDXComponent=!0}}]);