/*! For license information please see 226.230366be.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[226],{9555:function(t,e,r){r.d(e,{Z:function(){return w}});var n,o,i,a,c,u=r(7689),s=r(168),l=r(5867),f=r(1087),h=l.ZP.li(n||(n=(0,s.Z)(["\n  position: relative;\n  max-width: 300px;\n  overflow: hidden;\n  border-radius: 8px;\n  transition: all 0.3s ease;\n  &:hover {\n    cursor: pointer;\n    color: #fff;\n    background-color: rgba(221, 221, 221, 0.8);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  }\n"]))),p=l.ZP.div(o||(o=(0,s.Z)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  position: absolute;\n  top: 20PX;\n  /* left: -100%; */\nleft: 100%;\n  width: 100%;\n  height: 30px;\n  margin-top: 250px;\n  padding: 10px;\n  text-align: start;\n  font-size: 14px;\n  color: #fff;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: all 0.3s ease;\n  pointer-events: none;\n  ul {\n    list-style: none;\n     display: flex;\n     flex-direction: row;\n     padding-left: 5px;\n      margin-left: 0 auto;\n    column-gap: 15px;  \n\n  }\n  li {\n    display: flex;\n    flex-direction: row;\n    \n  }\n"]))),d=(0,l.ZP)(f.rU)(i||(i=(0,s.Z)(["\n  text-decoration: none;\n  color: inherit;\n  transition: all 0.3s ease;\n\n  p {\n    margin: 0;\n    padding: 10px;\n    max-width: 200px;\n    text-align: center;\n    font-size: 16px;\n  }\n\n  &:hover {\n    cursor: pointer;\n    color: #4d82f3;\n    + "," {\n      left: 0;\n    }\n  }\n"])),p),v=l.ZP.div(a||(a=(0,s.Z)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 10px;\n  right: 10px;\n  width: 36px;\n  height: 36px;\n  font-weight: 700;\n  border-radius: 50%;\n  background-color: rgb(255, 255, 255);\n"]))),y=r(184),g=function(t){var e=t.movie,r=e.id,n=e.title,o=e.poster_path,i=e.adult,a=e.popularity,c=e.vote_average,s=e.vote_count,l=(0,u.TH)(),f=o?"https://image.tmdb.org/t/p/w200/".concat(o):"https://via.placeholder.com/200x300";return(0,y.jsxs)(h,{children:[(0,y.jsxs)(d,{to:"/movies/".concat(r),state:{from:l},children:[(0,y.jsx)("img",{src:f,alt:n,loading:"lazy"}),(0,y.jsx)("p",{children:n.length>20?"".concat(n.substring(0,20),"..."):n})]}),(0,y.jsx)(p,{children:(0,y.jsxs)("ul",{children:[(0,y.jsxs)("li",{children:[" \ud83d\udc4f ",a.toFixed(0)]}),(0,y.jsxs)("li",{children:[" \ud83d\udcaa ",c.toFixed(1)]}),(0,y.jsxs)("li",{children:[" \ud83d\udc40 ",s]})]})}),i&&(0,y.jsx)(v,{children:"18+"})]})},m=l.ZP.ul(c||(c=(0,s.Z)(["\n  list-style: none;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 20px;\n  justify-items: center;\n"]))),w=function(t){var e=t.films;return(0,y.jsx)(m,{children:e.map((function(t){return(0,y.jsx)(g,{movie:t},t.id)}))})}},4814:function(t,e,r){r.d(e,{Z:function(){return c}});var n,o=r(168),i=r(5867).ZP.section(n||(n=(0,o.Z)(["\n  margin: 0 auto;\n  padding-bottom: 40px;\n  text-align: center;\n"]))),a=r(184),c=function(t){var e=t.children;return(0,a.jsx)(i,{children:e})}},6226:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var n=r(5861),o=r(9439),i=r(2791),a=r(5617),c=r(6707),u=function(){return u=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},u.apply(this,arguments)},s=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r},l=(0,c.i)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg)}","right"),f=(0,c.i)("RingLoader","0% {transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg)} 100% {transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg)}","left");var h,p=function(t){var e=t.loading,r=void 0===e||e,n=t.color,o=void 0===n?"#000000":n,c=t.speedMultiplier,h=void 0===c?1:c,p=t.cssOverride,d=void 0===p?{}:p,v=t.size,y=void 0===v?60:v,g=s(t,["loading","color","speedMultiplier","cssOverride","size"]),m=(0,a.h)(y),w=m.value,x=m.unit,b=u({display:"inherit",width:(0,a.E)(y),height:(0,a.E)(y),position:"relative"},d),j=function(t){return{position:"absolute",top:"0",left:"0",width:"".concat(w).concat(x),height:"".concat(w).concat(x),border:"".concat(w/10).concat(x," solid ").concat(o),opacity:"0.4",borderRadius:"100%",animationFillMode:"forwards",perspective:"800px",animation:"".concat(1===t?l:f," ").concat(2/h,"s 0s infinite linear")}};return r?i.createElement("span",u({style:b},g),i.createElement("span",{style:j(1)}),i.createElement("span",{style:j(2)})):null},d=r(3714),v=r(4814),y=r(168),g=r(5867).ZP.h1(h||(h=(0,y.Z)(["\n  text-align: center;\n"]))),m=r(184),w=function(){return(0,m.jsx)(v.Z,{children:(0,m.jsx)(g,{children:"Welcome to TMBD Movies"})})},x=r(9555);function b(){b=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var h="suspendedStart",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var w={};s(w,a,(function(){return this}));var x=Object.getPrototypeOf,j=x&&x(x(G([])));j&&j!==r&&n.call(j,a)&&(w=j);var E=m.prototype=y.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=h;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===v)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=p;var s=f(e,r,n);if("normal"===s.type){if(o=n.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return g.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:g,configurable:!0}),g.displayName=s(m,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(O.prototype),s(O.prototype,c,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),s(E,u,"Generator"),s(E,a,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}var j=function(){var t=(0,i.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],c=(0,i.useState)(!0),u=(0,o.Z)(c,2),s=u[0],l=u[1];return(0,i.useEffect)((function(){var t=function(){var t=(0,n.Z)(b().mark((function t(){var e;return b().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.wr)();case 3:e=t.sent,a(e),l(!1),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,m.jsxs)("main",{children:[(0,m.jsx)(w,{}),s?(0,m.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:(0,m.jsx)(p,{color:"#004d40",size:120})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("h2",{style:{textAlign:"center"},children:"Watch Movies"}),(0,m.jsx)(x.Z,{films:r})]})]})}},3714:function(t,e,r){r.d(e,{E3:function(){return f},Hx:function(){return l},Y5:function(){return u},uV:function(){return s},wr:function(){return c}});var n=r(5861),o=r(1243);function i(){i=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new S(n||[]);return o(a,"_invoke",{value:k(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};l(x,c,(function(){return this}));var b=Object.getPrototypeOf,j=b&&b(b(G([])));j&&j!==r&&n.call(j,c)&&(x=j);var E=w.prototype=g.prototype=Object.create(x);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function k(e,r,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,_(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function Z(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function G(e){if(e||""===e){var r=e[c];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(typeof e+" is not iterable")}return m.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=l(w,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},e.awrap=function(t){return{__await:t}},L(O.prototype),l(O.prototype,u,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new O(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(E),l(E,s,"Generator"),l(E,c,(function(){return this})),l(E,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=G,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(Z),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),Z(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;Z(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:G(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}o.Z.defaults.baseURL="https://api.themoviedb.org/3";var a={params:{api_key:"eb4f5e43dfa5373ec69bee1a79b4270f",language:"en-US"}},c=function(){var t=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("trending/movie/day",a);case 2:if(200!==(e=t.sent).status){t.next=7;break}return t.abrupt("return",e.data.results);case 7:return t.abrupt("return",Promise.reject(new Error("Oops, something went wrong. Please try again.")));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/movie/".concat(e),a);case 2:if(200!==(r=t.sent).status){t.next=7;break}return t.abrupt("return",r.data);case 7:return t.abrupt("return",Promise.reject(new Error("Oops, something went wrong. Please try again.")));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(e,"/credits?"),a);case 2:if(200!==(r=t.sent).status){t.next=7;break}return t.abrupt("return",r.data.cast);case 7:return t.abrupt("return",Promise.reject(new Error("Oops, something went wrong. Please try again.")));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("movie/".concat(e,"/reviews?"),a);case 2:if(200!==(r=t.sent).status){t.next=7;break}return t.abrupt("return",r.data.results);case 7:return t.abrupt("return",Promise.reject(new Error("Oops, something went wrong. Please try again.")));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(e){var r;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/search/movie?query=".concat(e),a);case 2:if(200!==(r=t.sent).status){t.next=7;break}return t.abrupt("return",r.data.results);case 7:return t.abrupt("return",Promise.reject(new Error("Oops, something went wrong. Please try again.")));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},6707:function(t,e,r){r.d(e,{i:function(){return n}});var n=function(t,e,r){var n="react-spinners-".concat(t,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var o=document.createElement("style");document.head.appendChild(o);var i=o.sheet,a="\n    @keyframes ".concat(n," {\n      ").concat(e,"\n    }\n  ");return i&&i.insertRule(a,0),n}},5617:function(t,e,r){r.d(e,{E:function(){return i},h:function(){return o}});var n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function o(t){if("number"===typeof t)return{value:t,unit:"px"};var e,r=(t.match(/^[0-9.]*/)||"").toString();e=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(t.match(/[^0-9]*$/)||"").toString();return n[o]?{value:e,unit:o}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(e,"px.")),{value:e,unit:"px"})}function i(t){var e=o(t);return"".concat(e.value).concat(e.unit)}}}]);
//# sourceMappingURL=226.230366be.chunk.js.map