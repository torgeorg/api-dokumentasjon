"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[8081],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},k=Object.keys(e);for(a=0;a<k.length;a++)n=k[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var k=Object.getOwnPropertySymbols(e);for(a=0;a<k.length;a++)n=k[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,k=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=i(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||k;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var k=n.length,l=new Array(k);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var i=2;i<k;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>k,metadata:()=>o,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const k={title:"Trukket kildeskatt p\xe5 l\xf8nn API",slug:"/trukketkildeskattpaaloenn",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,o={unversionedId:"tjenester/trukketkildeskattpaaloenn",id:"tjenester/trukketkildeskattpaaloenn",title:"Trukket kildeskatt p\xe5 l\xf8nn API",description:"Tjenesten leverer opplysninger om trukket kildeskatt p\xe5 l\xf8nn for personer i kildeskatt p\xe5 l\xf8nn ordningen.",source:"@site/docs/tjenester/trukketkildeskattpaaloenn.md",sourceDirName:"tjenester",slug:"/trukketkildeskattpaaloenn",permalink:"/api-dokumentasjon/trukketkildeskattpaaloenn",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Trukket kildeskatt p\xe5 l\xf8nn API",slug:"/trukketkildeskattpaaloenn",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["selvangivelse","skattemelding","SummertSkattegrunnlag","inntekt","formue"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Tjenestepensjonsavtale API",permalink:"/api-dokumentasjon/tjenestepensjonsavtale"},next:{title:"Tenor testdatas\xf8k",permalink:"/api-dokumentasjon/tenor"}},s={},i=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"Rettighetspakker",id:"rettighetspakker",level:2},{value:"Datakatalog",id:"datakatalog",level:2},{value:"JSON",id:"json",level:4},{value:"XML",id:"xml",level:4},{value:"Tenor testdatas\xf8k",id:"tenor-testdatas\xf8k",level:2}],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},d=p("Tabs"),m=p("TabItem"),u={toc:i},g="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("summary",null,"Tjenesten leverer opplysninger om trukket kildeskatt p\xe5 l\xf8nn for personer i kildeskatt p\xe5 l\xf8nn ordningen."),(0,r.kt)(d,{underline:!0,mdxType:"Tabs"},(0,r.kt)(m,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,r.kt)("h2",{id:"scope"},"Scope"),(0,r.kt)("p",null,"F\xf8lgende scope skal benyttes ved autentisering i Maskinporten: ",(0,r.kt)("inlineCode",{parentName:"p"},"skatteetaten:trukketkildeskattpaaloenn")),(0,r.kt)("h2",{id:"delegering"},"Delegering"),(0,r.kt)("p",null,"Tilgang til denne tjenesten kan delegeres i Altinn, f.eks. dersom leverand\xf8r benyttes for den tekniske oppkoblingen. S\xf8k opp f\xf8lgende tjeneste i Altinn for \xe5 delegere tilgangen: ",(0,r.kt)("inlineCode",{parentName:"p"},"Trukket kildeskatt p\xe5 l\xf8nn - P\xe5 vegne av")),(0,r.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/trukketkildeskattpaaloenn-api/"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,r.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv."),(0,r.kt)("h2",{id:"rettighetspakker"},"Rettighetspakker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Navn p\xe5 rettighetspakke"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssb")))),(0,r.kt)("h2",{id:"datakatalog"},"Datakatalog"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/dataservices/06542c2f-0e62-34ba-87d9-b95e61f1de09"},"Datatjenestebeskrivelse")," i Felles datakatalog.")),(0,r.kt)(m,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,r.kt)("h4",{id:"json"},"JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "07088730296",\n  "inntektsaar": 2021,\n  "skjermet": false,\n  "trekkinformasjonPerMaaned": [\n    {\n      "maaned": "2021-01",\n      "grunnlagForSkattetrekk": 63427,\n      "skattetrekk": 15856,\n      "samletRapportertLoennsinntekt": 63427\n    },\n    {\n      "maaned": "2021-02",\n      "grunnlagForSkattetrekk": 36538,\n      "skattetrekk": 9134,\n      "samletRapportertLoennsinntekt": 36538\n    },\n    {\n      "maaned": "2021-03",\n      "grunnlagForSkattetrekk": 33575,\n      "skattetrekk": 8225,\n      "samletRapportertLoennsinntekt": 33575\n    },\n    {\n      "maaned": "2021-04",\n      "grunnlagForSkattetrekk": 15109,\n      "skattetrekk": 3701,\n      "samletRapportertLoennsinntekt": 15109\n    },\n    {\n      "maaned": "2021-05",\n      "grunnlagForSkattetrekk": 47487,\n      "skattetrekk": 11744,\n      "samletRapportertLoennsinntekt": 47487\n    },\n    {\n      "maaned": "2021-06",\n      "grunnlagForSkattetrekk": 32380,\n      "skattetrekk": 8037,\n      "samletRapportertLoennsinntekt": 32380\n    },\n    {\n      "maaned": "2021-07",\n      "grunnlagForSkattetrekk": 26774,\n      "skattetrekk": 6674,\n      "samletRapportertLoennsinntekt": 26774\n    },\n    {\n      "maaned": "2021-08",\n      "grunnlagForSkattetrekk": 26031,\n      "skattetrekk": 6377,\n      "samletRapportertLoennsinntekt": 26031\n    },\n    {\n      "maaned": "2021-09",\n      "grunnlagForSkattetrekk": 40809,\n      "skattetrekk": 10000,\n      "samletRapportertLoennsinntekt": 40809\n    },\n    {\n      "maaned": "2021-10",\n      "grunnlagForSkattetrekk": 43997,\n      "skattetrekk": 10884,\n      "samletRapportertLoennsinntekt": 43997\n    },\n    {\n      "maaned": "2021-11",\n      "grunnlagForSkattetrekk": 33590,\n      "skattetrekk": 8502,\n      "samletRapportertLoennsinntekt": 33590\n    },\n    {\n      "maaned": "2021-12",\n      "grunnlagForSkattetrekk": 43633,\n      "skattetrekk": 10907,\n      "samletRapportertLoennsinntekt": 43633\n    }\n  ]\n}\n')),(0,r.kt)("h4",{id:"xml"},"XML"),(0,r.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,r.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,r.kt)("inlineCode",{parentName:"p"},"application/xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<?xml version='1.0' encoding='UTF-8'?>\n<trukketKildeskattPaaLoenn xmlns=\"urn:no:skatteetaten:datasamarbeid:TrukketKildeskattPaaLoenn:v1\">\n  <personidentifikator>25860299472</personidentifikator>\n  <inntektsaar>2021</inntektsaar>\n  <skjermet>false</skjermet>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-01</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-02</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-03</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-04</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-05</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-06</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-07</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-08</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-09</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-10</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-11</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n  <trekkinformasjonPerMaaned>\n    <maaned>2021-12</maaned>\n    <grunnlagForSkattetrekk>10000</grunnlagForSkattetrekk>\n    <skattetrekk>2500</skattetrekk>\n    <samletRapportertLoennsinntekt>10000</samletRapportertLoennsinntekt>\n  </trekkinformasjonPerMaaned>\n</trukketKildeskattPaaLoenn>\n"))),(0,r.kt)(m,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,r.kt)("p",null,"Se egen side for generell info om ",(0,r.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,r.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,r.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,r.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-001"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-002"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Uventet feil i et bakenforliggende system.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-003"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ukjent url benyttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-004"),(0,r.kt)("td",{parentName:"tr",align:null},"401"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-005"),(0,r.kt)("td",{parentName:"tr",align:null},"403"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autorisering.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-006"),(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-007"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ingen kildeskatt funnet p\xe5 oppgitt gitt inntekts\xe5r og identifikator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-008"),(0,r.kt)("td",{parentName:"tr",align:null},"406"),(0,r.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TKL-009"),(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"Ikke treff p\xe5 oppgitt personidentifikator."))))),(0,r.kt)(m,{headerText:"Informasjonsmodell",itemKey:"itemKey-4",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://data.norge.no/informationmodels/2ac42f82-6c35-3011-be6d-3af931db02bd"},"Informasjonsmodell")," i Felles datakatalog. ")),(0,r.kt)(m,{headerText:"Test",itemKey:"itemKey-5",mdxType:"TabItem"},(0,r.kt)("h2",{id:"tenor-testdatas\xf8k"},"Tenor testdatas\xf8k"),(0,r.kt)("p",null,"Testdata er s\xf8kbare i Tenor-adapteren \u201cSummert skattegrunnlag\u201d med egenskap \u201cKildeskatt p\xe5 l\xf8nn\u201d."))))}f.isMDXComponent=!0}}]);