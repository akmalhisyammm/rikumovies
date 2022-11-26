import { Box, useColorMode } from '@chakra-ui/react';
import { ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minHeight="100vh"
      paddingBottom={1}
      transition="0.5s ease-out"
      backgroundColor={colorMode === 'light' ? 'white' : 'gray.900'}>
      <Box maxWidth={800} margin="0 auto" paddingX={4}>
        <Header />
        <Box as="main" marginY={22}>
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
