import {
  SimpleGrid,
  Box,
  Skeleton,
  Heading,
  HStack,
  Button,
  Link,
  SkeletonText,
  Text,
} from '@chakra-ui/react';
import {
  FaBirthdayCake,
  FaExternalLinkAlt,
  FaHome,
  FaImdb,
  FaTransgenderAlt,
} from 'react-icons/fa';
import { DateTime } from 'luxon';
import { Gender, SWRPersonDetail } from 'types/person';
import { birthdayToAge } from 'utils/birthdayToAge';

import { DetailCard } from 'components/images';

const PersonSection = ({ data, isLoading, isError }: SWRPersonDetail) => {
  if (isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]}>
      {/* PROFILE */}
      <DetailCard imagePath={data?.profile_path} />

      {/* DESCRIPTION */}
      <Box textAlign={['center', 'center', 'left']}>
        <Skeleton isLoaded={!isLoading} fadeDuration={2}>
          <Box>
            <Heading>{data?.name}</Heading>
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!isLoading} fadeDuration={2}>
          <Box marginY={8}>
            <HStack marginY={1}>
              <FaTransgenderAlt />
              <Text as="small">{Gender[data?.gender]}</Text>
            </HStack>
            <HStack marginY={1}>
              <FaBirthdayCake />
              <Text as="small">
                {DateTime.fromISO(data?.birthday).toFormat('DDD')} (
                {birthdayToAge(data?.birthday, data?.deathday)} years old)
              </Text>
            </HStack>
            <HStack marginY={1}>
              <FaHome />
              <Text as="small">{data?.place_of_birth}</Text>
            </HStack>

            <HStack marginY={4} justifyContent={['center', 'center', 'left']}>
              <Link href={data?.homepage} isExternal>
                <Button size="sm" leftIcon={<FaExternalLinkAlt />}>
                  Website
                </Button>
              </Link>
              <Link href={'https://www.imdb.com/title/' + data?.imdb_id} isExternal>
                <Button size="sm" leftIcon={<FaImdb />}>
                  IMDB
                </Button>
              </Link>
            </HStack>
          </Box>
        </Skeleton>

        <SkeletonText isLoaded={!isLoading} noOfLines={8} spacing={3} fadeDuration={2}>
          <Box>
            <Text textAlign="justify">{data?.biography}</Text>
          </Box>
        </SkeletonText>
      </Box>
    </SimpleGrid>
  );
};

export default PersonSection;
