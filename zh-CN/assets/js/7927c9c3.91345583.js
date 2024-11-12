"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[817048],{15680:(e,a,n)=>{n.d(a,{xA:()=>d,yg:()=>c});var t=n(296540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function p(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=t.createContext({}),u=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},y=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=u(n),y=r,c=m["".concat(o,".").concat(y)]||m[y]||s[y]||l;return n?t.createElement(c,i(i({ref:a},d),{},{components:n})):t.createElement(c,i({ref:a},d))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=y;var p={};for(var o in a)hasOwnProperty.call(a,o)&&(p[o]=a[o]);p.originalType=e,p[m]="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},286898:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var t=n(58168),r=(n(296540),n(15680));const l={title:"Upload Action",language:"zh-CN"},i=void 0,p={unversionedId:"admin-manual/fe/upload-action",id:"version-2.0/admin-manual/fe/upload-action",title:"Upload Action",description:"\x3c!--",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/upload-action.md",sourceDirName:"admin-manual/fe",slug:"/admin-manual/fe/upload-action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/upload-action",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Upload Action",language:"zh-CN"},sidebar:"docs",previous:{title:"Table Schema Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/table-schema-action"},next:{title:"Import Action",permalink:"/zh-CN/docs/2.0/admin-manual/fe/import-action"}},o={},u=[{value:"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6",id:"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6",level:2},{value:"Request",id:"request",level:3},{value:"Path parameters",id:"path-parameters",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Request body",id:"request-body",level:3},{value:"Response",id:"response",level:3},{value:"\u5bfc\u5165\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6",id:"\u5bfc\u5165\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6",level:2},{value:"Request",id:"request-1",level:3},{value:"Path parameters",id:"path-parameters-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Header",id:"header",level:3},{value:"Request body",id:"request-body-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Example",id:"example",level:3}],d={toc:u},m="wrapper";function s(e){let{components:a,...n}=e;return(0,r.yg)(m,(0,t.A)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Upload Action \u76ee\u524d\u4e3b\u8981\u670d\u52a1\u4e8e FE \u7684\u524d\u7aef\u9875\u9762\uff0c\u7528\u4e8e\u7528\u6237\u5bfc\u5165\u4e00\u4e9b\u6d4b\u8bd5\u6027\u8d28\u7684\u5c0f\u6587\u4ef6\u3002"),(0,r.yg)("h2",{id:"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6"},"\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6"),(0,r.yg)("p",null,"\u7528\u4e8e\u5c06\u6587\u4ef6\u4e0a\u4f20\u5230 FE \u8282\u70b9\uff0c\u53ef\u5728\u7a0d\u540e\u7528\u4e8e\u5bfc\u5165\u8be5\u6587\u4ef6\u3002\u76ee\u524d\u4ec5\u652f\u6301\u4e0a\u4f20\u6700\u5927 100MB \u7684\u6587\u4ef6\u3002"),(0,r.yg)("h3",{id:"request"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"POST /api/<namespace>/<db>/<tbl>/upload\n")),(0,r.yg)("h3",{id:"path-parameters"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<namespace>")),(0,r.yg)("p",{parentName:"li"},"  \u547d\u540d\u7a7a\u95f4\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u6570\u636e\u5e93\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u8868"))),(0,r.yg)("h3",{id:"query-parameters"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"column_separator")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u9879\uff0c\u6307\u5b9a\u6587\u4ef6\u7684\u5206\u9694\u7b26\u3002\u9ed8\u8ba4\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"\\t"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"preview")),(0,r.yg)("p",{parentName:"li"},"  \u53ef\u9009\u9879\uff0c\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),"\uff0c\u5219\u8fd4\u56de\u7ed3\u679c\u4e2d\u4f1a\u663e\u793a\u6700\u591a 10 \u884c\u6839\u636e ",(0,r.yg)("inlineCode",{parentName:"p"},"column_separator")," \u5207\u5206\u597d\u7684\u6570\u636e\u884c\u3002"))),(0,r.yg)("h3",{id:"request-body"},"Request body"),(0,r.yg)("p",null,"\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\u5185\u5bb9\uff0cContent-type \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data")),(0,r.yg)("h3",{id:"response"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "id": 1,\n        "uuid": "b87824a4-f6fd-42c9-b9f1-c6d68c5964c2",\n        "originFileName": "data.txt",\n        "fileSize": 102400,\n        "absPath": "/path/to/file/data.txt"\n        "maxColNum" : 5\n    },\n    "count": 1\n}\n')),(0,r.yg)("h2",{id:"\u5bfc\u5165\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6"},"\u5bfc\u5165\u5df2\u4e0a\u4f20\u7684\u6587\u4ef6"),(0,r.yg)("h3",{id:"request-1"},"Request"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PUT /api/<namespace>/<db>/<tbl>/upload\n")),(0,r.yg)("h3",{id:"path-parameters-1"},"Path parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<namespace>")),(0,r.yg)("p",{parentName:"li"},"  \u547d\u540d\u7a7a\u95f4\uff0c\u76ee\u524d\u4ec5\u652f\u6301 ",(0,r.yg)("inlineCode",{parentName:"p"},"default_cluster"),"\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<db>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u6570\u636e\u5e93\n")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"<tbl>")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u7684\u8868"))),(0,r.yg)("h3",{id:"query-parameters-1"},"Query parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file_id")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u5bfc\u5165\u7684\u6587\u4ef6 id\uff0c\u6587\u4ef6 id \u7531\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6\u7684 API \u8fd4\u56de\u3002")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("inlineCode",{parentName:"p"},"file_uuid")),(0,r.yg)("p",{parentName:"li"},"  \u6307\u5b9a\u5bfc\u5165\u7684\u6587\u4ef6 uuid\uff0c\u6587\u4ef6 uuid \u7531\u4e0a\u4f20\u5bfc\u5165\u6587\u4ef6\u7684 API \u8fd4\u56de\u3002\n"))),(0,r.yg)("h3",{id:"header"},"Header"),(0,r.yg)("p",null,"Header \u4e2d\u7684\u53ef\u9009\u9879\u540c Stream Load \u8bf7\u6c42\u4e2d header \u7684\u53ef\u9009\u9879\u3002"),(0,r.yg)("h3",{id:"request-body-1"},"Request body"),(0,r.yg)("p",null,"\u8981\u4e0a\u4f20\u7684\u6587\u4ef6\u5185\u5bb9\uff0cContent-type \u4e3a ",(0,r.yg)("inlineCode",{parentName:"p"},"multipart/form-data")),(0,r.yg)("h3",{id:"response-1"},"Response"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n    "msg": "success",\n    "code": 0,\n    "data": {\n        "TxnId": 7009,\n        "Label": "9dbdfb0a-120b-47a2-b078-4531498727cb",\n        "Status": "Success",\n        "Message": "OK",\n        "NumberTotalRows": 3,\n        "NumberLoadedRows": 3,\n        "NumberFilteredRows": 0,\n        "NumberUnselectedRows": 0,\n        "LoadBytes": 12,\n        "LoadTimeMs": 71,\n        "BeginTxnTimeMs": 0,\n        "StreamLoadPutTimeMs": 1,\n        "ReadDataTimeMs": 0,\n        "WriteDataTimeMs": 13,\n        "CommitAndPublishTimeMs": 53\n    },\n    "count": 1\n}\n')),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"PUT /api/default_cluster/db1/tbl1/upload?file_id=1&file_uuid=b87824a4-f6fd-42c9-b9f1-c6d68c5964c2\n")))}s.isMDXComponent=!0}}]);