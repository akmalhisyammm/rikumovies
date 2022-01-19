export interface FeaturedMovies {
  page: number;
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

export interface SWRFeaturedMovies {
  data: FeaturedMovies;
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
