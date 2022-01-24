import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { FeaturedTitle, FeaturedType } from 'types/movie';

import Layout from 'components/layout';
import { ListSection } from 'components/featured';

const FeaturedMovies = () => {
  const router = useRouter();

  const { type, page } = router.query;

  return (
    <Layout title={FeaturedTitle[type as FeaturedType] as string}>
      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>

      <Box marginY={4}>
        <ListSection type={type as FeaturedType} page={Number(page)} />
      </Box>
    </Layout>
  );
};

export default FeaturedMovies;
