import { Box, Button, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaArrowLeft } from 'react-icons/fa';

import { FeaturedListSection } from 'components/featured';
import { FeaturedTitle } from 'types/movie';
import Layout from 'components/layout';

import type { FeaturedType } from 'types/movie';

const FeaturedMovies = () => {
  const router = useRouter();

  const { type, page } = router.query;

  return (
    <Layout>
      <NextSeo
        title={FeaturedTitle[type as FeaturedType]}
        canonical={`${process.env.NEXT_PUBLIC_WEB_URL}/movie/${type}`}
      />

      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.replace('/')}>
        Back to Home
      </Button>

      <Box marginY={4}>
        <Box>
          <Heading>{FeaturedTitle[type as FeaturedType]}</Heading>
        </Box>
        <FeaturedListSection type={type as FeaturedType} page={Number(page)} />
      </Box>
    </Layout>
  );
};

export default FeaturedMovies;
