import { API_KEY } from './apiKey';

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
});

export let genresIDs;

export async function getGenresIDs() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?${searchParams}`
    );
    const genresObj = await response.json();
    genresIDs = genresObj.genres;
  } catch (error) {
    console.error(error);
  }
}
