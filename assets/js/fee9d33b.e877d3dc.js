"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7265],{3905:(e,r,t)=>{t.d(r,{Zo:()=>k,kt:()=>v});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},k=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),g=d(t),p=o,v=g["".concat(l,".").concat(p)]||g[p]||m[p]||i;return t?n.createElement(v,a(a({ref:r},k),{},{components:t})):n.createElement(v,a({ref:r},k))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[g]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7112:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const i={title:"Versjoner",slug:"/versjoner",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Versjonering"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},a=void 0,s={unversionedId:"om/versjoner",id:"om/versjoner",title:"Versjoner",description:"Skatteetatens strategi for versjonering.",source:"@site/docs/om/versjoner.md",sourceDirName:"om",slug:"/versjoner",permalink:"/api-dokumentasjon/versjoner",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Versjonering",permalink:"/api-dokumentasjon/tags/versjonering"}],version:"current",frontMatter:{title:"Versjoner",slug:"/versjoner",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Versjonering"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Skjerming av data",permalink:"/api-dokumentasjon/skjerming"},next:{title:"Aktiv konto API",permalink:"/api-dokumentasjon/api/aktivkonto"}},l={},d=[{value:"Versjonering av API&#39;er",id:"versjonering-av-apier",level:2},{value:"Bakoverkompatible endringer",id:"bakoverkompatible-endringer",level:2},{value:"Endring i felt/koder",id:"endring-i-feltkoder",level:2}],k={toc:d},g="wrapper";function m(e){let{components:r,...t}=e;return(0,o.kt)(g,(0,n.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("summary",null,"Skatteetatens strategi for versjonering."),(0,o.kt)("p",null,"Skatteetatens tjenester er designet for \xe5 kunne st\xf8tte flere versjoner samtidig, men i praksis er det maksimalt to samtidige versjoner.\nTekniske dataformat endrer seg sjelden, og n\xe5r det skjer f\xf8lges denne strategien for versjonering. "),(0,o.kt)("h2",{id:"versjonering-av-apier"},"Versjonering av API'er"),(0,o.kt)("p",null,"Skatteetaten etterstreber at tjenestene skal v\xe6re stabile, og responsen skal til v\xe6re i overenstemmelse med kontrakten for en bestemt versjon av API\u2019et. Skatteetatens tjenester er designet for \xe5 kunne st\xf8tte flere versjoner samtidig. I praksis vil det v\xe6re maksimalt to versjoner tilgjengelig samtidig, slik at virksomhetene har rimelig tid til \xe5 g\xe5 over til ny versjon. Merk at st\xf8tte for gamle versjoner etter hvert vil tas vekk."),(0,o.kt)("h2",{id:"bakoverkompatible-endringer"},"Bakoverkompatible endringer"),(0,o.kt)("p",null,"Nye felt, endring av rekkef\xf8lge i respons eller nye valgfrie felt i input vil normalt ikke f\xf8re til at det etableres en ny versjon og vil ikke n\xf8dvendigvis varsles p\xe5 forh\xe5nd. Det forventes at virksomheter bygger tolerant kode som t\xe5ler slike endringer. Av denne grunn anbefaler vi ikke \xe5 validere responsen mot XSDen, siden dette kan gi valideringsfeil ved ikke-varslede endringer."),(0,o.kt)("p",null,"Mer om type endringer og varslingsfrister finnes i ",(0,o.kt)("a",{parentName:"p",href:"https://www.skatteetaten.no/deling/tilgang/delingstjenester/bruksvilkar-for-delingstjenester/"},"Vilk\xe5r for bruk av Skatteetatens delingstjenester"),"."),(0,o.kt)("h2",{id:"endring-i-feltkoder"},"Endring i felt/koder"),(0,o.kt)("p",null,"Felt/koder som brukes i data endrer seg, gjerne fra \xe5r til \xe5r, og dette skyldes endringer i skattelovgivning og skatteprosess. "),(0,o.kt)("p",null,"Flere datasett har informasjonsmodeller som forklarer hvilke koder som brukes i forskjellige felt, dette er dokumentert pr. tjeneste. Endringer i informasjonsmodeller kan f\xf8re til at det oppst\xe5r feil hos virksomheten selv om den tekniske integrasjonen fungerer helt fint. "),(0,o.kt)("p",null,"Det er viktig \xe5 sette seg inn i informasjonsmodell-endringer hvert gang et nytt inntekts\xe5r tilgjengeliggj\xf8res, eller hvis andre endringer i informasjonsmodell annonseres."))}m.isMDXComponent=!0}}]);