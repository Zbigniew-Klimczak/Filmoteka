function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=e.parcelRequire4383;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequire4383=a),a.register("kJhAR",(function(e,n){t(e.exports,"API_KEY",(function(){return o}));const o="1d9e7558ae558dc94a5fda2c9843c8eb"})),a.register("14BL6",(function(e,n){async function o(t,e){try{const n=await fetch(t+"?"+new URLSearchParams(e));return await n.json()}catch(t){console.error(t)}}t(e.exports,"fetchJsonResponse",(function(){return o}))})),a.register("lSHi4",(function(e,n){t(e.exports,"displayMovieCard",(function(){return d})),t(e.exports,"moviesListRender",(function(){return r}));var o=a("14BL6"),i=a("kJhAR");const s=document.querySelector(".movies__list");function d(t,e){let n,o;n=null===t.poster_path?"https://movieeo.com/no-poster.png":`https://image.tmdb.org/t/p/w500${t.poster_path}`,o=0===e.length?["Unknown"]:e;let a=`<li class="movie" data-id="${t.id}">\n        <img class="movie__img"\n          src=${n}\n          alt="${t.title} poster." loading="lazy" />\n        <h2 class="movie__title">${t.title}</h2>\n        <div class="movie__info">\n          <p class="movie__detail">\n            ${o.slice(0,4).join(", ")}\n          </p>\n          <p class="movie__detail">|</p>\n          <p class="movie__detail">${t.release_date.slice(0,4)}</>\n        </div>\n      </li>`;s.insertAdjacentHTML("beforeend",a)}async function r(t){try{s.innerHTML="";const e=await async function(){try{return(await(0,o.fetchJsonResponse)("https://api.themoviedb.org/3/genre/movie/list",{api_key:i.API_KEY,language:"en-US"})).genres}catch(t){console.error(t)}}();t.forEach((t=>{const n=function(t,e){const n=[];return t.genre_ids.forEach((t=>{for(const o of e)t===o.id&&n.push(o.name)})),n}(t,e);d(t,n)}))}catch(t){console.error(t)}}})),a.register("2nhTy",(function(e,n){t(e.exports,"paginationRender",(function(){return a})),t(e.exports,"paginationDestroy",(function(){return i}));const o=document.querySelector(".pagination");function a(t,e){const n=document.createElement("button");n.setAttribute("type","button"),n.textContent=t,n.classList.add("pagination__button"),n.classList.add("pagination__button--actual"),o.append(n);const a=document.createElement("button");a.setAttribute("type","button"),a.classList.add("pagination__button"),a.textContent=t+1;const i=document.createElement("button");i.setAttribute("type","button"),i.classList.add("pagination__button"),i.textContent=t+2;const s=document.createElement("button");s.setAttribute("type","button"),s.classList.add("pagination__button"),s.textContent=t-1;const d=document.createElement("button");d.setAttribute("type","button"),d.classList.add("pagination__button"),d.textContent=t-2;const r=document.createElement("button");r.setAttribute("type","button"),r.classList.add("pagination__button"),r.classList.add("pagination__button--next"),r.dataset.page=t+1;const l=document.createElement("button");l.setAttribute("type","button"),l.classList.add("pagination__button"),l.classList.add("pagination__button--previous"),l.dataset.page=t-1;const c=document.createElement("button");c.setAttribute("type","button"),c.textContent=1,c.classList.add("pagination__button"),c.classList.add("pagination__button--hideAbility");const u=document.createElement("button");u.setAttribute("type","button"),u.textContent=e,u.classList.add("pagination__button"),u.classList.add("pagination__button--hideAbility");const m=document.createElement("button");m.setAttribute("type","button"),m.textContent="...",m.classList.add("pagination__button"),m.classList.add("pagination__button--hideAbility"),m.classList.add("pagination__button--deactive");const p=document.createElement("button");p.setAttribute("type","button"),p.textContent="...",p.classList.add("pagination__button"),p.classList.add("pagination__button--hideAbility"),p.classList.add("pagination__button--deactive"),1===t&&(e>t&&o.append(a),e>a.textContent&&o.append(i),e>i.textContent&&(o.append(m),o.append(u)),e>t&&o.append(r)),2===t&&(e>t&&o.append(a),e>a.textContent&&o.append(i),e>i.textContent&&(o.append(m),o.append(u)),e>t&&o.append(r),o.prepend(s),o.prepend(l)),t>2&&(e>t&&o.append(a),e>a.textContent&&o.append(i),e>i.textContent&&(o.append(m),o.append(u)),e>t&&o.append(r),o.prepend(s),o.prepend(d),t>3&&(o.prepend(p),o.prepend(c)),o.prepend(l))}function i(){o.replaceChildren()}})),a.register("bnGUG",(function(e,n){t(e.exports,"modalMovie",(function(){return m})),t(e.exports,"closeModal",(function(){return _}));var o=a("14BL6"),i=a("kJhAR"),s=a("31u3U");a("gjiCh");const d=document.querySelector("body"),r=document.querySelector(".overlay"),l=(document.querySelector(".modal__window"),document.querySelector(".modal__button-close")),c=document.querySelector(".modal__movie");let u={watched:null,queue:null};const m=async t=>{if(t.target.classList.contains("movie"),t.target===t.currentTarget)return;const e=p(t.target);if(!e)return;const n=e.dataset.id,a=await(0,o.fetchJsonResponse)(`https://api.themoviedb.org/3/movie/${n}`,{api_key:i.API_KEY,language:"en-US"});if(!1===a.success)return;const d=s.moviesStorage.getItem("watched"),l=s.moviesStorage.getItem("queue");let m,_,h="",y="",L="Add to watched",w="Add to queue";d&&d.includes(n)&&(h="modal-movie__watched",L="Remove from watched"),l&&l.includes(n)&&(y="modal-movie__queue",w="Remove from queue"),m=null===a.poster_path?"https://movieeo.com/no-poster.png":`https://image.tmdb.org/t/p/w500${a.poster_path}`,_=0===a.genres.length?["Unknown"]:a.genres.map((t=>t.name)).join(", ");const x=`\n                <div class="modal-movie__container">\n                  <img src=${m}\n                    alt="${a.title} poster." class="modal-movie__picture" />\n                  <div class="modal-movie__information">\n                    <h3 class="modal-movie__title">${a.title}</h3>\n                    <table>\n                      <tbody class="modal-movie__table modal-table">\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Vote/Votes</td>\n                          <td class="modal-table__data modal-table__information">\n                            <span class="modal-table__number modal-table--orange">\n                              ${Math.round(10*a.vote_average)/10}\n                            </span> / \n                            <span class="modal-table__number modal-table--grey">\n                              ${a.vote_count}\n                            </span>\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Popularity</td>\n                          <td class="modal-table__data modal-table__information">\n                            ${Math.round(10*a.popularity)/10}\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Original Title</td>\n                          <td class="modal-table__data modal-table__information modal-table--uppercase">\n                            ${a.original_title}\n                          </td>\n                        </tr>\n                        <tr class="modal-table__row">\n                          <td class="modal-table__data modal-table__title">Genre</td>\n                          <td class="modal-table__data modal-table__information">\n                            ${_}\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <div class="modal-movie__overview">\n                      <h4 class="modal-movie__about">About</h4>\n                      <p class="modal-movie__description">\n                        ${a.overview}\n                      </p>\n                    </div>\n                    <div class="modal-movie__buttons movie-button">\n                      <button\n                        type="button"\n                        class="modal-movie__btn ${h}"\n                        data-idfilm=""\n                        data-btn="watched">\n                          ${L}\n                      </button>\n                      <button\n                        type="button"\n                        class="modal-movie__btn ${y}"\n                        data-idfilm=""\n                        data-btn="queue">\n                          ${w}\n                      </button>\n                    </div>\n                  </div>\n                </div>`;c.innerHTML=x,g(!0),window.addEventListener("keyup",b),r.addEventListener("click",v),u.watched=document.querySelector('[data-btn="watched"]'),u.queue=document.querySelector('[data-btn="queue"]'),u.watched.addEventListener("click",(t=>f(n,"watched"))),u.queue.addEventListener("click",(t=>f(n,"queue")))},p=t=>"UL"!==t.tagName&&("LI"!==t.tagName?p(t.parentElement):t),_=()=>{l.addEventListener("click",(t=>g(!1)))},b=t=>{"Escape"!==t.key&&27!==t.keyCode||g(!1)},v=t=>{t.currentTarget===t.target&&g(!1)},g=t=>{if(t)return d.classList.add("noScroll"),void r.classList.remove("overlay--is-hidden");d.classList.remove("noScroll"),r.classList.add("overlay--is-hidden"),u.watched.removeEventListener("click",f),u.queue.removeEventListener("click",f),window.removeEventListener("keyup",b),r.removeEventListener("click",v)},f=(t,e)=>{const n=s.moviesStorage.getItem(e);let o,a=[];if(n&&(a=[...n]),a.includes(t))return s.moviesStorage.removeItem(t,e),u[e].classList.remove(`modal-movie__${e}`),void(u[e].innerText=`Add to ${e}`);a.push(t),s.moviesStorage.setItem(a,e),"watched"===e&&(o="queue"),"queue"===e&&(o="watched"),s.moviesStorage.removeItem(t,o),u[e].classList.add(`modal-movie__${e}`),u[e].innerText=`Remove from ${e}`,u[o].classList.remove(`modal-movie__${o}`),u[o].innerText=`Add to ${o}`}})),a.register("31u3U",(function(e,n){t(e.exports,"moviesStorage",(function(){return s}));const o=(t,e)=>{const n=i(e);n&&window.localStorage.setItem(n,JSON.stringify(t))},a=t=>{const e=i(t);if(!e)return;const n=window.localStorage.getItem(e);return JSON.parse(n)},i=t=>"watched"===t?"movies-watched":"queue"===t?"movies-queue":(console.error("wronga type key in localStorage"),!1),s={setItem:o,getItem:a,removeItem:(t,e)=>{if(!i(e))return;const n=a(e);if(!n)return;const s=n.filter(((e,n)=>e!==t));o(s,e)}}})),a.register("gjiCh",(function(e,n){t(e.exports,"startLoader",(function(){return a})),t(e.exports,"stopLoader",(function(){return i}));const o=document.querySelector(".movies__container"),a=()=>{o.insertAdjacentHTML("beforeend",'<div class="dot-spinner">\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n  <div class="dot-spinner__dot"></div>\n</div>')},i=()=>{document.querySelector(".dot-spinner").remove()}}));
//# sourceMappingURL=index.38dc6469.js.map
