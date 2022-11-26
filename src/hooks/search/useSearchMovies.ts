import useSWR from 'swr';

import { TMDB_API_SEARCH_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useSearchMovies = (searchQuery?: string, pageQuery?: number) => {
  const { data, error } = useSWR(
    [
      `${TMDB_API_SEARCH_URL}/movie`,
      { ...TMDB_API_PARAMS, query: `${searchQuery}`, page: pageQuery ?? 1 },
    ],
    fetcher
  );

  return { data, isLoading: !error && !data, isError: !!error };
};
