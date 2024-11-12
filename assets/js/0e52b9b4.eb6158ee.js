"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[583914],{15680:(e,a,t)=>{t.d(a,{xA:()=>d,yg:()=>g});var n=t(296540);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),c=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=i,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return t?n.createElement(g,s(s({ref:a},d),{},{components:t})):n.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=m;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},842503:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(58168),i=(t(296540),t(15680));const r={title:"Using Doris and Hudi",language:"en"},s=void 0,o={unversionedId:"gettingStarted/tutorials/building-lakehouse/doris-hudi",id:"version-2.0/gettingStarted/tutorials/building-lakehouse/doris-hudi",title:"Using Doris and Hudi",description:"\x3c!--",source:"@site/versioned_docs/version-2.0/gettingStarted/tutorials/building-lakehouse/doris-hudi.md",sourceDirName:"gettingStarted/tutorials/building-lakehouse",slug:"/gettingStarted/tutorials/building-lakehouse/doris-hudi",permalink:"/docs/2.0/gettingStarted/tutorials/building-lakehouse/doris-hudi",draft:!1,tags:[],version:"2.0",frontMatter:{title:"Using Doris and Hudi",language:"en"},sidebar:"get-starting",previous:{title:"Quick Start",permalink:"/docs/2.0/gettingStarted/quick-start"},next:{title:"Using Doris and Paimon",permalink:"/docs/2.0/gettingStarted/tutorials/building-lakehouse/doris-paimon"}},l={},c=[{value:"Apache Doris &amp; Hudi",id:"apache-doris--hudi",level:2},{value:"User Guide",id:"user-guide",level:2},{value:"01 Environment Preparation",id:"01-environment-preparation",level:3},{value:"02 Environment Deployment",id:"02-environment-deployment",level:3},{value:"03 Data Preparation",id:"03-data-preparation",level:3},{value:"04 Data Query",id:"04-data-query",level:3},{value:"05 Incremental Read",id:"05-incremental-read",level:3},{value:"06 TimeTravel",id:"06-timetravel",level:3},{value:"Query Optimization",id:"query-optimization",level:2}],d={toc:c},u="wrapper";function p(e){let{components:a,...r}=e;return(0,i.yg)(u,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"As a new open data management architecture, the Data Lakehouse integrates the high performance and real-time capabilities of data warehouses with the low cost and flexibility of data lakes, helping users more conveniently meet various data processing and analysis needs. It has been increasingly applied in enterprise big data systems."),(0,i.yg)("p",null,"In recent versions, Apache Doris has deepened its integration with data lakes and has evolved a mature Data Lakehouse solution."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Since version 0.15, Apache Doris has introduced Hive and Iceberg external tables, exploring the capabilities of combining with Apache Iceberg for data lakes."),(0,i.yg)("li",{parentName:"ul"},"Starting from version 1.2, Apache Doris officially introduced the Multi-Catalog feature, enabling automatic metadata mapping and data access for various data sources, along with numerous performance optimizations for external data reading and query execution. It now fully possesses the ability to build a high-speed and user-friendly Lakehouse architecture."),(0,i.yg)("li",{parentName:"ul"},"In version 2.1, Apache Doris' Data Lakehouse architecture was significantly enhanced, improving the reading and writing capabilities of mainstream data lake formats (Hudi, Iceberg, Paimon, etc.), introducing compatibility with multiple SQL dialects, and seamless migration from existing systems to Apache Doris. For data science and large-scale data reading scenarios, Doris integrated the Arrow Flight high-speed reading interface, achieving a 100-fold increase in data transfer efficiency.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Building lakehouse using doris and huid",src:t(507726).A,width:"2560",height:"1280"})),(0,i.yg)("h2",{id:"apache-doris--hudi"},"Apache Doris & Hudi"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/"},"Apache Hudi")," is currently one of the most popular open data lake formats and a transactional data lake management platform, supporting various mainstream query engines including Apache Doris."),(0,i.yg)("p",null,"Apache Doris has also enhanced its ability to read Apache Hudi data tables:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Supports Copy on Write Table: Snapshot Query"),(0,i.yg)("li",{parentName:"ul"},"Supports Merge on Read Table: Snapshot Queries, Read Optimized Queries"),(0,i.yg)("li",{parentName:"ul"},"Supports Time Travel"),(0,i.yg)("li",{parentName:"ul"},"Supports Incremental Read")),(0,i.yg)("p",null,"With Apache Doris' high-performance query execution and Apache Hudi's real-time data management capabilities, efficient, flexible, and cost-effective data querying and analysis can be achieved. It also provides robust data lineage, auditing, and incremental processing functionalities. The combination of Apache Doris and Apache Hudi has been validated and promoted in real business scenarios by multiple community users:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Real-time data analysis and processing: Common scenarios such as real-time data updates and query analysis in industries like finance, advertising, and e-commerce require real-time data processing. Hudi enables real-time data updates and management while ensuring data consistency and reliability. Doris efficiently handles large-scale data query requests in real-time, meeting the demands of real-time data analysis and processing effectively when combined."),(0,i.yg)("li",{parentName:"ul"},"Data lineage and auditing: For industries with high requirements for data security and accuracy like finance and healthcare, data lineage and auditing are crucial functionalities. Hudi offers Time Travel functionality for viewing historical data states, combined with Apache Doris' efficient querying capabilities, enabling quick analysis of data at any point in time for precise lineage and auditing."),(0,i.yg)("li",{parentName:"ul"},"Incremental data reading and analysis: Large-scale data analysis often faces challenges of large data volumes and frequent updates. Hudi supports incremental data reading, allowing users to process only the changed data without full data updates. Additionally, Apache Doris' Incremental Read feature enhances this process, significantly improving data processing and analysis efficiency."),(0,i.yg)("li",{parentName:"ul"},"Cross-data source federated queries: Many enterprises have complex data sources stored in different databases. Doris' Multi-Catalog feature supports automatic mapping and synchronization of various data sources, enabling federated queries across data sources. This greatly shortens the data flow path and enhances work efficiency for enterprises needing to retrieve and integrate data from multiple sources for analysis.")),(0,i.yg)("p",null,"This article will introduce readers to how to quickly set up a test and demonstration environment for Apache Doris + Apache Hudi in a Docker environment, and demonstrate various operations to help readers get started quickly."),(0,i.yg)("p",null,"For more information, please refer to ",(0,i.yg)("a",{parentName:"p",href:"../../../lakehouse/datalake-analytics/hudi"},"Hudi Catalog")),(0,i.yg)("h2",{id:"user-guide"},"User Guide"),(0,i.yg)("p",null,"All scripts and code mentioned in this article can be obtained from this address: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/doris/tree/master/samples/datalake/hudi"},"https://github.com/apache/doris/tree/master/samples/datalake/hudi")),(0,i.yg)("h3",{id:"01-environment-preparation"},"01 Environment Preparation"),(0,i.yg)("p",null,"This article uses Docker Compose for deployment, with the following components and versions:"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Component"),(0,i.yg)("th",{parentName:"tr",align:null},"Version"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Doris"),(0,i.yg)("td",{parentName:"tr",align:null},"Default 2.1.4, can be modified")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Hudi"),(0,i.yg)("td",{parentName:"tr",align:null},"0.14")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Spark"),(0,i.yg)("td",{parentName:"tr",align:null},"3.4.2")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"Apache Hive"),(0,i.yg)("td",{parentName:"tr",align:null},"2.1.3")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"MinIO"),(0,i.yg)("td",{parentName:"tr",align:null},"2022-05-26T05-48-41Z")))),(0,i.yg)("h3",{id:"02-environment-deployment"},"02 Environment Deployment"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Create a Docker network"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"sudo docker network create -d bridge hudi-net"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Start all components"),(0,i.yg)("p",{parentName:"li"},(0,i.yg)("inlineCode",{parentName:"p"},"sudo ./start-hudi-compose.sh")),(0,i.yg)("blockquote",{parentName:"li"},(0,i.yg)("p",{parentName:"blockquote"},"Note: Before starting, you can modify the ",(0,i.yg)("inlineCode",{parentName:"p"},"DORIS_PACKAGE")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"DORIS_DOWNLOAD_URL")," in ",(0,i.yg)("inlineCode",{parentName:"p"},"start-hudi-compose.sh")," to the desired Doris version. It is recommended to use version 2.1.4 or higher."))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"After starting, you can use the following script to log in to Spark command line or Doris command line:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"-- Doris\nsudo ./login-spark.sh\n\n-- Spark\nsudo ./login-doris.sh\n")))),(0,i.yg)("h3",{id:"03-data-preparation"},"03 Data Preparation"),(0,i.yg)("p",null,"Next, generate Hudi data through Spark. As shown in the code below, there is already a Hive table named ",(0,i.yg)("inlineCode",{parentName:"p"},"customer")," in the cluster. You can create a Hudi table using this Hive table:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- ./login-spark.sh\nspark-sql> use default;\n\n-- create a COW table\nspark-sql> CREATE TABLE customer_cow\nUSING hudi\nTBLPROPERTIES (\n  type = 'cow',\n  primaryKey = 'c_custkey',\n  preCombineField = 'c_name'\n)\nPARTITIONED BY (c_nationkey)\nAS SELECT * FROM customer;\n\n-- create a MOR table\nspark-sql> CREATE TABLE customer_mor\nUSING hudi\nTBLPROPERTIES (\n  type = 'mor',\n  primaryKey = 'c_custkey',\n  preCombineField = 'c_name'\n)\nPARTITIONED BY (c_nationkey)\nAS SELECT * FROM customer;\n")),(0,i.yg)("h3",{id:"04-data-query"},"04 Data Query"),(0,i.yg)("p",null,"As shown below, a Catalog named ",(0,i.yg)("inlineCode",{parentName:"p"},"hudi")," has been created in the Doris cluster (can be viewed using ",(0,i.yg)("inlineCode",{parentName:"p"},"SHOW CATALOGS"),"). The following is the creation statement for this Catalog:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'-- Already created, no need to execute again\nCREATE CATALOG `hudi` PROPERTIES (\n    "type"="hms",\n    \'hive.metastore.uris\' = \'thrift://hive-metastore:9083\',\n    "s3.access_key" = "minio",\n    "s3.secret_key" = "minio123",\n    "s3.endpoint" = "http://minio:9000",\n    "s3.region" = "us-east-1",\n    "use_path_style" = "true"\n);\n')),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Manually refresh this Catalog to synchronize the created Hudi table:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"-- ./login-doris.sh\ndoris> REFRESH CATALOG hudi;\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Operations on data in Hudi using Spark are immediately visible in Doris without the need to refresh the Catalog. We insert a row of data into both COW and MOR tables using Spark:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'spark-sql> insert into customer_cow values (100, "Customer#000000100", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 25);\nspark-sql> insert into customer_mor values (100, "Customer#000000100", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 25);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Through Doris, you can directly query the latest inserted data:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"doris> use hudi.default;\ndoris> select * from customer_cow where c_custkey = 100;\ndoris> select * from customer_mor where c_custkey = 100;\n"))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"Insert data with c_custkey=32 that already exists using Spark, thus overwriting the existing data:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},'spark-sql> insert into customer_cow values (32, "Customer#000000032_update", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 15);\nspark-sql> insert into customer_mor values (32, "Customer#000000032_update", "jD2xZzi", "25-430-914-2194", 3471.59, "BUILDING", "cial ideas. final, furious requests", 15);\n'))),(0,i.yg)("li",{parentName:"ol"},(0,i.yg)("p",{parentName:"li"},"With Doris, you can query the updated data:"),(0,i.yg)("pre",{parentName:"li"},(0,i.yg)("code",{parentName:"pre"},"doris> select * from customer_cow where c_custkey = 32;\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\ndoris> select * from customer_mor where c_custkey = 32;\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n")))),(0,i.yg)("h3",{id:"05-incremental-read"},"05 Incremental Read"),(0,i.yg)("p",null,"Incremental Read is one of the features provided by Hudi. With Incremental Read, users can obtain incremental data within a specified time range, enabling incremental processing of data. In this regard, Doris can query the changed data after inserting ",(0,i.yg)("inlineCode",{parentName:"p"},"c_custkey=100"),". As shown below, we inserted a data with ",(0,i.yg)("inlineCode",{parentName:"p"},"c_custkey=32"),":"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"doris> select * from customer_cow@incr('beginTime'='20240603015018572');\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\nspark-sql> select * from hudi_table_changes('customer_cow', 'latest_state', '20240603015018572');\n\ndoris> select * from customer_mor@incr('beginTime'='20240603015058442');\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n| c_custkey | c_name                    | c_address | c_phone         | c_acctbal | c_mktsegment | c_comment                           | c_nationkey |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\n|        32 | Customer#000000032_update | jD2xZzi   | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests |          15 |\n+-----------+---------------------------+-----------+-----------------+-----------+--------------+-------------------------------------+-------------+\nspark-sql> select * from hudi_table_changes('customer_mor', 'latest_state', '20240603015058442');\n")),(0,i.yg)("h3",{id:"06-timetravel"},"06 TimeTravel"),(0,i.yg)("p",null,"Doris supports querying specific snapshot versions of Hudi data, thereby enabling Time Travel functionality for data. First, you can query the commit history of two Hudi tables using Spark:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-sql> call show_commits(table => 'customer_cow', limit => 10);\n20240603033556094        20240603033558249        commit        448833        0        1        1        183        0        0\n20240603015444737        20240603015446588        commit        450238        0        1        1        202        1        0\n20240603015018572        20240603015020503        commit        436692        1        0        1        1        0        0\n20240603013858098        20240603013907467        commit        44902033        100        0        25        18751        0        0\n\nspark-sql> call show_commits(table => 'customer_mor', limit => 10);\n20240603033745977        20240603033748021        deltacommit        1240        0        1        1        0        0        0\n20240603015451860        20240603015453539        deltacommit        1434        0        1        1        1        1        0\n20240603015058442        20240603015100120        deltacommit        436691        1        0        1        1        0        0\n20240603013918515        20240603013922961        deltacommit        44904040        100        0        25        18751        0        0\n")),(0,i.yg)("p",null,"Next, using Doris, you can execute ",(0,i.yg)("inlineCode",{parentName:"p"},"c_custkey=32")," to query the data snapshot before the data insertion. As shown below, the data with ",(0,i.yg)("inlineCode",{parentName:"p"},"c_custkey=32")," has not been updated yet:"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Note: Time Travel syntax is currently not supported by the new optimizer. You need to first execute ",(0,i.yg)("inlineCode",{parentName:"p"},"set enable_nereids_planner=false;")," to disable the new optimizer. This issue will be fixed in future versions.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"doris> select * from customer_cow for time as of '20240603015018572' where c_custkey = 32 or c_custkey = 100;\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n| c_custkey | c_name             | c_address                             | c_phone         | c_acctbal | c_mktsegment | c_comment                                        | c_nationkey |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e |          15 |\n|       100 | Customer#000000100 | jD2xZzi                               | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests              |          25 |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n-- compare with spark-sql\nspark-sql> select * from customer_mor timestamp as of '20240603015018572' where c_custkey = 32 or c_custkey = 100;\n\ndoris> select * from customer_mor for time as of '20240603015058442' where c_custkey = 32 or c_custkey = 100;\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n| c_custkey | c_name             | c_address                             | c_phone         | c_acctbal | c_mktsegment | c_comment                                        | c_nationkey |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\n|       100 | Customer#000000100 | jD2xZzi                               | 25-430-914-2194 |   3471.59 | BUILDING     | cial ideas. final, furious requests              |          25 |\n|        32 | Customer#000000032 | jD2xZzi UmId,DCtNBLXKj9q0Tlp2iQ6ZcO3J | 25-430-914-2194 |   3471.53 | BUILDING     | cial ideas. final, furious requests across the e |          15 |\n+-----------+--------------------+---------------------------------------+-----------------+-----------+--------------+--------------------------------------------------+-------------+\nspark-sql> select * from customer_mor timestamp as of '20240603015058442' where c_custkey = 32 or c_custkey = 100;\n")),(0,i.yg)("h2",{id:"query-optimization"},"Query Optimization"),(0,i.yg)("p",null,"Data in Apache Hudi can be roughly divided into two categories - baseline data and incremental data. Baseline data is typically merged Parquet files, while incremental data refers to data increments generated by INSERT, UPDATE, or DELETE operations. Baseline data can be read directly, while incremental data needs to be read through Merge on Read."),(0,i.yg)("p",null,"For querying Hudi COW tables or Read Optimized queries on MOR tables, the data belongs to baseline data and can be directly read using Doris' native Parquet Reader, providing fast query responses. For incremental data, Doris needs to access Hudi's Java SDK through JNI calls. To achieve optimal query performance, Apache Doris divides the data in a query into baseline and incremental data parts and reads them using the aforementioned methods."),(0,i.yg)("p",null,"To verify this optimization approach, we can use the EXPLAIN statement to see how many baseline and incremental data are present in a query example below. For a COW table, all 101 data shards are baseline data (",(0,i.yg)("inlineCode",{parentName:"p"},"hudiNativeReadSplits=101/101"),"), so the COW table can be entirely read directly using Doris' Parquet Reader, resulting in the best query performance. For a ROW table, most data shards are baseline data (",(0,i.yg)("inlineCode",{parentName:"p"},"hudiNativeReadSplits=100/101"),"), with one shard being incremental data, which also provides good query performance."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- COW table is read natively\ndoris> explain select * from customer_cow where c_custkey = 32;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_cow                                       |\n|      predicates: (c_custkey[#5] = 32)                          |\n|      inputSplitNum=101, totalFileSize=45338886, scanRanges=101 |\n|      partition=26/26                                           |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=101/101                              |\n\n-- MOR table: because only the base file contains `c_custkey = 32` that is updated, 100 splits are read natively, while the split with log file is read by JNI.\ndoris> explain select * from customer_mor where c_custkey = 32;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_mor                                       |\n|      predicates: (c_custkey[#5] = 32)                          |\n|      inputSplitNum=101, totalFileSize=45340731, scanRanges=101 |\n|      partition=26/26                                           |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=100/101                              |\n")),(0,i.yg)("p",null,"You can further observe the changes in Hudi baseline data and incremental data by performing some deletion operations using Spark:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- Use delete statement to see more differences\nspark-sql> delete from customer_cow where c_custkey = 64;\ndoris> explain select * from customer_cow where c_custkey = 64;\n\nspark-sql> delete from customer_mor where c_custkey = 64;\ndoris> explain select * from customer_mor where c_custkey = 64;\n")),(0,i.yg)("p",null,"Additionally, you can reduce the data volume further by using partition conditions for partition pruning to improve query speed. In the example below, partition pruning is done using the partition condition ",(0,i.yg)("inlineCode",{parentName:"p"},"c_nationkey=15"),", allowing the query request to access data from only one partition (",(0,i.yg)("inlineCode",{parentName:"p"},"partition=1/26"),")."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"-- customer_xxx is partitioned by c_nationkey, we can use the partition column to prune data\ndoris> explain select * from customer_mor where c_custkey = 64 and c_nationkey = 15;\n|   0:VHUDI_SCAN_NODE(68)                                        |\n|      table: customer_mor                                       |\n|      predicates: (c_custkey[#5] = 64), (c_nationkey[#12] = 15) |\n|      inputSplitNum=4, totalFileSize=1798186, scanRanges=4      |\n|      partition=1/26                                            |\n|      cardinality=1, numNodes=1                                 |\n|      pushdown agg=NONE                                         |\n|      hudiNativeReadSplits=3/4                                  |\n")))}p.isMDXComponent=!0},507726:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/lakehouse-architecture-for-doris-and-hudi-d456941968fdb7115f91bf70b919b62a.png"}}]);