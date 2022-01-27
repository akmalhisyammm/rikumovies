import { Heading, HStack, Link as ChakraLink, SimpleGrid, Tooltip, VStack } from '@chakra-ui/react';
import { SiNextdotjs, SiChakraui } from 'react-icons/si';

const DetailSection = () => {
  return (
    <SimpleGrid columns={[1, 1, 2]} gap={4}>
      <VStack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl">Developer</Heading>
        <ChakraLink href="https://github.com/akmalhisyammm" isExternal>
          Muhammad Akmal Hisyam
        </ChakraLink>
      </VStack>

      <VStack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl">Tech Stack</Heading>
        <HStack>
          <Tooltip label="Next.js">
            <ChakraLink href="https://nextjs.org/" isExternal>
              <SiNextdotjs fontSize={32} />
            </ChakraLink>
          </Tooltip>
          <Tooltip label="Chakra UI">
            <ChakraLink href="https://chakra-ui.com/" isExternal>
              <SiChakraui fontSize={32} />
            </ChakraLink>
          </Tooltip>
        </HStack>
      </VStack>

      <VStack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl">Image Source</Heading>
        <ChakraLink href="https://www.freepik.com/" isExternal>
          Freepik
        </ChakraLink>
      </VStack>

      <VStack
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        borderWidth={1}
        borderRadius={12}
        height={130}>
        <Heading fontSize="xl">API Source</Heading>
        <ChakraLink href="https://developers.themoviedb.org/3" isExternal>
          The Movie Database API
        </ChakraLink>
      </VStack>
    </SimpleGrid>
  );
};

export default DetailSection;
