import { Box, Image, Skeleton, Text } from '@chakra-ui/react';
import { TMDB_API_POSTER_URL } from 'constants/tmdb';
import { useMovieDetail } from 'hooks/movie';
import { SWRMovieDetail } from 'types/movie';

type PosterSectionProps = {
  movieId: string;
};

const PosterSection = ({ movieId }: PosterSectionProps) => {
  const movieDetail: SWRMovieDetail = useMovieDetail(movieId);

  if (movieDetail.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box width={['80%', '80%', '100%']} marginX="auto">
      <Image
        src={TMDB_API_POSTER_URL + movieDetail.data?.poster_path}
        alt={movieDetail.data?.title}
        fallback={<Skeleton height={550} borderRadius={18} />}
        boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
        borderRadius={18}
      />
    </Box>
  );
};

export default PosterSection;
