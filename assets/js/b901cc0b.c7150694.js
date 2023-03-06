"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8935],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||a;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905));const a={title:"Delegere rettigheter i Altinn",slug:"/delegering",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["maskinporten"],keywords:["security","maskinporten","delegering"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},o=void 0,l={unversionedId:"om/delegering",id:"om/delegering",title:"Delegere rettigheter i Altinn",description:"Du kan delegere rettigheter til en systemleverand\xf8r (eller andre) i Altinn. Her f\xf8lger en beskrivelse av hvordan dette utf\xf8res.",source:"@site/docs/om/delegering.md",sourceDirName:"om",slug:"/delegering",permalink:"/api-dokumentasjon/delegering",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/om/delegering.md",tags:[{label:"maskinporten",permalink:"/api-dokumentasjon/tags/maskinporten"}],version:"current",frontMatter:{title:"Delegere rettigheter i Altinn",slug:"/delegering",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["maskinporten"],keywords:["security","maskinporten","delegering"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Bruk av tjenestene",permalink:"/api-dokumentasjon/bruk"},next:{title:"Feil",permalink:"/api-dokumentasjon/feil"}},s={},d=[],p={toc:d};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("summary",null,"Du kan delegere rettigheter til en systemleverand\xf8r (eller andre) i Altinn. Her f\xf8lger en beskrivelse av hvordan dette utf\xf8res."),(0,i.kt)("p",null,"Det er mulig for systemleverand\xf8rer (og andre) \xe5 opptre p\xe5 vegne av andre virksomheter ved oppkobling mot Skatteetaten for de API'ene. Din virksomhet m\xe5 delegere rettighet til tjenesten til systemleverand\xf8ren i Altinn. Navn p\xe5 rettighet i Altinn for delegering ligger i beskrivelsen av hver enkelt tjeneste."),(0,i.kt)("p",null,"Digdir har en n\xe6rmere beskrivelse av hvordan dette gj\xf8res. Se ",(0,i.kt)("a",{parentName:"p",href:"https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-som-leverand%C3%B8r"},"Digdir sine side for hvordan bruke maskinporten som leverand\xf8r"),". Selve kallene mot Skatteetaten vil skje p\xe5 vanlig m\xe5te men tokenet vil inneholde informasjon b\xe5de om konsument og systemleverand\xf8r."),(0,i.kt)("iframe",{src:"https://player.vimeo.com/video/533856189?h=d4a5afc5d8",width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("p",null,(0,i.kt)("a",{href:"https://vimeo.com/533856189"},"Hvordan delegere rettighet til leverand\xf8r")," from ",(0,i.kt)("a",{href:"https://vimeo.com/digdir"},"Digitaliseringsdirektoratet")," on ",(0,i.kt)("a",{href:"https://vimeo.com"},"Vimeo"),"."),(0,i.kt)("p",null,"For at systemleverand\xf8rer skal kunne teste tjenestene, m\xe5 det ",(0,i.kt)("a",{parentName:"p",href:"/api-dokumentasjon/testfrasystemleverandor"},"delegeres rettigheter til tjenestene ogs\xe5 i Test"),"."))}m.isMDXComponent=!0}}]);