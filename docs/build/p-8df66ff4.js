const t="flag";let e=!1;const n="undefined"!=typeof window?window:{},l=n.CSS,s=n.document||{head:{}},r=n.HTMLElement||class{},o={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l),ce:(t,e)=>new CustomEvent(t,e)},c=t=>Promise.resolve(t),i=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(t){}return!1})(),u=new WeakMap,a=t=>"sc-"+t.o,f={},h=t=>"object"==(t=typeof t)||"function"===t,d=(t,e,...n)=>{let l=null,s=!1,r=!1,o=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!h(l))&&(l+=""),s&&r?o[o.length-1].i+=l:o.push(s?y(null,l):l),r=s)};if(c(n),"function"==typeof t)return t(null===e?{}:e,o,m);const i=y(t,null);return i.u=e,o.length>0&&(i.h=o),i},y=(t,e)=>({t:0,$:t,i:e,m:null,h:null,u:null}),$={},m={forEach:(t,e)=>t.map(p).forEach(e),map:(t,e)=>t.map(p).map(e).map(w)},p=t=>({vattrs:t.u,vchildren:t.h,vkey:t.p,vname:t.g,vtag:t.$,vtext:t.i}),w=t=>{if("function"==typeof t.vtag){const e=Object.assign({},t.vattrs);return t.vkey&&(e.key=t.vkey),t.vname&&(e.name=t.vname),d(t.vtag,e,...t.vchildren||[])}const e=y(t.vtag,t.vtext);return e.u=t.vattrs,e.h=t.vchildren,e.p=t.vkey,e.g=t.vname,e},b=(t,e,n,l,s,r)=>{if(n!==l){let c=K(t,e);e.toLowerCase();{const i=h(l);if((c||i&&null!==l)&&!s)try{if(t.tagName.includes("-"))t[e]=l;else{let s=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==s||(t[e]=s)}}catch(o){}null==l||!1===l?!1===l&&""!==t.getAttribute(e)||t.removeAttribute(e):(!c||4&r||s)&&!i&&t.setAttribute(e,l=!0===l?"":l)}}},g=(t,e,n,l)=>{const s=11===e.m.nodeType&&e.m.host?e.m.host:e.m,r=t&&t.u||f,o=e.u||f;for(l in r)l in o||b(s,l,r[l],void 0,n,e.t);for(l in o)b(s,l,r[l],o[l],n,e.t)},v=(t,e,n)=>{let l,r,o=e.h[n],c=0;if(l=o.m=s.createElement(o.$),g(null,o,!1),o.h)for(c=0;c<o.h.length;++c)r=v(t,o,c),r&&l.appendChild(r);return l},S=(t,e,n,l,s,r)=>{let o,c=t;for(;s<=r;++s)l[s]&&(o=v(null,n,s),o&&(l[s].m=o,c.insertBefore(o,e)))},j=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l.m.remove()},O=(t,e)=>t.$===e.$,C=(t,e)=>{const n=e.m=t.m,l=t.h,s=e.h;g(t,e,!1),null!==l&&null!==s?((t,e,n,l)=>{let s,r=0,o=0,c=e.length-1,i=e[0],u=e[c],a=l.length-1,f=l[0],h=l[a];for(;r<=c&&o<=a;)null==i?i=e[++r]:null==u?u=e[--c]:null==f?f=l[++o]:null==h?h=l[--a]:O(i,f)?(C(i,f),i=e[++r],f=l[++o]):O(u,h)?(C(u,h),u=e[--c],h=l[--a]):O(i,h)?(C(i,h),t.insertBefore(i.m,u.m.nextSibling),i=e[++r],h=l[--a]):O(u,f)?(C(u,f),t.insertBefore(u.m,i.m),u=e[--c],f=l[++o]):(s=v(e&&e[o],n,o),f=l[++o],s&&i.m.parentNode.insertBefore(s,i.m));r>c?S(t,null==l[a+1]?null:l[a+1].m,n,l,o,a):o>a&&j(e,r,c)})(n,l,e,s):null!==s?S(n,null,e,s,0,s.length-1):null!==l&&j(l,0,l.length-1)},M=t=>G(t).v,k=(t,e)=>{e&&!t.S&&e["s-p"]&&e["s-p"].push(new Promise((e=>t.S=e)))},x=(t,e)=>{if(t.t|=16,!(4&t.t))return k(t,t.j),ot((()=>E(t,e)));t.t|=512},E=(t,e)=>{const n=t.O;let l;return e&&(l=L(n,"componentWillLoad")),T(l,(()=>_(t,n,e)))},_=async(t,e,n)=>{const l=t.v,r=l["s-rc"];n&&(t=>{const e=t.C;((t,e)=>{let n=a(e),l=Z.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,r=u.get(t=t.head||t);r||u.set(t,r=new Set),r.has(n)||(e=s.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),r&&r.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l])})(t.v.getRootNode(),e)})(t);N(t,e),r&&(r.map((t=>t())),l["s-rc"]=void 0);{const e=l["s-p"],n=()=>P(t);0===e.length?n():(Promise.all(e).then(n),t.t|=4,e.length=0)}},N=(t,e)=>{try{e=e.render&&e.render(),t.t&=-17,t.t|=2,((t,e)=>{const n=t.v,l=t.C,s=t.M||y(null,null),r=(t=>t&&t.$===$)(e)?e:d(null,null,e);l.k&&(r.u=r.u||{},l.k.map((([t,e])=>r.u[e]=n[t]))),r.$=null,r.t|=4,t.M=r,r.m=s.m=n,C(s,r)})(t,e)}catch(n){Q(n,t.v)}return null},P=t=>{const e=t.v,n=t.j;64&t.t||(t.t|=64,W(e),t._(e),n||A()),t.S&&(t.S(),t.S=void 0),512&t.t&&rt((()=>x(t,!1))),t.t&=-517},A=()=>{W(s.documentElement),rt((()=>(t=>{const e=o.ce("appload",{detail:{namespace:"flag"}});return t.dispatchEvent(e),e})(n)))},L=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){Q(l)}},T=(t,e)=>t&&t.then?t.then(e):e(),W=t=>t.classList.add("hydrated"),R=(t,e,n)=>{if(e.N){t.watchers&&(e.P=t.watchers);const l=Object.entries(e.N),s=t.prototype;if(l.map((([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,t,{get(){return((t,e)=>G(this).A.get(e))(0,t)},set(n){((t,e,n,l)=>{const s=G(t),r=s.v,o=s.A.get(e),c=s.t,i=s.O;if(n=((t,e)=>null==t||h(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?t+"":t)(n,l.N[e][0]),!(8&c&&void 0!==o||n===o)&&(s.A.set(e,n),i)){if(l.P&&128&c){const t=l.P[e];t&&t.map((t=>{try{i[t](n,o,e)}catch(l){Q(l,r)}}))}2==(18&c)&&x(s,!1)}})(this,t,n,e)},configurable:!0,enumerable:!0})})),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,l){o.jmp((()=>{const e=n.get(t);if(this.hasOwnProperty(e))l=this[e],delete this[e];else if(s.hasOwnProperty(e)&&"number"==typeof this[e]&&this[e]==l)return;this[e]=(null!==l||"boolean"!=typeof this[e])&&l}))},t.observedAttributes=l.filter((([t,e])=>15&e[0])).map((([t,l])=>{const s=l[1]||t;return n.set(s,t),512&l[0]&&e.k.push([t,s]),s}))}}return t},U=t=>{const e=t.cloneNode;t.cloneNode=function(){return e.call(this,!1)}},q=t=>{t.__appendChild=t.appendChild,t.appendChild=function(t){const e=t["s-sn"]=H(t),n=V(this.childNodes,e);if(n){const l=z(n,e),s=l[l.length-1];return s.parentNode.insertBefore(t,s.nextSibling)}return this.__appendChild(t)}},F=(t,e)=>{class n extends Array{item(t){return this[t]}}if(8&e.t){const e=t.__lookupGetter__("childNodes");Object.defineProperty(t,"children",{get(){return this.childNodes.map((t=>1===t.nodeType))}}),Object.defineProperty(t,"childElementCount",{get:()=>t.children.length}),Object.defineProperty(t,"childNodes",{get(){const t=e.call(this);if(0==(1&o.t)&&2&G(this).t){const e=new n;for(let n=0;n<t.length;n++){const l=t[n]["s-nr"];l&&e.push(l)}return e}return n.from(t)}})}},H=t=>t["s-sn"]||1===t.nodeType&&t.getAttribute("slot")||"",V=(t,e)=>{let n,l=0;for(;l<t.length;l++){if(n=t[l],n["s-sr"]&&n["s-sn"]===e)return n;if(n=V(n.childNodes,e),n)return n}return null},z=(t,e)=>{const n=[t];for(;(t=t.nextSibling)&&t["s-sn"]===e;)n.push(t);return n},B=(t,e={})=>{const l=[],r=e.exclude||[],c=n.customElements,u=s.head,f=u.querySelector("meta[charset]"),h=s.createElement("style"),d=[];let y,$=!0;Object.assign(o,e),o.l=new URL(e.resourcesUrl||"./",s.baseURI).href,t.map((t=>{t[1].map((n=>{const s={t:n[0],o:n[1],N:n[2],L:n[3]};s.N=n[2],s.k=[],s.P={};const u=e.transformTagName?e.transformTagName(s.o):s.o,f=class extends HTMLElement{constructor(t){super(t),J(t=this,s),F(t,s)}connectedCallback(){y&&(clearTimeout(y),y=null),$?d.push(this):o.jmp((()=>(t=>{if(0==(1&o.t)){const e=G(t),n=e.C,l=()=>{};if(!(1&e.t)){e.t|=1;{let n=t;for(;n=n.parentNode||n.host;)if(n["s-p"]){k(e,e.j=n);break}}n.N&&Object.entries(n.N).map((([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}})),rt((()=>(async(t,e,n,l,s)=>{if(0==(32&e.t)){{if(e.t|=32,(s=Y(n)).then){const t=()=>{};s=await s,t()}s.isProxied||(n.P=s.watchers,R(s,n,2),s.isProxied=!0);const t=()=>{};e.t|=8;try{new s(e)}catch(c){Q(c)}e.t&=-9,e.t|=128,t()}if(s.style){let t=s.style;const e=a(n);if(!Z.has(e)){const l=()=>{};((t,e,n)=>{let l=Z.get(t);i&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,Z.set(t,l)})(e,t,!!(1&n.t)),l()}}}const r=e.j,o=()=>x(e,!0);r&&r["s-rc"]?r["s-rc"].push(o):o()})(0,e,n)))}l()}})(this)))}disconnectedCallback(){o.jmp((()=>{}))}componentOnReady(){return G(this).T}};U(f.prototype),q(f.prototype),s.W=t[0],r.includes(u)||c.get(u)||(l.push(u),c.define(u,R(f,s,1)))}))})),h.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",h.setAttribute("data-styles",""),u.insertBefore(h,f?f.nextSibling:u.firstChild),$=!1,d.length?d.map((t=>t.connectedCallback())):o.jmp((()=>y=setTimeout(A,30)))},D=new WeakMap,G=t=>D.get(t),I=(t,e)=>D.set(e.O=t,e),J=(t,e)=>{const n={t:0,v:t,C:e,A:new Map};return n.T=new Promise((t=>n._=t)),t["s-p"]=[],t["s-rc"]=[],D.set(t,n)},K=(t,e)=>e in t,Q=(t,e)=>(0,console.error)(t,e),X=new Map,Y=t=>{const e=t.o.replace(/-/g,"_"),n=t.W,l=X.get(n);return l?l[e]:__sc_import_flag(`./${n}.entry.js`).then((t=>(X.set(n,t),t[e])),Q)},Z=new Map,tt=[],et=[],nt=(t,n)=>l=>{t.push(l),e||(e=!0,n&&4&o.t?rt(st):o.raf(st))},lt=t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){Q(e)}t.length=0},st=()=>{lt(tt),lt(et),(e=tt.length>0)&&o.raf(st)},rt=t=>c().then(t),ot=nt(et,!0);export{l as C,r as H,t as N,c as a,B as b,s as d,M as g,d as h,o as p,I as r,n as w}