import useSWR from 'swr';

import { TMDB_API_MOVIE_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useMovieCredits = (movieId?: string) => {
  const { data, error } = useSWR(
    movieId ? [`${TMDB_API_MOVIE_URL}/${movieId}/credits`, TMDB_API_PARAMS] : null,
    fetcher
  );

  return { data, isLoading: !error && !data, isError: !!error };
};
