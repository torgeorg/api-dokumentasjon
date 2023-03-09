"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,c=u["".concat(l,".").concat(g)]||u[g]||f[g]||i;return r?n.createElement(c,o(o({ref:t},m),{},{components:r})):n.createElement(c,o({ref:t},m))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7114:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={title:"Endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon",categories:"nyhet",tags:["news"]},o=void 0,s={permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/02/18/12-00-endring-xml",source:"@site/nyheter-og-driftsvarsler/2022-02-18-12-00-endring-xml.md",title:"Endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon",description:"Som tidligere varslet s\xe5 jobber Skatteetaten med \xe5 migrere alle tjenester til Open API spesifikasjon, og m\xe5let er \xe5 ha alle tjenestene over p\xe5 Open API spesifikasjonen f\xf8r sommeren 2022.",date:"2022-02-18T00:00:00.000Z",formattedDate:"18. februar 2022",tags:[{label:"news",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/tags/news"}],hasTruncateMarker:!1,authors:[],frontMatter:{title:"Endring av XML for Spesifisert summert skattegrunnlag API ved overgang til OpenAPI spesifikasjon",categories:"nyhet",tags:["news"]},prevItem:{title:"Feil p\xe5 Inntektsmottaker API",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/03/16/14-20-feil-inntektsmottaker"},nextItem:{title:"St\xf8tte for nytt inntekts\xe5r i test for skatteoppgj\xf8rstjenestene",permalink:"/api-dokumentasjon/nyheter-og-driftsvarsler/2022/02/11/12-50-ekstern-test"}},l={authorsImageUrls:[]},p=[],m={toc:p},u="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Som ",(0,a.kt)("a",{parentName:"p",href:"https://skatteetaten.github.io/datasamarbeid-api-dokumentasjon/overgang-open-api-spec-14012022"},"tidligere varslet")," s\xe5 jobber Skatteetaten med \xe5 migrere alle tjenester til Open API spesifikasjon, og m\xe5let er \xe5 ha alle tjenestene over p\xe5 Open API spesifikasjonen f\xf8r sommeren 2022."),(0,a.kt)("p",null,"De fleste API'er vil bli tilgjengelige p\xe5 OpenAPI uten at det p\xe5virker konsumentene. Men, for konsumenter som benytter XML for Spesifisert summert skattegrunnlag API, s\xe5 vil det bli en mindre endring. Vi kommer til \xe5 fjerne bruken av xsi:type attributtet i xml\u2019en og at \xabtype\xbb blir et felt slik som det er for Json. Vi kommer tilbake til detaljene."),(0,a.kt)("p",null,"Spesifisert summert skattegrunnlag API blir tilgjengelig med Open API spesifikasjon i slutten av mai. Inntektsmottaker API migreres samtidig, men endringen ber\xf8rer ikke responsformatene for denne tjenesten."),(0,a.kt)("p",null,"Vi oppdaterer tjenestenes dokumentasjon p\xe5 github n\xe5r OpenAPI spesifikasjon er klar, og publiserer p\xe5 ",(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/search?type=API&owner=Skatteetaten_Deling"},"Swaggerhub.")))}f.isMDXComponent=!0}}]);