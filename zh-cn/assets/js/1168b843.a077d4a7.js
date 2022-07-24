"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7516],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),o=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var o=2;o<s;o++)i[o]=r[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6340:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>o});var n=r(7462),a=(r(7294),r(4137));const s={id:"sample-quarkus",title:"Quarkus\u9879\u76ee\u96c6\u6210",sidebar_label:"Quarkus\u9879\u76ee\u96c6\u6210"},i=void 0,u={unversionedId:"integrate/sample-quarkus",id:"integrate/sample-quarkus",title:"Quarkus\u9879\u76ee\u96c6\u6210",description:"quarkus-sureness\u4f8b\u5b50\u9879\u76ee\u4ed3\u5e93\u5730\u5740",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/integrate/sample-quarkus.md",sourceDirName:"integrate",slug:"/integrate/sample-quarkus",permalink:"/sureness/zh-cn/docs/integrate/sample-quarkus",draft:!1,editUrl:"https://github.com/dromara/sureness/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/integrate/sample-quarkus.md",tags:[],version:"current",frontMatter:{id:"sample-quarkus",title:"Quarkus\u9879\u76ee\u96c6\u6210",sidebar_label:"Quarkus\u9879\u76ee\u96c6\u6210"},sidebar:"docs",previous:{title:"Springboot\u9879\u76ee\u96c6\u6210-\u6570\u636e\u5e93\u65b9\u6848",permalink:"/sureness/zh-cn/docs/integrate/sample-tom"},next:{title:"Javalin\u9879\u76ee\u96c6\u6210",permalink:"/sureness/zh-cn/docs/integrate/sample-javalin"}},l={},o=[],p={toc:o};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/tomsun28/sureness/tree/master/samples/quarkus-sureness"},"quarkus-sureness\u4f8b\u5b50\u9879\u76ee\u4ed3\u5e93\u5730\u5740")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"li"},"quarkus, jax-rs")),(0,a.kt)("li",{parentName:"ul"},"\u4ece\u9ed8\u8ba4\u7684\u914d\u7f6e\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"li"},"sureness.yml"),"\u52a0\u8f7d\u8d26\u6237\u4fe1\u606f,\u8d44\u6e90\u89d2\u8272,\u8fc7\u6ee4\u8d44\u6e90\u7b49\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u9ed8\u8ba4\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"sureness-config")),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u9ed8\u8ba4\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"JWT, Basic Auth, Digest Auth"),"\u65b9\u5f0f\u8ba4\u8bc1\u9274\u6743"),(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5b50\u4e2d\u5305\u542b",(0,a.kt)("inlineCode",{parentName:"li"},"REST API")),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u62a4\u5165\u53e3: ",(0,a.kt)("inlineCode",{parentName:"li"},"SurenessFilterExample")),(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"postman"),"\u6d4b\u8bd5")))}c.isMDXComponent=!0}}]);