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
import { SWRMovieDetail } from 'types/movie';
import { runtimeFormat } from 'utils/runtimeFormat';

import { DetailCard } from 'components/images';

const MovieSection = ({ data, isLoading, isError }: SWRMovieDetail) => {
  const statusColor = () => {
    switch (data?.status) {
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

  if (isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]}>
      {/* POSTER */}
      <DetailCard imagePath={data?.poster_path} />

      {/* DESCRIPTION */}
      <Box textAlign={['center', 'center', 'left']}>
        <Skeleton isLoaded={!isLoading} fadeDuration={2}>
          <Box>
            <Heading marginBottom={2}>
              {data?.title} ({DateTime.fromISO(data?.release_date).toFormat('yyyy')})
            </Heading>
            <Text fontStyle="italic">{data?.tagline}</Text>
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!isLoading} fadeDuration={2}>
          <Box marginY={8}>
            <HStack
              justifyContent={['center', 'center', 'left']}
              alignItems="center"
              gap={2}
              marginBottom={4}>
              <CircularProgress value={data?.vote_average * 10} color="green.400" thickness={8}>
                <CircularProgressLabel>{data?.vote_average * 10}%</CircularProgressLabel>
              </CircularProgress>
              <Box>
                <Text fontWeight="600">User Score</Text>
                <Text as="small">({data?.vote_count} voted)</Text>
              </Box>
            </HStack>

            <HStack marginBottom={4} justifyContent={['center', 'center', 'left']}>
              <Badge variant="outline" colorScheme={statusColor()}>
                {data?.status}
              </Badge>
              <Text as="small">
                &bull; {runtimeFormat(data?.runtime).hours}h {runtimeFormat(data?.runtime).minutes}m
              </Text>
            </HStack>

            <HStack marginBottom={4} justifyContent={['center', 'center', 'left']}>
              {data?.genres.map((genre) => (
                <Badge key={genre.id} variant="outline">
                  {genre.name}
                </Badge>
              ))}
            </HStack>

            <HStack marginY={4} justifyContent={['center', 'center', 'left']}>
              <Link href={data?.homepage} isExternal>
                <Button size="sm" leftIcon={<FaExternalLinkAlt />}>
                  Website
                </Button>
              </Link>
              <Link href={'https://www.imdb.com/title/' + data?.imdb_id} isExternal>
                <Button size="sm" leftIcon={<FaImdb />}>
                  IMDB
                </Button>
              </Link>
            </HStack>
          </Box>
        </Skeleton>

        <SkeletonText isLoaded={!isLoading} noOfLines={8} spacing={3} fadeDuration={2}>
          <Box>
            <Text textAlign="justify">{data?.overview}</Text>
          </Box>
        </SkeletonText>
      </Box>
    </SimpleGrid>
  );
};

export default MovieSection;
