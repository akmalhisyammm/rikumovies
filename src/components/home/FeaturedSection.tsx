import { Box, Button, Heading, HStack, Skeleton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useFeaturedMovies } from 'hooks/movie';
import { FeaturedTitle, FeaturedType, SWRMovieOverview } from 'types/movie';

import { RouteCard } from 'components/images';

type FeaturedSectionProps = {
  type: FeaturedType;
};

const FeaturedSection = ({ type }: FeaturedSectionProps) => {
  const router = useRouter();

  const featuredMovies: SWRMovieOverview = useFeaturedMovies(type);

  if (featuredMovies.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box marginY={8}>
      <HStack justifyContent="space-between" marginBottom={4}>
        <Heading fontSize="3xl">{FeaturedTitle[type]}</Heading>
        <Button variant="ghost" onClick={() => router.push(`/movie/${type}?page=1`)}>
          See more
        </Button>
      </HStack>

      <Box whiteSpace="nowrap" overflowX="auto" padding={2}>
        <Skeleton isLoaded={!featuredMovies.isLoading} fadeDuration={2} minHeight={200}>
          {featuredMovies.data?.results.slice(0, 8).map((movie) => (
            <RouteCard
              key={movie.id}
              title={movie.title}
              imagePath={movie.poster_path}
              routerPath={`/movie/detail/${movie.id}`}
              slideCard
            />
          ))}
        </Skeleton>
      </Box>
    </Box>
  );
};

export default FeaturedSection;
