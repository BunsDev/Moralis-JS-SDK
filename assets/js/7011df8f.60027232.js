"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[79118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=i(r),u=a,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return r?n.createElement(k,s(s({ref:t},m),{},{components:r})):n.createElement(k,s({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76059:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={slug:"/moralisweb3/common-core/responseadapter",title:"Class: ResponseAdapter<Response, JSONResponse>",sidebar_label:"ResponseAdapter<Response, JSONResponse>"},s=void 0,l={unversionedId:"api/moralisweb3/common-core/responseadapter",id:"api/moralisweb3/common-core/responseadapter",title:"Class: ResponseAdapter<Response, JSONResponse>",description:"moralis-monorepo / @moralisweb3/common-core / ResponseAdapter",source:"@site/docs/api/moralisweb3/common-core/responseadapter.md",sourceDirName:"api/moralisweb3/common-core",slug:"/moralisweb3/common-core/responseadapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/responseadapter",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-core/responseadapter",title:"Class: ResponseAdapter<Response, JSONResponse>",sidebar_label:"ResponseAdapter<Response, JSONResponse>"},sidebar:"sidebar",previous:{title:"RequestOptions",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/requestoptions"},next:{title:"SolApiConfigValues",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/solapiconfigvalues"}},p={},i=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"raw",id:"raw",level:3},{value:"Returns",id:"returns",level:4},{value:"result",id:"result",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Methods",id:"methods-1",level:2},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-2",level:4}],m={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/index"},"@moralisweb3/common-core")," / ResponseAdapter"),(0,a.kt)("h1",{id:"class-responseadapterresponse-jsonresponse"},"Class: ResponseAdapter<Response, JSONResponse",">"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/index"},"@moralisweb3/common-core"),".ResponseAdapter"),(0,a.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Response"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"JSONResponse"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/responseadapter#constructor"},"constructor"))),(0,a.kt)("h3",{id:"accessors"},"Accessors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/responseadapter#raw"},"raw")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/responseadapter#result"},"result"))),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/responseadapter#tojson"},"toJSON"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new ResponseAdapter"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">","(",(0,a.kt)("inlineCode",{parentName:"p"},"jsonResponse"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"getResponse"),")"),(0,a.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"Response"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"JSONResponse"))))),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"jsonResponse")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"JSONResponse"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"getResponse")),(0,a.kt)("td",{parentName:"tr",align:"left"},"() => ",(0,a.kt)("inlineCode",{parentName:"td"},"Response"))))),(0,a.kt)("h2",{id:"accessors-1"},"Accessors"),(0,a.kt)("h3",{id:"raw"},"raw"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"raw"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONResponse")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JSONResponse")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"result"},"result"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"get")," ",(0,a.kt)("strong",{parentName:"p"},"result"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Response")),(0,a.kt)("h2",{id:"methods-1"},"Methods"),(0,a.kt)("h3",{id:"tojson"},"toJSON"),(0,a.kt)("p",null,"\u25b8 ",(0,a.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,a.kt)("inlineCode",{parentName:"p"},"JSONResponse")),(0,a.kt)("h4",{id:"returns-2"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"JSONResponse")))}c.isMDXComponent=!0}}]);