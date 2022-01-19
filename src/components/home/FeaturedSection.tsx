import { Box, Heading, Image, Skeleton, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { TMDB_API_POSTER_URL } from 'constants/tmdb';
import {
  useNowPlayingMovies,
  useUpcomingMovies,
  usePopularMovies,
  useTopRatedMovies,
} from 'hooks/movie';
import { SWRFeaturedMovies } from 'types/movie';

type FeaturedSectionProps = {
  title: 'Now Playing' | 'Popular' | 'Top Rated' | 'Upcoming';
};

const FeaturedSection = ({ title }: FeaturedSectionProps) => {
  const router = useRouter();

  const nowPlayingMovies: SWRFeaturedMovies = useNowPlayingMovies();
  const popularMovies: SWRFeaturedMovies = usePopularMovies();
  const topRatedMovies: SWRFeaturedMovies = useTopRatedMovies();
  const upcomingMovies: SWRFeaturedMovies = useUpcomingMovies();

  const featuredMovies = () => {
    switch (title) {
      case 'Now Playing':
        return nowPlayingMovies;
      case 'Popular':
        return popularMovies;
      case 'Top Rated':
        return topRatedMovies;
      case 'Upcoming':
        return upcomingMovies;
    }
  };

  if (featuredMovies().isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box marginY={8}>
      <Box marginBottom={4}>
        <Heading fontSize="3xl">{title}</Heading>
      </Box>

      <Box whiteSpace="nowrap" overflowX="auto" padding={2}>
        <Skeleton isLoaded={!featuredMovies().isLoading} fadeDuration={2}>
          {featuredMovies()
            .data?.results.slice(0, 8)
            .map((movie) => (
              <Box
                key={movie.id}
                display="inline-block"
                position="relative"
                maxWidth={150}
                marginX={3}
                borderRadius={24}
                boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
                transition="0.1s ease-out"
                onClick={() => router.push(`/movie/${movie.id}`)}
                _hover={{
                  cursor: 'pointer',
                  transform: 'scale(1.05)',
                }}>
                <Image
                  src={TMDB_API_POSTER_URL + movie.poster_path}
                  alt={movie.id}
                  display="block"
                  width="100%"
                  height="auto"
                  borderRadius={24}
                  fallback={<Skeleton width={150} height={225} borderRadius={24} />}
                />
                <Box
                  display="flex"
                  position="absolute"
                  justifyContent="center"
                  alignItems="center"
                  width="100%"
                  height="100%"
                  borderRadius={24}
                  padding={4}
                  backgroundColor="rgba(0, 0, 0, 0.5)"
                  inset={0}
                  opacity={0}
                  _hover={{ opacity: 1 }}>
                  <Text color="white" textAlign="center" fontWeight={600} whiteSpace="normal">
                    {movie.title}
                  </Text>
                </Box>
              </Box>
            ))}
        </Skeleton>
      </Box>
    </Box>
  );
};

export default FeaturedSection;
