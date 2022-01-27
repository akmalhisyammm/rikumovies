import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from 'components/layout';
import { DetailSection, HeroSection } from 'components/about';

const About = () => {
  const router = useRouter();

  return (
    <Layout title="About">
      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.replace('/')}>
        Back to Home
      </Button>

      <Box textAlign="center">
        <HeroSection />
        <DetailSection />
      </Box>
    </Layout>
  );
};

export default About;
