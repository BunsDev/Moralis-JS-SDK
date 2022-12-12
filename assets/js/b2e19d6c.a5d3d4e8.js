"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[5702],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),v=p(a),k=l,N=v["".concat(o,".").concat(k)]||v[k]||u[k]||r;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=v;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:l,i[1]=m;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},9796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>m,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={slug:"/moralisweb3/common-evm-utils/evmnative"},i=void 0,m={unversionedId:"moralisweb3/common-evm-utils/evmnative",id:"moralisweb3/common-evm-utils/evmnative",title:"evmnative",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmNative",source:"@site/docs/moralisweb3/common-evm-utils/evmnative.md",sourceDirName:"moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmnative",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmnative"},sidebar:"sidebar",previous:{title:"evmeventinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmeventinput"},next:{title:"evmnft",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnft"}},o={},p=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Accessors",id:"accessors",level:3},{value:"Methods",id:"methods",level:3},{value:"Accessors",id:"accessors-1",level:2},{value:"ONE_ETH",id:"one_eth",level:3},{value:"Returns",id:"returns",level:4},{value:"ONE_GWEI",id:"one_gwei",level:3},{value:"Returns",id:"returns-1",level:4},{value:"ONE_WEI",id:"one_wei",level:3},{value:"Returns",id:"returns-2",level:4},{value:"ether",id:"ether",level:3},{value:"Returns",id:"returns-3",level:4},{value:"gwei",id:"gwei",level:3},{value:"Returns",id:"returns-4",level:4},{value:"value",id:"value",level:3},{value:"Returns",id:"returns-5",level:4},{value:"wei",id:"wei",level:3},{value:"Returns",id:"returns-6",level:4},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-7",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-8",level:4},{value:"equals",id:"equals-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-10",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-11",level:4}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmNative"),(0,l.kt)("h1",{id:"class-evmnative"},"Class: EvmNative"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmNative"),(0,l.kt)("p",null,"The EvmNative class is a MoralisData that references to the value of an EVM native currency (like ETH, BNB etc.)"),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"MoralisData"))),(0,l.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,l.kt)("h3",{id:"accessors"},"Accessors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#one_eth"},"ONE","_","ETH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#one_gwei"},"ONE","_","GWEI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#one_wei"},"ONE","_","WEI")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#ether"},"ether")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#gwei"},"gwei")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#value"},"value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#wei"},"wei"))),(0,l.kt)("h3",{id:"methods"},"Methods"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#create"},"create")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#equals"},"equals")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#equals-1"},"equals")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#format"},"format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative#tostring"},"toString"))),(0,l.kt)("h2",{id:"accessors-1"},"Accessors"),(0,l.kt)("h3",{id:"one_eth"},"ONE","_","ETH"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"ONE_ETH"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("p",null,"Returns value of one ether."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"EvmNative.ONE_ETH\n")),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"one_gwei"},"ONE","_","GWEI"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"ONE_GWEI"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("p",null,"Returns value of one gwei."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"EvmNative.ONE_GWEI\n")),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"one_wei"},"ONE","_","WEI"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"ONE_WEI"),"(): ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("p",null,"Returns value of one wei."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"EvmNative.ONE_WEI\n")),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"ether"},"ether"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"ether"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Converts the EvmNative to a string representation of the value in ether."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"native.ether")),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"the value of the EvmNative as a string"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"gwei"},"gwei"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"gwei"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Converts the EvmNative to a string representation of the value in gwei."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"native.gwei")),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"the value of the EvmNative as a string"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"value"},"value"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"value"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"native.value")),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,l.kt)("p",null,"the value of the EvmNative as a BigNumber"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"wei"},"wei"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"get")," ",(0,l.kt)("strong",{parentName:"p"},"wei"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Converts the EvmNative to a string representation of the value in wei."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"native.wei")),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"the value of the EvmNative as a string"),(0,l.kt)("h2",{id:"methods-1"},"Methods"),(0,l.kt)("h3",{id:"create"},"create"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"create"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"native"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"unit?"),"): ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("p",null,"Create a new instance of EvmNative from any valid ",(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmnativeish"},"EvmNativeish")," value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const native = EvmNative.create(2, 'gwei');\nconst native = EvmNative.create(2);\nconst native = EvmNative.create(2, 'wei');\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"native")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmnativeish"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNativeish"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"the value to create the EvmNative from")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"unit?")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UnitOrDecimals")),(0,l.kt)("td",{parentName:"tr",align:"left"},"the unit of the value (optional), defaults to ",(0,l.kt)("inlineCode",{parentName:"td"},"ether"))))),(0,l.kt)("h4",{id:"returns-7"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("p",null,"a new instance of EvmNative"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"equals"},"equals"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,l.kt)("strong",{parentName:"p"},"equals"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"valueA"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"valueB"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Compares two EvmNative values."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"EvmNative.equals(EvmNative.create(1, 'ether'), EvmNative.create(1, 'ether')); // true\n")),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"valueA")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmnativeish"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNativeish"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"the first value to compare")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"valueB")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmnativeish"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNativeish"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"the second value to compare")))),(0,l.kt)("h4",{id:"returns-8"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"true if the values are equal"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"equals-1"},"equals"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"equals"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Compares EvmNative with current instance."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"const native = EvmNative.create(1, 'gwei');\nnative.equals(EvmNative.create(1, 'ether')); // false\n")),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnative"},(0,l.kt)("inlineCode",{parentName:"a"},"EvmNative"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"the value to compare with")))),(0,l.kt)("h4",{id:"returns-9"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"true if the values are equal"),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,"MoralisData.equals"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"format"},"format"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"format"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Converts the EvmNative to a string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"native.format()")),(0,l.kt)("h4",{id:"returns-10"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"the value of the EvmNative as a string"),(0,l.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,l.kt)("p",null,"MoralisData.format"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tostring"},"toString"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Converts the EvmNative to a string."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"native.toString()")),(0,l.kt)("h4",{id:"returns-11"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"the value of the EvmNative as a string"))}u.isMDXComponent=!0}}]);