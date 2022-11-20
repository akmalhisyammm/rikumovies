import { Box, Button, HStack, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useFeaturedMovies } from 'hooks/movie';
import { FeaturedType, SWRMovieOverview } from 'types/movie';

import { RouteCard } from 'components/images';

type FeaturedListSectionProps = {
  type: FeaturedType;
  page: number;
};

const FeaturedListSection = ({ type, page }: FeaturedListSectionProps) => {
  const router = useRouter();

  const featuredMovies: SWRMovieOverview = useFeaturedMovies(type, page);

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
