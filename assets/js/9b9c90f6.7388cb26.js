"use strict";(self.webpackChunkapi_dokumentasjon=self.webpackChunkapi_dokumentasjon||[]).push([[1138],{9960:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7462),a=n(7294),s=n(3727),o=n(8780),i=n(2263),c=n(3919),l=n(412);const u=a.createContext({collectLink:()=>{}}),d=()=>(0,a.useContext)(u);var f=n(4996);const p=e=>e.startsWith("/");function m(e,t){let{isNavLink:n,to:u,href:m,activeClassName:h,isActive:g,"data-noBrokenLinkCheck":v,autoAddBaseUrl:w=!0,...k}=e;const{siteConfig:{trailingSlash:b,baseUrl:_}}=(0,i.Z)(),{withBaseUrl:y}=(0,f.C)(),C=d(),j=(0,a.useRef)(null);(0,a.useImperativeHandle)(t,(()=>j.current));const D=u||m;const N=(0,c.Z)(D),Z=D?.replace("pathname://","");let M=void 0!==Z?(E=Z,w&&p(E)?y(E):E):void 0;var E;M&&N&&(M=(0,o.applyTrailingSlash)(M,{trailingSlash:b,baseUrl:_}));const S=(0,a.useRef)(!1),T=n?s.OL:s.rU,x=l.Z.canUseIntersectionObserver,I=(0,a.useRef)(),L=()=>{S.current||null==M||(window.docusaurus.preload(M),S.current=!0)};(0,a.useEffect)((()=>(!x&&N&&null!=M&&window.docusaurus.prefetch(M),()=>{x&&I.current&&I.current.disconnect()})),[I,M,x,N]);const O=M?.startsWith("#")??!1,U=!M||!N||O;return U||v||C.collectLink(M),U?a.createElement("a",(0,r.Z)({ref:j,href:M},D&&!N&&{target:"_blank",rel:"noopener noreferrer"},k)):a.createElement(T,(0,r.Z)({},k,{onMouseEnter:L,onTouchStart:L,innerRef:e=>{j.current=e,x&&e&&N&&(I.current=new window.IntersectionObserver((t=>{t.forEach((t=>{e===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(I.current.unobserve(e),I.current.disconnect(),null!=M&&window.docusaurus.prefetch(M))}))})),I.current.observe(e))},to:M},n&&{isActive:g,activeClassName:h}))}const h=a.forwardRef(m)},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){const{trailingSlash:n,baseUrl:r}=t;if(e.startsWith("#"))return e;if(void 0===n)return e;const[a]=e.split(/[#?]/),s="/"===a||a===r?a:(o=a,n?function(e){return e.endsWith("/")?e:`${e}/`}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));var o;return e.replace(a,s)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var a=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(a).default}})},3306:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>f,default:()=>w,frontMatter:()=>d,metadata:()=>p,toc:()=>h});var r=n(7462),a=n(7294),s=n(3905),o=n(1262),i=n(2263),c=n(9960);const l="/maintenance/feed/",u=()=>{const e=(0,i.Z)().globalData["docusaurus-plugin-content-docs"].default.versions[0].docs.filter((e=>e.path.startsWith(l)&&!e.path.endsWith("/feed/"))).map((e=>{const[t,n,r]=e.path.replace(l,"").split("-"),s=e.path.replace(l,"").split("-").filter((e=>!/^-?\d+$/.test(e))).join("-");return{name:a.createElement(c.Z,{to:e.path},s),date:new Date(t+"-"+n+"-"+r).toLocaleDateString("no-NO")}})).reverse(),t=[{name:"Dato",fieldName:"date"},{name:"Fil",fieldName:"name"}];return a.createElement(o.Z,null,(()=>{const r=n(1023).iA;return a.createElement(r,{data:e,columns:t,caption:"test",hideCaption:!0})}))},d={title:"Nyheter og driftsvarsler",categories:"nyhet",slug:"/tag_news",tags:["news"],date:"2022-08-22 15:15:00 +0200"},f=void 0,p={unversionedId:"maintenance/feed/index",id:"maintenance/feed/index",title:"Nyheter og driftsvarsler",description:"",source:"@site/docs/maintenance/feed/index.md",sourceDirName:"maintenance/feed",slug:"/tag_news",permalink:"/api-dokumentasjon/tag_news",draft:!1,tags:[{label:"news",permalink:"/api-dokumentasjon/tags/news"}],version:"current",frontMatter:{title:"Nyheter og driftsvarsler",categories:"nyhet",slug:"/tag_news",tags:["news"],date:"2022-08-22 15:15:00 +0200"},sidebar:"docs",previous:{title:"Testmilj\xf8 og testdata",permalink:"/api-dokumentasjon/testmiljo"}},m={},h=[],g={toc:h},v="wrapper";function w(e){let{components:t,...n}=e;return(0,s.kt)(v,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(u,{mdxType:"MaintenanceFeed"}))}w.isMDXComponent=!0}}]);