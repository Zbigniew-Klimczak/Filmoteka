!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var a={id:e,exports:{}};return t[e]=a,n.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var a=n("iY7oS"),r=n("igQOg"),i=n("jkJzp"),s=n("jcFG7"),d=n("8AEpj"),u=n("kvC6y"),c=document.querySelector(".search__button"),l=document.querySelector(".search__input"),p=document.querySelector(".pagination"),g=document.querySelector(".movies"),_=document.querySelector(".movies__list"),h=1;window.onload=function(){(0,u.trackMousePosition)(),setTimeout((function(){(0,r.fetchJsonResponse)("https://api.themoviedb.org/3/trending/movie/day",{api_key:a.API_KEY,page:h}).then((function(e){(0,u.stopTrackingMousePosition)(),(0,s.paginationDestroy)(),h=e.page,(0,i.moviesListRender)(e.results),(0,s.paginationRender)(e.page,e.total_pages)}))}),0)},c.addEventListener("click",(function(e){e.preventDefault(),(0,u.trackMousePosition)(),h=1,g.dataset.searchquery=l.value,(0,r.fetchJsonResponse)("https://api.themoviedb.org/3/search/movie",{api_key:a.API_KEY,language:"en-US",query:l.value,include_adult:!1,page:h}).then((function(e){0===e.total_results&&document.querySelector(".header__error").classList.remove("header__error--hidden"),(0,u.stopTrackingMousePosition)(),(0,s.paginationDestroy)(),h=e.page,(0,i.moviesListRender)(e.results),e.total_results>0&&(document.querySelector(".header__error").classList.add("header__error--hidden"),(0,s.paginationRender)(e.page,e.total_pages))})),""!=l.value&&(l.value="")})),p.addEventListener("click",(function(e){e.preventDefault,e.target.classList.contains("pagination__button")&&((e.target.classList.contains("pagination__button--next")||e.target.classList.contains("pagination__button--previous"))&&(h=e.target.dataset.page),""!==e.target.textContent&&(h=e.target.textContent)),e.target.classList.contains("pagination__button")&&(window.scrollTo(0,0),(0,u.trackMousePosition)(),void 0===g.dataset.searchquery&&(0,r.fetchJsonResponse)("https://api.themoviedb.org/3/trending/movie/day",{api_key:a.API_KEY,page:h}).then((function(e){(0,u.stopTrackingMousePosition)(),(0,s.paginationDestroy)(),h=e.page,(0,i.moviesListRender)(e.results),(0,s.paginationRender)(e.page,e.total_pages)})),void 0!==g.dataset.searchquery&&((0,r.fetchJsonResponse)("https://api.themoviedb.org/3/search/movie",{api_key:a.API_KEY,language:"en-US",query:g.dataset.searchquery,include_adult:!1,page:h}).then((function(e){0===e.total_results&&document.querySelector(".header__error").classList.remove("header__error--hidden"),(0,u.stopTrackingMousePosition)(),(0,s.paginationDestroy)(),h=e.page,(0,i.moviesListRender)(e.results),e.total_results>0&&(document.querySelector(".header__error").classList.add("header__error--hidden"),(0,s.paginationRender)(e.page,e.total_pages))})),""!=l.value&&(l.value="")))})),_.addEventListener("click",d.modalMovie),(0,d.closeModal)()}();
//# sourceMappingURL=index.8e01b277.js.map
