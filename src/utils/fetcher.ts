import axios, { AxiosRequestConfig } from 'axios';

export const fetcher = (url: string, params?: AxiosRequestConfig) =>
  axios.get(url, { params }).then((res) => res.data);
