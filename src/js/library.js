import { API_KEY } from './apiKey';
import { closeModal, modalMovie } from './modalMovie';
import { fetchJsonResponse } from './responseJsonFetch';
import { displayMovieCard } from './moviesListRender';
import { startLoader, stopLoader } from './loader';
import { paginationRender, paginationDestroy } from './pagination';

const moviesList = document.querySelector('.movies__list');
const watchedBtn = document.querySelector('.watched-button');
const queueBtn = document.querySelector('.queue-button');
const pagination = document.querySelector('.pagination');

let queueLength = JSON.parse(localStorage.getItem('movies-queue')).length;
let watchedLength = JSON.parse(localStorage.getItem('movies-watched')).length;
let startId = 0;
let endId = 19;
let actualPage = 1;
let totalPages;
let fetchLibrary = () => {
  moviesList.innerHTML = '';
  moviesList.dataset.library = 'watched';
  queueBtn.classList.remove('queue-button--active');
  watchedBtn.classList.add('watched-button--active');
  paginationDestroy();
  if (watchedLength !== 0) {
    startLoader();
    watchedLength = JSON.parse(localStorage.getItem('movies-watched')).length;
    actualPage = 1;
    startId = 0;
    endId = 19;
    let parsedWatched = JSON.parse(localStorage.getItem('movies-watched'));
    totalPages = Math.ceil(watchedLength / 20);
    for (let i = startId; i <= endId; i++) {
      if (parsedWatched[i] !== undefined) {
        fetchJsonResponse(
          `https://api.themoviedb.org/3/movie/${parsedWatched[i]}`,
          {
            api_key: API_KEY,
          }
        ).then(movie => {
          let genres = movie.genres;
          let movieGenres = [];
          for (let i = 0; i < genres.length; i++) {
            movieGenres.push(genres[i].name);
          }
          displayMovieCard(movie, movieGenres);
        });
      }
    }
    paginationRender(actualPage, totalPages);
    stopLoader();
  }
};

let fetchQueue = () => {
  moviesList.innerHTML = '';
  moviesList.dataset.library = 'queue';
  watchedBtn.classList.remove('watched-button--active');
  queueBtn.classList.add('queue-button--active');
  paginationDestroy();
  if (queueLength !== 0) {
    startLoader();
    queueLength = JSON.parse(localStorage.getItem('movies-queue')).length;
    actualPage = 1;
    startId = 0;
    endId = 19;
    let parsedQueue = JSON.parse(localStorage.getItem('movies-queue'));
    totalPages = Math.ceil(queueLength / 20);
    for (let i = startId; i <= endId; i++) {
      if (parsedQueue[i] !== undefined) {
        fetchJsonResponse(
          `https://api.themoviedb.org/3/movie/${parsedQueue[i]}`,
          {
            api_key: API_KEY,
          }
        ).then(movie => {
          let genres = movie.genres;
          let movieGenres = [];
          for (let i = 0; i < genres.length; i++) {
            movieGenres.push(genres[i].name);
          }
          displayMovieCard(movie, movieGenres);
        });
      }
    }
    paginationRender(actualPage, totalPages);
    stopLoader();
  }
};

pagination.addEventListener('click', evt => {
  evt.preventDefault;
  if (evt.target.classList.contains('pagination__button')) {
    if (
      evt.target.classList.contains('pagination__button--next') ||
      evt.target.classList.contains('pagination__button--previous')
    ) {
      actualPage = evt.target.dataset.page;
    }
    if (evt.target.textContent !== '') {
      actualPage = evt.target.textContent;
    }
  }
  if (evt.target.classList.contains('pagination__button')) {
    window.scrollTo(0, 0);
    if (moviesList.dataset.library === 'watched') {
      startLoader();
      moviesList.innerHTML = '';
      paginationDestroy();
      let parsedWatched = JSON.parse(localStorage.getItem('movies-watched'));
      watchedLength = JSON.parse(localStorage.getItem('movies-watched')).length;
      totalPages = Math.ceil(watchedLength / 20);
      startId = 0 + 20 * (actualPage - 1);
      endId = 19 + 20 * (actualPage - 1);
      for (let i = startId; i <= endId; i++) {
        if (parsedWatched[i] !== undefined) {
          fetchJsonResponse(
            `https://api.themoviedb.org/3/movie/${parsedWatched[i]}`,
            {
              api_key: API_KEY,
            }
          ).then(movie => {
            let genres = movie.genres;
            let movieGenres = [];
            for (let i = 0; i < genres.length; i++) {
              movieGenres.push(genres[i].name);
            }
            displayMovieCard(movie, movieGenres);
          });
        }
      }
      paginationRender(+actualPage, +totalPages);
      stopLoader();
    }
    if (moviesList.dataset.library === 'queue') {
      startLoader();
      moviesList.innerHTML = '';
      paginationDestroy();
      let parsedQueue = JSON.parse(localStorage.getItem('movies-queue'));
      queueLength = JSON.parse(localStorage.getItem('movies-queue')).length;
      totalPages = Math.ceil(queueLength / 20);
      startId = 0 + 20 * (actualPage - 1);
      endId = 19 + 20 * (actualPage - 1);
      for (let i = startId; i <= endId; i++) {
        if (parsedQueue[i] !== undefined) {
          fetchJsonResponse(
            `https://api.themoviedb.org/3/movie/${parsedQueue[i]}`,
            {
              api_key: API_KEY,
            }
          ).then(movie => {
            let genres = movie.genres;
            let movieGenres = [];
            for (let i = 0; i < genres.length; i++) {
              movieGenres.push(genres[i].name);
            }
            displayMovieCard(movie, movieGenres);
          });
        }
      }
      paginationRender(+actualPage, +totalPages);
      stopLoader();
    }
  }
});

fetchLibrary();
queueBtn.addEventListener('click', fetchQueue);
watchedBtn.addEventListener('click', fetchLibrary);
moviesList.addEventListener('click', modalMovie);
closeModal();
