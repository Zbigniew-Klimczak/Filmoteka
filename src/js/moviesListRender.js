import { fetchJsonResponse } from './responseJsonFetch';
import { API_KEY } from './apiKey';
import { stopLoader } from './loader';

const moviesList = document.querySelector('.movies__list');

async function getGenresList() {
  try {
    const genresResponse = await fetchJsonResponse(
      'https://api.themoviedb.org/3/genre/movie/list',
      {
        api_key: API_KEY,
        language: 'en-US',
      }
    );
    const genresData = genresResponse.genres;
    return genresData;
  } catch (error) {
    console.error(error);
  }
}

function getMoviesGenres(movie, genresList) {
  const movieGenres = [];
  movie.genre_ids.forEach(genre_id => {
    for (const genre of genresList) {
      if (genre_id === genre.id) {
        movieGenres.push(genre.name);
      }
    }
  });
  return movieGenres;
}

export function displayMovieCard(movie, movieGenres) {
  let moviePoster;
  if (movie.poster_path === null) {
    moviePoster = 'https://movieeo.com/no-poster.png';
  } else {
    moviePoster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }
  let movieGenresList;
  if (movieGenres.length === 0) {
    movieGenresList = ['Unknown'];
  } else {
    movieGenresList = movieGenres;
  }
  let movieCardHtml = `<li class="movie" data-id="${movie.id}">
        <img class="movie__img"
          src=${moviePoster}
          alt="${movie.title} poster." loading="lazy" />
        <h2 class="movie__title">${movie.title}</h2>
        <div class="movie__info">
          <p class="movie__detail">
            ${movieGenresList.slice(0, 4).join(', ')}
          </p>
          <p class="movie__detail">|</p>
          <p class="movie__detail">${movie.release_date.slice(0, 4)}</>
        </div>
      </li>`;
  moviesList.insertAdjacentHTML('beforeend', movieCardHtml);
}

export async function moviesListRender(movies) {
  try {
    moviesList.innerHTML = '';

    const genresList = await getGenresList();
    stopLoader();
    movies.forEach(movie => {
      const movieGenres = getMoviesGenres(movie, genresList);

      displayMovieCard(movie, movieGenres);
    });
  } catch (error) {
    console.error(error);
  }
}
