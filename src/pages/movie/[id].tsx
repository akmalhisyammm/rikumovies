import { Box, Button, SimpleGrid } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { useMovieDetail } from 'hooks/movie';
import { SWRMovieDetail } from 'types/movie';

import Layout from 'components/layout';
import { PosterSection, DescriptionSection, CastSection } from 'components/detail/movie';

const MovieDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const movieDetail: SWRMovieDetail = useMovieDetail(id as string);

  return (
    <Layout title={movieDetail.data?.title}>
      <Button background="transparent" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>

      <Box marginY={4}>
        <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]}>
          <PosterSection movieId={id as string} />
          <DescriptionSection movieId={id as string} />
        </SimpleGrid>

        <CastSection movieId={id as string} />
      </Box>
    </Layout>
  );
};

export default MovieDetail;
