import useSWR from 'swr';
import { TMDB_API_PERSON_URL, TMDB_API_PARAMS } from 'constants/tmdb';
import { fetcher } from 'utils/fetcher';

export const usePersonDetail = (personId: string) => {
  const { data, error } = useSWR([`${TMDB_API_PERSON_URL}/${personId}`, TMDB_API_PARAMS], fetcher);

  return { data, isLoading: !error && !data, isError: error };
};
