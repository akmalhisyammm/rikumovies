import useSWR from 'swr';
import { TMDB_API_GENRE_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const useMovieGenres = () => {
  const { data, error } = useSWR([`${TMDB_API_GENRE_URL}/movie/list`, TMDB_API_PARAMS], fetcher);

  return { data, isLoading: !error && !data, isError: error };
};
