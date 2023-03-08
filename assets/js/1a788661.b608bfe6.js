"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,k=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,g=p["".concat(o,".").concat(u)]||p[u]||m[u]||s;return n?r.createElement(g,l(l({ref:t},k),{},{components:n})):r.createElement(g,l({ref:t},k))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var d=2;d<s;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const s={title:"Bruk av tjenestene",slug:"/bruk",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["API","dokumentasjon"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},l=void 0,i={unversionedId:"om/bruk",id:"om/bruk",title:"Bruk av tjenestene",description:"Overordnet om Skatteetatens delingstjenester.",source:"@site/docs/om/bruk.md",sourceDirName:"om",slug:"/bruk",permalink:"/api-dokumentasjon/bruk",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Bruk av tjenestene",slug:"/bruk",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["API","dokumentasjon"],last_updated:"Des 1, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Kom i gang",permalink:"/api-dokumentasjon/"},next:{title:"Delegere rettigheter i Altinn",permalink:"/api-dokumentasjon/delegering"}},o={},d=[{value:"Oppslagstjenester",id:"oppslagstjenester",level:2},{value:"Hendelser",id:"hendelser",level:2},{value:"Eksempel: nye data",id:"eksempel-nye-data",level:3},{value:"Eksempel: endrede data",id:"eksempel-endrede-data",level:3},{value:"Eksempel: slettede data",id:"eksempel-slettede-data",level:3},{value:"Format",id:"format",level:2},{value:"Bruksm\xf8nster",id:"bruksm\xf8nster",level:2}],k={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Overordnet om Skatteetatens delingstjenester."),(0,a.kt)("p",null,"Bruk av Skatteetatens delingstjenester forutsetter f\xf8lgende:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bruk av ",(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Maskinporten"),"."),(0,a.kt)("li",{parentName:"ul"},"Virksomheten m\xe5 f\xe5 ",(0,a.kt)("a",{parentName:"li",href:"https://www.skatteetaten.no/deling/"},"tilgang")," til tjenesten."),(0,a.kt)("li",{parentName:"ul"},"Dersom virksomheten skal benytte en systemleverand\xf8r, m\xe5 det ",(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/delegering"},"delegeres tilgang i Altinn"),".")),(0,a.kt)("h2",{id:"oppslagstjenester"},"Oppslagstjenester"),(0,a.kt)("p",null,'Skatteetaten deler informasjon med eksterne virksomheter gjennom gjenbrukbare oppslagstjenester for definerte datasett. Minimeringsprinsippet iveretas gjennom at Skatteetaten filtrerer resultatsettet iht. virksomhetens behov ("Rettighetspakke").   '),(0,a.kt)("h2",{id:"hendelser"},"Hendelser"),(0,a.kt)("p",null,"Skatteetaten varsler om endringer i data gjennom bruk av hendelseslister. En hendelse er et varsel om at det er kommet nye data, slettede data eller endrede data. Hendelser er \u201ctynne\u201d, dvs at de ikke inneholder selve dataene. Hendelsen inneholder kun et sekvensnummer, personidentifikator og perioden det har skjedd en hendelse for."),(0,a.kt)("p",null,"Noen virksomheter benytter hendelseslistene for \xe5 f\xf8lge med p\xe5 endringer i data de allerede har hentet gjennom oppslagstjenesten, mens andre \xf8nsker \xe5 f\xf8lge med p\xe5 nye data for et stort antall (eller alle) personer eller virksomheter. For \xe5 st\xf8tte disse bruksm\xf8nstrene publiserer vi hendelser per datatjeneste, som gir l\xf8pende varslinger om at opplysninger knyttet til en person eller virksomhet er endret. Se egen dokumentasjon for ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/hendelser"},"de ulike hendelsene"),"."),(0,a.kt)("p",null,"Der det finnes hendelseslister, skal disse benyttes og data kun hentes p\xe5 nytt n\xe5r det er lag tut en hendelse i hendelseslisten. Vi \xf8nsker ikke at det gj\xf8res periodiske oppslag for \xe5 sjekke om det er endringer i data."),(0,a.kt)("p",null,"Endringer og rettelser i innrapporterte data kan komme lang tid i etterkant. Virksomheter som er avhengige av \xe5 reberegne hvis det kommer endringer b\xf8r benytte hendelseslister for datatypene de benytter for \xe5 oppdage endringer. "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"Eksempel:")," En virksomhet har hentet inntektsmottaker data for en skattepliktig for mars 2017. Virksomheteb \xf8nsker \xe5 reagere hvis det blir endringer i data.\nVirksomheten benytter hendelsesliste for inntektsmottaker for \xe5 f\xf8lge med p\xe5 om det skjer endringer for den skattepliktige for mars 2017.\nI oktober 2017 har hendelseslisten et innslag for den skattepliktige for mars 2017. Virksomheten reagerer ved \xe5 hente oppdaterte data for den skattepliktige for mars 2017.")),(0,a.kt)("h3",{id:"eksempel-nye-data"},"Eksempel: nye data"),(0,a.kt)("p",null,"Summert skattegrunnlag er klart for en skattepliktig for et inntekts\xe5r"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Hendelseslisten for skatteoppgj\xf8r")," vil inneholde en hendelse for den skattepliktige og inntekts\xe5ret. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Summert skattegrunnlag API")," returnerer data hvis man sp\xf8r p\xe5 inntekts\xe5r og skattepliktig fra hendelsen"))),(0,a.kt)("h3",{id:"eksempel-endrede-data"},"Eksempel: endrede data"),(0,a.kt)("p",null,"En arbeidsgiver rapporterer at en skattepliktig har f\xe5tt etterbetalt inntekt for en m\xe5ned. Fra f\xf8r finnes det data for den skattepliktige for denne m\xe5neden."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Hendelseslisten for inntekt")," vil inneholde en hendelse for den skattepliktige og den gitte m\xe5neden. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Inntekt API")," returnerer oppdaterte inntektsdata for den skattepliktige og den gitte m\xe5neden."))),(0,a.kt)("h3",{id:"eksempel-slettede-data"},"Eksempel: slettede data"),(0,a.kt)("p",null,"Et fagsystem i skatteetaten sletter data for en skattepliktig (skjer sjelden, men kan skje ifm feilrettinger eller andre spesielle omstendigheter)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Hendelseslisten for datasettet")," vil inneholde en hendelse for datasettet og perioden. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Datasett API")," returnerer HTTP statuskode 410 og en feilmelding som indikerer at data ikke finnes lenger n\xe5r man sp\xf8r p\xe5 skattepliktig og angitt periode."))),(0,a.kt)("h2",{id:"format"},"Format"),(0,a.kt)("p",null,"Tjenestene er tilgjengelige som REST-tjenester over HTTP, med data p\xe5 formatene JSON (default) og XML.\nDersom man ikke spesifiserer \xf8nsket format f\xe5r man JSON."),(0,a.kt)("h2",{id:"bruksm\xf8nster"},"Bruksm\xf8nster"),(0,a.kt)("p",null,"Det er mange konsumenter av Skatteetatens delingstjenester og det er derfor viktig at hver enkelt virksomhet har et fornuftig og forholdsmessig bruk av tjenestene. "),(0,a.kt)("p",null,"Det medf\xf8rer blant annet:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Det b\xf8r ikke v\xe6re mer enn 5 samtidige kall ("tr\xe5der") for et api fra en virksomhet.'),(0,a.kt)("li",{parentName:"ul"},"Hendelsesliste benyttes som beskrevet ovenfor.")),(0,a.kt)("p",null,"Skatteetaten f\xf8lger med p\xe5 ressursbruk og vil evt. regulere ved behov."))}m.isMDXComponent=!0}}]);