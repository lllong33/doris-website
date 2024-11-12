"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[567659],{15680:(e,r,t)=>{t.d(r,{xA:()=>d,yg:()=>g});var n=t(296540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return t?n.createElement(g,l(l({ref:r},d),{},{components:t})):n.createElement(g,l({ref:r},d))}));function g(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},465622:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=t(58168),a=(t(296540),t(15680));const o={title:"Accessing Doris Cluster",language:"en"},l=void 0,s={unversionedId:"install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-access-cluster",id:"install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-access-cluster",title:"Accessing Doris Cluster",description:"\x3c!--",source:"@site/docs/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-access-cluster.md",sourceDirName:"install/cluster-deployment/k8s-deploy/compute-storage-coupled",slug:"/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-access-cluster",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-access-cluster",draft:!1,tags:[],version:"current",frontMatter:{title:"Accessing Doris Cluster",language:"en"},sidebar:"docs",previous:{title:"Deploying Doris Cluster",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/install-doris-cluster"},next:{title:"Upgrading Apache Doris cluster deployed by Doris Operator",permalink:"/docs/dev/install/cluster-deployment/k8s-deploy/compute-storage-coupled/doris-cluster-upgrade"}},i={},c=[{value:"Access using ClusterIP mode",id:"access-using-clusterip-mode",level:2},{value:"Access using NodePort mode",id:"access-using-nodeport-mode",level:2},{value:"Stream Load ErrorURL Redirect",id:"stream-load-errorurl-redirect",level:2},{value:"View ErrorURL inside the container",id:"view-errorurl-inside-the-container",level:3},{value:"View ErrorURL outside the container",id:"view-errorurl-outside-the-container",level:3}],d={toc:c},p="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(p,(0,n.A)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"access-using-clusterip-mode"},"Access using ClusterIP mode"),(0,a.yg)("p",null,"Doris provides ClusterIP access mode by default on Kubernetes. The ClusterIP access mode provides an internal IP address within a Kubernetes cluster through which services are exposed. With ClusterIP mode, access is only possible within the cluster."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Configure and use ClusterIP as the Service type")),(0,a.yg)("p",null,"Doris provides ClusterIP access mode by default on Kubernetes. No modification is required to use ClusterIP access mode."),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Get Service")),(0,a.yg)("p",null,"After deploying the cluster, you can view the services exposed by Doris Operator through the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl -n doris get svc\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              TYPE        CLUSTER-IP    EXTERNAL-IP   PORT(S)                               AGE\ndoriscluster-sample-be-internal   ClusterIP   None          <none>        9050/TCP                              9m\ndoriscluster-sample-be-service    ClusterIP   10.1.68.128   <none>        9060/TCP,8040/TCP,9050/TCP,8060/TCP   9m\ndoriscluster-sample-fe-internal   ClusterIP   None          <none>        9030/TCP                              14m\ndoriscluster-sample-fe-service    ClusterIP   10.1.118.16   <none>        8030/TCP,9020/TCP,9030/TCP,9010/TCP   14m\n")),(0,a.yg)("p",null,"In the above results, FE and BE have two types of Services, with the suffixes internal and service respectively:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Service services with the suffix internal can only be used for Doris internal communication, such as heartbeat, data exchange and other operations, and are not used externally."),(0,a.yg)("li",{parentName:"ul"},"Service services with the service suffix can be provided to users")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Access Doris inside the container")),(0,a.yg)("p",null,"Use the following command to create a pod containing the mysql client in the current Kubernetes cluster:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl run mysql-client --image=mysql:5.7 -it --rm --restart=Never --namespace=doris -- /bin/bash\n")),(0,a.yg)("p",null,"In the container in the cluster, you can use the externally exposed service name with the suffix ",(0,a.yg)("inlineCode",{parentName:"p"},"service")," to access the Doris cluster:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"## Use service type pod name to access the Doris cluster\nmysql -uroot -P9030 -hdoriscluster-sample-fe-service\n")),(0,a.yg)("h2",{id:"access-using-nodeport-mode"},"Access using NodePort mode"),(0,a.yg)("p",null,"If users need to access Doris outside the Kubernetes cluster, they can choose to use NodePort mode."),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Plan NodePort mode port mapping")),(0,a.yg)("p",null,"To use and maintain Doris cluster, users need to access the following ports:"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"port name"),(0,a.yg)("th",{parentName:"tr",align:null},"default port"),(0,a.yg)("th",{parentName:"tr",align:null},"port description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Query Port"),(0,a.yg)("td",{parentName:"tr",align:null},"9030"),(0,a.yg)("td",{parentName:"tr",align:null},"Used to access Doris cluster through MySQL protocol")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"HTTP Port"),(0,a.yg)("td",{parentName:"tr",align:null},"8030"),(0,a.yg)("td",{parentName:"tr",align:null},"http server port on FE, used to view FE information")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Web Server Port"),(0,a.yg)("td",{parentName:"tr",align:null},"8040"),(0,a.yg)("td",{parentName:"tr",align:null},"http server port on BE, used to view BE information")))),(0,a.yg)("p",null,"There are two ways of port allocation using NodePort:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Dynamic allocation: If port mapping is not explicitly set, Kubernetes will automatically allocate an unused port when creating a pod (the default range is 30000-32767);"),(0,a.yg)("li",{parentName:"ul"},"Static allocation: If port mapping is explicitly specified, Kubernetes will fixedly allocate the port when the port is not in use without conflict.")),(0,a.yg)("p",null,"Kubernetes uses dynamic port allocation by default. If you need to plan the port in advance, you need to specify it explicitly in Custom Resource. In the following example, the Doris port is mapped:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n  feSpec:\n    replicas: 3\n    service:\n      type: NodePort\n      servicePorts:\n        - nodePort: 31001\n          targetPort: 8030\n        - nodePort: 31002\n          targetPort: 8040\n        - nodePort: 31003\n          targetPort: 9030\n...\n  beSpec:\n    replicas: 3\n    service:\n      type: NodePort\n      servicePorts:\n        - nodePort: 31005\n          targetPort: 9060\n        - nodePort: 31006\n          targetPort: 8040\n        - nodePort: 31007\n          targetPort: 9050\n        - nodePort: 31008\n          targetPort: 8060\n...\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Configure using NodePort as Service type")),(0,a.yg)("p",null,"Custom DorisCluster resource to use NodePort mode with BE, the specific changes are as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"...\nspec:\n   feSpec:\n     replicas: 3\n     service:\n       type: NodePort\n...\n    beSpec:\n     replicas: 3\n     service:\n       type: NodePort\n...\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Get Service")),(0,a.yg)("p",null,"After deploying the cluster, you can view the services exposed by Doris Operator through the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get service\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME TYPE CLUSTER-IP EXTERNAL-IP PORT(S) AGE\nkubernetes ClusterIP 10.152.183.1 <none> 443/TCP 169d\ndoriscluster-sample-fe-internal ClusterIP None <none> 9030/TCP 2d\ndoriscluster-sample-fe-service NodePort 10.152.183.58 <none> 8030:31041/TCP,9020:30783/TCP,9030:31545/TCP,9010:31610/TCP 2d\ndoriscluster-sample-be-internal ClusterIP None <none> 9050/TCP 2d\ndoriscluster-sample-be-service NodePort 10.152.183.244 <none> 9060:30940/TCP,8040:32713/TCP,9050:30621/TCP,8060:30926/TCP 2d\n")),(0,a.yg)("p",null,"Doris's Query Port defaults to 9030, which is mapped to local port 31545 locally. When accessing the Doris cluster, you need to obtain the corresponding IP address, which can be viewed with the following command:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get nodes -owide\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME   STATUS   ROLES           AGE   VERSION   INTERNAL-IP     EXTERNAL-IP   OS-IMAGE          KERNEL-VERSION          CONTAINER-RUNTIME\nr60    Ready    control-plane   14d   v1.28.2   192.168.88.60   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr61    Ready    <none>          14d   v1.28.2   192.168.88.61   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr62    Ready    <none>          14d   v1.28.2   192.168.88.62   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\nr63    Ready    <none>          14d   v1.28.2   192.168.88.63   <none>        CentOS Stream 8   4.18.0-294.el8.x86_64   containerd://1.6.22\n")),(0,a.yg)("p",null,"In NodePort mode, you can access services in the Kubernetes cluster based on the host IP and port mapping of any node. In this example, you can use any node IP, 192.168.88.61, 192.168.88.62, 192.168.88.63, to access the Doris service. For example, in the following example, the node node 192.168.88.62 and the mapped query port port 31545 are used to access the cluster:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"mysql -h 192.168.88.62 -P 31545 -uroot\n")),(0,a.yg)("h2",{id:"stream-load-errorurl-redirect"},"Stream Load ErrorURL Redirect"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"../../../data-operate/import/import-way/stream-load-manual.md"},"Stream Load")," is a synchronous import mode provided by Doris. It is an efficient way to import local files into Doris. In the case of physical or virtual machine deployment, directly use http to initiate an import data request to FE, and FE will redirect the request to the BE service through the 301 mechanism to execute the write request. On Kubernetes, FE and BE use ",(0,a.yg)("a",{parentName:"p",href:"https://kubernetes.io/zh-cn/docs/concepts/services-networking/service/"},"Service")," as the method of service discovery. In situations where a proxy is used to mask the internal real address to provide service discovery, the address of the BE (the real address used for internal communication within the service) returned using FE 301 cannot be accessed. On Kubernetes, you need to use BE's Service address to import data."),(0,a.yg)("p",null,"As in the following example, Stream Load ErrorUrl returns the result ",(0,a.yg)("inlineCode",{parentName:"p"},"http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e")),(0,a.yg)("h3",{id:"view-errorurl-inside-the-container"},"View ErrorURL inside the container"),(0,a.yg)("p",null,"If you perform Stream Load inside Kubernetes, you can directly use the error address returned by Stream Load to obtain a detailed error report."),(0,a.yg)("p",null,"In the return result of the above example, you can directly obtain the return result through the curl command in the Pod in the same Kubernetes cluster:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"curl http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")),(0,a.yg)("h3",{id:"view-errorurl-outside-the-container"},"View ErrorURL outside the container"),(0,a.yg)("p",null,"An error occurs when importing data using Stream Load from outside Kubernetes. The returned error address cannot be directly accessed outside Kubernetes to obtain a detailed error report. In the Kubernetes environment, you need to use a customized Service proxy to detect the pod where an error occurred. Configure the customized Service in an externally accessible mode and obtain a detailed error report by accessing the proxy Service."),(0,a.yg)("p",null,"The customized Service template is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Service\nmetadata:\n  labels:\n    app.doris.service/role: debug\n    app.kubernetes.io/component: be\n  name: doriscluster-detail-error\nspec:\n  externalTrafficPolicy: Cluster\n  internalTrafficPolicy: Cluster\n  ipFamilies:\n    - IPv4\n  ipFamilyPolicy: SingleStack\n  ports:\n    - name: webserver-port\n      port: 8040\n      protocol: TCP\n      targetPort: 8040\n  selector:\n    app.kubernetes.io/component: be\n    statefulset.kubernetes.io/pod-name: ${podName}\n  sessionAffinity: None\n  type: ${ServiceType}\n")),(0,a.yg)("p",null,"in:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"${podName} represents the third-level domain name of the pod where the error currently occurs. For example, in the above example, the pod name needs to be filled in doriscluster-sample-be-2"),(0,a.yg)("li",{parentName:"ul"},"${ServiceType} is the deployed Service type, you can choose NodePort or LoadBalancer")),(0,a.yg)("admonition",{title:"Tip",type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"Since the pod name returned by each stream load may be different, please delete the customized Service after obtaining the detailed error information of the stream load.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"NodePort Mode")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Deploy NodePort Service")),(0,a.yg)("p",null,"Follow the service in the above example, replace ${podName} in CR with doriscluster-sample-be-2, and replace ${ServiceType} with NodePort. Use the kubectl apply command to create the service service in the same namespace of the doris cluster."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl -n {namespace} apply -f strem_load_get_error.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Build access commands")),(0,a.yg)("p",null,"Use the following command to view the NodePort assigned by the above deployment Service:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get service -n doris doriscluster-detail-error\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                              TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)            AGE\ndoriscluster-detail-error         NodePort    10.152.183.35    <none>        8040:31201/TCP     32s\n")),(0,a.yg)("p",null,"The BE port accessed by ",(0,a.yg)("inlineCode",{parentName:"p"},"Stream Load")," is 8040, and the host port (NodePort) corresponding to 8040 in the above Service is 31201."),(0,a.yg)("p",null,"Get the host address controlled by K8s:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get node -owide\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME             STATUS   ROLES    AGE    VERSION   INTERNAL-IP   EXTERNAL-IP   OS-IMAGE                       KERNEL-VERSION       CONTAINER-RUNTIME\nvm-10-8-centos   Ready    <none>   226d   v1.28.7   10.16.10.8    <none>        TencentOS Server 3.1 (Final)   5.4.119-19-0009.3    containerd://1.6.28\nvm-10-7-centos   Ready    <none>   19d    v1.28.7   10.16.10.7    <none>        TencentOS Server 3.1 (Final)   5.4.119-19.0009.25   containerd://1.6.28\n")),(0,a.yg)("p",null,"Use any of the above hosts ",(0,a.yg)("inlineCode",{parentName:"p"},"INTERNAL-IP")," and get the host port to build an access address using NodePort mode to get error details. In ",(0,a.yg)("inlineCode",{parentName:"p"},"NodePort")," mode, the address for obtaining error details is spliced into ",(0,a.yg)("inlineCode",{parentName:"p"},"Host IP:NodePort"),", then the accessible address of the case is ",(0,a.yg)("inlineCode",{parentName:"p"},"10.16.10.8:31201"),". Replace the access address in the returned error address information to obtain the accessible error information. Available addresses for details:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"http://10.16.10.8:31201/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")),(0,a.yg)("p",null,"Use the above command to obtain detailed error information of Stream Load."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"LoadBalancer Mode")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Deploy and obtain error details Service")),(0,a.yg)("p",null,"Assume that the error address of the Stream Load range is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"http://doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")),(0,a.yg)("p",null,"The domain name address of the above address is ",(0,a.yg)("inlineCode",{parentName:"p"},"doriscluster-sample-be-2.doriscluster-sample-be-internal.doris.svc.cluster.local"),". Among the domain names used by pods deployed by ",(0,a.yg)("inlineCode",{parentName:"p"},"Doris Operator")," on ",(0,a.yg)("inlineCode",{parentName:"p"},"Kubernetes"),", the third level The domain name is the name of the pod. Replace {podName} in the above template with the real ",(0,a.yg)("inlineCode",{parentName:"p"},"pod")," name, replace {serviceType} with ",(0,a.yg)("inlineCode",{parentName:"p"},"LoadBalancer"),", and save the changes to the newly created ",(0,a.yg)("inlineCode",{parentName:"p"},"stream_load_get_error.yaml")," file. Use the following command to deploy service:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl -n {namespace} apply -f strem_load_get_error.yaml\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Build access commands")),(0,a.yg)("p",null,"Use the following command to view the LoadBalaner address EXTERNAL-IP assigned by the above deployment Service. The following is a test instance in aws eks:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"kubectl get service -n doris doriscluster-detail-error\n")),(0,a.yg)("p",null,"The return result is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"NAME                         TYPE          CLUSTER-IP       EXTERNAL-IP                                                              PORT(S)           AGE\ndoriscluster-detail-error    LoadBalancer  172.20.183.136   ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com  8040:32003/TCP    14s\n")),(0,a.yg)("p",null,"The above Service obtains the LoadBalancer address assigned by the K8s cluster as ",(0,a.yg)("inlineCode",{parentName:"p"},"ac4828493dgrftb884g67wg4tb68gyut``-1137856348.us-east-1.elb.amazonaws.com"),". In LoadBalancer mode, the port is still the listening port for deployment deployment. In ",(0,a.yg)("inlineCode",{parentName:"p"},"LoadBalancer"),' mode , the address to obtain error details is spliced into "EXTERNAL-IP:listener-port". In the above example, the address to obtain error details is ',(0,a.yg)("inlineCode",{parentName:"p"},"ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com:8040"),". The address to obtain detailed error information is as follows:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"http://ac4828493dgrftb884g67wg4tb68gyut-1137856348.us-east-1.elb.amazonaws.com:8040/api/_load_error_log?file=__shard_1/error_log_insert_stmt_af474190276a2e9c-49bb9d175b8e968e_af474190276a2e9c_49bb9d175b8e968e\n")))}u.isMDXComponent=!0}}]);