"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5999],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>N});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),N=n,u=k["".concat(s,".").concat(N)]||k[N]||o[N]||l;return a?r.createElement(u,i(i({ref:t},m),{},{components:a})):r.createElement(u,i({ref:t},m))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},4337:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const l={slug:"/moralisweb3/streams/streams"},i=void 0,p={unversionedId:"moralisweb3/streams/streams",id:"moralisweb3/streams/streams",title:"streams",description:"moralis-monorepo / @moralisweb3/streams / Streams",source:"@site/docs/moralisweb3/streams/streams.md",sourceDirName:"moralisweb3/streams",slug:"/moralisweb3/streams/streams",permalink:"/Moralis-JS-SDK/moralisweb3/streams/streams",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/streams/streams"}},s={},d=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"getStats",id:"getstats",level:3},{value:"Returns",id:"returns-1",level:4},{value:"parsedLogs",id:"parsedlogs",level:3},{value:"Type parameters",id:"type-parameters",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"readSettings",id:"readsettings",level:3},{value:"Returns",id:"returns-3",level:4},{value:"setup",id:"setup",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Overrides",id:"overrides",level:4},{value:"start",id:"start",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Overrides",id:"overrides-1",level:4},{value:"verifySignature",id:"verifysignature",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Properties",id:"properties-1",level:2},{value:"moduleName",id:"modulename",level:3},{value:"add",id:"add",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Parameters",id:"parameters-3",level:5},{value:"Returns",id:"returns-7",level:5},{value:"addAddress",id:"addaddress",level:3},{value:"Type declaration",id:"type-declaration-1",level:4},{value:"Parameters",id:"parameters-4",level:5},{value:"Returns",id:"returns-8",level:5},{value:"delete",id:"delete",level:3},{value:"Type declaration",id:"type-declaration-2",level:4},{value:"Parameters",id:"parameters-5",level:5},{value:"Returns",id:"returns-9",level:5},{value:"deleteAddress",id:"deleteaddress",level:3},{value:"Type declaration",id:"type-declaration-3",level:4},{value:"Parameters",id:"parameters-6",level:5},{value:"Returns",id:"returns-10",level:5},{value:"getAddresses",id:"getaddresses",level:3},{value:"Type declaration",id:"type-declaration-4",level:4},{value:"Parameters",id:"parameters-7",level:5},{value:"Returns",id:"returns-11",level:5},{value:"getAll",id:"getall",level:3},{value:"Type declaration",id:"type-declaration-5",level:4},{value:"Parameters",id:"parameters-8",level:5},{value:"Returns",id:"returns-12",level:5},{value:"getById",id:"getbyid",level:3},{value:"Type declaration",id:"type-declaration-6",level:4},{value:"Parameters",id:"parameters-9",level:5},{value:"Returns",id:"returns-13",level:5},{value:"getHistory",id:"gethistory",level:3},{value:"Type declaration",id:"type-declaration-7",level:4},{value:"Parameters",id:"parameters-10",level:5},{value:"Returns",id:"returns-14",level:5},{value:"getStatsById",id:"getstatsbyid",level:3},{value:"Type declaration",id:"type-declaration-8",level:4},{value:"Parameters",id:"parameters-11",level:5},{value:"Returns",id:"returns-15",level:5},{value:"retry",id:"retry",level:3},{value:"Type declaration",id:"type-declaration-9",level:4},{value:"Parameters",id:"parameters-12",level:5},{value:"Returns",id:"returns-16",level:5},{value:"setSettings",id:"setsettings",level:3},{value:"Type declaration",id:"type-declaration-10",level:4},{value:"Parameters",id:"parameters-13",level:5},{value:"Returns",id:"returns-17",level:5},{value:"update",id:"update",level:3},{value:"Type declaration",id:"type-declaration-11",level:4},{value:"Parameters",id:"parameters-14",level:5},{value:"Returns",id:"returns-18",level:5},{value:"updateStatus",id:"updatestatus",level:3},{value:"Type declaration",id:"type-declaration-12",level:4},{value:"Parameters",id:"parameters-15",level:5},{value:"Returns",id:"returns-19",level:5}],m={toc:d};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/index"},"@moralisweb3/streams")," / Streams"),(0,n.kt)("h1",{id:"class-streams"},"Class: Streams"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/index"},"@moralisweb3/streams"),".Streams"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"ApiModule")),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Streams"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#create"},"create")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#getstats"},"getStats")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#parsedlogs"},"parsedLogs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#readsettings"},"readSettings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#setup"},"setup")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#start"},"start")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#verifysignature"},"verifySignature"))),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#modulename"},"moduleName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#add"},"add")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#addaddress"},"addAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#delete"},"delete")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#deleteaddress"},"deleteAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#getaddresses"},"getAddresses")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#getall"},"getAll")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#getbyid"},"getById")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#gethistory"},"getHistory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#getstatsbyid"},"getStatsById")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#retry"},"retry")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#setsettings"},"setSettings")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#update"},"update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/streams/streams#updatestatus"},"updateStatus"))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"create"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"core?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/streams"},(0,n.kt)("inlineCode",{parentName:"a"},"Streams"))),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"core?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Core"))))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/streams"},(0,n.kt)("inlineCode",{parentName:"a"},"Streams"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getstats"},"getStats"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"getStats"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"parsedlogs"},"parsedLogs"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"parsedLogs"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"Event"),">","(",(0,n.kt)("inlineCode",{parentName:"p"},"webhookData"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Event"),"[]"),(0,n.kt)("h4",{id:"type-parameters"},"Type parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Event"))))),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"webhookData")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"IWebhook"))))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Event"),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"readsettings"},"readSettings"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"readSettings"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setup"},"setup"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setup"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides"},"Overrides"),(0,n.kt)("p",null,"ApiModule.setup"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"start"},"start"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"start"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("h4",{id:"overrides-1"},"Overrides"),(0,n.kt)("p",null,"ApiModule.start"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"verifysignature"},"verifySignature"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"verifySignature"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"options"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"options")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/verifysignatureoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"VerifySignatureOptions")))))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"modulename"},"moduleName"),(0,n.kt)("p",null,"\u25aa ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"moduleName"),": ",(0,n.kt)("inlineCode",{parentName:"p"},'"streams"')),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"add"},"add"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"add"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/createstreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"CreateStreamEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h5",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/createstreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"CreateStreamEvmOptions")))))),(0,n.kt)("h5",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"addaddress"},"addAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"addAddress"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/addaddressevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"AddAddressEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"AddAddressEvmResponseAdapter"),">"),(0,n.kt)("h4",{id:"type-declaration-1"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"AddAddressEvmResponseAdapter"),">"),(0,n.kt)("h5",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/addaddressevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"AddAddressEvmOptions")))))),(0,n.kt)("h5",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"AddAddressEvmResponseAdapter"),">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"delete"},"delete"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"delete"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/deletestreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"DeleteStreamEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-2"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h5",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/deletestreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"DeleteStreamEvmOptions")))))),(0,n.kt)("h5",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"deleteaddress"},"deleteAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"deleteAddress"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/deleteaddressevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"DeleteAddressEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"DeleteAddressEvmResponseAdapter"),">"),(0,n.kt)("h4",{id:"type-declaration-3"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"DeleteAddressEvmResponseAdapter"),">"),(0,n.kt)("h5",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/deleteaddressevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"DeleteAddressEvmOptions")))))),(0,n.kt)("h5",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"DeleteAddressEvmResponseAdapter"),">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getaddresses"},"getAddresses"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"getAddresses"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/getaddressesevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"GetAddressesEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"GetAddressesEvmResponseAdapter"),">"),(0,n.kt)("h4",{id:"type-declaration-4"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"GetAddressesEvmResponseAdapter"),">"),(0,n.kt)("h5",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/getaddressesevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"GetAddressesEvmOptions")))))),(0,n.kt)("h5",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"GetAddressesEvmResponseAdapter"),">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getall"},"getAll"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"getAll"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/getstreamsevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"GetStreamsEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),"[], {}[]",">",">"),(0,n.kt)("h4",{id:"type-declaration-5"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),"[], {}[]",">",">"),(0,n.kt)("h5",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/getstreamsevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"GetStreamsEvmOptions")))))),(0,n.kt)("h5",{id:"returns-12"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),"[], {}[]",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getbyid"},"getById"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"getById"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/getstreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"GetStreamEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-6"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h5",{id:"parameters-9"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/getstreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"GetStreamEvmOptions")))))),(0,n.kt)("h5",{id:"returns-13"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gethistory"},"getHistory"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"getHistory"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"GetHistoryRequest"),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<{}[], {}[]",">",">"),(0,n.kt)("h4",{id:"type-declaration-7"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<{}[], {}[]",">",">"),(0,n.kt)("h5",{id:"parameters-10"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"request")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"GetHistoryRequest"))))),(0,n.kt)("h5",{id:"returns-14"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"PaginatedResponseAdapter"),"<{}[], {}[]",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getstatsbyid"},"getStatsById"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"getStatsById"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"GetStatsByIdRequest"),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-8"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h5",{id:"parameters-11"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"request")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"GetStatsByIdRequest"))))),(0,n.kt)("h5",{id:"returns-15"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"retry"},"retry"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"retry"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"ReplayHistoryRequest"),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-9"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h5",{id:"parameters-12"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"request")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"ReplayHistoryRequest"))))),(0,n.kt)("h5",{id:"returns-16"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setsettings"},"setSettings"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"setSettings"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"SetSettingsRequest"),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-10"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"request"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h5",{id:"parameters-13"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"request")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"SetSettingsRequest"))))),(0,n.kt)("h5",{id:"returns-17"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"update"},"update"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"update"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/updatestreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateStreamEvmOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-11"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("h5",{id:"parameters-14"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/updatestreamevmoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateStreamEvmOptions")))))),(0,n.kt)("h5",{id:"returns-18"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"EvmStream"),", {}",">",">"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"updatestatus"},"updateStatus"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,n.kt)("strong",{parentName:"p"},"updateStatus"),": (",(0,n.kt)("inlineCode",{parentName:"p"},"__namedParameters"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/streams/updatestreamevmstatusoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateStreamEvmStatusOptions")),") => ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h4",{id:"type-declaration-12"},"Type declaration"),(0,n.kt)("p",null,"\u25b8 (",(0,n.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"),(0,n.kt)("h5",{id:"parameters-15"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/streams/updatestreamevmstatusoptions"},(0,n.kt)("inlineCode",{parentName:"a"},"UpdateStreamEvmStatusOptions")))))),(0,n.kt)("h5",{id:"returns-19"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,n.kt)("inlineCode",{parentName:"p"},"ResponseAdapter"),"<{}, {}",">",">"))}o.isMDXComponent=!0}}]);