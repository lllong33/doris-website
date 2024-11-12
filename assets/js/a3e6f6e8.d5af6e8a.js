"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[277001],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,y=p["".concat(s,".").concat(g)]||p[g]||m[g]||i;return n?a.createElement(y,l(l({ref:t},u),{},{components:n})):a.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},405716:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(58168),r=(n(296540),n(15680));const i={title:"Unique Key Model",language:"en"},l=void 0,o={unversionedId:"table-design/data-model/unique",id:"table-design/data-model/unique",title:"Unique Key Model",description:"\x3c!--",source:"@site/docs/table-design/data-model/unique.md",sourceDirName:"table-design/data-model",slug:"/table-design/data-model/unique",permalink:"/docs/dev/table-design/data-model/unique",draft:!1,tags:[],version:"current",frontMatter:{title:"Unique Key Model",language:"en"},sidebar:"docs",previous:{title:"Duplicate Key Model",permalink:"/docs/dev/table-design/data-model/duplicate"},next:{title:"Aggregate Key Model",permalink:"/docs/dev/table-design/data-model/aggregate"}},s={},d=[{value:"Merge-on-Write",id:"merge-on-write",level:2},{value:"Merge-on-Read",id:"merge-on-read",level:2},{value:"Use attention",id:"use-attention",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"When users have data update requirements, they can choose to use the Unique data model. The unique model can ensure the uniqueness of the primary key. When a user updates a piece of data, the newly written data will overwrite the old data with the same primary key."),(0,r.yg)("p",null,"The Unique data model provides two implementation methods:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Merge-on-write. In version 1.2, we introduced the merge-on-write implementation, which completes all data deduplication tasks during the data writing phase, thus providing excellent query performance. Since version 2.1, merge-on-write has become very mature and stable. Due to its excellent query performance, it has become the default implementation for the Unique model.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Merge-on-read. In the merge-on-read implementation, users will not trigger any data deduplication-related operations when writing data. All data deduplication operations are performed during queries or compaction. Therefore, the write performance of merge-on-read is better, the query performance is poor, and the memory consumption is also higher."))),(0,r.yg)("p",null,"The default update semantics of the Unique model is a ",(0,r.yg)("strong",{parentName:"p"},"full-row UPSERT"),", which stands for UPDATE OR INSERT. If the key of the row data exists, an update will be performed; if it does not exist, new data will be inserted. Under the full-row UPSERT semantics, even if the user uses INSERT INTO to specify partial columns for writing, Doris will fill the unprovided columns with NULL values or default values in the Planner."),(0,r.yg)("p",null,"If a user wishes to update partial fields, they need to use the merge-on-write implementation and enable support for partial column updates through specific parameters. Please refer to the documentation ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/update/update-of-unique-model"},"partial column updates")," for more details."),(0,r.yg)("p",null,"Let's look at how to create a Unique model table with merge-on-read and merge-on-write using a typical user basic information table as an example. This table does not have aggregation requirements and only needs to ensure the uniqueness of the primary key (The primary key is user_id + username)."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"ColumnName"),(0,r.yg)("th",{parentName:"tr",align:null},"Type"),(0,r.yg)("th",{parentName:"tr",align:null},"IsKey"),(0,r.yg)("th",{parentName:"tr",align:null},"Comment"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"user_id"),(0,r.yg)("td",{parentName:"tr",align:null},"BIGINT"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"User ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"username"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (50)"),(0,r.yg)("td",{parentName:"tr",align:null},"Yes"),(0,r.yg)("td",{parentName:"tr",align:null},"Username")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"city"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (20)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User location city")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"age"),(0,r.yg)("td",{parentName:"tr",align:null},"SMALLINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User age")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sex"),(0,r.yg)("td",{parentName:"tr",align:null},"TINYINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User gender")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"phone"),(0,r.yg)("td",{parentName:"tr",align:null},"LARGEINT"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User phone number")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"address"),(0,r.yg)("td",{parentName:"tr",align:null},"VARCHAR (500)"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User address")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"register_time"),(0,r.yg)("td",{parentName:"tr",align:null},"DATETIME"),(0,r.yg)("td",{parentName:"tr",align:null},"No"),(0,r.yg)("td",{parentName:"tr",align:null},"User registration time")))),(0,r.yg)("h2",{id:"merge-on-write"},"Merge-on-Write"),(0,r.yg)("p",null,"The table creation statement for Merge-on-Write is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_tbl_unique\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User ID",\n    `username` VARCHAR(50) NOT NULL COMMENT "Username",\n    `city` VARCHAR(20) COMMENT "User location city",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User gender",\n    `phone` LARGEINT COMMENT "User phone number",\n    `address` VARCHAR(500) COMMENT "User address",\n    `register_time` DATETIME COMMENT "User registration time"\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n')),(0,r.yg)("h2",{id:"merge-on-read"},"Merge-on-Read"),(0,r.yg)("p",null,"The table creation statement for Merge-on-Read is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'CREATE TABLE IF NOT EXISTS example_tbl_unique\n(\n    `user_id` LARGEINT NOT NULL COMMENT "User ID",\n    `username` VARCHAR(50) NOT NULL COMMENT "Username",\n    `city` VARCHAR(20) COMMENT "User location city",\n    `age` SMALLINT COMMENT "User age",\n    `sex` TINYINT COMMENT "User gender",\n    `phone` LARGEINT COMMENT "User phone number",\n    `address` VARCHAR(500) COMMENT "User address",\n    `register_time` DATETIME COMMENT "User registration time"\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "false"\n);\n')),(0,r.yg)("p",null,"Users need to add the property with ",(0,r.yg)("strong",{parentName:"p"},'enable_unique_key_merge_on_write" = "false"')," when creating the table to enable Merge-on-read."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'"enable_unique_key_merge_on_write" = "false"\n')),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},"In version 2.1, merge-on-write will be the default method for the primary key model."),(0,r.yg)("p",{parentName:"admonition"},"For new users, it is highly recommended to use version 2.0 or above. In version 2.0, the performance and stability of merge-on-write have been significantly improved and optimized."),(0,r.yg)("p",{parentName:"admonition"},"For users of version 1.2:"),(0,r.yg)("ul",{parentName:"admonition"},(0,r.yg)("li",{parentName:"ul"},"It is recommended to use version 1.2.4 or above, which fixes some bugs and stability issues."),(0,r.yg)("li",{parentName:"ul"},"Add the configuration item ",(0,r.yg)("inlineCode",{parentName:"li"},"disable_storage_page_cache=false")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"be.conf"),". Failing to add this configuration item may have a significant impact on data import performance."))),(0,r.yg)("h2",{id:"use-attention"},"Use attention"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The implementation of the Unique model can only be determined during table creation and cannot be modified through schema changes.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"The Merge-on-read table cannot be seamlessly upgraded to the Merge-on-write table (due to completely different data organization methods). If you need to switch to Merge-on-write, you must manually perform an ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO unique-mow-table SELECT * FROM source_table")," to re-import the data.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Whole-row Updates"),": The default update semantics for the Unique model is a whole-row UPSERT, which stands for UPDATE OR INSERT. If the key for a row of data exists, it will be updated; if it does not exist, new data will be inserted. Under the whole-row UPSERT semantics, even if the user specifies only certain columns for insertion using ",(0,r.yg)("inlineCode",{parentName:"p"},"INSERT INTO"),", Doris will fill in the unprovided columns with NULL values or default values during the planning phase.")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Partial Column Updates"),": If the user wishes to update only certain fields, they must use Merge-on-write and enable support for partial column updates through specific parameters. Please refer to the documentation on ",(0,r.yg)("a",{parentName:"p",href:"../../data-operate/update/update-of-unique-model"},"partial column updates")," for relevant usage recommendations."))))}m.isMDXComponent=!0}}]);