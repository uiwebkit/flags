System.register(["./p-2e24add9.system.js","./p-6501823c.system.js","./p-e8be8763.system.js"],(function(e){"use strict";var t,n,i,r;return{setters:[function(e){t=e.r;n=e.g},function(e){i=e.u;r=e.a},function(){}],execute:function(){var s='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 640 480">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h640v480H0z"/>\n    <path fill="#009246" d="M0 0h213.3v480H0z"/>\n    <path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/>\n  </g>\n</svg>\n';var o='<svg xmlns="http://www.w3.org/2000/svg" id="flag-icon-css-it" viewBox="0 0 512 512">\n  <g fill-rule="evenodd" stroke-width="1pt">\n    <path fill="#fff" d="M0 0h512v512H0z"/>\n    <path fill="#009246" d="M0 0h170.7v512H0z"/>\n    <path fill="#ce2b37" d="M341.3 0H512v512H341.3z"/>\n  </g>\n</svg>\n';var l=e("uni_flag_it",function(){function e(e){t(this,e);this.square=false;this.round=false}e.prototype.onSquare=function(e){this.el.innerHTML=e?o:s};e.prototype.onRound=function(e){i(this.el,e)};e.prototype.componentWillLoad=function(){this.el.innerHTML=this.square?o:s;r(this.el);i(this.el,this.round)};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{square:["onSquare"],round:["onRound"]}},enumerable:false,configurable:true});return e}())}}}));