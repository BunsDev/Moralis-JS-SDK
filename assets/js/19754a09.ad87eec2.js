"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[3530],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(c,o(o({ref:t},d),{},{components:a})):n.createElement(c,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1880:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={slug:"/moralisweb3/common-core/module"},o=void 0,i={unversionedId:"moralisweb3/common-core/module",id:"moralisweb3/common-core/module",title:"module",description:"moralis-monorepo / @moralisweb3/common-core / Module",source:"@site/docs/moralisweb3/common-core/module.md",sourceDirName:"moralisweb3/common-core",slug:"/moralisweb3/common-core/module",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/module",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-core/module"},sidebar:"sidebar",previous:{title:"loggercontroller",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/loggercontroller"},next:{title:"modules",permalink:"/Moralis-JS-SDK/moralisweb3/common-core/modules"}},p={},m=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods-1",level:2},{value:"cleanUp",id:"cleanup",level:3},{value:"Returns",id:"returns",level:4},{value:"listen",id:"listen",level:3},{value:"Type parameters",id:"type-parameters-1",level:4},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Returns",id:"returns-2",level:5},{value:"setup",id:"setup",level:3},{value:"Returns",id:"returns-3",level:4},{value:"start",id:"start",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Type parameters",id:"type-parameters-2",level:4},{value:"Parameters",id:"parameters-1",level:4},{value:"Properties",id:"properties-1",level:2},{value:"name",id:"name",level:3},{value:"type",id:"type",level:3},{value:"core",id:"core",level:3},{value:"emitter",id:"emitter",level:3},{value:"logger",id:"logger",level:3}],d={toc:m};function s(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/index"},"@moralisweb3/common-core")," / Module"),(0,r.kt)("h1",{id:"class-moduleevents"},"Class: Module<Events",">"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/index"},"@moralisweb3/common-core"),".Module"),(0,r.kt)("p",null,"The base class of every Moralis class that gets registered as a module via MoralisModules\nIt should always be created with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"name"),": name of the module (should be unique)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"core"),": the Core instance"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type"),": (optional) CoreModuleType, defaults to CoreModuleType.DEFAULT")),(0,r.kt)("p",null,"When creating an api, or network module, you should use the ApiModule or NetworkModule"),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Events")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"EventMap")," = ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Module"))),(0,r.kt)("p",{parentName:"li"},"\u21b3 ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/apimodule"},(0,r.kt)("inlineCode",{parentName:"a"},"ApiModule"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#cleanup"},"cleanUp")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#listen"},"listen")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#setup"},"setup")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#start"},"start"))),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#name"},"name")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#type"},"type")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#core"},"core")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#emitter"},"emitter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-core/module#logger"},"logger"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"cleanup"},"cleanUp"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"cleanUp"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,"Any cleanup that needs to be done for removing this module.\nIt also should remove the module via ",(0,r.kt)("inlineCode",{parentName:"p"},"this.core.modules.remove(this.name)")),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"listen"},"listen"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"listen"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Event"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"eventName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"listener"),"): () => ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedEventEmitter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),">"),(0,r.kt)("p",null,"Listen to an event, and returns a cleanup function"),(0,r.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Event")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"eventName")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"listener")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Events"),"[",(0,r.kt)("inlineCode",{parentName:"td"},"Event"),"]")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fn")),(0,r.kt)("p",null,"\u25b8 (): ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedEventEmitter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),">"),(0,r.kt)("h5",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TypedEventEmitter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setup"},"setup"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"setup"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"start"},"start"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,r.kt)("strong",{parentName:"p"},"start"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("p",null,"Start the module (if needed).\nThis function can be used to initialize variables etc."),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Module"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),">","(",(0,r.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"core"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"type?"),")"),(0,r.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Events")),(0,r.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,r.kt)("inlineCode",{parentName:"td"},"EventMap")," = ",(0,r.kt)("inlineCode",{parentName:"td"},"any"))))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"core")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-core/core"},(0,r.kt)("inlineCode",{parentName:"a"},"Core"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-core/moduletype"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleType"))),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ModuleType.DEFAULT"))))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"name"},"name"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"type"},"type"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"type"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/moduletype"},(0,r.kt)("inlineCode",{parentName:"a"},"ModuleType"))," = ",(0,r.kt)("inlineCode",{parentName:"p"},"ModuleType.DEFAULT")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"core"},"core"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"core"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/core"},(0,r.kt)("inlineCode",{parentName:"a"},"Core"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"emitter"},"emitter"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"emitter"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"TypedEventEmitter"),"<",(0,r.kt)("inlineCode",{parentName:"p"},"Events"),">"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"logger"},"logger"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"logger"),": ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-core/loggercontroller"},(0,r.kt)("inlineCode",{parentName:"a"},"LoggerController"))))}s.isMDXComponent=!0}}]);