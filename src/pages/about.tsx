import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaArrowLeft } from 'react-icons/fa';

import { DetailSection, HeroSection } from 'components/about';
import Layout from 'components/layout';

const About = () => {
  const router = useRouter();

  return (
    <Layout>
      <NextSeo title="About" canonical={`${process.env.NEXT_PUBLIC_WEB_URL}/about`} />

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
