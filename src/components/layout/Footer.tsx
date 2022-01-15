import { Box, Link as ChakraLink, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box as="footer" position="relative" width="full" textAlign="center" marginY={8}>
      <Text>
        2022 &bull;{' '}
        <Link href="/about" passHref>
          <ChakraLink>Muhammad Akmal Hisyam</ChakraLink>
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
