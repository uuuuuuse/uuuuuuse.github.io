import{d as L,u as E,e as c,f as y,g as R,h as C,n as K,i as N,r as S,o as m,c as x,j as q,w as h,k as D,a as z,l as a,t as r,m as e,p as U,b as j,q as A,s as F,v as T,x as k,y as M,z as O,_ as P}from"./app.cbb3a7d7.js";const $=i=>(M("data-v-9d14226d"),i=i(),O(),i),G=$(()=>a("div",{"i-ri:layout-right-2-line":""},null,-1)),H=[G],J={class:"prose-lg mt-6 mb-8 mx-auto"},Q={class:"text-4xl font-bold"},W={class:"opacity-50 mt-2"},X={key:0,class:"prose-lg mx-auto grid md:grid-cols-2 pt-4 mt-16",border:"t gray-200 dark:gray-600"},Y={class:"prev"},Z={class:"next text-right"},tt=L({__name:"post",setup(i){const f=E(),l=c(()=>f.currentRoute.value.meta),B=c(()=>l.value.frontmatter.title),V=c(()=>l.value.date),I=c(()=>l.value.readingTime.minutes),u=c(()=>l.value.prev),d=c(()=>l.value.next),w=y();R(()=>{const o=()=>{var t;location.hash&&((t=document.querySelector(decodeURIComponent(location.hash)))==null||t.scrollIntoView({behavior:"smooth"}))},n=t=>{const s=t.target.closest("a");if(!t.defaultPrevented&&s&&t.button===0&&s.target!=="_blank"&&s.rel!=="external"&&!s.download&&!t.metaKey&&!t.ctrlKey&&!t.shiftKey&&!t.altKey){const p=new URL(s.href);if(p.origin!==window.location.origin)return;t.preventDefault();const{pathname:_,hash:g}=p;g&&(!_||_===location.pathname)?(window.history.replaceState({},"",g),o()):f.push({path:_,hash:g})}};C(window,"hashchange",o),C(w.value,"click",n,{passive:!1}),o(),setTimeout(o,500)});const v=y(!1),b=y(!1);return R(()=>{const o=()=>K(()=>{if(D){const n=document.querySelector(".table-of-contents");b.value=!!n}});o(),N(()=>f.currentRoute.value.path,()=>o())}),(o,n)=>{const t=S("RouterView"),s=S("RouterLink"),p=z;return m(),x(p,{class:"post"},q({default:h(()=>[a("div",J,[a("h1",Q,r(e(B)),1),a("p",W,r(e(U)(e(V)))+" \xB7 "+r(e(I))+" min ",1)]),a("article",{ref_key:"content",ref:w,class:A(v.value&&"toc-open")},[j(t)],2),e(u)||e(d)?(m(),F("div",X,[a("span",Y,[e(u)?(m(),x(s,{key:0,"hover:underline":"",to:".."+e(u).path},{default:h(()=>[T(r(e(u).title),1)]),_:1},8,["to"])):k("",!0)]),a("span",Z,[e(d)?(m(),x(s,{key:0,"hover:underline":"",to:".."+e(d).path},{default:h(()=>[T(r(e(d).title),1)]),_:1},8,["to"])):k("",!0)])])):k("",!0)]),_:2},[b.value?{name:"navbar",fn:h(()=>[a("button",{class:"nav-item !outline-none",title:"\u76EE\u5F55",onClick:n[0]||(n[0]=_=>v.value=!v.value)},H)])}:void 0]),1024)}}});const ot=P(tt,[["__scopeId","data-v-9d14226d"]]);export{ot as default};
