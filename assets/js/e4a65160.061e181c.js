"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[6210],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},g=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),k=p(n),m=a,u=k["".concat(o,".").concat(m)]||k[m]||d[m]||i;return n?r.createElement(u,l(l({ref:t},g),{},{components:n})):r.createElement(u,l({ref:t},g))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[k]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4678:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Siste tilgjengelige skatteoppgj\xf8r API",slug:"/sistetilgjengeligeskatteoppgjoer",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["tilgjengeligdata","skattegrunnlag"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},l=void 0,s={unversionedId:"tjenester/sistetilgjengeligeskatteoppgjoer",id:"tjenester/sistetilgjengeligeskatteoppgjoer",title:"Siste tilgjengelige skatteoppgj\xf8r API",description:"Tjenesten leverer informasjon om siste inntekts\xe5r det foreligger skatteoppgj\xf8r p\xe5 for en person.",source:"@site/docs/tjenester/sistetilgjengeligeskatteoppgjoer.md",sourceDirName:"tjenester",slug:"/sistetilgjengeligeskatteoppgjoer",permalink:"/api-dokumentasjon/sistetilgjengeligeskatteoppgjoer",draft:!1,tags:[{label:"API",permalink:"/api-dokumentasjon/tags/api"}],version:"current",frontMatter:{title:"Siste tilgjengelige skatteoppgj\xf8r API",slug:"/sistetilgjengeligeskatteoppgjoer",folder:"tjenester",sidebar:"mydoc_sidebar",datatable:!0,tags:["API"],keywords:["tilgjengeligdata","skattegrunnlag"],last_updated:"Mar 6, 2023",hide_table_of_contents:!0},sidebar:"docs",previous:{title:"Restanser API",permalink:"/api-dokumentasjon/restanser"},next:{title:"Skattemelding API",permalink:"/api-dokumentasjon/skattemelding"}},o={},p=[{value:"Scope",id:"scope",level:2},{value:"Delegering",id:"delegering",level:2},{value:"Teknisk spesifikasjon",id:"teknisk-spesifikasjon",level:2},{value:"JSON",id:"json",level:2},{value:"XML",id:"xml",level:2}],g=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},k=g("Tabs"),d=g("TabItem"),m={toc:p},u="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("summary",null,"Tjenesten leverer informasjon om siste inntekts\xe5r det foreligger skatteoppgj\xf8r p\xe5 for en person."),(0,a.kt)(k,{underline:!0,mdxType:"Tabs"},(0,a.kt)(d,{headerText:"Om tjenesten",itemKey:"itemKey-1",default:!0,mdxType:"TabItem"},(0,a.kt)("p",null,"For data som er tilgjengelige p\xe5 uforutsigbare tidspunkt tilbyr vi en tjeneste for \xe5 sjekke hvilke data som er tilgjengelig for en skattepliktig. Tilgjengeligdata API returnerer periode for \u201csiste tilgjengelige data\u201d for den skattepliktige. Tjenesten er spesielt nyttig for virksomheter som trenger samtykke for \xe5 hente ut data. Tilgjengeligdata Api brukes f\xf8r samtykke innhentes, for \xe5 sikre at man ber om samtykke til seneste periode Skatteetaten har data for."),(0,a.kt)("p",null,"Eksempler p\xe5 slike data er Spesifisert summert skattegrunnlag API og Summert skattegrunnlag  API, hvor det kan variere med flere m\xe5neder n\xe5r det kommer data for et nytt inntekts\xe5r (fordi forskjellige skattepliktige har forskjellige meldefrister, skattepliktig kan s\xf8ke om utsettelser, etc)."),(0,a.kt)("p",null,"For generell informasjon om tjenestene se egne sider om:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/bruk"},"Bruk av tjenestene")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/sikkerhet"},"Sikkerhetsmekansimer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/rettighetspakker"},"Rettighetspakker")," "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/feil"},"Feilh\xe5ndtering")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api-dokumentasjon/versjoner"},"Versjonering"))),(0,a.kt)("h2",{id:"scope"},"Scope"),(0,a.kt)("p",null,"Man trenger ikke eget scope for denne tjenesten, siden den benytter samme scope som relaterte oppslagstjenester: ",(0,a.kt)("inlineCode",{parentName:"p"},"skatteetaten:summertskattegrunnlag")," og ",(0,a.kt)("inlineCode",{parentName:"p"},"skatteetaten:spesifisertsummertskattegrunnlag")),(0,a.kt)("h2",{id:"delegering"},"Delegering"),(0,a.kt)("p",null,"Tilgang til hendelseslister delegeres i Altinn n\xe5r man delegerer oppslagstjenesten."),(0,a.kt)("h2",{id:"teknisk-spesifikasjon"},"Teknisk spesifikasjon"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://app.swaggerhub.com/apis/Skatteetaten_Deling/tilgjengelig-data-api"},"Open API spesifikasjon")," ligger p\xe5 SwaggerHub."),(0,a.kt)("p",null,"I Open API spesifikasjonen ligger URL'er til tjenesten, beskrivelsen av parameterene, endepunkter osv.")),(0,a.kt)(d,{headerText:"Eksempler",itemKey:"itemKey-2",mdxType:"TabItem"},(0,a.kt)("h2",{id:"json"},"JSON"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "personidentifikator": "07078600378",\n  "ressursId": "skattegrunnlag",\n  "sisteTilgjengeligePeriode": "2021"\n}\n')),(0,a.kt)("p",null,"Data kommer som ett tilgjengeligdata-objekt."),(0,a.kt)("p",null,"Hvert Tilgjengeligdata-object inneholder"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"personidentifikator - typisk F\xf8dselsnummer eller D-nummer"),(0,a.kt)("li",{parentName:"ul"},'ressursid - id p\xe5 typen data, f.eks "skattegrunnlag"'),(0,a.kt)("li",{parentName:"ul"},"siste tilgjengelige periode - beskriver sist tilgjengelige periode for ressursen. Har forskjellig format basert p\xe5 ressursen. F.eks. kun \xe5rstall for skattegrunnlag.")),(0,a.kt)("h2",{id:"xml"},"XML"),(0,a.kt)("p",null,"Dersom man \xf8nsker XML i stedet for JSON kan dette spesifiseres med header ",(0,a.kt)("inlineCode",{parentName:"p"},"Accept")," satt til ",(0,a.kt)("inlineCode",{parentName:"p"},"application/xml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<tilgjengeligdata xmlns="urn:no:skatteetaten:datasamarbeid:tilgjengeligdata:v1">\n   <personidentifikator>07078600378</personidentifikator>\n   <ressursId>skattegrunnlag</ressursId>\n   <sisteTilgjengeligePeriode>2021</sisteTilgjengeligePeriode>\n</tilgjengeligdata>\n'))),(0,a.kt)(d,{headerText:"Feilkoder",itemKey:"itemKey-3",mdxType:"TabItem"},(0,a.kt)("p",null,"Se egen side for generell info om ",(0,a.kt)("a",{parentName:"p",href:"/api-dokumentasjon/feil"},"feilh\xe5ndtering i tjenestene"),"."),(0,a.kt)("p",null,"Tabellen under viser en oversikt over hvilke spesifikke feilkoder denne applikasjonen kan gi. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Feilkode"),(0,a.kt)("th",{parentName:"tr",align:null},"HTTP Statuskode"),(0,a.kt)("th",{parentName:"tr",align:null},"Feilomr\xe5de"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TD-001"),(0,a.kt)("td",{parentName:"tr",align:null},"500"),(0,a.kt)("td",{parentName:"tr",align:null},"Uventet feil p\xe5 tjenesten.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TD-002"),(0,a.kt)("td",{parentName:"tr",align:null},"401"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med autentisering.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TD-003"),(0,a.kt)("td",{parentName:"tr",align:null},"400"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil i forbindelse med validering av inputdata.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TD-004"),(0,a.kt)("td",{parentName:"tr",align:null},"404"),(0,a.kt)("td",{parentName:"tr",align:null},"Fant ikke tilgjengeligdata for angitt personidentifikator og ressursidentifikator.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TD-005"),(0,a.kt)("td",{parentName:"tr",align:null},"406"),(0,a.kt)("td",{parentName:"tr",align:null},"Feil tilknyttet dataformat. Kun json eller xml er st\xf8ttet.")))))))}f.isMDXComponent=!0}}]);