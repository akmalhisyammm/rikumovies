import { Box, Image, Skeleton } from '@chakra-ui/react';
import { TMDB_API_IMAGE_URL } from 'constants/tmdb';

type DetailCardProps = {
  imagePath: string;
};

const DetailCard = ({ imagePath }: DetailCardProps) => {
  return (
    <Box width={['80%', '80%', '100%']} marginX="auto">
      <Image
        src={imagePath && TMDB_API_IMAGE_URL + imagePath}
        alt={imagePath}
        fallback={<Skeleton height={['full', 'full', 550]} borderRadius={18} />}
        boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
        borderRadius={18}
      />
    </Box>
  );
};

export default DetailCard;
