import {
  SimpleGrid,
  Box,
  Skeleton,
  Heading,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Badge,
  Button,
  Link,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaImdb } from 'react-icons/fa';
import { DateTime } from 'luxon';

import { DetailCard } from 'components/images';
import { useMovieDetail } from 'hooks/movie';
import { runtimeFormat } from 'utils/runtimeFormat';

import type { SWRMovieDetail } from 'types/movie';

type MovieSectionProps = {
  movieId: string;
};

const MovieSection = ({ movieId }: MovieSectionProps) => {
  const movieDetail: SWRMovieDetail = useMovieDetail(movieId);

  const statusColor = () => {
    switch (movieDetail.data?.status) {
      case 'Rumored':
        return 'orange';
      case 'Planned':
        return 'teal';
      case 'In Production':
        return 'blue';
      case 'Post Production':
        return 'purple';
      case 'Released':
        return 'green';
      case 'Canceled':
        return 'red';
    }
  };

  if (movieDetail.isError) return <Text>Failed to fetch movie detail.</Text>;

  return (
    <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]}>
      {/* POSTER */}
      <DetailCard imagePath={movieDetail.data?.poster_path} />

      {/* DESCRIPTION */}
      <Box textAlign={['center', 'center', 'left']}>
        <Skeleton isLoaded={!movieDetail.isLoading} fadeDuration={2}>
          <Box>
            <Heading marginBottom={2}>
              {movieDetail.data?.title} (
              {DateTime.fromISO(movieDetail.data?.release_date).toFormat('yyyy')})
            </Heading>
            <Text fontStyle="italic">{movieDetail.data?.tagline}</Text>
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!movieDetail.isLoading} fadeDuration={2}>
          <Box marginY={8}>
            <HStack
              justifyContent={['center', 'center', 'left']}
              alignItems="center"
              gap={2}
              marginBottom={4}>
              <CircularProgress
                value={Math.round(movieDetail.data?.vote_average * 10)}
                color="green.400"
                thickness={8}>
                <CircularProgressLabel>
                  {Math.round(movieDetail.data?.vote_average * 10)}%
                </CircularProgressLabel>
              </CircularProgress>
              <Box>
                <Text fontWeight="600">User Score</Text>
                <Text as="small">({movieDetail.data?.vote_count} voted)</Text>
              </Box>
            </HStack>

            <HStack marginBottom={4} justifyContent={['center', 'center', 'left']}>
              <Badge variant="outline" colorScheme={statusColor()}>
                {movieDetail.data?.status}
              </Badge>
              <Text as="small">
                &bull; {runtimeFormat(movieDetail.data?.runtime).hours}h{' '}
                {runtimeFormat(movieDetail.data?.runtime).minutes}m
              </Text>
            </HStack>

            <HStack marginBottom={4} justifyContent={['center', 'center', 'left']}>
              {movieDetail.data?.genres.map((genre) => (
                <Badge key={genre.id} variant="outline">
                  {genre.name}
                </Badge>
              ))}
            </HStack>

            <HStack marginY={4} justifyContent={['center', 'center', 'left']}>
              <Link href={movieDetail.data?.homepage} isExternal>
                <Button size="sm" leftIcon={<FaExternalLinkAlt />}>
                  Website
                </Button>
              </Link>
              <Link href={'https://www.imdb.com/title/' + movieDetail.data?.imdb_id} isExternal>
                <Button size="sm" leftIcon={<FaImdb />}>
                  IMDB
                </Button>
              </Link>
            </HStack>
          </Box>
        </Skeleton>

        <SkeletonText isLoaded={!movieDetail.isLoading} noOfLines={8} spacing={3} fadeDuration={2}>
          <Box>
            <Text textAlign="justify">{movieDetail.data?.overview}</Text>
          </Box>
        </SkeletonText>
      </Box>
    </SimpleGrid>
  );
};

export default MovieSection;
