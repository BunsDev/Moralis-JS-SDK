"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[6595],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(a),d=n,k=c["".concat(o,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(k,s(s({ref:t},p),{},{components:a})):r.createElement(k,s({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var m=2;m<i;m++)s[m]=a[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7113:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={slug:"/moralisweb3/common-streams-utils/streamevmtransactiondata"},s=void 0,l={unversionedId:"moralisweb3/common-streams-utils/streamevmtransactiondata",id:"moralisweb3/common-streams-utils/streamevmtransactiondata",title:"streamevmtransactiondata",description:"moralis-monorepo / @moralisweb3/common-streams-utils / StreamEvmTransactionData",source:"@site/docs/moralisweb3/common-streams-utils/streamevmtransactiondata.md",sourceDirName:"moralisweb3/common-streams-utils",slug:"/moralisweb3/common-streams-utils/streamevmtransactiondata",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-streams-utils/streamevmtransactiondata"}},o={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"chain",id:"chain",level:3},{value:"fromAddress",id:"fromaddress",level:3},{value:"gas",id:"gas",level:3},{value:"gasPrice",id:"gasprice",level:3},{value:"hash",id:"hash",level:3},{value:"input",id:"input",level:3},{value:"nonce",id:"nonce",level:3},{value:"receiptContractAddress",id:"receiptcontractaddress",level:3},{value:"receiptCumulativeGasUsed",id:"receiptcumulativegasused",level:3},{value:"receiptGasUsed",id:"receiptgasused",level:3},{value:"receiptRoot",id:"receiptroot",level:3},{value:"receiptStatus",id:"receiptstatus",level:3},{value:"signature",id:"signature",level:3},{value:"toAddress",id:"toaddress",level:3},{value:"transactionIndex",id:"transactionindex",level:3},{value:"type",id:"type",level:3},{value:"value",id:"value",level:3}],p={toc:m};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils")," / StreamEvmTransactionData"),(0,n.kt)("h1",{id:"interface-streamevmtransactiondata"},"Interface: StreamEvmTransactionData"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils"),".StreamEvmTransactionData"),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#chain"},"chain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#fromaddress"},"fromAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#gas"},"gas")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#gasprice"},"gasPrice")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#hash"},"hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#input"},"input")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#nonce"},"nonce")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#receiptcontractaddress"},"receiptContractAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#receiptcumulativegasused"},"receiptCumulativeGasUsed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#receiptgasused"},"receiptGasUsed")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#receiptroot"},"receiptRoot")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#receiptstatus"},"receiptStatus")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#signature"},"signature")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#toaddress"},"toAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#transactionindex"},"transactionIndex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#type"},"type")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamevmtransactiondata#value"},"value"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"chain"},"chain"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"chain"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmChain")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"fromaddress"},"fromAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"fromAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gas"},"gas"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"gas"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"gasprice"},"gasPrice"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"gasPrice"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hash"},"hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"input"},"input"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"input"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"nonce"},"nonce"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"nonce"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"receiptcontractaddress"},"receiptContractAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"receiptContractAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"receiptcumulativegasused"},"receiptCumulativeGasUsed"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"receiptCumulativeGasUsed"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"receiptgasused"},"receiptGasUsed"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"receiptGasUsed"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"receiptroot"},"receiptRoot"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"receiptRoot"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"receiptstatus"},"receiptStatus"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"receiptStatus"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"signature"},"signature"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"signature"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmSignature")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"toaddress"},"toAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"toAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"transactionIndex"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"type"},"type"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"type"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"value"},"value"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"value"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")))}u.isMDXComponent=!0}}]);