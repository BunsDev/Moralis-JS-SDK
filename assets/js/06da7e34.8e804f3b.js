"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(a),d=r,N=k["".concat(m,".").concat(d)]||k[d]||u[d]||l;return a?n.createElement(N,i(i({ref:t},s),{},{components:a})):n.createElement(N,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5378:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={slug:"/moralisweb3/common-evm-utils/erc20value"},i=void 0,o={unversionedId:"moralisweb3/common-evm-utils/erc20value",id:"moralisweb3/common-evm-utils/erc20value",title:"erc20value",description:"moralis-monorepo / @moralisweb3/common-evm-utils / Erc20Value",source:"@site/docs/moralisweb3/common-evm-utils/erc20value.md",sourceDirName:"moralisweb3/common-evm-utils",slug:"/moralisweb3/common-evm-utils/erc20value",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value",draft:!1,tags:[],version:"current",frontMatter:{slug:"/moralisweb3/common-evm-utils/erc20value"},sidebar:"sidebar",previous:{title:"erc20transferinput",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20transferinput"},next:{title:"evmaddress",permalink:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/evmaddress"}},m={},p=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Accessors",id:"accessors",level:3},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods-1",level:2},{value:"create",id:"create",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"equals",id:"equals",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"parse",id:"parse",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"display",id:"display",level:3},{value:"Returns",id:"returns-3",level:4},{value:"equals",id:"equals-1",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of",level:4},{value:"format",id:"format",level:3},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"toJSON",id:"tojson",level:3},{value:"Returns",id:"returns-6",level:4},{value:"toNumber",id:"tonumber",level:3},{value:"Returns",id:"returns-7",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Accessors",id:"accessors-1",level:2},{value:"amount",id:"amount",level:3},{value:"Returns",id:"returns-9",level:4},{value:"decimals",id:"decimals",level:3},{value:"Returns",id:"returns-10",level:4},{value:"token",id:"token",level:3},{value:"Returns",id:"returns-11",level:4},{value:"value",id:"value",level:3},{value:"Returns",id:"returns-12",level:4},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters-4",level:4}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/nodejs-sdk-references"},"moralis-monorepo")," / ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils")," / Erc20Value"),(0,r.kt)("h1",{id:"class-erc20value"},"Class: Erc20Value"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index"},"@moralisweb3/common-evm-utils"),".Erc20Value"),(0,r.kt)("p",null,"The Erc20Value class is a MoralisData that references to a the value of an Erc20Token\nIt holds data about the data about the amount of tokens and the number of decimals."),(0,r.kt)("h2",{id:"implements"},"Implements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MoralisData"))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#create"},"create")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#equals"},"equals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#parse"},"parse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#display"},"display")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#equals-1"},"equals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#format"},"format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#tojson"},"toJSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#tonumber"},"toNumber")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#tostring"},"toString"))),(0,r.kt)("h3",{id:"accessors"},"Accessors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#amount"},"amount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#decimals"},"decimals")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#token"},"token")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#value"},"value"))),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value#constructor"},"constructor"))),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"create"},"create"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"create"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"core?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Value"))),(0,r.kt)("p",null,"Create a new instance of Erc20Value from any valid input"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"Erc20Value.create(1000, { decimals: 3 });\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Throws"))),(0,r.kt)("p",null,"CoreError if the value is invalid"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valueish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Valueish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value to create")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20options"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Options"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The options for the token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"core?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Core")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The MoralisCore instance")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20value"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Value"))),(0,r.kt)("p",null,"The created value"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"valueA"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"valueB"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Compares two Erc20Valueish instances."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const valueA = Erc20Value.create(1000, { decimals: 3 });\nconst valueB = Erc20Value.create(10000, { decimals: 4 });\nErc20Value.equals(valueA, valueB); // true\n")),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"valueA")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valueish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Valueish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The first value to compare")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"valueB")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valueish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Valueish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The second value to compare")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"True if the values are equal"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"parse"},"parse"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"parse"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"\xabdestructured\xbb"),"): ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valuedata"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20ValueData"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"\xabdestructured\xbb")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"decimals")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valueinputdecimals"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20ValueInputDecimals")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"\u203a\xa0",(0,r.kt)("inlineCode",{parentName:"td"},"token?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20tokenish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Tokenish")))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valuedata"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20ValueData"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"display"},"display"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"display"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Displays the token in text format"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.display();\n")),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"the value and also the token symbol if available"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"equals-1"},"equals"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"equals"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Compares Erc20Value with current instance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.equals(valueA);\n")),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20valueish"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Valueish"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The value to compare")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"True if the values are equal"),(0,r.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,r.kt)("p",null,"MoralisData.equals"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"format"},"format"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"format"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Convert the value to a string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.format();\n")),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"the value in string format"),(0,r.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,r.kt)("p",null,"MoralisData.format"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tojson"},"toJSON"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toJSON"),"(): { ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"chain"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"decimals"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"logo?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"logoHash?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"thumbnail?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  } ; ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  } ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,r.kt)("p",null,"Displays the token in JSON format"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.toJSON();\n")),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,"{ ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": { ",(0,r.kt)("inlineCode",{parentName:"p"},"chain"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"contractAddress"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"decimals"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"logo?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"logoHash?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"name"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"symbol"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"thumbnail?"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  } ; ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  } ","|"," { ",(0,r.kt)("inlineCode",{parentName:"p"},"token"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")," ; ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),"  }"),(0,r.kt)("p",null,"the value and also the token if available"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tonumber"},"toNumber"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toNumber"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"Convert the value to a number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.toNumber();\n")),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"the value in number format"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},"toString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"Convert the value to a string"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.toString();\n")),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"the value in string format"),(0,r.kt)("h2",{id:"accessors-1"},"Accessors"),(0,r.kt)("h3",{id:"amount"},"amount"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"amount"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.amount; // BigNumber\n")),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BigNumber")),(0,r.kt)("p",null,"the token amount"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"decimals"},"decimals"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"decimals"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.decimals; // 15\n")),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"the token decimals"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"token"},"token"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"token"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20token"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Token"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"value.token; // Erc20Token\n")),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"null")," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/erc20token"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Token"))),(0,r.kt)("p",null,"the token"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," ",(0,r.kt)("strong",{parentName:"p"},"value"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Example"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'value.value; // "1000"\n')),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,"the token value"),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new Erc20Value"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"amount"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"options?"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"core?"),")"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"amount")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"BigNumberish"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/Moralis-JS-SDK/moralisweb3/common-evm-utils/index#erc20options"},(0,r.kt)("inlineCode",{parentName:"a"},"Erc20Options")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"core?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Core"))))))}u.isMDXComponent=!0}}]);