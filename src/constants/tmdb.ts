const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3';

/* URL */
export const TMDB_API_DISCOVER_URL = `${TMDB_API_BASE_URL}/discover`;
export const TMDB_API_GENRE_URL = `${TMDB_API_BASE_URL}/genre`;
export const TMDB_API_MOVIE_URL = `${TMDB_API_BASE_URL}/movie`;
export const TMDB_API_PERSON_URL = `${TMDB_API_BASE_URL}/person`;
export const TMDB_API_SEARCH_URL = `${TMDB_API_BASE_URL}/search`;

/* PARAMS */
export const TMDB_API_PARAMS = {
  api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
  language: 'en_US',
};
