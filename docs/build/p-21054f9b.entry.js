import{r as t,g as s}from"./p-aba619d7.js";import{u as n,a as i}from"./p-9dd9a89f.js";import"./p-25c9bb4c.js";const o='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ru" viewBox="0 0 640 480">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h640v480H0z"/>\n    <path fill="#0039a6" d="M0 160h640v320H0z"/>\n    <path fill="#d52b1e" d="M0 320h640v160H0z"/>\n  </g>\n</svg>\n',h='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-ru" viewBox="0 0 512 512">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h512v512H0z"/>\n    <path fill="#0039a6" d="M0 170.7h512V512H0z"/>\n    <path fill="#d52b1e" d="M0 341.3h512V512H0z"/>\n  </g>\n</svg>\n';let l=class{constructor(s){t(this,s),this.square=!1,this.round=!1}onSquare(t){this.el.innerHTML=t?h:o}onRound(t){n(this.el,t)}componentWillLoad(){this.el.innerHTML=this.square?h:o,i(this.el),n(this.el,this.round)}get el(){return s(this)}static get watchers(){return{square:["onSquare"],round:["onRound"]}}};export{l as uni_flag_ru}