export async function fetchJsonResponse(url, params) {
  try {
    const fetchResponse = await fetch(url + '?' + new URLSearchParams(params));
    const fetchData = await fetchResponse.json();
    return fetchData;
  } catch (error) {
    console.error(error);
  }
}
