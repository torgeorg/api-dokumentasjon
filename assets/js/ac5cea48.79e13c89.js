"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k=a.createContext({}),o=function(e){var t=a.useContext(k),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(k.Provider,{value:t},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,k=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(n),d=r,u=m["".concat(k,".").concat(d)]||m[d]||g[d]||l;return n?a.createElement(u,s(s({ref:t},p),{},{components:n})):a.createElement(u,s({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var k in t)hasOwnProperty.call(t,k)&&(i[k]=t[k]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var o=2;o<l;o++)s[o]=n[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const l={title:"Summert skattegrunnlag API",slug:"/summertskattegrunnlag",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},s=void 0,i={unversionedId:"tjenester/summertskattegrunnlag",id:"tjenester/summertskattegrunnlag",title:"Summert skattegrunnlag API",description:"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person.",source:"@site/docs/tjenester/summertskattegrunnlag.md",sourceDirName:"tjenester",slug:"/summertskattegrunnlag",permalink:"/api-dokumentasjon/summertskattegrunnlag",draft:!1,editUrl:"https://github.com/Skatteetaten/api-dokumentasjon/tree/gh-pages/docs/tjenester/summertskattegrunnlag.md",tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Summert skattegrunnlag API",slug:"/summertskattegrunnlag",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Spesifisert summert skattegrunnlag API",permalink:"/api-dokumentasjon/spesifisertsummertskattegrunnlag"},next:{title:"Tilleggsskatt API",permalink:"/api-dokumentasjon/tilleggsskatt"}},k={},o=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"St\xf8ttetjenester",id:"st\xf8ttetjenester",level:2},{value:"Hendelser",id:"hendelser",level:3},{value:"Siste tilgjengelige skatteoppgj\xf8r",id:"siste-tilgjengelige-skatteoppgj\xf8r",level:3},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2},{value:"\xc5rsversjoner",id:"\xe5rsversjoner",level:2},{value:"Informasjonsmodell - skjema",id:"informasjonsmodell---skjema",level:2},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},m=p("Tabs"),g=p("TabItem"),d={toc:o},u="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(u,(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer en oppsummering av formue, gjeld, inntekt og fradrag for en person."),(0,r.kt)(m,{underline:!0,mdxType:"Tabs"},(0,r.kt)(g,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,r.kt)("p",null,"Summert skattegrunnlag API vil endres n\xe5r skattereglene endres, alts\xe5 \xe5rlig. Hvilke felt som er tilgjengelig vil kunne variere etter skattereglene som gjelder for det gitte skatte\xe5ret det sp\xf8rres om data om. Dette vil ikke f\xf8re til ny versjon av API'et med mindre annen semantikk endres."),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:summertskattegrunnlag")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Summert skattegrunnlag API - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/summert-skattegrunnlag-api"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("p",null,"Det tilbys for tiden 2 endepunkter for uthenting av spesifisert summert skattegrunnlag, hvor URL'en har litt ulik oppbygging."),(0,r.kt)("p",null,"Enkelte rettighetspakker er tilrettelagt for ny URL med stadie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://{env}/api/formueinntekt/summertskattegrunnlag/{stadie}/{rettighetspakke}/{inntektsaar}/{personidentifikator}\n")),(0,r.kt)("p",null,"Andre rettighetspakker m\xe5 fremdeles benytter gammel URL uten stadie, men disse vil etter hvert bli tilrettelagt for ny url:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GET https://{env}/api/formueinntekt/summertskattegrunnlag/{rettighetspakke}/{inntektsaar}/{personidentifikator}\n")),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"),(0,r.kt)("th",{parentName:"tr",align:null},"Stadie"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"distribusjon"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"frirettshjelp"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"husbanken"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommuneBoligsosialeFormaal"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommuneForeldrebetaling"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer og utkast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommunePersonligassistanse"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer og utkast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"kommuneLangtidsoppholdInstitusjon"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer og utkast")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"laanekassen"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ldir"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nav"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"udi"),(0,r.kt)("td",{parentName:"tr",align:null},"oppgjoer")))),(0,r.kt)("h2",{id:"st\xf8ttetjenester"},"St\xf8ttetjenester"),(0,r.kt)("h3",{id:"hendelser"},"Hendelser"),(0,r.kt)("p",null,"For \xe5 f\xf8lge med p\xe5 endringer tilbyr vi en ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/hendelser"},"st\xf8ttetjeneste for hendelsesliste"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Skatteoppgj\xf8r hendelser API")),(0,r.kt)("h3",{id:"siste-tilgjengelige-skatteoppgj\xf8r"},"Siste tilgjengelige skatteoppgj\xf8r"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/sistetilgjengeligeskatteoppgjoer"},"Siste tilgjengelige skatteoppgj\xf8r API")," gir informasjon om hva som er seneste periode med data for en skattepliktig."),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/dc560f2e-e5dd-3d8e-9383-eeb0b3085fce"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(g,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("p",null,"For 2015 og 2016 er Svalbard- og fastlandsinformasjon summert sammen. Fra og med 2017 er Svalbard-data skilt ut i svalbardSkjoennsfastsatt og svalbardGrunnlag."),(0,r.kt)("h2",{id:"json"},"JSON"),(0,r.kt)("p",null,"Her er et eksempel p\xe5 respons for inntekts\xe5r 2021 i JSON uten oppgitt stadie."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "21839199217",\n  "inntektsaar": "2021",\n  "skjermet": false,\n  "grunnlag": [\n    {\n      "tekniskNavn": "samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt",\n      "beloep": 762732,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "minstefradragIInntekt",\n      "beloep": 106750,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    }\n  ],\n  "skatteoppgjoersdato": "2022-02-10"\n}\n')),(0,r.kt)("p",null,"Eksempel p\xe5 respons for inntekts\xe5r 2020 med oppgitt stadie 'oppgjoer' i JSON."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "12345678910",\n  "inntektsaar": "2020",\n  "skjermet": false,\n  "grunnlag": [\n    {\n      "tekniskNavn": "samledePaaloepteRenter",\n      "beloep": 779981,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "andreFradragsberettigedeKostnader",\n      "beloep": 59981,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "samletSkattepliktigOverskuddAvUtleieAvFritidseiendom",\n      "beloep": 1609981,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "skattepliktigAvkastningEllerKundeutbytte",\n      "beloep": 1749981,\n      "kategori": [\n        "inntekt"\n      ]\n    }\n  ],\n  "svalbardGrunnlag": [\n    {\n      "tekniskNavn": "samledePaaloepteRenter",\n      "beloep": 779981,\n      "kategori": [\n        "inntektsfradrag"\n      ]\n    },\n    {\n      "tekniskNavn": "samletAndelAvInntektIBoligselskapEllerBoligsameie",\n      "beloep": 849981,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "skattepliktigUtbytteFraAksjerRegistrertIVerdipapirsentralen",\n      "beloep": 1779981,\n      "kategori": [\n        "inntekt"\n      ]\n    },\n    {\n      "tekniskNavn": "skattepliktigAvkastningEllerKundeutbytte",\n      "beloep": 1749981,\n      "kategori": [\n        "inntekt"\n      ]\n    }\n  ],\n  "skatteoppgjoersdato": "2020-02-11",\n  "stadie": "oppgjoer",\n  "registreringstidpunkt": "2020-02-11T16:11:12.985"\n}\n')),(0,r.kt)("p",null,"Flere eksempler p\xe5 responser:"),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(28).Z},"SummertSkattegrunnlag2020.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(5765).Z},"SummertSkattegrunnlag2017.json")),(0,r.kt)("p",null,(0,r.kt)("a",{target:"_blank",href:n(6135).Z},"SummertSkattegrunnlag2016.json")),(0,r.kt)("h2",{id:"xml"},"XML"),(0,r.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<summertSkattegrunnlag xmlns="urn:no:skatteetaten:datasamarbeid:summertskattegrunnlag:v1">\n  <personidentifikator>21839199217</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <grunnlag>\n    <tekniskNavn>samletLoennsinntektMedTrygdeavgiftspliktOgMedTrekkplikt</tekniskNavn>\n    <beloep>762732</beloep>\n    <kategori>inntekt</kategori>\n  </grunnlag>\n  <grunnlag>\n    <tekniskNavn>minstefradragIInntekt</tekniskNavn>\n    <beloep>106750</beloep>\n    <kategori>inntektsfradrag</kategori>\n  </grunnlag>\n  <skatteoppgjoersdato>2022-02-10</skatteoppgjoersdato>\n</summertSkattegrunnlag>\n'))),(0,r.kt)(g,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke treff p\xe5 oppgitt personidentifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-008"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen summert skattegrunnlag funnet p\xe5 oppgitt personidentifikator og inntekts\xe5r.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-009"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SSG-010"),(0,r.kt)("td",{parentName:"tr",align:null},"410"),(0,r.kt)("td",{parentName:"tr",align:null},"Skattegrunnlag finnes ikke lenger."))))),(0,r.kt)(g,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/f78a48e2-8b5c-32fa-90bc-4c0bb8206fef"},"Informasjonsmodell")," i Felles datakatalog. "),(0,r.kt)("p",null,"Obs. Hvis modellene p\xe5 denne siden avviker fra open api spesifikasjonen p\xe5 Swaggerhub, er det open api spesifikasjonen som er mest oppdatert. "),(0,r.kt)("h2",{id:"\xe5rsversjoner"},"\xc5rsversjoner"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\xc5r"),(0,r.kt)("th",{parentName:"tr",align:null},"Informasjonsmodell"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2016"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/summertskattegrunnlag2016"},"Informasjonsmodell for summert skattegrunnlag 2016"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2017"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/summertskattegrunnlag2017"},"Informasjonsmodell for summert skattegrunnlag 2017"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2018"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/summertskattegrunnlag2018"},"Informasjonsmodell for summert skattegrunnlag 2018"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2019"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/summertskattegrunnlag2019"},"Informasjonsmodell for summert skattegrunnlag 2019"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2020"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/summertskattegrunnlag2020"},"Informasjonsmodell for summert skattegrunnlag 2020"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2021"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api-dokumentasjon/summertskattegrunnlag2021"},"Informasjonsmodell for summert skattegrunnlag 2021"))))),(0,r.kt)("h2",{id:"informasjonsmodell---skjema"},"Informasjonsmodell - skjema"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SummertSkattegrunnlag",src:n(1243).Z,width:"721",height:"700"}))),(0,r.kt)(g,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata er s\xf8kbare i Tenor-adapteren \u201cSummert skattegrunnlag\u201d."))))}f.isMDXComponent=!0},6135:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2016-46c812f1a37b92bad3c2809ee6e45d1c.json"},5765:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2017-890987568074b01406b2a3e26182d654.json"},28:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/summertSkattegrunnlag2020-c2cfba917b3e64faeb31d71e64c25cfe.json"},1243:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SummertSkattegrunnlag-c96c9142f05d4b96c9d9b6bc4af1b5f7.png"}}]);