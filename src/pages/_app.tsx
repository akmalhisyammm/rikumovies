import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import defaultSEOConfig from '../../next-seo.config';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
