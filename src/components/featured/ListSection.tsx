import { Box, Button, Heading, HStack, SimpleGrid, Skeleton } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useFeaturedMovies } from 'hooks/movie';
import { FeaturedTitle, FeaturedType, SWRFeaturedMovies } from 'types/movie';

import { FeaturedCard } from 'components/images';

type ListSectionProps = {
  type: FeaturedType;
  page: number;
};

const ListSection = ({ type, page }: ListSectionProps) => {
  const router = useRouter();

  const featuredMovies: SWRFeaturedMovies = useFeaturedMovies(type, page);

  return (
    <Box>
      <Box>
        <Heading>{FeaturedTitle[type as FeaturedType]}</Heading>
      </Box>

      <HStack marginY={6}>
        <Button
          isFullWidth
          isDisabled={Number(page) === 1}
          onClick={() => router.replace(`/movie/${type}?page=${Number(page) - 1}`)}>
          Previous
        </Button>
        <Button
          isFullWidth
          isDisabled={Number(page) === featuredMovies.data?.total_pages}
          onClick={() => router.replace(`/movie/${type}?page=${Number(page) + 1}`)}>
          Next
        </Button>
      </HStack>

      <Skeleton isLoaded={!featuredMovies.isLoading} fadeDuration={2}>
        <SimpleGrid columns={4} gap={6}>
          {featuredMovies.data?.results.map((movie) => (
            <FeaturedCard
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

export default ListSection;
