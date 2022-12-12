"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[8904],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),s=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),v=n,k=u["".concat(m,".").concat(v)]||u[v]||c[v]||l;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={slug:"/moralisweb3/common-evm-utils/evmsimpleblockdata"},o=void 0,i={unversionedId:"moralisweb3/common-evm-utils/evmsimpleblockdata",id:"moralisweb3/common-evm-utils/evmsimpleblockdata",title:"evmsimpleblockdata",description:"moralis-monorepo / @moralisweb3/common-evm-utils / EvmSimpleBlockData",source:"@site/docs/moralisweb3/common-evm-utils/evmsimpleblockdata.md",sourceDirName:"moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/evmsimpleblockdata",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockdata",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/evmsimpleblockdata"},sidebar:"sidebar",previous:{title:"evmsimpleblock",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblock"},next:{title:"evmsimpleblockinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockinput"}},m={},s=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"chain",id:"chain",level:3},{value:"hash",id:"hash",level:3},{value:"number",id:"number",level:3},{value:"timestamp",id:"timestamp",level:3}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / EvmSimpleBlockData"),(0,n.kt)("h1",{id:"interface-evmsimpleblockdata"},"Interface: EvmSimpleBlockData"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".EvmSimpleBlockData"),(0,n.kt)("p",null,"This is the return type of the processed EVM Block"),(0,n.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"EvmSimpleBlockData"))),(0,n.kt)("p",{parentName:"li"},"\u21b3 ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmblockdata"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmBlockData"))))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"properties"},"Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockdata#chain"},"chain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockdata#hash"},"hash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockdata#number"},"number")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmsimpleblockdata#timestamp"},"timestamp"))),(0,n.kt)("h2",{id:"properties-1"},"Properties"),(0,n.kt)("h3",{id:"chain"},"chain"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"chain"),": ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmchain"},(0,n.kt)("inlineCode",{parentName:"a"},"EvmChain"))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"hash"},"hash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"hash"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"number"},"number"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"number"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"timestamp"},"timestamp"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"timestamp"),": ",(0,n.kt)("inlineCode",{parentName:"p"},"Date")))}c.isMDXComponent=!0}}]);