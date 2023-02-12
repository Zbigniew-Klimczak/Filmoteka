import { API_KEY } from './apiKey';
import { fetchJsonResponse } from './responseJsonFetch';
import { moviesListRender } from './moviesListRender';

const searchBtn = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');

window.onload = () => {
  fetchJsonResponse('https://api.themoviedb.org/3/trending/movie/day', {
    api_key: API_KEY,
  }).then(response => {
    moviesListRender(response.results);
  });
};

searchBtn.addEventListener('click', event => {
  event.preventDefault();
  fetchJsonResponse('https://api.themoviedb.org/3/search/movie', {
    api_key: API_KEY,
    language: 'en-US',
    query: searchInput.value,
    include_adult: false,
  }).then(response => {
    if (response.total_results === 0) {
      document
        .querySelector('.header__error')
        .classList.remove('header__error--hidden');
    }
    if (response.total_results > 0) {
      document
        .querySelector('.header__error')
        .classList.add('header__error--hidden');
    }
    moviesListRender(response.results);
  });
  if (searchInput.value != '') {
    searchInput.value = '';
  }
});
