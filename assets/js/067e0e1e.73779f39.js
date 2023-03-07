"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[3051],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,g=p["".concat(d,".").concat(u)]||p[u]||m[u]||l;return n?r.createElement(g,i(i({ref:t},k),{},{components:n})):r.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9434:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"Feil",slug:"/feil",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Feilh\xe5ndtering"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},i=void 0,o={unversionedId:"om/feil",id:"om/feil",title:"Feil",description:"Feilh\xe5ndtering i Skatteetatens delingstjenester.",source:"@site/docs/om/feil.md",sourceDirName:"om",slug:"/feil",permalink:"/api-dokumentasjon/feil",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/om/feil.md",tags:[{label:"Feilh\xe5ndtering",permalink:"/api-dokumentasjon/tags/feilhandtering"}],version:"current",frontMatter:{title:"Feil",slug:"/feil",folder:"om",sidebar:"mydoc_sidebar",datatable:!0,tags:["Feilh\xe5ndtering"],keywords:["datatables","tables","grids","markdown","multimarkdown","jquery plugins"],last_updated:"Nov 24, 2022",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Delegere rettigheter i Altinn",permalink:"/api-dokumentasjon/delegering"},next:{title:"Rettighetspakker",permalink:"/api-dokumentasjon/rettighetspakker"}},d={},s=[{value:"HTTP statuskoder",id:"http-statuskoder",level:2},{value:"Feilmeldinger",id:"feilmeldinger",level:2},{value:"Felles feilkoder",id:"felles-feilkoder",level:3},{value:"Andre generelle feil",id:"andre-generelle-feil",level:2},{value:"Melde feil",id:"melde-feil",level:2}],k={toc:s},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Feilh\xe5ndtering i Skatteetatens delingstjenester."),(0,a.kt)("h2",{id:"http-statuskoder"},"HTTP statuskoder"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP kode"),(0,a.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200 OK"),(0,a.kt)("td",{parentName:"tr",align:null},"Henting av data gikk bra, og man f\xe5r data i JSON eller XML format")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"400 Bad request"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i sp\xf8rring. Applikasjonen vil gi en detaljert feilmelding p\xe5 norsk for hva som er feil med sp\xf8rring")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,a.kt)("td",{parentName:"tr",align:null},"Autorisasjoner som trengs for \xe5 bruke tjenesten mangler")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,a.kt)("td",{parentName:"tr",align:null},"Ikke Autentisert")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,a.kt)("td",{parentName:"tr",align:null},"Applikasjonen vil gi en detaljert feilmelding p\xe5 norsk for hva som ikke ble funnet. Kan ogs\xe5 bety at man bruker feil adresse for tjenesten (i s\xe5 fall vil man f\xe5 en standard '404 NOT FOUND' og ikke et svar fra applikasjonen)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500 Internal Server Error"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil p\xe5 server side, for eksempel at en underliggende datakilde ikke svarer. Kontakt Skatteetatens kundeservice hvis feilen vedvarer")))),(0,a.kt)("h2",{id:"feilmeldinger"},"Feilmeldinger"),(0,a.kt)("p",null,"Som hovedregel vil feilmeldinger fra tjenestene v\xe6re p\xe5 f\xf8lgende format i JSON:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'  {\n  "kode": "BSA-006",\n  "melding": "Fant ikke beregnet skatt for gitt inntekts\xe5r og identifikator",\n  "korrelasjonsid": "13a865f5-28f9-47db-9abd-ab78977c79fe"\n  }\n')),(0,a.kt)("p",null,"Dersom ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept"),"-header er satt til ",(0,a.kt)("inlineCode",{parentName:"p"},"application/xml")," vil en eventuell feilmelding v\xe6re i XML:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<feil xmlns="urn:no:skatteetaten:datasamarbeid:feil:v1">\n   <kode>ARBEIDSFORHOLD-003</kode>\n   <melding>Fant ingen aktivt arbeidsforhold mellom angitt arbeidstaker og angitt arbeidsgiver</melding>\n   <korrelasjonsid>a621a996-315d-4b8a-ac6c-6239e67f03e7</korrelasjonsid>\n</feil>\n')),(0,a.kt)("p",null,"Ved feilrapportering er spesielt ",(0,a.kt)("inlineCode",{parentName:"p"},"korrelasjonsid")," nyttig dersom den er tilstede, men rapporter gjerne hele feilmeldingen. For \xf8yeblikket vil ikke alle applikasjoner ha feltene ",(0,a.kt)("inlineCode",{parentName:"p"},"applikasjon")," og ",(0,a.kt)("inlineCode",{parentName:"p"},"korrelasjonsid"),"."),(0,a.kt)("h3",{id:"felles-feilkoder"},"Felles feilkoder"),(0,a.kt)("p",null,"Applikasjonene har noen feilkoder som er felles. De fleste av disse (alle som har HTTP status 500) skal i en normalsituasjon ikke forekomme for brukere av tjenestene. Feilmeldingen vil kunne variere selv om samme feilkode returneres. Dette er for \xe5 kunne gi en s\xe5 presis beskrivelse av feilen som mulig."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"HTTP status"),(0,a.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,a.kt)("th",{parentName:"tr",align:null},"Feilmelding"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-001"),(0,a.kt)("td",{parentName:"tr",align:null},"Det var en uventet feil p\xe5 tjenesten. Vennligst ta kontakt med brukerst\xf8tte, med applikasjon og korrelasjonsid fra denne meldingen!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-002"),(0,a.kt)("td",{parentName:"tr",align:null},"Den forespurte URLen svarer ikke til et gyldig endepunkt")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-003"),(0,a.kt)("td",{parentName:"tr",align:null},"Den forespurte informasjonen er for \xf8yeblikket utilgjengelig, vennligst pr\xf8v igjen senere! Dersom problemet vedvarer, ta kontakt med brukerst\xf8tte!")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-004"),(0,a.kt)("td",{parentName:"tr",align:null},"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-005"),(0,a.kt)("td",{parentName:"tr",align:null},"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-006"),(0,a.kt)("td",{parentName:"tr",align:null},"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-007"),(0,a.kt)("td",{parentName:"tr",align:null},"Det skjedde en feil i forbindelse med intern autentisering i Skatteetaten")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"403"),(0,a.kt)("td",{parentName:"tr",align:null},"DAS-008"),(0,a.kt)("td",{parentName:"tr",align:null},"Du er ikke autorisert for tilgang til den forespurte ressursen.")))),(0,a.kt)("h2",{id:"andre-generelle-feil"},"Andre generelle feil"),(0,a.kt)("p",null,"I noen tilfeller, for eksempel dersom foresp\xf8rselen n\xe5r en tjeneste, vil ikke feilmeldingen ha formatet over. I tabellen under har vi listet opp noen vanlige feilsituasjoner der dette kan oppst\xe5."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feil"),(0,a.kt)("th",{parentName:"tr",align:null},"Tolkning"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"fatal alert: handshake_failure  (eller annen TLS feilmelding)"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i klientsertifikat autentisering. Se ",(0,a.kt)("a",{parentName:"td",href:"/api-dokumentasjon/sikkerhet"},"dokumentasjon om sikkerhet"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unknown instance. ID=8ac2..."),(0,a.kt)("td",{parentName:"tr",align:null},"Foresp\xf8rselen er gjort mot en ugyldig URL som ikke svarer til noen tjeneste.")))),(0,a.kt)("h2",{id:"melde-feil"},"Melde feil"),(0,a.kt)("p",null,"Kontakt oss gjennom v\xe5rt ",(0,a.kt)("a",{parentName:"p",href:"https://www.skatteetaten.no/deling/kontakt/"},"verkt\xf8y for brukerst\xf8tte")," hvis du opplever vedvarende feil med tjenestene v\xe5re.\nApplikasjon og korrelasjonsid fra feilmelding m\xe5 inkluderes i henvendelser."))}m.isMDXComponent=!0}}]);