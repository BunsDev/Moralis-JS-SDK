"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),s=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=a,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={slug:"/moralisweb3/common-streams-utils/createstreamevmrequest",title:"Interface: CreateStreamEvmRequest",sidebar_label:"CreateStreamEvmRequest"},l=void 0,o={unversionedId:"api/moralisweb3/common-streams-utils/createstreamevmrequest",id:"api/moralisweb3/common-streams-utils/createstreamevmrequest",title:"Interface: CreateStreamEvmRequest",description:"moralis-monorepo / @moralisweb3/common-streams-utils / CreateStreamEvmRequest",source:"@site/docs/api/moralisweb3/common-streams-utils/createstreamevmrequest.md",sourceDirName:"api/moralisweb3/common-streams-utils",slug:"/moralisweb3/common-streams-utils/createstreamevmrequest",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-streams-utils/createstreamevmrequest",title:"Interface: CreateStreamEvmRequest",sidebar_label:"CreateStreamEvmRequest"},sidebar:"sidebar",previous:{title:"AddAddressEvmResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/addaddressevmresponseadapter"},next:{title:"CreateStreamEvmResponseAdapter",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmresponseadapter"}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"abi",id:"abi",level:3},{value:"Inherited from",id:"inherited-from",level:4},{value:"advancedOptions",id:"advancedoptions",level:3},{value:"Inherited from",id:"inherited-from-1",level:4},{value:"allAddresses",id:"alladdresses",level:3},{value:"Inherited from",id:"inherited-from-2",level:4},{value:"chains",id:"chains",level:3},{value:"demo",id:"demo",level:3},{value:"Inherited from",id:"inherited-from-3",level:4},{value:"description",id:"description",level:3},{value:"Inherited from",id:"inherited-from-4",level:4},{value:"includeContractLogs",id:"includecontractlogs",level:3},{value:"Inherited from",id:"inherited-from-5",level:4},{value:"includeInternalTxs",id:"includeinternaltxs",level:3},{value:"Inherited from",id:"inherited-from-6",level:4},{value:"includeNativeTxs",id:"includenativetxs",level:3},{value:"Inherited from",id:"inherited-from-7",level:4},{value:"tag",id:"tag",level:3},{value:"Inherited from",id:"inherited-from-8",level:4},{value:"topic0",id:"topic0",level:3},{value:"Inherited from",id:"inherited-from-9",level:4},{value:"triggers",id:"triggers",level:3},{value:"webhookUrl",id:"webhookurl",level:3},{value:"Inherited from",id:"inherited-from-10",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils")," / CreateStreamEvmRequest"),(0,a.kt)("h1",{id:"interface-createstreamevmrequest"},"Interface: CreateStreamEvmRequest"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils"),".CreateStreamEvmRequest"),(0,a.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Camelize"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"Omit"),"<",(0,a.kt)("inlineCode",{parentName:"p"},"RequestParams"),", ",(0,a.kt)("inlineCode",{parentName:"p"},'"chainIds"')," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},'"triggers"'),">",">"),(0,a.kt)("p",{parentName:"li"},"\u21b3 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CreateStreamEvmRequest"))))),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#abi"},"abi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#advancedoptions"},"advancedOptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#alladdresses"},"allAddresses")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#chains"},"chains")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#demo"},"demo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#description"},"description")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#includecontractlogs"},"includeContractLogs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#includeinternaltxs"},"includeInternalTxs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#includenativetxs"},"includeNativeTxs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#tag"},"tag")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#topic0"},"topic0")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#triggers"},"triggers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/createstreamevmrequest#webhookurl"},"webhookUrl"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"abi"},"abi"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"abi"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymous?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"constant?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"gas?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"inputs?"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"components?"),": { name: string; type: string; indexed?: boolean ","|"," undefined; components?: ...[] ","|"," undefined; internalType?: string ","|"," undefined; }[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"indexed?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"internalType?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"outputs?"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"components?"),": { name: string; type: string; components?: ...[] ","|"," undefined; internalType?: string ","|"," undefined; }[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"internalType?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }[] ; ",(0,a.kt)("inlineCode",{parentName:"p"},"payable?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"stateMutability?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"type"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,a.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,a.kt)("p",null,"Camelize.abi"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"advancedoptions"},"advancedOptions"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"advancedOptions"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," { ",(0,a.kt)("inlineCode",{parentName:"p"},"filter?"),": { ",(0,a.kt)("inlineCode",{parentName:"p"},"[key: string]"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"unknown"),";  } ; ",(0,a.kt)("inlineCode",{parentName:"p"},"includeNativeTxs?"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ; ",(0,a.kt)("inlineCode",{parentName:"p"},"topic0"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"  }[]"),(0,a.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,a.kt)("p",null,"Camelize.advancedOptions"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"alladdresses"},"allAddresses"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"allAddresses"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,a.kt)("p",null,"Camelize.allAddresses"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"chains"},"chains"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"chains"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"EvmChainish"),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"demo"},"demo"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"demo"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-3"},"Inherited from"),(0,a.kt)("p",null,"Camelize.demo"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"description"},"description"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"description"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-4"},"Inherited from"),(0,a.kt)("p",null,"Camelize.description"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"includecontractlogs"},"includeContractLogs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"includeContractLogs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-5"},"Inherited from"),(0,a.kt)("p",null,"Camelize.includeContractLogs"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"includeinternaltxs"},"includeInternalTxs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"includeInternalTxs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-6"},"Inherited from"),(0,a.kt)("p",null,"Camelize.includeInternalTxs"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"includenativetxs"},"includeNativeTxs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"includeNativeTxs"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")),(0,a.kt)("h4",{id:"inherited-from-7"},"Inherited from"),(0,a.kt)("p",null,"Camelize.includeNativeTxs"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"tag"},"tag"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"tag"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-8"},"Inherited from"),(0,a.kt)("p",null,"Camelize.tag"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"topic0"},"topic0"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"topic0"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,a.kt)("h4",{id:"inherited-from-9"},"Inherited from"),(0,a.kt)("p",null,"Camelize.topic0"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"triggers"},"triggers"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"triggers"),": ",(0,a.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamtriggerish"},(0,a.kt)("inlineCode",{parentName:"a"},"StreamTriggerish")),"[]"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"webhookurl"},"webhookUrl"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"webhookUrl"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"inherited-from-10"},"Inherited from"),(0,a.kt)("p",null,"Camelize.webhookUrl"))}d.isMDXComponent=!0}}]);