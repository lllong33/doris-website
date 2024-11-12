"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([[436172],{15680:(e,n,t)=>{t.d(n,{xA:()=>y,yg:()=>m});var r=t(296540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},y=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),p=c(t),d=i,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},y),{},{components:t})):r.createElement(m,a({ref:n},y))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},867817:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(58168),i=(t(296540),t(15680));const o={title:"SM4_DECRYPT",language:"en"},a=void 0,s={unversionedId:"sql-manual/sql-functions/encrypt-digest-functions/sm4-decrypt",id:"version-3.0/sql-manual/sql-functions/encrypt-digest-functions/sm4-decrypt",title:"SM4_DECRYPT",description:"\x3c!--",source:"@site/versioned_docs/version-3.0/sql-manual/sql-functions/encrypt-digest-functions/sm4-decrypt.md",sourceDirName:"sql-manual/sql-functions/encrypt-digest-functions",slug:"/sql-manual/sql-functions/encrypt-digest-functions/sm4-decrypt",permalink:"/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/sm4-decrypt",draft:!1,tags:[],version:"3.0",frontMatter:{title:"SM4_DECRYPT",language:"en"},sidebar:"docs",previous:{title:"SM4_ENCRYPT",permalink:"/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/sm4-encrypt"},next:{title:"SM3",permalink:"/docs/3.0/sql-manual/sql-functions/encrypt-digest-functions/sm3"}},l={},c=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}],y={toc:c},p="wrapper";function u(e){let{components:n,...t}=e;return(0,i.yg)(p,(0,r.A)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h3",{id:"description"},"Description"),(0,i.yg)("h4",{id:"syntax"},"Syntax"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"VARCHAR SM4_DECRYPT(VARCHAR str, VARCHAR key_str[, VARCHAR init_vector][, VARCHAR encryption_mode])")),(0,i.yg)("p",null,"Returns the decrypted result, where:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"str")," is the text to be decrypted;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"key_str")," is the key. Note that this key is not a hexadecimal encoding, but a string representation of the encoded key. For example, for 128-bit key encryption, ",(0,i.yg)("inlineCode",{parentName:"li"},"key_str")," should be 16-length. If the key is not long enough, use ",(0,i.yg)("strong",{parentName:"li"},"zero padding")," to make it up. If it is longer than that, the final key is found using a cyclic xor method. For example, if the 128-bit key used by the algorithm finally is ",(0,i.yg)("inlineCode",{parentName:"li"},"key"),", then ",(0,i.yg)("inlineCode",{parentName:"li"},"key[i] = key_str[i] ^ key_str[i+128] ^ key_str[i+256] ^ ...")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"init_vector")," is the initial vector to be used in the algorithm, this is only valid for some algorithms, if not specified then Doris will use the built-in value;"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"encryption_mode")," is the encryption algorithm, optionally available in variables.")),(0,i.yg)("admonition",{type:"warning"},(0,i.yg)("p",{parentName:"admonition"},"Until 3.0.2, function with two arguments will ignore session variable ",(0,i.yg)("inlineCode",{parentName:"p"},"block_encryption_mode")," and always use ",(0,i.yg)("inlineCode",{parentName:"p"},"SM4_128_ECB")," to do decryption.  So it's not recommended to use it."),(0,i.yg)("p",{parentName:"admonition"},"Since 3.0.3, it works as expected.")),(0,i.yg)("h3",{id:"example"},"Example"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sql"},"mysql> set block_encryption_mode='';\nQuery OK, 0 rows affected (0.11 sec)\n\nmysql> select SM4_DECRYPT(FROM_BASE64('aDjwRflBrDjhBZIOFNw3Tg=='),'F3229A0B371ED2D9441B830D21A390C3');\n+--------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('aDjwRflBrDjhBZIOFNw3Tg=='), '***', '', 'SM4_128_ECB') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n1 row in set (0.19 sec)\n\nMySQL> set block_encryption_mode=\"SM4_128_CBC\";\nQuery OK, 0 rows affected (0.006 sec)\n\nmysql> select SM4_DECRYPT(FROM_BASE64('FSYstvOmH2cXy7B/072Mug=='),'F3229A0B371ED2D9441B830D21A390C3'); -- since 3.0.3\n+--------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('FSYstvOmH2cXy7B/072Mug=='), '***', '', 'SM4_128_CBC') |\n+--------------------------------------------------------------------------------+\n| text                                                                           |\n+--------------------------------------------------------------------------------+\n1 row in set (0.11 sec)\n\nMySQL > select SM4_DECRYPT(FROM_BASE64('G7yqOKfEyxdagboz6Qf01A=='),'F3229A0B371ED2D9441B830D21A390C3', '0123456789');\n+--------------------------------------------------------------------------------------------------------+\n| sm4_decrypt(from_base64('G7yqOKfEyxdagboz6Qf01A=='), 'F3229A0B371ED2D9441B830D21A390C3', '0123456789') |\n+--------------------------------------------------------------------------------------------------------+\n| text                                                                                                   |\n+--------------------------------------------------------------------------------------------------------+\n1 row in set (0.012 sec)\n")),(0,i.yg)("h3",{id:"keywords"},"Keywords"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"SM4_DECRYPT, SM4, DECRYPT\n")))}u.isMDXComponent=!0}}]);