import {
  Box,
  Flex,
  Grid,
  Heading,
  IconButton,
  Image,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoSearch } from 'react-icons/go';

import AppMenu from './AppMenu';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const router = useRouter();

  return (
    <Box as="header" width="full" height={100}>
      <Flex as="nav" maxWidth={800} height="full" margin="0 auto" alignItems="center">
        <Link href="/" legacyBehavior passHref>
          <ChakraLink>
            <Flex alignItems="center">
              <Image src="/rikumovies.png" alt="logo" width={50} />
              <Box marginLeft={4}>
                <Heading as="h1" fontSize={['md', 'xl']}>
                  RikuMovies
                </Heading>
                <Text as="small">Movie collection</Text>
              </Box>
            </Flex>
          </ChakraLink>
        </Link>

        <Grid templateColumns="repeat(3, 1fr)" gap={1} marginLeft="auto">
          <IconButton
            aria-label="Search"
            icon={<GoSearch />}
            variant="ghost"
            onClick={() => router.push('/search/movie')}
          />
          <ThemeToggle />
          <AppMenu />
        </Grid>
      </Flex>
    </Box>
  );
};

export default Header;
