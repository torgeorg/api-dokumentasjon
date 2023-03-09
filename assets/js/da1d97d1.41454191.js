"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[4329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,c=m["".concat(l,".").concat(f)]||m[f]||g[f]||i;return r?n.createElement(c,s(s({ref:t},u),{},{components:r})):n.createElement(c,s({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[m]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2878:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Spesifisering av endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon",categories:"nyhet",tags:["news"]},s=void 0,o={permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/03/31/15-30-detaljert-endring",source:"@site/nyheter-og-driftsvarsler/2022-03-31-15-30-detaljert-endring.md",title:"Spesifisering av endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon",description:"Tidligere har vi varslet endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon.",date:"2022-03-31T00:00:00.000Z",formattedDate:"31. mars 2022",tags:[{label:"news",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/news"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Spesifisering av endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon",categories:"nyhet",tags:["news"]},prevItem:{title:"Problemer med testmilj\xf8 l\xf8st",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/04/01/11-00-problemer-test"},nextItem:{title:"Feil p\xe5 Inntektsmottaker API",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/03/16/14-20-feil-inntektsmottaker"}},l={authorsImageUrls:[]},p=[],u={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Tidligere har vi varslet endring av XML for Spesifisert summert skattegrunnlag API ved overgang til ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/02/18/12-00-endring-xml"},"OpenAPI spesifikasjon"),"."),(0,a.kt)("p",null,"OpenAPI spesifikasjon for API'et er n\xe5 klar p\xe5 ",(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/spesifisert-summert-skattegrunnlag-api/1.0.0"},"Swaggerhub:")),(0,a.kt)("p",null,"Vi endrer den spesielle m\xe5ten \xe5 h\xe5ndtere typer i xml p\xe5, og vi flytter type ned i et eget felt slik at XML vil h\xe5ndteres likt som i JSON-responsen. "),(0,a.kt)("p",null,"For eksempel:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"F\xf8r: ",(0,a.kt)("inlineCode",{parentName:"li"},'<spesifisering xmlns:wstxns1=http://www.w3.org/2001/XMLSchema-instance wstxns1:type="LoennOgTilsvarendeYtelser">')),(0,a.kt)("li",{parentName:"ul"},"N\xe5: ",(0,a.kt)("inlineCode",{parentName:"li"},"<type>LoennOgTilsvarendeYtelser</type>"))),(0,a.kt)("p",null,"Spesifisert summert skattegrunnlag API blir tilgjengelig med Open API spesifikasjon:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"I test: Tirsdag 24. mai 2022"),(0,a.kt)("li",{parentName:"ul"},"I produksjon: Tirsdag 21. juni 2022")))}g.isMDXComponent=!0}}]);