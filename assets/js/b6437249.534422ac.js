"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[7469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),k=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=k(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=k(r),g=a,u=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var k=2;k<i;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5149:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>k});var n=r(7462),a=(r(7294),r(3905));const i={title:"Sikkerhet",slug:"/sikkerhet",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["security","sikkerhet"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},o=void 0,l={unversionedId:"om/sikkerhet",id:"om/sikkerhet",title:"Sikkerhet",description:"Informasjon om n\xf8dvendige sikkerhetsmekanismer, autentisering og autorisasjon.",source:"@site/docs/om/sikkerhet.md",sourceDirName:"om",slug:"/sikkerhet",permalink:"/api-dokumentasjon/sikkerhet",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/om/sikkerhet.md",tags:[{label:"API reference",permalink:"/api-dokumentasjon/tags/api-reference"}],version:"current",frontMatter:{title:"Sikkerhet",slug:"/sikkerhet",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["security","sikkerhet"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Samtykke",permalink:"/api-dokumentasjon/samtykke"},next:{title:"Skjerming av data",permalink:"/api-dokumentasjon/skjerming"}},s={},k=[{value:"Maskinporten",id:"maskinporten",level:2},{value:"Ta kontakt med Digitaliseringsdirektoratet for \xe5 f\xe5 tilgang til Maskinporten",id:"ta-kontakt-med-digitaliseringsdirektoratet-for-\xe5-f\xe5-tilgang-til-maskinporten",level:3},{value:"Klargj\xf8ring fra Skatteetaten",id:"klargj\xf8ring-fra-skatteetaten",level:3},{value:"Klargj\xf8ring fra Virksomheten",id:"klargj\xf8ring-fra-virksomheten",level:3},{value:"Bruke Skatteetatens api&#39;er med token fra Maskinporten",id:"bruke-skatteetatens-apier-med-token-fra-maskinporten",level:3},{value:"Delegere rettigheter i Altinn",id:"delegere-rettigheter-i-altinn",level:3},{value:"Brannmur",id:"brannmur",level:2},{value:"Adresser det m\xe5 \xe5pnes for",id:"adresser-det-m\xe5-\xe5pnes-for",level:3},{value:"Subnett",id:"subnett",level:3}],m={toc:k},d="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Informasjon om n\xf8dvendige sikkerhetsmekanismer, autentisering og autorisasjon."),(0,a.kt)("h2",{id:"maskinporten"},"Maskinporten"),(0,a.kt)("p",null,"Alle Skatteetatens delingstjenester benytter Maskinporten for autentisering av virksomheter for maskin-til-maskin grensesnitt. Det er ikke lengre mulig \xe5 kun benytte virksomhettsertifikat."),(0,a.kt)("p",null,"Digitaliseringsdirektoratet har beskrevet overordnet hvordan API-sikring med maskinporten gj\xf8res. Vi anbefaler alle virksomheter \xe5 sette seg godt inn i dette rammeverket. For \xe5 komme i gang med testing m\xe5 det gj\xf8res noen forberedelser hos virksomheten."),(0,a.kt)("h3",{id:"ta-kontakt-med-digitaliseringsdirektoratet-for-\xe5-f\xe5-tilgang-til-maskinporten"},"Ta kontakt med Digitaliseringsdirektoratet for \xe5 f\xe5 tilgang til Maskinporten"),(0,a.kt)("p",null,"Bestill tilknytning til Maskinporten via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.digdir.no/maskinporten_overordnet"},"Digdir samarbeidsportal")),(0,a.kt)("h3",{id:"klargj\xf8ring-fra-skatteetaten"},"Klargj\xf8ring fra Skatteetaten"),(0,a.kt)("p",null,"S\xe5 snart korrekt tjeneste og rettighetspakke for virksomheten er avklart, vil Skatteetaten melde inn virksomhetens organisasjonsnummer og tilgangen hos Digitaliseringsdirektoratet. "),(0,a.kt)("h3",{id:"klargj\xf8ring-fra-virksomheten"},"Klargj\xf8ring fra Virksomheten"),(0,a.kt)("p",null,"N\xe5r virksomheten har f\xe5tt beskjed at tilgangen (scopet) er opprettet i Maskinporten m\xe5 tilgangen provisjoneres fra den klienten virksomheten skal benytte for \xe5 hente data. Dette gj\xf8res ved \xe5 oppdatere Oauth2 klienten som skal ha tilgangen med det nye scopet, via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.digdir.no/oidc_api_admin_maskinporten"},"ID-porten sitt API for selvbetjening av integrasjoner")," eller via et brukergrensesnitt i samarbeidsportalen. All kommunikasjon mot Maskinporten er sikret med \"server-to-server oauth2\" med bruk av virksomhetssertifikat. For test trenger man et testsertifikat av typen 'signering'. N\xe5r dette er gjort kan man begynne \xe5 bruke skatteetatatens apier."),(0,a.kt)("h3",{id:"bruke-skatteetatens-apier-med-token-fra-maskinporten"},"Bruke Skatteetatens api'er med token fra Maskinporten"),(0,a.kt)("p",null,'All kommunikasjon mellom virksomheten, Maskinporten og Skatteetaten gj\xf8res over HTTPS (TLS). Bruk av REST-api\'er hos Maskinporten er sikret med "server-to-server oauth2", se mer informasjon om dette her: ',(0,a.kt)("a",{parentName:"p",href:"https://docs.digdir.no/oidc_auth_server-to-server-oauth2"},"Digidr oauth2"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overordnet gj\xf8res f\xf8lgende:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"F\xf8rst gj\xf8re et kall til Maskinporten for \xe5 f\xe5 et token som kan brukes mot Skatteetaten. Fremgangsm\xe5te er beskrevet p\xe5 ",(0,a.kt)("a",{parentName:"li",href:"https://docs.digdir.no/docs/Maskinporten/maskinporten_guide_apikonsument#bruke-delegering-som-konsument"},"Digdir sine side for hvordan bruke Maskinporten som konsument"),'. Merk at "Resource" er valgfri og skal ikke settes for Skatteetatens API. Dette medf\xf8rer at audience blir "unspecified" som Skatteetaten forventer.'),(0,a.kt)("li",{parentName:"ol"},"Tokenet legges ved kallet i Authorization header. Tokenet legges ved slik: ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization: Bearer <token>")),(0,a.kt)("li",{parentName:"ol"},"Skatteetaten validerer tokenet og at virksomheten har rett til den informasjonen de pr\xf8ver \xe5 hente (tilgangskontroll)."),(0,a.kt)("li",{parentName:"ol"},"Hvis alt er OK returneres data iht. foresp\xf8rselen.")),(0,a.kt)("h3",{id:"delegere-rettigheter-i-altinn"},"Delegere rettigheter i Altinn"),(0,a.kt)("p",null,"Se egen side for informasjon om ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/delegering"},"hvordan opptre p\xe5 vegne av en annen virksomhet"),"."),(0,a.kt)("h2",{id:"brannmur"},"Brannmur"),(0,a.kt)("p",null,"Hvis man kaller delingstjenestene fra bak en utg\xe5ende brannmur m\xe5 man lage \xe5pninger i brannmuren sin."),(0,a.kt)("h3",{id:"adresser-det-m\xe5-\xe5pnes-for"},"Adresser det m\xe5 \xe5pnes for"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Milj\xf8"),(0,a.kt)("th",{parentName:"tr",align:null},"Host"),(0,a.kt)("th",{parentName:"tr",align:null},"IP"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Test"),(0,a.kt)("td",{parentName:"tr",align:null},"api-test.sits.no"),(0,a.kt)("td",{parentName:"tr",align:null},"159.216.17.148"),(0,a.kt)("td",{parentName:"tr",align:null},"443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Produksjon"),(0,a.kt)("td",{parentName:"tr",align:null},"api.skatteetaten.no"),(0,a.kt)("td",{parentName:"tr",align:null},"159.216.17.168"),(0,a.kt)("td",{parentName:"tr",align:null},"443")))),(0,a.kt)("p",null,"Vi fors\xf8ker \xe5 holde IP statisk, men kan ikke love at det aldri vil komme endringer.\nHvis vi m\xe5 gj\xf8re endringer vil dette bli varslet som en ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/tag_news"},"nyhet")),(0,a.kt)("h3",{id:"subnett"},"Subnett"),(0,a.kt)("p",null,"Hvis man heller \xf8nsker et brannmur oppsett som ikke vil kreve endringer s\xe5 kan man \xe5pne mot hele Skatteetaten sitt subnett for eksterne.\nDette inneb\xe6rer at man \xe5pner mot alle eksternt rettede tjenester Skatteetaten tilbyr (som for eksempel folkeregisteret)."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Milj\xf8"),(0,a.kt)("th",{parentName:"tr",align:null},"Subnett"),(0,a.kt)("th",{parentName:"tr",align:null},"Port"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Preprod milj\xf8 (Test++)"),(0,a.kt)("td",{parentName:"tr",align:null},"159.216.17.128/27"),(0,a.kt)("td",{parentName:"tr",align:null},"443")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Produksjon (Prod)"),(0,a.kt)("td",{parentName:"tr",align:null},"159.216.17.160/28"),(0,a.kt)("td",{parentName:"tr",align:null},"443")))))}p.isMDXComponent=!0}}]);