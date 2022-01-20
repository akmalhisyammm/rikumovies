import { Box, Button, Heading, HStack, Skeleton, Text } from '@chakra-ui/react';
import { SWRFeaturedMovies } from 'types/movie';

import { FeaturedCard } from 'components/images';

type FeaturedSectionProps = {
  title: string;
  hook: SWRFeaturedMovies;
};

const FeaturedSection = ({ title, hook }: FeaturedSectionProps) => {
  if (hook.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box marginY={8}>
      <HStack justifyContent="space-between" marginBottom={4}>
        <Heading fontSize="3xl">{title}</Heading>
        <Button variant="ghost">See more</Button>
      </HStack>

      <Box whiteSpace="nowrap" overflowX="auto" padding={2}>
        <Skeleton isLoaded={!hook.isLoading} fadeDuration={2}>
          {hook.data?.results.slice(0, 8).map((movie) => (
            <FeaturedCard
              key={movie.id}
              title={movie.title}
              imagePath={movie.poster_path}
              routerPath={`/movie/${movie.id}`}
            />
          ))}
        </Skeleton>
      </Box>
    </Box>
  );
};

export default FeaturedSection;
