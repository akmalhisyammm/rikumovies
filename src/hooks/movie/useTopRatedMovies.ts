import useSWR from 'swr';
import { TMDB_API_MOVIE_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useTopRatedMovies = () => {
  const { data, error } = useSWR([`${TMDB_API_MOVIE_URL}/top_rated`, TMDB_API_PARAMS], fetcher);

  return { data, isLoading: !error && !data, isError: error };
};
