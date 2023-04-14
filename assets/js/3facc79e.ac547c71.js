"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[96239],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),k=s(a),d=n,c=k["".concat(p,".").concat(d)]||k[d]||u[d]||l;return a?r.createElement(c,o(o({ref:t},m),{},{components:a})):r.createElement(c,o({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},72293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={slug:"/moralisweb3/common-streams-utils/streamerc721approval",title:"Class: StreamErc721Approval",sidebar_label:"StreamErc721Approval"},o=void 0,i={unversionedId:"api/moralisweb3/common-streams-utils/streamerc721approval",id:"api/moralisweb3/common-streams-utils/streamerc721approval",title:"Class: StreamErc721Approval",description:"moralis-monorepo / @moralisweb3/common-streams-utils / StreamErc721Approval",source:"@site/docs/api/moralisweb3/common-streams-utils/streamerc721approval.md",sourceDirName:"api/moralisweb3/common-streams-utils",slug:"/moralisweb3/common-streams-utils/streamerc721approval",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-streams-utils/streamerc721approval",title:"Class: StreamErc721Approval",sidebar_label:"StreamErc721Approval"},sidebar:"sidebar",previous:{title:"StreamErc20TransferInput",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc20transferinput"},next:{title:"StreamErc721ApprovalData",permalink:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approvaldata"}},p={},s=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"equals",id:"equals-1",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"approved",id:"approved",level:3},{value:"Returns",id:"returns-5",level:4},{value:"chain",id:"chain",level:3},{value:"Returns",id:"returns-6",level:4},{value:"contract",id:"contract",level:3},{value:"Returns",id:"returns-7",level:4},{value:"logIndex",id:"logindex",level:3},{value:"Returns",id:"returns-8",level:4},{value:"owner",id:"owner",level:3},{value:"Returns",id:"returns-9",level:4},{value:"tokenContractType",id:"tokencontracttype",level:3},{value:"Returns",id:"returns-10",level:4},{value:"tokenId",id:"tokenid",level:3},{value:"Returns",id:"returns-11",level:4},{value:"tokenName",id:"tokenname",level:3},{value:"Returns",id:"returns-12",level:4},{value:"tokenSymbol",id:"tokensymbol",level:3},{value:"Returns",id:"returns-13",level:4},{value:"transactionHash",id:"transactionhash",level:3},{value:"Returns",id:"returns-14",level:4},{value:"triggers",id:"triggers",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-3",level:4}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/modules"},"moralis-monorepo")," / ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils")," / StreamErc721Approval"),(0,n.kt)("h1",{id:"class-streamerc721approval"},"Class: StreamErc721Approval"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index"},"@moralisweb3/common-streams-utils"),".StreamErc721Approval"),(0,n.kt)("p",null,"The StreamErc1155Approval class is a representation of a nft approval (ERC721) that is returned by the Moralis Stream API"),(0,n.kt)("h2",{id:"implements"},"Implements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"MoralisDataObject"))),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#create"},"create")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#equals"},"equals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#equals-1"},"equals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#format"},"format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#tojson"},"toJSON"))),(0,n.kt)("h3",{id:"accessors"},"Accessors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#approved"},"approved")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#chain"},"chain")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#contract"},"contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#logindex"},"logIndex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#owner"},"owner")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#tokencontracttype"},"tokenContractType")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#tokenid"},"tokenId")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#tokenname"},"tokenName")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#tokensymbol"},"tokenSymbol")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#transactionhash"},"transactionHash")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#triggers"},"triggers"))),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval#constructor"},"constructor"))),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"create"},"create"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"create"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"core?"),"): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721Approval"))),(0,n.kt)("p",null,"Create a new instance of StreamErc721Approval"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"const evmNftApproval = StreamErc721Approval.create(data);\n")),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvalish"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721Approvalish"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"the StreamErc721Approvalish type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"core?")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Core")),(0,n.kt)("td",{parentName:"tr",align:"left"},"the Core instance")))),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approval"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721Approval"))),(0,n.kt)("p",null,"an instance of StreamErc721Approval"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"equals"},"equals"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,n.kt)("strong",{parentName:"p"},"equals"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"valueA"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"valueB"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Compares two StreamErc721Approval data. It checks a deep equality check of both values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"}," StreamErc721Approval.equals(valueA, valueB);\n")),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"valueA")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvalish"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721Approvalish"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"the first StreamErc721Approvalish data to compare")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"valueB")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvalish"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721Approvalish"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"the second StreamErc721Approvalish data to compare")))),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"true if the values are equal, false otherwise"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"equals-1"},"equals"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"equals"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"Compares an StreamErc721Approvalish data to this StreamErc721Approval instance."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"evmNftApproval.equals(value);\n")),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"value")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvalish"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721Approvalish"))),(0,n.kt)("td",{parentName:"tr",align:"left"},"the value to compare")))),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"boolean")),(0,n.kt)("p",null,"true if the value is equal to the current instance, false otherwise"),(0,n.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,n.kt)("p",null,"MoralisDataObject.equals"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"format"},"format"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"format"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvaljson"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721ApprovalJSON"))),(0,n.kt)("p",null,"Converts the StreamErc721Approval instance to a JSON object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"evmNftApproval.format()")),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvaljson"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721ApprovalJSON"))),(0,n.kt)("p",null,"JSON object of the StreamErc721Approval instance"),(0,n.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,n.kt)("p",null,"MoralisDataObject.format"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tojson"},"toJSON"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"toJSON"),"(): ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvaljson"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721ApprovalJSON"))),(0,n.kt)("p",null,"Converts the StreamErc721Approval instance to a JSON object."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"evmNftApproval.toJSON()")),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/index#streamerc721approvaljson"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721ApprovalJSON"))),(0,n.kt)("p",null,"JSON object of the StreamErc721Approval instance"),(0,n.kt)("h4",{id:"implementation-of-2"},"Implementation of"),(0,n.kt)("p",null,"MoralisDataObject.toJSON"),(0,n.kt)("h2",{id:"accessors-1"},"Accessors"),(0,n.kt)("h3",{id:"approved"},"approved"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"approved"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"chain"},"chain"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"chain"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmChain")),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"EvmChain")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"contract"},"contract"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"contract"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"logindex"},"logIndex"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"logIndex"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"owner"},"owner"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"owner"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"EvmAddress")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokencontracttype"},"tokenContractType"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"tokenContractType"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokenid"},"tokenId"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"tokenId"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokenname"},"tokenName"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"tokenName"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-12"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"tokensymbol"},"tokenSymbol"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"tokenSymbol"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-13"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"transactionhash"},"transactionHash"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"transactionHash"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("h4",{id:"returns-14"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"triggers"},"triggers"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("inlineCode",{parentName:"p"},"get")," ",(0,n.kt)("strong",{parentName:"p"},"triggers"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamtriggeroutput"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamTriggerOutput")),"[]"),(0,n.kt)("h4",{id:"returns-15"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,n.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamtriggeroutput"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamTriggerOutput")),"[]"),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new StreamErc721Approval"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"core"),")"),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"data")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-streams-utils/streamerc721approvalinput"},(0,n.kt)("inlineCode",{parentName:"a"},"StreamErc721ApprovalInput")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"core")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Core"))))))}u.isMDXComponent=!0}}]);