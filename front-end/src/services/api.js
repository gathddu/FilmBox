const API_KEY = "760b184693ca869de88d1bfcabdc9762";
const BASE_URL = "http://api.themoviedb.org/3";

export const getPopularFilms = async () => {
    const response = await fetch(`${BASE_URL}/movi e/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchFilms = async (query) => {
    const response = await fetch
    (`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};