import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { useMovieDetail } from 'hooks/movie';
import { SWRMovieDetail } from 'types/movie';

import Layout from 'components/layout';
import { CastSection, MovieSection } from 'components/detail/movie';

const MovieDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const movieDetail: SWRMovieDetail = useMovieDetail(id as string);

  return (
    <Layout title={movieDetail.data?.title}>
      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>

      <Box marginY={4}>
        <MovieSection movieId={id as string} />
        <CastSection movieId={id as string} />
      </Box>
    </Layout>
  );
};

export default MovieDetail;
