import useSWR from 'swr';
import { TMDB_API_DISCOVER_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useMoviesByGenre = (movieId: string) => {
  const { data, error } = useSWR(
    [`${TMDB_API_DISCOVER_URL}/movie`, { ...TMDB_API_PARAMS, with_genres: movieId }],
    fetcher
  );

  return { data, isLoading: !error && !data, isError: error };
};
