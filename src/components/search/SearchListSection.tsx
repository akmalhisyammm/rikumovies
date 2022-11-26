import { Box, Button, HStack, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { RouteCard } from 'components/images';
import { useSearchMovies } from 'hooks/search';

import type { SWRMovieOverview } from 'types/movie';

type SearchListSectionProps = {
  searchQuery: string;
  pageQuery: number;
};

const SearchListSection = ({ searchQuery, pageQuery }: SearchListSectionProps) => {
  const router = useRouter();

  const searchMovies: SWRMovieOverview = useSearchMovies(searchQuery, pageQuery);

  if (searchMovies.isError) return <Text>Failed to fetch search movies.</Text>;

  return (
    <Box>
      <HStack marginY={6}>
        <Button
          width="full"
          isDisabled={Number(pageQuery) === 1}
          onClick={() =>
            router.replace(`/search/movie?query=${searchQuery}&page=${Number(pageQuery) - 1}`)
          }>
          Previous
        </Button>
        <Button
          width="full"
          isDisabled={Number(pageQuery) === searchMovies.data?.total_pages}
          onClick={() =>
            router.replace(`/search/movie?query=${searchQuery}&page=${Number(pageQuery) + 1}`)
          }>
          Next
        </Button>
      </HStack>

      <Skeleton isLoaded={!searchMovies.isLoading} fadeDuration={2} minHeight={500}>
        {searchMovies.data?.results.length ? (
          <SimpleGrid columns={[2, 2, 4]} gap={6}>
            {searchMovies.data?.results.map((movie) => (
              <RouteCard
                key={movie.id}
                title={movie.title}
                imagePath={movie.poster_path}
                routerPath={`/movie/detail/${movie.id}`}
              />
            ))}
          </SimpleGrid>
        ) : (
          <Text>No movies found.</Text>
        )}
      </Skeleton>
    </Box>
  );
};

export default SearchListSection;
