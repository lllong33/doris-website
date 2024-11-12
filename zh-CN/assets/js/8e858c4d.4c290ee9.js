"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[361236],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>m});var n=r(296540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),y=a,m=s["".concat(c,".").concat(y)]||s[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},841387:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(58168),a=(r(296540),r(15680));const o={title:"\u6a21\u578b\u6982\u8ff0",language:"zh-CN"},i=void 0,l={unversionedId:"table-design/data-model/overview",id:"table-design/data-model/overview",title:"\u6a21\u578b\u6982\u8ff0",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/table-design/data-model/overview.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/overview",permalink:"/zh-CN/docs/dev/table-design/data-model/overview",draft:!1,tags:[],version:"current",frontMatter:{title:"\u6a21\u578b\u6982\u8ff0",language:"zh-CN"},sidebar:"docs",previous:{title:"N-Gram \u7d22\u5f15",permalink:"/zh-CN/docs/dev/table-design/index/ngram-bloomfilter-index"},next:{title:"\u660e\u7ec6\u6a21\u578b",permalink:"/zh-CN/docs/dev/table-design/data-model/duplicate"}},c={},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"\u672c\u6587\u6863\u4e3b\u8981\u4ece\u903b\u8f91\u5c42\u9762\uff0c\u63cf\u8ff0 Doris \u7684\u6570\u636e\u6a21\u578b\uff0c\u4ee5\u5e2e\u52a9\u7528\u6237\u66f4\u597d\u7684\u4f7f\u7528 Doris \u5e94\u5bf9\u4e0d\u540c\u7684\u4e1a\u52a1\u573a\u666f\u3002"),(0,a.yg)("p",null,"\u5728 Doris \u4e2d\uff0c\u6570\u636e\u4ee5\u8868\uff08Table\uff09\u7684\u5f62\u5f0f\u8fdb\u884c\u903b\u8f91\u4e0a\u7684\u63cf\u8ff0\u3002\u4e00\u5f20\u8868\u5305\u62ec\u884c\uff08Row\uff09\u548c\u5217\uff08Column\uff09\u3002Row \u5373\u7528\u6237\u7684\u4e00\u884c\u6570\u636e\uff0cColumn \u7528\u4e8e\u63cf\u8ff0\u4e00\u884c\u6570\u636e\u4e2d\u4e0d\u540c\u7684\u5b57\u6bb5\u3002"),(0,a.yg)("p",null,"Column \u53ef\u4ee5\u5206\u4e3a\u4e24\u5927\u7c7b\uff1aKey \u548c Value\u3002\u4ece\u4e1a\u52a1\u89d2\u5ea6\u770b\uff0cKey \u548c Value \u53ef\u4ee5\u5206\u522b\u5bf9\u5e94\u7ef4\u5ea6\u5217\u548c\u6307\u6807\u5217\u3002Doris \u7684 Key \u5217\u662f\u5efa\u8868\u8bed\u53e5\u4e2d\u6307\u5b9a\u7684\u5217\uff0c\u5efa\u8868\u8bed\u53e5\u4e2d\u7684\u5173\u952e\u5b57 ",(0,a.yg)("inlineCode",{parentName:"p"},"unique key")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"aggregate key")," \u6216 ",(0,a.yg)("inlineCode",{parentName:"p"},"duplicate key")," \u540e\u9762\u7684\u5217\u5c31\u662f Key \u5217\uff0c\u9664\u4e86 Key \u5217\u5269\u4e0b\u7684\u5c31\u662f Value \u5217\u3002"),(0,a.yg)("p",null,"Doris \u7684\u6570\u636e\u6a21\u578b\u5206\u4e3a 3 \u7c7b\uff1a"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u660e\u7ec6\u6a21\u578b\uff08Duplicate Key Model\uff09\uff1a\u5141\u8bb8\u6307\u5b9a\u7684 Key \u5217\u91cd\u590d\uff0cDoirs \u5b58\u50a8\u5c42\u4fdd\u7559\u6240\u6709\u5199\u5165\u7684\u6570\u636e\uff0c\u9002\u7528\u4e8e\u5fc5\u987b\u4fdd\u7559\u6240\u6709\u539f\u59cb\u6570\u636e\u8bb0\u5f55\u7684\u60c5\u51b5\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u4e3b\u952e\u6a21\u578b\uff08Unique Key Model\uff09\uff1a\u6bcf\u4e00\u884c\u7684 Key \u503c\u552f\u4e00\uff0c\u53ef\u786e\u4fdd\u7ed9\u5b9a\u7684 Key \u5217\u4e0d\u4f1a\u5b58\u5728\u91cd\u590d\u884c\uff0cDoris \u5b58\u50a8\u5c42\u5bf9\u6bcf\u4e2a key \u53ea\u4fdd\u7559\u6700\u65b0\u5199\u5165\u7684\u6570\u636e\uff0c\u9002\u7528\u4e8e\u6570\u636e\u66f4\u65b0\u7684\u60c5\u51b5\u3002")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"\u805a\u5408\u6a21\u578b\uff08Aggregate Key Model\uff09\uff1a\u53ef\u6839\u636e Key \u5217\u805a\u5408\u6570\u636e\uff0cDoris \u5b58\u50a8\u5c42\u4fdd\u7559\u805a\u5408\u540e\u7684\u6570\u636e\uff0c\u4ece\u800c\u53ef\u4ee5\u51cf\u5c11\u5b58\u50a8\u7a7a\u95f4\u548c\u63d0\u5347\u67e5\u8be2\u6027\u80fd\uff1b\u901a\u5e38\u7528\u4e8e\u9700\u8981\u6c47\u603b\u6216\u805a\u5408\u4fe1\u606f\uff08\u5982\u603b\u6570\u6216\u5e73\u5747\u503c\uff09\u7684\u60c5\u51b5\u3002"))))}d.isMDXComponent=!0}}]);