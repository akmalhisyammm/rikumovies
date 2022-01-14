import useSWR from 'swr';
import { TMDB_API_MOVIE_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useUpcomingMovies = () => {
  const { data, error } = useSWR([`${TMDB_API_MOVIE_URL}/upcoming`, TMDB_API_PARAMS], fetcher);

  return { data, isLoading: !error && !data, isError: error };
};
