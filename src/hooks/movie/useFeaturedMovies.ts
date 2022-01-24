import useSWR from 'swr';
import { TMDB_API_MOVIE_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';
import { FeaturedType } from 'types/movie';

export const useFeaturedMovies = (type: FeaturedType, pageQuery?: number) => {
  const { data, error } = useSWR(
    [`${TMDB_API_MOVIE_URL}/${type}`, { ...TMDB_API_PARAMS, page: pageQuery ?? 1 }],
    fetcher
  );

  return { data, isLoading: !error && !data, isError: error };
};
