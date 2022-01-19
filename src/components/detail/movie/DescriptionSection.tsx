import {
  Badge,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Heading,
  HStack,
  Link,
  Skeleton,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import { FaExternalLinkAlt, FaImdb } from 'react-icons/fa';
import { DateTime } from 'luxon';
import { useMovieDetail } from 'hooks/movie';
import { SWRMovieDetail } from 'types/movie';

type DescriptionSectionProps = {
  movieId: string;
};

const DescriptionSection = ({ movieId }: DescriptionSectionProps) => {
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

  if (movieDetail.isError) return <Text>Failed to Fetch Data</Text>;

  return (
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
          <Flex
            justifyContent={['center', 'center', 'left']}
            alignItems="center"
            gap={2}
            marginBottom={4}>
            <CircularProgress
              value={movieDetail.data?.vote_average * 10}
              color="green.400"
              thickness={8}>
              <CircularProgressLabel>{movieDetail.data?.vote_average * 10}%</CircularProgressLabel>
            </CircularProgress>
            <Box>
              <Text fontWeight="600">User Score</Text>
              <Text as="small">({movieDetail.data?.vote_count} voted)</Text>
            </Box>
          </Flex>

          <HStack marginBottom={4} justifyContent={['center', 'center', 'left']}>
            <Badge variant="outline" colorScheme={statusColor()}>
              {movieDetail.data?.status}
            </Badge>
            <Text as="small" textTransform="uppercase">
              &bull; {movieDetail.data?.runtime} minutes
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
  );
};

export default DescriptionSection;
