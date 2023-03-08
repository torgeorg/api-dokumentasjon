"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,k=s(e,["components","mdxType","originalType","parentName"]),p=d(n),g=r,u=p["".concat(o,".").concat(g)]||p[g]||m[g]||l;return n?a.createElement(u,i(i({ref:t},k),{},{components:n})):a.createElement(u,i({ref:t},k))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={title:"Skattemelding API",slug:"/skattemelding",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["skattemelding"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,s={unversionedId:"tjenester/skattemelding",id:"tjenester/skattemelding",title:"Skattemelding API",description:"Tjenesten leverer informasjon som fremkommer i skattemelding for en person.",source:"@site/docs/tjenester/skattemelding.md",sourceDirName:"tjenester",slug:"/skattemelding",permalink:"/api-dokumentasjon/skattemelding",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Skattemelding API",slug:"/skattemelding",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["skattemelding"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Siste tilgjengelige skatteoppgj\xf8r API",permalink:"/api-dokumentasjon/sistetilgjengeligeskatteoppgjoer"},next:{title:"Skattemelding upersonlig API",permalink:"/api-dokumentasjon/skattemeldingupersonlig"}},o={},d=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"\xc5rsversjoner",id:"\xe5rsversjoner",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],k=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},p=k("Tabs"),m=k("TabItem"),g={toc:d},u="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer informasjon som fremkommer i skattemelding for en person."),(0,r.kt)(p,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,r.kt)("p",null,"Obs. Skattemelding-api f\xf8lger ikke de generelle reglene for versjonering. Skattemelding-api har en egen versjon pr inntekts\xe5r. "),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:skattemelding")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattemelding API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattemelding-api"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi to ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattemelding utkast hendelser API")," og ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattemelding fastsatt hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/899c9a8d-0778-3472-9654-f6acd4e7f9ff"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 et kall med curl mot tjenesten for \xe5 hente fastsatt skattemelding. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til curl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/formueinntekt/skattemelding/fastsatt/ssb/2018/05086900124"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "skjermet": false,\n  "registreringstidspunkt": "2022-02-10T14:47:12.249+01:00",\n  "personidentifikator": "16922048030",\n  "inntektsaar": "2021",\n  "bankLaanOgForsikring": {\n    "forsikring": {\n      "livsforsikring": [\n        {\n          "id": "72540f62c52341999c5340327baa4568f521aee1",\n          "livsforsikringsselskapetsNavn": "DY PSINDIG UFRUKTBAR LEOPARD ASA",\n          "livsforsikringsselskapetsOrganisasjonsnummer": "310091995",\n          "forsikringsnummer": "762724741",\n          "avkastningAvKapitalforsikringsavtale": {\n            "beloep": 139013.0\n          },\n          "gjenkjoepsverdiAvKapitalforsikringsavtale": {\n            "beloep": 8109780.0\n          }\n        }\n      ]\n    },\n    "konto": [\n      {\n        "id": "8e0e4f87a91c40e660720bdc313bd83efdaf354e",\n        "bankensNavn": "UNGT SOSIAL ISBJ\xd8RN SA",\n        "organisasjonsnummer": "313032604",\n        "kontonummer": "96702145306",\n        "innskudd": {\n          "beloep": 121471.0\n        },\n        "opptjenteRenter": {\n          "beloep": 2429.0\n        }\n      }\n    ]\n  },\n  "arbeidTrygdOgPensjon": {\n    "loennOgTilsvarendeYtelser": {\n      "arbeidsgiver": [\n        {\n          "id": "e83af408065bad1e2cd32afc114c837deee9486a",\n          "navn": "PRESIS TYPISK TIGER AS",\n          "samledeYtelserFraArbeidsgiverPerBehandlingsart": [\n            {\n              "id": "4109138e9208ce98add8b1eb78f8ed9419a47899",\n              "beloep": {\n                "beloep": 52260.0\n              },\n              "behandlingsart": "LONN"\n            },\n            {\n              "id": "278a1b82176fb19892c271994dc148bd27419f2d",\n              "beloep": {\n                "beloep": 6000.0\n              },\n              "behandlingsart": "EL_KOMMUNIKASJON"\n            }\n          ],\n          "organisasjonsnummer": "313994678"\n        }\n      ],\n      "avkortetFordelVedElektroniskKommunikasjon": [\n        {\n          "id": "61b00ee66af66f5b824a64828b771c12da1a7c88",\n          "beloep": {\n            "beloep": 4392\n          }\n        }\n      ]\n    },\n    "minstefradragOgKostnader": [\n      {\n        "id": "MINSTEFRADRAG_OG_KOSTNADER_KNYTTET_TIL_ARBEID_OG_ANNEN_INNTEKT",\n        "minstefradragIInntekt": {\n          "fradragsberettigetBeloep": {\n            "beloep": 31800\n          },\n          "beloepUtenHensynTilValgtPrioritertFradragstype": {\n            "beloep": 31800\n          }\n        }\n      }\n    ]\n  },\n  "opprettetDato": "2022-02-10T13:47:11.993+01:00"\n}\n'))),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen skattemelding funnet p\xe5 oppgitt gitt inntekts\xe5r og identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-009"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen person funnet med oppgitt identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SM-010"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Skattemeldingen finnes ikke lenger."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/eb60da4f-d6b2-3564-b3a5-e31e25da7538"},"Informasjonsmodell")," i Felles datakatalog."),(0,r.kt)("p",null,"Obs. Hvis modellene p\xe5 denne siden avviker fra open api spesifikasjonen p\xe5 Swaggerhub, er det open api spesifikasjonen som er mest oppdatert."),(0,r.kt)("p",null,"Skattemeldingtjenesten tilbyr et utvalg fra skattemeldingen tilpasset for deling.  "),(0,r.kt)("h2",{id:"\xe5rsversjoner"},"\xc5rsversjoner"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xc5r"),(0,r.kt)("th",{parentName:"tr",align:null},"Informasjonsmodell"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/skattemelding2018"},"Informasjonsmodell for skattemelding 2018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2019"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/skattemelding2019"},"Informasjonsmodell for skattemelding 2019")))))),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata er s\xf8kbare i Tenor-adapter \u201cSkattemelding\u201d.  "))))}f.isMDXComponent=!0}}]);