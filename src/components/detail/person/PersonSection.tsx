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
import { usePersonDetail } from 'hooks/person';
import { Gender, SWRPersonDetail } from 'types/person';
import { birthdayToAge } from 'utils/birthdayToAge';

import { DetailCard } from 'components/images';

type PersonSectionProps = {
  personId: string;
};

const PersonSection = ({ personId }: PersonSectionProps) => {
  const personDetail: SWRPersonDetail = usePersonDetail(personId as string);

  if (personDetail.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <SimpleGrid columns={[1, 1, 2]} gap={[4, 4, 8]}>
      {/* PROFILE */}
      <DetailCard imagePath={personDetail.data?.profile_path} />

      {/* DESCRIPTION */}
      <Box textAlign={['center', 'center', 'left']}>
        <Skeleton isLoaded={!personDetail.isLoading} fadeDuration={2}>
          <Box marginBottom={4}>
            <Heading>{personDetail.data?.name}</Heading>
          </Box>
          <Box>
            {personDetail.data?.gender && (
              <HStack marginY={1} justifyContent={['center', 'center', 'left']}>
                <FaTransgenderAlt />
                <Text as="small">{Gender[personDetail.data?.gender]}</Text>
              </HStack>
            )}
            {personDetail.data?.birthday && (
              <HStack marginY={1} justifyContent={['center', 'center', 'left']}>
                <FaBirthdayCake />
                <Text as="small">
                  {DateTime.fromISO(personDetail.data?.birthday).toFormat('DDD')} (
                  {birthdayToAge(personDetail.data?.birthday, personDetail.data?.deathday)} years
                  old)
                </Text>
              </HStack>
            )}
            {personDetail.data?.place_of_birth && (
              <HStack marginY={1} justifyContent={['center', 'center', 'left']}>
                <FaHome />
                <Text as="small">{personDetail.data?.place_of_birth}</Text>
              </HStack>
            )}
          </Box>
        </Skeleton>

        <Skeleton isLoaded={!personDetail.isLoading} fadeDuration={2}>
          <Box marginY={8}>
            <HStack marginY={4} justifyContent={['center', 'center', 'left']}>
              <Link href={personDetail.data?.homepage} isExternal>
                <Button size="sm" leftIcon={<FaExternalLinkAlt />}>
                  Website
                </Button>
              </Link>
              <Link href={'https://www.imdb.com/title/' + personDetail.data?.imdb_id} isExternal>
                <Button size="sm" leftIcon={<FaImdb />}>
                  IMDB
                </Button>
              </Link>
            </HStack>
          </Box>
        </Skeleton>

        <SkeletonText isLoaded={!personDetail.isLoading} noOfLines={8} spacing={3} fadeDuration={2}>
          <Box>
            <Text textAlign="justify">{personDetail.data?.biography}</Text>
          </Box>
        </SkeletonText>
      </Box>
    </SimpleGrid>
  );
};

export default PersonSection;
