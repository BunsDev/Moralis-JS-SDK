"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[2731],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var s=o.createContext({}),c=function(t){var e=o.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(h,i(i({ref:e},p),{},{components:r})):o.createElement(h,i({ref:e},p))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1542:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={hide_title:!0},i=void 0,l={unversionedId:"documents/Introduction",id:"documents/Introduction",title:"Introduction",description:"Moralis SDK (JavaScript / TypeScript)",source:"@site/docs/documents/Introduction.md",sourceDirName:"documents",slug:"/documents/Introduction",permalink:"/Moralis-JS-SDK/documents/Introduction",draft:!1,tags:[],version:"current",frontMatter:{hide_title:!0},sidebar:"sidebar",next:{title:"Set Up",permalink:"/Moralis-JS-SDK/documents/Installation"}},s={},c=[],p={toc:c};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{align:"center",href:"https://moralis.io",target:"_blank"},(0,n.kt)("img",{src:"https://github.com/MoralisWeb3/Moralis-JS-SDK/raw/main/assets/moralis-logo.svg",alt:"Moralis JS SDK",height:"200px",style:{height:200}})),(0,n.kt)("h1",{align:"center"},"Moralis SDK (JavaScript / TypeScript)"),(0,n.kt)("a",{href:"https://docs.moralis.io",target:"_blank"},(0,n.kt)("img",{alt:"Check the docs",src:"https://img.shields.io/badge/Docs-Full Documentation-21BF96?style=flat&logo=gitbook&logoColor=ffffff"})),(0,n.kt)("a",{href:"https://forum.moralis.io",target:"_blank"},(0,n.kt)("img",{alt:"Discourse posts",src:"https://img.shields.io/discourse/posts?color=B7E803&label=Forum&logo=discourse&server=https%3A%2F%2Fforum.moralis.io"})),(0,n.kt)("br",null),(0,n.kt)("img",{alt:"npm",src:"https://img.shields.io/npm/v/moralis?label=version"}),(0,n.kt)("img",{alt:"github",src:"https://img.shields.io/github/last-commit/MoralisWeb3/Moralis-JS-SDK"}),(0,n.kt)("img",{alt:"bundlephobia",src:"https://img.shields.io/bundlephobia/minzip/moralis"}),(0,n.kt)("img",{alt:"typescript",src:"https://img.shields.io/npm/types/moralis"}),(0,n.kt)("p",null,"The most powerful Web3 library for your backend in Javascript and Typescript."),(0,n.kt)("br",null)),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Features"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Web3 authentication"),(0,n.kt)("li",{parentName:"ul"},"Make ",(0,n.kt)("strong",{parentName:"li"},"Evm API")," and ",(0,n.kt)("strong",{parentName:"li"},"Solana API")," calls"),(0,n.kt)("li",{parentName:"ul"},"Subscribe to real-time blockchain updates via ",(0,n.kt)("strong",{parentName:"li"},"Streams")),(0,n.kt)("li",{parentName:"ul"},"Consistent data types and utilities"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modular")," package: include only what you need"),(0,n.kt)("li",{parentName:"ul"},"Fully ",(0,n.kt)("strong",{parentName:"li"},"Typescript")," ready out-of-the box")),(0,n.kt)("p",null,"... and much more. Check the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.moralis.io/"},"official Moralis docs")," for more details."),(0,n.kt)("h1",{id:"-demos"},"\ud83d\ude80 Demos"),(0,n.kt)("p",null,"If you want to see how to integrate Moralis on your codebase, check out our demos"),(0,n.kt)("h1",{id:"-need-help"},"\ud83e\udd1d Need help"),(0,n.kt)("p",null,"If you need help with setting up the boilerplate or have other questions - don't hesitate to write in our community forum and we will check asap. ",(0,n.kt)("a",{parentName:"p",href:"https://forum.moralis.io"},"Forum link"),". The best thing about this SDK is the super active community ready to help at any time! We help each other."),(0,n.kt)("h1",{id:"\ufe0f-community"},"\ud83e\uddd9\u200d\u2642\ufe0f Community"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://discord.gg/moralis"},"Discord")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forum.moralis.io"},"Forum"))))}u.isMDXComponent=!0}}]);