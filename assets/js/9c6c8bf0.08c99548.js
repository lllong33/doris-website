"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[612418],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var a=n(296540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||l;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},194214:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(58168),r=(n(296540),n(15680));const l={title:"UPDATE",language:"en"},i=void 0,o={unversionedId:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE",id:"version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE",title:"UPDATE",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE.md",sourceDirName:"sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation",slug:"/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/UPDATE",draft:!1,tags:[],version:"3.0",frontMatter:{title:"UPDATE",language:"en"},sidebar:"docs",previous:{title:"DELETE",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/DELETE"},next:{title:"EXPORT",permalink:"/docs/3.0/sql-manual/sql-statements/Data-Manipulation-Statements/Manipulation/EXPORT"}},s={},u=[{value:"UPDATE",id:"update",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Required Parameters",id:"required-parameters",level:4},{value:"Optional Parameters",id:"optional-parameters",level:4},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"update"},"UPDATE"),(0,r.yg)("h3",{id:"name"},"Name"),(0,r.yg)("p",null,"UPDATE"),(0,r.yg)("h3",{id:"description"},"Description"),(0,r.yg)("p",null,"This statement is used to update the data. The UPDATE statement currently only supports the UNIQUE KEY model."),(0,r.yg)("p",null,"The UPDATE operation currently only supports updating the Value column. The update of the Key column can refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/3.0/ecosystem/flink-doris-connector#use-flinkcdc-to-update-key-column"},"Using FlinkCDC to update Key column"),"."),(0,r.yg)("h4",{id:"syntax"},"Syntax"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"[cte]\nUPDATE target_table [table_alias]\n    SET assignment_list\n    [ FROM additional_tables]\n    WHERE condition\n")),(0,r.yg)("h4",{id:"required-parameters"},"Required Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"target_table: The target table of the data to be updated. Can be of the form 'db_name.table_name'"),(0,r.yg)("li",{parentName:"ul"},"assignment_list: The target column to be updated, in the format 'col_name = value, col_name = value'"),(0,r.yg)("li",{parentName:"ul"},"where condition: the condition that is expected to be updated, an expression that returns true or false can be")),(0,r.yg)("h4",{id:"optional-parameters"},"Optional Parameters"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"cte: Common Table Expression, eg 'WITH a AS SELECT * FROM tbl'"),(0,r.yg)("li",{parentName:"ul"},"table_alias: alias of table"),(0,r.yg)("li",{parentName:"ul"},"FROM additional_tables: Specifies one or more tables to use for selecting rows to update or for setting new values. Note that if you want use target table here, you should give it a alias explicitly.")),(0,r.yg)("h4",{id:"note"},"Note"),(0,r.yg)("p",null,"The current UPDATE statement only supports row updates on the UNIQUE KEY model."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"test")," table is a unique model table, which contains four columns: k1, k2, v1, v2. Where k1, k2 are keys, v1, v2 are values, and the aggregation method is Replace."),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Update the v1 column in the 'test' table that satisfies the conditions k1 =1 , k2 =2 to 1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE test SET v1 = 1 WHERE k1=1 and k2=2;\n")),(0,r.yg)("ol",{start:2},(0,r.yg)("li",{parentName:"ol"},"Increment the v1 column of the k1=1 column in the 'test' table by 1")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"UPDATE test SET v1 = v1+1 WHERE k1=1;\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"use the result of ",(0,r.yg)("inlineCode",{parentName:"li"},"t2")," join ",(0,r.yg)("inlineCode",{parentName:"li"},"t3")," to update ",(0,r.yg)("inlineCode",{parentName:"li"},"t1"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- create t1, t2, t3 tables\nCREATE TABLE t1\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nUNIQUE KEY (id)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1', \"function_column.sequence_col\" = \"c4\");\n\nCREATE TABLE t2\n  (id INT, c1 BIGINT, c2 STRING, c3 DOUBLE, c4 DATE)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\nCREATE TABLE t3\n  (id INT)\nDISTRIBUTED BY HASH (id)\nPROPERTIES('replication_num'='1');\n\n-- insert data\nINSERT INTO t1 VALUES\n  (1, 1, '1', 1.0, '2000-01-01'),\n  (2, 2, '2', 2.0, '2000-01-02'),\n  (3, 3, '3', 3.0, '2000-01-03');\n\nINSERT INTO t2 VALUES\n  (1, 10, '10', 10.0, '2000-01-10'),\n  (2, 20, '20', 20.0, '2000-01-20'),\n  (3, 30, '30', 30.0, '2000-01-30'),\n  (4, 4, '4', 4.0, '2000-01-04'),\n  (5, 5, '5', 5.0, '2000-01-05');\n\nINSERT INTO t3 VALUES\n  (1),\n  (4),\n  (5);\n\n-- update t1\nUPDATE t1\n  SET t1.c1 = t2.c1, t1.c3 = t2.c3 * 100\n  FROM t2 INNER JOIN t3 ON t2.id = t3.id\n  WHERE t1.id = t2.id;\n")),(0,r.yg)("p",null,"the expect result is only update the row where id = 1 in table t1"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"+----+----+----+--------+------------+\n| id | c1 | c2 | c3     | c4         |\n+----+----+----+--------+------------+\n| 1  | 10 | 1  | 1000.0 | 2000-01-01 |\n| 2  | 2  | 2  |    2.0 | 2000-01-02 |\n| 3  | 3  | 3  |    3.0 | 2000-01-03 |\n+----+----+----+--------+------------+\n")),(0,r.yg)("ol",{start:4},(0,r.yg)("li",{parentName:"ol"},"using cte")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},'create table orders(\n    o_orderkey bigint,\n    o_totalprice decimal(15, 2)\n) unique key(o_orderkey)\ndistributed by hash(o_orderkey) buckets 1 \nproperties (\n    "replication_num" = "1"\n);\n\ninsert into orders values\n(1, 34.1),\n(2, 432.8);\n\ncreate table lineitem(\n    l_linenumber int,\n    o_orderkey bigint,\n    l_discount  decimal(15, 2)\n) unique key(l_linenumber)\ndistributed by hash(l_linenumber) buckets 1 \nproperties (\n    "replication_num" = "1"\n);\n\ninsert into lineitem values\n(1, 1, 1.23),\n(2, 1, 3.21),\n(3, 2, 18.08),\n(4, 2, 23.48);\n\nwith discount_orders as (\n    select * from orders \n    where o_totalprice > 100\n)\nupdate lineitem  set l_discount = l_discount*0.9\nfrom discount_orders \nwhere lineitem.o_orderkey = discount_orders.o_orderkey;\n')),(0,r.yg)("h3",{id:"keywords"},"Keywords"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"UPDATE\n")),(0,r.yg)("h3",{id:"best-practice"},"Best Practice"))}d.isMDXComponent=!0}}]);