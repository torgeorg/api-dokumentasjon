"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[9782],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),g=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=g(e.components);return r.createElement(s.Provider,{value:n},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=g(t),f=i,m=k["".concat(s,".").concat(f)]||k[f]||d[f]||a;return t?r.createElement(m,l(l({ref:n},p),{},{components:t})):r.createElement(m,l({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[k]="string"==typeof e?e:i,l[1]=o;for(var g=2;g<a;g++)l[g]=t[g];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1981:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>g});var r=t(7462),i=(t(7294),t(3905));const a={title:"Overgang til Open API spesifikasjon p\xe5 delingstjenester fra Skatteetaten",categories:"nyhet",permalink:"/overgang-open-api-spec-14012022",tags:["news"],date:"2022-01-14 10:25:00 +0100"},l=void 0,o={unversionedId:"maintenance/feed/2022-01-14-10-30-overgang-open-api",id:"maintenance/feed/2022-01-14-10-30-overgang-open-api",title:"Overgang til Open API spesifikasjon p\xe5 delingstjenester fra Skatteetaten",description:"Bakgrunn",source:"@site/docs/maintenance/feed/2022-01-14-10-30-overgang-open-api.md",sourceDirName:"maintenance/feed",slug:"/maintenance/feed/2022-01-14-10-30-overgang-open-api",permalink:"/api-dokumentasjon/maintenance/feed/2022-01-14-10-30-overgang-open-api",draft:!1,tags:[{label:"news",permalink:"/api-dokumentasjon/tags/news"}],version:"current",frontMatter:{title:"Overgang til Open API spesifikasjon p\xe5 delingstjenester fra Skatteetaten",categories:"nyhet",permalink:"/overgang-open-api-spec-14012022",tags:["news"],date:"2022-01-14 10:25:00 +0100"}},s={},g=[{value:"Bakgrunn",id:"bakgrunn",level:2},{value:"Endringer for konsumentene",id:"endringer-for-konsumentene",level:2},{value:"Ingen garantert rekkef\xf8lge",id:"ingen-garantert-rekkef\xf8lge",level:3},{value:"Tjenestespesifikke endringer",id:"tjenestespesifikke-endringer",level:3},{value:"XSD&#39;ene fjernes",id:"xsdene-fjernes",level:3},{value:"Gjennomf\xf8ring",id:"gjennomf\xf8ring",level:2},{value:"Fremtidig endringer",id:"fremtidig-endringer",level:2},{value:"Swaggerhub",id:"swaggerhub",level:3},{value:"API-gateway",id:"api-gateway",level:3}],p={toc:g},k="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(k,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"bakgrunn"},"Bakgrunn"),(0,i.kt)("p",null,"For \xe5 m\xf8te det stadig \xf8kende behovet for nye delingstjenester jobber Skatteetaten n\xe5 med et generelt l\xf8ft av delingsomr\xe5det. M\xe5let er mer b\xe6rekraftig og effektiv forvaltning, mer robuste tekniske l\xf8sninger og forbedret brukeropplevelse for konsumentene."),(0,i.kt)("p",null,"Ett av tiltakene som er iverksatt er \xe5 migrere alle delingstjenesten over p\xe5 Open API spesifikasjon (fra XSD i dag), og automatisere utviklingsprosessen mer slik at funksjonell spesifikasjon, teknisk l\xf8sning og dokumentasjon alltid skal v\xe6re i synk."),(0,i.kt)("h2",{id:"endringer-for-konsumentene"},"Endringer for konsumentene"),(0,i.kt)("p",null,"Overgangen fra XSD til Open API vil f\xf8rst og fremst v\xe6re en teknisk endring. Faglig og funksjonelt skal det ikke gj\xf8res endringer p\xe5 tjenestene. "),(0,i.kt)("h3",{id:"ingen-garantert-rekkef\xf8lge"},"Ingen garantert rekkef\xf8lge"),(0,i.kt)("p",null,"Med Open API er det ikke lenger mulig \xe5 garantere rekkef\xf8lgen p\xe5 elementene i modellen. Dette er i tr\xe5d med bruksvilk\xe5rene, men konsumenter som i sin implementasjon har lagt opp til at elementene skal komme i en gitt rekkef\xf8lge m\xe5 endre p\xe5 dette."),(0,i.kt)("h3",{id:"tjenestespesifikke-endringer"},"Tjenestespesifikke endringer"),(0,i.kt)("p",null,"Pga av tidligere svakheter i modelleringen og oppbygningen av XSD'ene i tjenestene, har det i en del s\xe6rtilfeller v\xe6rt n\xf8dvendig \xe5 gj\xf8re endringer som medf\xf8rer at Open API spesifikasjonen ikke samsvarer en til en med XSD'en. Dette vil medf\xf8re behov for \xe5 gj\xf8re endringer i konsumentenes klientkode ved migrering. Avvik av denne typen vil bli varslet spesifikt for hver tjeneste."),(0,i.kt)("h3",{id:"xsdene-fjernes"},"XSD'ene fjernes"),(0,i.kt)("p",null,"Ved overgang til Open API spesifikasjon, vil XSD'ene som er benyttet til n\xe5, bli fjernet. "),(0,i.kt)("h2",{id:"gjennomf\xf8ring"},"Gjennomf\xf8ring"),(0,i.kt)("p",null,"Tjenestene vil migreres til Open API spesifikasjon p\xe5 litt ulike tidspunkt fremover. M\xe5let er \xe5 ha alle tjenestene over p\xe5 Open API spesifikasjonen f\xf8r sommeren 2022."),(0,i.kt)("p",null,"De f\xf8rste Open API spesifikasjonene vil komme samtidig med ny \xe5rsrevisjon av API'ene. Dette gj\xf8r vi for at konsumentene skal slippe \xe5 gj\xf8re endringer p\xe5 tjenestene flere ganger. F\xf8lgende API'er blir tilgjengelig  med Open API spesifikasjon medio februar:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Avregning API"),(0,i.kt)("li",{parentName:"ul"},"Beregnet Skatt API "),(0,i.kt)("li",{parentName:"ul"},"PGI API"),(0,i.kt)("li",{parentName:"ul"},"Skatteplikt API"),(0,i.kt)("li",{parentName:"ul"},"Summert skattegrunnlag API "),(0,i.kt)("li",{parentName:"ul"},"Tilgjengeligdata API")),(0,i.kt)("p",null,"Vi kommer til \xe5 publisere Open API spesifikasjonene p\xe5 ",(0,i.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/"},"Swaggerhub")),(0,i.kt)("h2",{id:"fremtidig-endringer"},"Fremtidig endringer"),(0,i.kt)("p",null,"Som en del av det generelle l\xf8fter av delingsomr\xe5det, vil det ogs\xe5 komme flere endringer og forbedringer i tiden fremover."),(0,i.kt)("h3",{id:"swaggerhub"},"Swaggerhub"),(0,i.kt)("p",null,"Swaggerhub vil fremover benyttes for \xe5 publisere endringer p\xe5 API'ene. "),(0,i.kt)("h3",{id:"api-gateway"},"API-gateway"),(0,i.kt)("p",null,"Skatteetaten jobber med \xe5 etablere en API-gateway for bedre overv\xe5king og trafikkstyring. Dette er en teknisk endring internt hos Skatteetaten, men kan medf\xf8re endinger for konsumentene, dersom det blir n\xf8dvendig \xe5 endre endpoint for tjenestene."))}d.isMDXComponent=!0}}]);