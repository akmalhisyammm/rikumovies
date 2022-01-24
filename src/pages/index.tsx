import Layout from 'components/layout';
import { FeaturedSection } from 'components/home';

const Home = () => {
  return (
    <Layout>
      <FeaturedSection type="now_playing" />
      <FeaturedSection type="popular" />
      <FeaturedSection type="top_rated" />
      <FeaturedSection type="upcoming" />
    </Layout>
  );
};

export default Home;
