"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=k(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,g=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var k={};for(var o in t)hasOwnProperty.call(t,o)&&(k[o]=t[o]);k.originalType=e,k[m]="string"==typeof e?e:r,i[1]=k;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>k,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"Inntektsmottakere API",slug:"/api/inntektsmottakere",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Inntekt","Inntektsmottaker","Inntektsmottakere"],keywords:["inntektsmottakere","virksomheter"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},i=void 0,k={unversionedId:"api/inntektsmottakere",id:"api/inntektsmottakere",title:"Inntektsmottakere API",description:"Tjenesten leverer en liste over inntektsmottakere der arbeidsgiver (opplysningspliktig), via a-ordningen, har rapportert pensjonsavtale med pensjonsinnretningen som utf\xf8rer kallet.",source:"@site/docs/api/inntektsmottakere.md",sourceDirName:"api",slug:"/api/inntektsmottakere",permalink:"/api-dokumentasjon/api/inntektsmottakere",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"},{label:"Inntekt",permalink:"/api-dokumentasjon/tags/inntekt"},{label:"Inntektsmottaker",permalink:"/api-dokumentasjon/tags/inntektsmottaker"},{label:"Inntektsmottakere",permalink:"/api-dokumentasjon/tags/inntektsmottakere"}],version:"current",frontMatter:{title:"Inntektsmottakere API",slug:"/api/inntektsmottakere",folder:"api",sidebar:"mydoc_sidebar",datatable:!0,tags:["API","Inntekt","Inntektsmottaker","Inntektsmottakere"],keywords:["inntektsmottakere","virksomheter"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Inntekt API",permalink:"/api-dokumentasjon/api/inntekt"},next:{title:"Mva meldingsoppslysning API",permalink:"/api-dokumentasjon/api/mva_meldingsopplysning"}},o={},s=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"Curl",id:"curl",level:2},{value:"JSON",id:"json",level:2},{value:"Inntektsmottakere",id:"inntektsmottakere",level:2},{value:"Opplysningspliktig",id:"opplysningspliktig",level:3},{value:"Inntektsmottaker",id:"inntektsmottaker",level:3},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),d=p("TabItem"),u={toc:s},g="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(g,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer en liste over inntektsmottakere der arbeidsgiver (opplysningspliktig), via a-ordningen, har rapportert pensjonsavtale med pensjonsinnretningen som utf\xf8rer kallet."),(0,r.kt)(m,{underline:!0,mdxType:"Tabs"},(0,r.kt)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/rettighetspakker"},"Rettighetspakker")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/om/versjoner"},"Versjonering"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:inntektsmottakere")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Inntektsmottakere API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/inntektsmottakere-api"},"Open API spesifikasjonen for tjenesten")," av API'et p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/tekniskspesifikasjon"},"Open API spesifikasjonen")," ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("p",null,"Hvilke data en virksomhet f\xe5r bestemmes av ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/rettighetspakker"},"rettighetspakken"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Egenskaper ved rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"otp"),(0,r.kt)("td",{parentName:"tr",align:null},"Perioden det sp\xf8rres p\xe5 m\xe5 v\xe6re innenfor avtaleperioden. Se ",(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/forutsetningerforbruk"},"Forutsetning for bruk"))))),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/463966c2-0a35-3845-b2a4-9446d36526e4"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(d,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h2",{id:"curl"},"Curl"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 en sp\xf8rring med curl mot tjenesten. Du m\xe5 ha et gyldig maskinportentoken som legges ved som headerer i curl-kommandoen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -v -H "Authorization: Bearer <maskinporten_token>" "https://api-at.sits.no/api/innrapportert/opplysningspliktig/v1/otp/999999999/inntektsmottakere"\n')),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},' {\n     "opplysningspliktig": {\n         "norskIdentifikator": "910996215"\n     },\n     "fraOgMed": "2020-01",\n     "tilOgMed": "2020-08",\n     "inntektsmottaker": [\n         {\n             "personidentifikator": "01012066666"\n         },\n         {\n             "personidentifikator": "01012066667"\n         },\n         {\n             "personidentifikator": "01012066668"\n         },\n         {\n             "personidentifikator": "01012066669"\n         },\n         {\n             "personidentifikator": "01012066670"\n         }\n     ]\n }\n'))),(0,r.kt)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/om/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen data funnet for angitt s\xf8k.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IM-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet."))))),(0,r.kt)(d,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/df55045f-66d6-35c5-bc89-9ec856397951"},"Informasjonsmodell")," i Felles datakatalog."),(0,r.kt)("h2",{id:"inntektsmottakere"},"Inntektsmottakere"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Felt"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fraOgMed"),(0,r.kt)("td",{parentName:"tr",align:null},"Startm\xe5ned for avtalen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tilOgMed"),(0,r.kt)("td",{parentName:"tr",align:null},"Sluttm\xe5ned for avtalen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"skjermet"),(0,r.kt)("td",{parentName:"tr",align:null},"Settes til sann/true dersom informasjonssettet er skjermet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"link"),(0,r.kt)("td",{parentName:"tr",align:null},"Teknisk felt for h\xe5ndtering av store datasett.  Dette feltet er ikke i bruk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"opplysningspliktig"),(0,r.kt)("td",{parentName:"tr",align:null},"Den opplysningspliktige som listen gjelder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"inntektsmottaker"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntektsmottaker oppgitt av opplysningspliktig")))),(0,r.kt)("h3",{id:"opplysningspliktig"},"Opplysningspliktig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Felt"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"norskIdentifikator"),(0,r.kt)("td",{parentName:"tr",align:null},"Opplysningspliktiges organisasjonsnummer, f\xf8dsels- eller d-nummer")))),(0,r.kt)("h3",{id:"inntektsmottaker"},"Inntektsmottaker"),(0,r.kt)("p",null,"Det utleveres personidentifikator for inntektsmottakere som er rapportert av opplysningspliktig i minst en av periodene det sp\xf8rres p\xe5."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Felt"),(0,r.kt)("th",{parentName:"tr",align:null},"Beskrivelse"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"personidentifikator"),(0,r.kt)("td",{parentName:"tr",align:null},"Inntektsmottakerens f\xf8dsels- eller d-nummer")))),(0,r.kt)("h2",{id:"informasjonsmodell---skjema"},"Informasjonsmodell - skjema"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"inntektsmottakere",src:n(3587).Z,width:"964",height:"695"}))),(0,r.kt)(d,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata for tjenesten kan finnes i ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/test/tenor"},"Tenor"),' med s\xf8ket for "Inntekt A-ordningen", og denne kan ogs\xe5 med s\xf8k for "Arbeidsforhold".'))))}f.isMDXComponent=!0},3587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/inntektsmottakere-070a2e530699f5b22121799f15cbdf57.png"}}]);