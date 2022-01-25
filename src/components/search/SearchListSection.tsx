import { Box, Button, HStack, SimpleGrid, Skeleton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSearchMovies } from 'hooks/search';
import { SWRMovieOverview } from 'types/movie';

import { FeaturedCard } from 'components/images';

type SearchListSectionProps = {
  searchQuery: string;
  pageQuery: number;
};

const SearchListSection = ({ searchQuery, pageQuery }: SearchListSectionProps) => {
  const router = useRouter();

  const searchMovies: SWRMovieOverview = useSearchMovies(searchQuery, pageQuery);

  return (
    <Box>
      <HStack marginY={6}>
        <Button
          isFullWidth
          isDisabled={Number(pageQuery) === 1}
          onClick={() =>
            router.replace(`/search/movie?query=${searchQuery}&page=${Number(pageQuery) - 1}`)
          }>
          Previous
        </Button>
        <Button
          isFullWidth
          isDisabled={Number(pageQuery) === searchMovies.data?.total_pages}
          onClick={() =>
            router.replace(`/search/movie?query=${searchQuery}&page=${Number(pageQuery) + 1}`)
          }>
          Next
        </Button>
      </HStack>

      <Skeleton isLoaded={!searchMovies.isLoading} fadeDuration={2} minHeight={500}>
        {searchMovies.data?.results.length ? (
          <SimpleGrid columns={4} gap={6}>
            {searchMovies.data?.results.map((movie) => (
              <FeaturedCard
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
