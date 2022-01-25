export type FeaturedType = 'now_playing' | 'popular' | 'top_rated' | 'upcoming';

export enum FeaturedTitle {
  now_playing = 'Now Playing',
  popular = 'Popular',
  top_rated = 'Top Rated',
  upcoming = 'Upcoming',
}

export interface MovieOverview {
  page: number;
  total_pages: number;
  results: {
    id: string;
    title: string;
    poster_path: string;
  }[];
}

export interface MovieDetail {
  id: number;
  title: string;
  genres: {
    id: number;
    name: string;
  }[];
  tagline: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  status: string;
  budget: number;
  revenue: number;
  homepage: string;
  imdb_id: string;
  release_date: string;
}

export interface MovieCredits {
  id: number;
  cast: {
    id: number;
    name: string;
    profile_path: string;
    character: string;
  }[];
}

export interface SWRMovieOverview {
  data: MovieOverview;
  isLoading: boolean;
  isError: boolean;
}

export interface SWRMovieDetail {
  data: MovieDetail;
  isLoading: boolean;
  isError: boolean;
}

export interface SWRMovieCredits {
  data: MovieCredits;
  isLoading: boolean;
  isError: boolean;
}
