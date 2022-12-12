"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),N=d(n),k=r,u=N["".concat(o,".").concat(k)]||N[k]||m[k]||l;return n?a.createElement(u,i(i({ref:t},s),{},{components:n})):a.createElement(u,i({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=N;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},4194:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={slug:"/moralisweb3/client-api-utils/clientrequesthandler"},i=void 0,p={unversionedId:"moralisweb3/client-api-utils/clientrequesthandler",id:"moralisweb3/client-api-utils/clientrequesthandler",title:"clientrequesthandler",description:"moralis-monorepo / @moralisweb3/client-api-utils / ClientRequestHandler",source:"@site/docs/moralisweb3/client-api-utils/clientrequesthandler.md",sourceDirName:"moralisweb3/client-api-utils",slug:"/moralisweb3/client-api-utils/clientrequesthandler",permalink:"/Moralis-JS-SDK/moralisweb3/client-api-utils/clientrequesthandler",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/client-api-utils/clientrequesthandler"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"handle",id:"handle",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Type parameters",id:"type-parameters",level:5},{value:"Parameters",id:"parameters",level:5},{value:"Returns",id:"returns",level:5},{value:"handleNullable",id:"handlenullable",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Type parameters",id:"type-parameters-1",level:5},{value:"Parameters",id:"parameters-1",level:5},{value:"Returns",id:"returns-1",level:5},{value:"handlePaginated",id:"handlepaginated",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Type parameters",id:"type-parameters-2",level:5},{value:"Parameters",id:"parameters-2",level:5},{value:"Returns",id:"returns-2",level:5}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/client-api-utils/index"},"@moralisweb3/client-api-utils")," / ClientRequestHandler"),(0,r.kt)("h1",{id:"interface-clientrequesthandler"},"Interface: ClientRequestHandler"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/client-api-utils/index"},"@moralisweb3/client-api-utils"),".ClientRequestHandler"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/client-api-utils/clientrequesthandler#handle"},"handle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/client-api-utils/clientrequesthandler#handlenullable"},"handleNullable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/client-api-utils/clientrequesthandler#handlepaginated"},"handlePaginated"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"handle"},"handle"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handle"),": <Request, JSONRequest, Response, JSONResponse",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operation"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Operation"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",">"),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 <",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operation"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",">"),(0,r.kt)("h5",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Response"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONResponse"))))),(0,r.kt)("h5",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operation")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Operation"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSONResponse"),">")))),(0,r.kt)("h5",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlenullable"},"handleNullable"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handleNullable"),": <Request, JSONRequest, Response, JSONResponse",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operation"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Operation"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",">"),(0,r.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 <",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operation"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",">"),(0,r.kt)("h5",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Response"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONResponse"))))),(0,r.kt)("h5",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operation")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Operation"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSONResponse"),">")))),(0,r.kt)("h5",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResponse"),">",">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"handlepaginated"},"handlePaginated"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"handlePaginated"),": <Request, JSONRequest, Response, JSONResult",">","(",(0,r.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operation"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"PaginatedOperation"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResult"),">",") => ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResult"),">",">"),(0,r.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,r.kt)("p",null,"\u25b8 <",(0,r.kt)("inlineCode",{parentName:"p"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResult"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"request"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"operation"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResult"),">",">"),(0,r.kt)("h5",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"PaginatedRequest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Response")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Response"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONResult")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"JSONResult"))))),(0,r.kt)("h5",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Request"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"operation")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"PaginatedOperation"),"<",(0,r.kt)("inlineCode",{parentName:"td"},"Request"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSONRequest"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"JSONResult"),">")))),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Response"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"JSONResult"),">",">"))}m.isMDXComponent=!0}}]);