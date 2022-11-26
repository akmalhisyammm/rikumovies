import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaArrowLeft } from 'react-icons/fa';

import { CastSection, MovieSection } from 'components/detail/movie';
import { useMovieDetail } from 'hooks/movie';
import Layout from 'components/layout';

import type { SWRMovieDetail } from 'types/movie';

const MovieDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const movieDetail: SWRMovieDetail = useMovieDetail(id as string);

  return (
    <Layout>
      <NextSeo
        title={movieDetail.data?.title}
        canonical={`${process.env.NEXT_PUBLIC_WEB_URL}/movie/detail/${id}`}
      />

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
