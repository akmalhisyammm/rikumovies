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
  vote_average: string;
  status: string;
  budget: number;
  revenue: number;
  homepage: string;
  release_date: string;
}

export interface FeaturedMovies {
  page: number;
  results: {
    id: string;
    title: string;
    poster_path: string;
  }[];
}

export interface SWRFeaturedMovies {
  data: FeaturedMovies;
  isLoading: boolean;
  isError: boolean;
}
