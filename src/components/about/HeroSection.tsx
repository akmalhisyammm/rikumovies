import { Box, Heading, Image } from '@chakra-ui/react';

const HeroSection = () => {
  return (
    <Box marginY={4}>
      <Heading>About</Heading>
      <Image src="/rikumovies.png" alt="Rikumovies Logo" margin="24px auto 42px" width={200} />
    </Box>
  );
};

export default HeroSection;
