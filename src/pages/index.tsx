import {
  useNowPlayingMovies,
  usePopularMovies,
  useTopRatedMovies,
  useUpcomingMovies,
} from 'hooks/movie';
import { SWRFeaturedMovies } from 'types/movie';

import Layout from 'components/layout';
import { FeaturedSection } from 'components/home';

const Home = () => {
  const nowPlayingMovies: SWRFeaturedMovies = useNowPlayingMovies();
  const popularMovies: SWRFeaturedMovies = usePopularMovies();
  const topRatedMovies: SWRFeaturedMovies = useTopRatedMovies();
  const upcomingMovies: SWRFeaturedMovies = useUpcomingMovies();

  return (
    <Layout>
      <FeaturedSection title="Now Playing" hook={nowPlayingMovies} />
      <FeaturedSection title="Popular" hook={popularMovies} />
      <FeaturedSection title="Top Rated" hook={topRatedMovies} />
      <FeaturedSection title="Upcoming" hook={upcomingMovies} />
    </Layout>
  );
};

export default Home;
