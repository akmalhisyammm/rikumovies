import { Box, Button, HStack, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { RouteCard } from 'components/images';
import { useFeaturedMovies } from 'hooks/movie';

import type { FeaturedType, SWRMovieOverview } from 'types/movie';

type FeaturedListSectionProps = {
  type: FeaturedType;
  page: number;
};

const FeaturedListSection = ({ type, page }: FeaturedListSectionProps) => {
  const router = useRouter();

  const featuredMovies: SWRMovieOverview = useFeaturedMovies(type, page);

  if (featuredMovies.isError) return <Text>Failed to fetch featured movies.</Text>;

  return (
    <Box>
      <HStack marginY={6}>
        <Button
          width="full"
          isDisabled={Number(page) === 1}
          onClick={() => router.replace(`/movie/${type}?page=${Number(page) - 1}`)}>
          Previous
        </Button>
        <Button
          width="full"
          isDisabled={Number(page) === featuredMovies.data?.total_pages}
          onClick={() => router.replace(`/movie/${type}?page=${Number(page) + 1}`)}>
          Next
        </Button>
      </HStack>

      <Skeleton isLoaded={!featuredMovies.isLoading} fadeDuration={2} minHeight={500}>
        <SimpleGrid columns={[2, 2, 4]} gap={6}>
          {featuredMovies.data?.results.map((movie) => (
            <RouteCard
              key={movie.id}
              title={movie.title}
              imagePath={movie.poster_path}
              routerPath={`/movie/detail/${movie.id}`}
            />
          ))}
        </SimpleGrid>
      </Skeleton>
    </Box>
  );
};

export default FeaturedListSection;
