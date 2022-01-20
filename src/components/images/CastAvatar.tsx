import { Avatar } from '@chakra-ui/react';
import router from 'next/router';
import { TMDB_API_IMAGE_URL } from 'constants/tmdb';

type CastAvatarProps = {
  castName: string;
  imagePath: string;
  routerPath: string;
};

const CastAvatar = ({ castName, imagePath, routerPath }: CastAvatarProps) => {
  return (
    <Avatar
      display="inline-block"
      position="relative"
      size="xl"
      name={castName}
      src={imagePath && TMDB_API_IMAGE_URL + imagePath}
      marginX={3}
      boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
      transition="0.1s ease-out"
      onClick={() => router.push(routerPath)}
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.05)',
      }}
    />
  );
};

export default CastAvatar;
