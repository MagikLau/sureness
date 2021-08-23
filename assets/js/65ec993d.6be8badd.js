(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4882],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=i(r),m=o,h=l["".concat(u,".").concat(m)]||l[m]||d[m]||s;return r?n.createElement(h,a(a({ref:t},p),{},{components:r})):n.createElement(h,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=l;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var i=2;i<s;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8086:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),s=(r(7294),r(3905)),a={id:"custom-processor",title:"Custom Processor",sidebar_label:"Custom Processor"},c={unversionedId:"advanced/custom-processor",id:"advanced/custom-processor",isDocsHomePage:!1,title:"Custom Processor",description:"A subject also can support by different processors, so we can custom processor to support custom subject.",source:"@site/docs/advanced/custom-processor.md",sourceDirName:"advanced",slug:"/advanced/custom-processor",permalink:"https://cdn.jsdelivr.net/gh/usthe/sureness@gh-pages/docs/advanced/custom-processor",editUrl:"https://github.com/dromara/sureness/edit/master/home/docs/advanced/custom-processor.md",version:"current",sidebar_label:"Custom Processor",frontMatter:{id:"custom-processor",title:"Custom Processor",sidebar_label:"Custom Processor"},sidebar:"docs",previous:{title:"Custom Subject Creator",permalink:"https://cdn.jsdelivr.net/gh/usthe/sureness@gh-pages/docs/advanced/custom-subject-creator"},next:{title:"Custom Datasource",permalink:"https://cdn.jsdelivr.net/gh/usthe/sureness@gh-pages/docs/advanced/custom-datasource"}},u=[],i={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A subject also can support by different processors, so we can custom processor to support custom subject.  "),(0,s.kt)("p",null,"The processor is the authentication and authentication processor for the requested user account information subject. We need to implement the BaseProcessor interface to implement our custom authentication and authentication method.",(0,s.kt)("br",{parentName:"p"}),"\n","Sureness has built-in PasswordProcessor that processes PasswordSubject based on account password authentication, and JwtProcessor that processes JwtSubject based on jwt authentication.  "),(0,s.kt)("p",null,"Before customization, it is recommended to understand the sureness's process and the extended interface provided, see ",(0,s.kt)("a",{parentName:"p",href:"/docs/advanced/extend-point"},"Advanced Extension")," for details."),(0,s.kt)("p",null,"-",(0,s.kt)("inlineCode",{parentName:"p"},"Processor"),": ",(0,s.kt)("inlineCode",{parentName:"p"},"Subject")," processing interface, according to Subject information, perform authentication  "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"public abstract class BaseProcessor implements Processor{\n\n    public abstract boolean canSupportSubjectClass(Class<?> var);\n\n    public abstract Subject authenticated (Subject var) throws SurenessAuthenticationException;\n\n    public abstract void authorized(Subject var) throws SurenessAuthorizationException;\n}\n\n")),(0,s.kt)("p",null,"The above are some important interface methods of BaseProcessor. The custom processor requires us to implement these methods.  "),(0,s.kt)("p",null,"-",(0,s.kt)("inlineCode",{parentName:"p"},"canSupportSubjectClass")," judges whether to support this subject class type of input, for example, JwtProcessor only supports JwtSubject, PasswordProcessor only supports PasswordSubject.",(0,s.kt)("br",{parentName:"p"}),"\n","-",(0,s.kt)("inlineCode",{parentName:"p"},"authenticated")," authenticates the subject, and performs the account authentication of the requesting user based on the incoming subject information and system information.",(0,s.kt)("br",{parentName:"p"}),"\n","-",(0,s.kt)("inlineCode",{parentName:"p"},"authorized")," authenticates the subject, and the authentication determines whether the user has the access right to access the api.  "),(0,s.kt)("p",null,"Sureness uses an exception process model. The above authentication failures or authentication failures will throw different types of exceptions. The user captures and judges at the outermost point to implement the next process.  "),(0,s.kt)("p",null,"Detail please refer to  ",(0,s.kt)("a",{parentName:"p",href:"/docs/integrate/sample-tom"},"Sureness integration springboot sample(database scheme)")))}p.isMDXComponent=!0}}]);