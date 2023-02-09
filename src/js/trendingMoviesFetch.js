import { API_KEY } from './apiKey';

export let selectedPage = 1;

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  page: selectedPage,
});

export async function getTrendingMovies(pageNo) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?${searchParams}`
    );
    const movies = await response.json();
    return movies;
  } catch (error) {
    console.error(error);
  }
}
