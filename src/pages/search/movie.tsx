import { Box, Button, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';

import Layout from 'components/layout';
import { SearchBoxSection, SearchListSection } from 'components/search';

const SearchMovies = () => {
  const router = useRouter();

  const { query, page } = router.query;

  return (
    <Layout title={`Search${query ? ': "' + query + '"' : ''}`}>
      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.replace('/')}>
        Back to Home
      </Button>

      <Box marginY={4}>
        <Box marginBottom={4}>
          <Heading>Search</Heading>
        </Box>
        <Box>
          <SearchBoxSection />
          {query && <SearchListSection searchQuery={query as string} pageQuery={Number(page)} />}
        </Box>
      </Box>
    </Layout>
  );
};

export default SearchMovies;
