"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[77140],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),m=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=m(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=m(r),u=n,k=c["".concat(o,".").concat(u)]||c[u]||p[u]||l;return r?a.createElement(k,i(i({ref:t},d),{},{components:r})):a.createElement(k,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<l;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57255:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>m});var a=r(87462),n=(r(67294),r(3905));const l={slug:"/moralisweb3/common-evm-utils/evmnfttradeinput",title:"Interface: EvmNftTradeInput",sidebar_label:"EvmNftTradeInput"},i=void 0,s={unversionedId:"api/moralisweb3/common-evm-utils/evmnfttradeinput",id:"api/moralisweb3/common-evm-utils/evmnfttradeinput",title:"Interface: EvmNftTradeInput",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmNftTradeInput",source:"@site/docs/api/moralisweb3/common-evm-utils/evmnfttradeinput.md",sourceDirName:"api/moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmnfttradeinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmnfttradeinput",title:"Interface: EvmNftTradeInput",sidebar_label:"EvmNftTradeInput"},sidebar:"sidebar",previous:{title:"EvmNftTradeData",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradedata"},next:{title:"EvmNftTransfer",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttransfer"}},o={},m=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"blockHash",id:"blockhash",level:3},{value:"blockNumber",id:"blocknumber",level:3},{value:"blockTimestamp",id:"blocktimestamp",level:3},{value:"buyerAddress",id:"buyeraddress",level:3},{value:"chain",id:"chain",level:3},{value:"marketplaceAddress",id:"marketplaceaddress",level:3},{value:"price",id:"price",level:3},{value:"priceTokenAddress",id:"pricetokenaddress",level:3},{value:"sellerAddress",id:"selleraddress",level:3},{value:"tokenAddress",id:"tokenaddress",level:3},{value:"tokenIds",id:"tokenids",level:3},{value:"transactionHash",id:"transactionhash",level:3},{value:"transactionIndex",id:"transactionindex",level:3}],d={toc:m};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmNftTradeInput"),(0,n.kt)("h1",{id:"interface-evmnfttradeinput"},"Interface: EvmNftTradeInput"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmNftTradeInput"),(0,n.kt)("p",null,"This can be any object with valid trade data."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'const tradeInput = {\nchain: 1,\nsellerAddress: "0xbae90f486d751f133702655627ce599249cd26b8",\nbuyerAddress: "0x8795e90de359c1e0bf2579646486f7f12f270d2f",\nmarketplaceAddress: "0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",\ntokenAddress: "0xdf7952b35f24acf7fc0487d01c8d5690a60dba07",\nprice: "280000000000000000",\nblockTimestamp: "2021-05-09T23:00:25.000Z",\ntokenIds: ["16404"],\nblockHash: "0xe870c197b0c614e055f4de5b264bc7c69eafc93a6d0ce300309de444b2ff7e3a",\nblockNumber: 1,\ntransactionHash: "0x4de0bcef1450492bd5c2e7693cf644c40005868d0dcc8a7a50a80ef2efa88d1e",\ntransactionIndex: "164"\n}\n')),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#blockhash"},"blockHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#blocknumber"},"blockNumber")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#blocktimestamp"},"blockTimestamp")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#buyeraddress"},"buyerAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#chain"},"chain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#marketplaceaddress"},"marketplaceAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#price"},"price")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#pricetokenaddress"},"priceTokenAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#selleraddress"},"sellerAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#tokenaddress"},"tokenAddress")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#tokenids"},"tokenIds")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#transactionhash"},"transactionHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmnfttradeinput#transactionindex"},"transactionIndex"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"blockhash"},"blockHash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"blockHash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"blocknumber"},"blockNumber"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"blockNumber"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumberish")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"blocktimestamp"},"blockTimestamp"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"blockTimestamp"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"DateInput")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"buyeraddress"},"buyerAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"buyerAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"chain"},"chain"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"chain"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmchainish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmChainish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"marketplaceaddress"},"marketplaceAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"marketplaceAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"price"},"price"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"price"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmnativeish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmNativeish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"pricetokenaddress"},"priceTokenAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,n.kt)("strong",{parentName:"p"},"priceTokenAddress"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"selleraddress"},"sellerAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"sellerAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokenaddress"},"tokenAddress"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"tokenAddress"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#evmaddressish"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmAddressish"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokenids"},"tokenIds"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"tokenIds"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"transactionHash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transactionindex"},"transactionIndex"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"transactionIndex"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,n.kt)("inlineCode",{parentName:"p"},"number")))}p.isMDXComponent=!0}}]);