"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[5128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),o=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(k.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),u=r,g=d["".concat(k,".").concat(u)]||d[u]||m[u]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var k in t)hasOwnProperty.call(t,k)&&(s[k]=t[k]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},444:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={title:"Skattepliktig API",slug:"/skattepliktig",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["fastsetting","skattepliktig"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,s={unversionedId:"tjenester/skattepliktig",id:"tjenester/skattepliktig",title:"Skattepliktig API",description:"Tjenesten leverer informasjon om navn og adresse for skattepliktige personer.",source:"@site/docs/tjenester/skattepliktig.md",sourceDirName:"tjenester",slug:"/skattepliktig",permalink:"/api-dokumentasjon/skattepliktig",draft:!1,tags:[{label:"API reference",permalink:"/api-dokumentasjon/tags/api-reference"}],version:"current",frontMatter:{title:"Skattepliktig API",slug:"/skattepliktig",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API reference"],keywords:["fastsetting","skattepliktig"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Skatteplikt API",permalink:"/api-dokumentasjon/skatteplikt"},next:{title:"Spesifisert summert skattegrunnlag API",permalink:"/api-dokumentasjon/spesifisertsummertskattegrunnlag"}},k={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjeneste",id:"st\xf8ttetjeneste",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),u={toc:o},g="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(g,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer informasjon om navn og adresse for skattepliktige personer."),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:skattepliktig")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattepliktig API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/skattepliktig-api"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distribusjon")))),(0,r.kt)("h2",{id:"st\xf8ttetjeneste"},"St\xf8ttetjeneste"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skattepliktig hendelser API")),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/6ff73921-6666-3e8f-9091-423082b0bfcc"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 legge sertifikat og n\xf8kkel som parametre til curl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-test.sits.no/api/part/skattepliktig/distribusjon/18018188888"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{  \n   "person":{  \n      "personidentifikator":"18018188888",\n      "navn":{  \n         "fornavn":"OLA",\n         "mellomnavn": "KALED",\n         "etternavn":"NORDMANN"\n      },\n      "bostedsadresse":{  \n         "adresse1":"NORD-STATLAND 411 \xc5",\n         "tilleggsadresse":"c/o Per Post",\n         "postnummer":"1234",\n         "kommunenummer":"1749",\n         "registreringsdato":"2017-01-24"\n      },\n      "postadresse":{  \n         "adresse1":"Ole Danviks gate 10",\n         "adresse2":"H0101",\n         "adresse3":"1234 Oslo",\n          "land":{\n             "landnummerDsf":"0",\n             "landkodeIsoAlfa2":"NO"\n          },\n         "registreringsdato":"2018-01-20"\n      },\n      "hjemlandsadresse":{  \n         "adresse1":"Kaled Dome 1337 Kaalann, Skaro",\n         "adresse2":"Madrid",\n         "adresse3":"SPANIA",\n         "land":{\n            "landnummerDsf":"34",\n            "landkodeIsoAlfa2":"ES"\n         },\n         "registreringsdato":"2016-08-01"\n      },\n      "doedsdato" :"2018-04-30",\n      "klientadresse" :false,\n      "utenFastBopel" :false\n   },\n   "skjermet":false\n}\n')),(0,r.kt)("h2",{id:"xml"},"XML"),(0,r.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(9660).Z},"skattepliktig.xml (eksempel)")," (vanlig)"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(2982).Z},"skattepliktig_skjermet.xml (eksempel)")," (skjermet person)"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(1452).Z},"skattepliktig_skjermet_adresse.xml (eksempel)")," (person som bor p\xe5 institusjon med adresse-skjerming)"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(5663).Z},"skattepliktig_skjermet_bostedloes.xml (eksempel)")," (person som er bostedsl\xf8s)")),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen treff p\xe5 oppgitt personidentifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen skattepliktig funnet med oppgitt personidentifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SKATTEPLIKTIG-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null," ",(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/62484725-bcff-34e9-b0cd-cf51b7a99908"},"Informasjonsmodell")," i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata for denne tjenesten er s\xf8kbare i Tenor-adapter \u201dFolkeregister\u201d."))))}f.isMDXComponent=!0},9660:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/skattepliktig-7dac5af426717eee804fa7b2621889dc.xml"},2982:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/skattepliktig_skjermet-e2ba0f9a2901b608b97cf16061a3d5d9.xml"},1452:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/skattepliktig_skjermet_adresse-cfdd800040e78111f7594aedc21ea248.xml"},5663:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/skattepliktig_skjermet_bostedloes-d745dc604f3d6909079bf11d3316a802.xml"}}]);