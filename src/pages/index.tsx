import Layout from 'components/layout';
import { FeaturedSection } from 'components/home';

const Home = () => {
  return (
    <Layout>
      <FeaturedSection title="Now Playing" />
      <FeaturedSection title="Popular" />
      <FeaturedSection title="Top Rated" />
      <FeaturedSection title="Upcoming" />
    </Layout>
  );
};

export default Home;
