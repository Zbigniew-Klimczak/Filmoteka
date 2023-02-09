import { getTrendingMovies } from './trendingMoviesFetch';
import { getGenresIDs } from './genresCodesFetch';
import { moviesListRender } from './moviesListRender';

window.onload = () => {
  getGenresIDs();

  getTrendingMovies().then(movies => {
    const moviesData = movies.results;
    moviesData.forEach(movie => {
      moviesListRender(movie);
    });
  });
};
