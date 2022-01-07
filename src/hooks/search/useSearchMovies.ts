import useSWR from 'swr';
import { TMDB_API_SEARCH_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useSearchMovies = (movieQuery: string) => {
  const { data, error } = useSWR(
    [`${TMDB_API_SEARCH_URL}/movie`, { ...TMDB_API_PARAMS, query: `${movieQuery}` }],
    fetcher
  );

  return { data, isLoading: !error && !data, isError: error };
};
