import { API_KEY } from './apiKey';
import { trackMousePosition, stopTrackingMousePosition } from "./footerModal";

const searchParams = new URLSearchParams({
  api_key: API_KEY,
  language: 'en-US',
});

export let genresIDs;

export async function getGenresIDs() {
  try {
    trackMousePosition();
    const response = await fetch(
      stopTrackingMousePosition(),
      `https://api.themoviedb.org/3/genre/movie/list?${searchParams}`
     );
    const genresObj = await response.json();
    genresIDs = genresObj.genres;
   
  } catch (error) {
    stopTrackingMousePosition();
    console.error(error);
  }
}
