import useSWR from 'swr';

import { TMDB_API_MOVIE_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useMovieDetail = (movieId?: string) => {
  const { data, error } = useSWR(
    movieId ? [`${TMDB_API_MOVIE_URL}/${movieId}`, TMDB_API_PARAMS] : null,
    fetcher
  );

  return { data, isLoading: !error && !data, isError: !!error };
};
