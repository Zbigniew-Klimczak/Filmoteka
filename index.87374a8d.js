!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire4383;null==a&&((a=function(t){if(t in r)return r[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){o[t]=e},n.parcelRequire4383=a),a.register("iY7oS",(function(e,n){t(e.exports,"API_KEY",(function(){return r}));var r="1d9e7558ae558dc94a5fda2c9843c8eb"})),a.register("igQOg",(function(n,r){t(n.exports,"fetchJsonResponse",(function(){return c}));var o=a("bpxeT"),i=a("2TvXO");function c(t,e){return s.apply(this,arguments)}function s(){return(s=e(o)(e(i).mark((function t(n,r){var o,a;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(n+"?"+new URLSearchParams(r));case 3:return o=t.sent,t.next=6,o.json();case 6:return a=t.sent,t.abrupt("return",a);case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}})),a.register("bpxeT",(function(t,e){"use strict";function n(t,e,n,r,o,a,i){try{var c=t[a](i),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function c(t){n(i,o,a,c,s,"next",t)}function s(t){n(i,o,a,c,s,"throw",t)}c(void 0)}))}}})),a.register("2TvXO",(function(t,e){var n=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof h?e:h,a=Object.create(o.prototype),i=new O(r||[]);return a._invoke=function(t,e,n){var r=d;return function(o,a){if(r===f)throw new Error("Generator is already running");if(r===v){if("throw"===o)throw a;return T()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=S(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=l(t,e,n);if("normal"===s.type){if(r=n.done?v:p,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=v,n.method="throw",n.arg=s.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var d="suspendedStart",p="suspendedYield",f="executing",v="completed",m={};function h(){}function _(){}function b(){}var g={};s(g,a,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(j([])));w&&w!==n&&r.call(w,a)&&(g=w);var x=b.prototype=h.prototype=Object.create(g);function L(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==typeof d&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,r){function a(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(a,a):a()}}function S(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,S(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var a=o.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[a];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return _.prototype=b,s(x,"constructor",b),s(b,"constructor",_),_.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(E.prototype),s(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new E(u(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),s(x,c,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;A(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})),a.register("jkJzp",(function(n,r){t(n.exports,"displayMovieCard",(function(){return v})),t(n.exports,"moviesListRender",(function(){return m}));var o=a("bpxeT"),i=a("2TvXO"),c=a("igQOg"),s=a("iY7oS"),u=a("kvC6y"),l=document.querySelector(".movies__list");function d(){return p.apply(this,arguments)}function p(){return(p=e(o)(e(i).mark((function t(){var n,r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,c.fetchJsonResponse)("https://api.themoviedb.org/3/genre/movie/list",{api_key:s.API_KEY,language:"en-US"});case 3:return n=t.sent,r=n.genres,t.abrupt("return",r);case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))).apply(this,arguments)}function f(t,e){var n=[];return t.genre_ids.forEach((function(t){var r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done);r=!0){var s=i.value;t===s.id&&n.push(s.name)}}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}})),n}function v(t,e){var n,r;n=null===t.poster_path?"https://movieeo.com/no-poster.png":"https://image.tmdb.org/t/p/w500".concat(t.poster_path),r=0===e.length?["Unknown"]:e;var o='<li class="movie" data-id="'.concat(t.id,'">\n        <img class="movie__img"\n          src=').concat(n,'\n          alt="').concat(t.title,' poster." loading="lazy" />\n        <h2 class="movie__title">').concat(t.title,'</h2>\n        <div class="movie__info">\n          <p class="movie__detail">\n            ').concat(r.slice(0,4).join(", "),'\n          </p>\n          <p class="movie__detail">|</p>\n          <p class="movie__detail">').concat(t.release_date.slice(0,4),"</>\n        </div>\n      </li>");l.insertAdjacentHTML("beforeend",o)}function m(t){return h.apply(this,arguments)}function h(){return(h=e(o)(e(i).mark((function t(n){var r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,l.innerHTML="",t.next=4,d();case 4:r=t.sent,(0,u.stopLoader)(),n.forEach((function(t){v(t,f(t,r))})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))).apply(this,arguments)}})),a.register("kvC6y",(function(e,n){t(e.exports,"startLoader",(function(){return o})),t(e.exports,"stopLoader",(function(){return a}));var r=document.querySelector(".movies__container"),o=function(){r.insertAdjacentHTML("beforeend",'<div class="dot-spinner">\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n</div>')},a=function(){document.querySelector(".dot-spinner").remove()}})),a.register("jcFG7",(function(e,n){t(e.exports,"paginationRender",(function(){return o})),t(e.exports,"paginationDestroy",(function(){return a}));var r=document.querySelector(".pagination");function o(t,e){var n=document.createElement("button");n.setAttribute("type","button"),n.textContent=t,n.classList.add("pagination__button"),n.classList.add("pagination__button--actual"),r.append(n);var o=document.createElement("button");o.setAttribute("type","button"),o.classList.add("pagination__button"),o.textContent=t+1;var a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("pagination__button"),a.textContent=t+2;var i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("pagination__button"),i.textContent=t-1;var c=document.createElement("button");c.setAttribute("type","button"),c.classList.add("pagination__button"),c.textContent=t-2;var s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("pagination__button"),s.classList.add("pagination__button--next"),s.dataset.page=t+1;var u=document.createElement("button");u.setAttribute("type","button"),u.classList.add("pagination__button"),u.classList.add("pagination__button--previous"),u.dataset.page=t-1;var l=document.createElement("button");l.setAttribute("type","button"),l.textContent=1,l.classList.add("pagination__button"),l.classList.add("pagination__button--hideAbility");var d=document.createElement("button");d.setAttribute("type","button"),d.textContent=e,d.classList.add("pagination__button"),d.classList.add("pagination__button--hideAbility");var p=document.createElement("button");p.setAttribute("type","button"),p.textContent="...",p.classList.add("pagination__button"),p.classList.add("pagination__button--hideAbility"),p.classList.add("pagination__button--deactive");var f=document.createElement("button");f.setAttribute("type","button"),f.textContent="...",f.classList.add("pagination__button"),f.classList.add("pagination__button--hideAbility"),f.classList.add("pagination__button--deactive"),1===t&&(e>t&&r.append(o),e>o.textContent&&r.append(a),e>a.textContent&&(r.append(p),r.append(d)),e>t&&r.append(s)),2===t&&(e>t&&r.append(o),e>o.textContent&&r.append(a),e>a.textContent&&(r.append(p),r.append(d)),e>t&&r.append(s),r.prepend(i),r.prepend(u)),t>2&&(e>t&&r.append(o),e>o.textContent&&r.append(a),e>a.textContent&&(r.append(p),r.append(d)),e>t&&r.append(s),r.prepend(i),r.prepend(c),t>3&&(r.prepend(f),r.prepend(l)),r.prepend(u))}function a(){r.replaceChildren()}})),a.register("8AEpj",(function(n,r){t(n.exports,"modalMovie",(function(){return _})),t(n.exports,"closeModal",(function(){return g}));var o,i=a("bpxeT"),c=a("8nrFW"),s=a("2TvXO"),u=a("igQOg"),l=a("iY7oS"),d=a("UL92Z"),p=document.querySelector("body"),f=document.querySelector(".overlay"),v=(document.querySelector(".modal__window"),document.querySelector(".modal__button-close")),m=document.querySelector(".modal__movie"),h={watched:null,queue:null},_=(o=e(i)(e(s).mark((function t(n){var r,o,a,i,c,p,v,_,g,E,S,k;return e(s).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.target.classList.contains("movie"),n.target!==n.currentTarget){t.next=3;break}return t.abrupt("return");case 3:if(r=b(n.target)){t.next=6;break}return t.abrupt("return");case 6:return o=r.dataset.id,t.next=9,(0,u.fetchJsonResponse)("https://api.themoviedb.org/3/movie/".concat(o),{api_key:l.API_KEY,language:"en-US"});case 9:if(!1!==(a=t.sent).success){t.next=12;break}return t.abrupt("return");case 12:i=d.moviesStorage.getItem("watched"),c=d.moviesStorage.getItem("queue"),p="",v="",_="Add to watched",g="Add to queue",i&&i.includes(o)&&(p="modal-movie__watched",_="Remove from watched"),c&&c.includes(o)&&(v="modal-movie__queue",g="Remove from queue"),E=null===a.poster_path?"https://movieeo.com/no-poster.png":"https://image.tmdb.org/t/p/w500".concat(a.poster_path),S=0===a.genres.length?["Unknown"]:a.genres.map((function(t){return t.name})).join(", "),k='\n                <div class="modal-movie__container">\n                  <img src='.concat(E,'\n                    alt="').concat(a.title,' poster." class="modal-movie__picture" />\n                  <div class="modal-movie__information">\n                    <h3 class="modal-movie__title">').concat(a.title,'</h3>\n                    <table>\n                      <tbody class="modal-movie__table modal-table">\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Vote/Votes</td>\n                          <td class="modal-table__data modal-table__information">\n                            <span class="modal-table__number modal-table--orange">\n                              ').concat(Math.round(10*a.vote_average)/10,'\n                            </span> / \n                            <span class="modal-table__number modal-table--grey">\n                              ').concat(a.vote_count,'\n                            </span>\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Popularity</td>\n                          <td class="modal-table__data modal-table__information">\n                            ').concat(Math.round(10*a.popularity)/10,'\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Original Title</td>\n                          <td class="modal-table__data modal-table__information modal-table--uppercase">\n                            ').concat(a.original_title,'\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Genre</td>\n                          <td class="modal-table__data modal-table__information">\n                            ').concat(S,'\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <div class="modal-movie__overview">\n                      <h4 class="modal-movie__about">About</h4>\n                      <p class="modal-movie__description">\n                        ').concat(a.overview,'\n                      </p>\n                    </div>\n                    <div class="modal-movie__buttons movie-button">\n                      <button\n                        type="button"\n                        class="modal-movie__btn ').concat(p,'"\n                        data-idfilm=""\n                        data-btn="watched">\n                          ').concat(_,'\n                      </button>\n                      <button\n                        type="button"\n                        class="modal-movie__btn ').concat(v,'"\n                        data-idfilm=""\n                        data-btn="queue">\n                          ').concat(g,"\n                      </button>\n                    </div>\n                  </div>\n                </div>"),m.innerHTML=k,x(!0),window.addEventListener("keyup",y),f.addEventListener("click",w),h.watched=document.querySelector('[data-btn="watched"]'),h.queue=document.querySelector('[data-btn="queue"]'),h.watched.addEventListener("click",(function(t){return L(o,"watched")})),h.queue.addEventListener("click",(function(t){return L(o,"queue")}));case 33:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)}),b=function(t){return"UL"!==t.tagName&&("LI"!==t.tagName?b(t.parentElement):t)},g=function(){v.addEventListener("click",(function(t){return x(!1)}))},y=function(t){"Escape"!==t.key&&27!==t.keyCode||x(!1)},w=function(t){t.currentTarget===t.target&&x(!1)},x=function(t){if(t)return p.classList.add("noScroll"),void f.classList.remove("overlay--is-hidden");p.classList.remove("noScroll"),f.classList.add("overlay--is-hidden"),h.watched.removeEventListener("click",L),h.queue.removeEventListener("click",L),window.removeEventListener("keyup",y),f.removeEventListener("click",w)},L=function(t,n){var r,o=d.moviesStorage.getItem(n),a=[];if(o&&(a=e(c)(o)),a.includes(t))return d.moviesStorage.removeItem(t,n),h[n].classList.remove("modal-movie__".concat(n)),void(h[n].innerText="Add to ".concat(n));a.push(t),d.moviesStorage.setItem(a,n),"watched"===n&&(r="queue"),"queue"===n&&(r="watched"),d.moviesStorage.removeItem(t,r),h[n].classList.add("modal-movie__".concat(n)),h[n].innerText="Remove from ".concat(n),h[r].classList.remove("modal-movie__".concat(r)),h[r].innerText="Add to ".concat(r)}})),a.register("8nrFW",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return n.default(t)||r.default(t)||i.default(t)||o.default()};var n=c(a("kMC0W")),r=c(a("7AJDX")),o=c(a("8CtQK")),i=c(a("auk6i"));function c(t){return t&&t.__esModule?t:{default:t}}})),a.register("kMC0W",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if(Array.isArray(t))return r.default(t)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("8NIkP",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}})),a.register("7AJDX",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}})),a.register("8CtQK",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(!t)return;if("string"==typeof t)return r.default(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(t,e)};var n,r=(n=a("8NIkP"))&&n.__esModule?n:{default:n}})),a.register("UL92Z",(function(e,n){t(e.exports,"moviesStorage",(function(){return i}));var r=function(t,e){var n=a(e);n&&window.localStorage.setItem(n,JSON.stringify(t))},o=function(t){var e=a(t);if(e){var n=window.localStorage.getItem(e);return JSON.parse(n)}},a=function(t){return"watched"===t?"movies-watched":"queue"===t?"movies-queue":(console.error("wronga type key in localStorage"),!1)},i={setItem:r,getItem:o,removeItem:function(t,e){if(a(e)){var n=o(e);if(n){var i=n.filter((function(e,n){return e!==t}));r(i,e)}}}}}))}();
//# sourceMappingURL=index.87374a8d.js.map
