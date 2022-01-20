import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { useMovieCredits, useMovieDetail } from 'hooks/movie';
import { SWRMovieCredits, SWRMovieDetail } from 'types/movie';

import Layout from 'components/layout';
import { CastSection, MovieSection } from 'components/detail/movie';

const MovieDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const movieDetail: SWRMovieDetail = useMovieDetail(id as string);
  const movieCredits: SWRMovieCredits = useMovieCredits(id as string);

  return (
    <Layout title={movieDetail.data?.title}>
      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>

      <Box marginY={4}>
        <MovieSection
          data={movieDetail.data}
          isLoading={movieDetail.isLoading}
          isError={movieDetail.isError}
        />
        <CastSection
          data={movieCredits.data}
          isLoading={movieCredits.isLoading}
          isError={movieCredits.isError}
        />
      </Box>
    </Layout>
  );
};

export default MovieDetail;
