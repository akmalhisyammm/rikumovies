import { Box, Image, Skeleton, Text } from '@chakra-ui/react';
import router from 'next/router';
import { TMDB_API_IMAGE_URL } from 'constants/tmdb';

type FeaturedCardProps = {
  title: string;
  imagePath: string;
  routerPath: string;
  slideCard?: boolean;
};

const FeaturedCard = ({ title, imagePath, routerPath, slideCard }: FeaturedCardProps) => {
  return (
    <Box
      display={slideCard ? 'inline-block' : 'inline'}
      position="relative"
      maxWidth={slideCard ? 150 : 'full'}
      marginX={slideCard ? 3 : 0}
      borderRadius={24}
      boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
      transition="0.1s ease-out"
      onClick={() => router.push(routerPath)}
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.05)',
      }}>
      <Image
        src={imagePath && TMDB_API_IMAGE_URL + imagePath}
        alt={imagePath}
        display="block"
        width="100%"
        height="100%"
        borderRadius={24}
        fallback={
          <Skeleton
            width={slideCard ? 150 : 174}
            height={slideCard ? 225 : 260}
            borderRadius={24}
          />
        }
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
          {title}
        </Text>
      </Box>
    </Box>
  );
};

export default FeaturedCard;
