import { HStack, Avatar, Box, Text, useColorMode } from '@chakra-ui/react';
import { RiArrowRightSLine } from 'react-icons/ri';
import router from 'next/router';

import { TMDB_API_IMAGE_URL } from 'constants/tmdb';

type CastItemProps = {
  name: string;
  character: string;
  imagePath: string;
  routerPath: string;
};

const CastItem = ({ name, character, imagePath, routerPath }: CastItemProps) => {
  const { colorMode } = useColorMode();

  return (
    <HStack
      padding={2}
      borderRadius={12}
      onClick={() => router.push(routerPath)}
      _hover={{
        cursor: 'pointer',
        backgroundColor: colorMode === 'light' ? 'blue.200' : 'blue.700',
      }}>
      <Avatar
        size="lg"
        name={name}
        src={imagePath && TMDB_API_IMAGE_URL + imagePath}
        marginX={2}
        boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
      />
      <Box flexGrow={1}>
        <Text fontWeight={600}>{name}</Text>
        <Text as="small">{character}</Text>
      </Box>
      <RiArrowRightSLine />
    </HStack>
  );
};

export default CastItem;
