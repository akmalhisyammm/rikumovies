import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { RiArrowRightSLine } from 'react-icons/ri';
import { TMDB_API_POSTER_URL } from 'constants/tmdb';
import { useMovieCredits } from 'hooks/movie';
import { SWRMovieCredits } from 'types/movie';

type CastSectionProps = {
  movieId: string;
};

const CastSection = ({ movieId }: CastSectionProps) => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const movieCredits: SWRMovieCredits = useMovieCredits(movieId as string);

  if (movieCredits.isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box marginY={8}>
      <HStack justifyContent="space-between" marginBottom={4}>
        <Heading fontSize="2xl">Top Billed Cast</Heading>
        <Button background="transparent" onClick={onOpen}>
          See more
        </Button>
      </HStack>

      <Box whiteSpace="nowrap" overflowX="auto" padding={2}>
        <Skeleton isLoaded={!movieCredits.isLoading} fadeDuration={2}>
          {movieCredits.data?.cast.slice(0, 8).map((person) => (
            <Avatar
              key={person.id}
              display="inline-block"
              position="relative"
              size="xl"
              name={person.name}
              src={TMDB_API_POSTER_URL + person.profile_path}
              marginX={3}
              boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
              transition="0.1s ease-out"
              onClick={() => router.push(`/person/${person.id}`)}
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.05)',
              }}
            />
          ))}
        </Skeleton>
      </Box>

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        scrollBehavior="inside"
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
        isCentered>
        <ModalOverlay />

        <ModalContent borderRadius={12}>
          <ModalHeader
            borderTopRadius={12}
            backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.800'}>
            Cast
          </ModalHeader>

          <ModalBody padding={2}>
            {movieCredits.data?.cast.map((person) => (
              <HStack
                key={person.id}
                padding={2}
                borderRadius={12}
                onClick={() => router.push(`/person/${person.id}`)}
                _hover={{
                  cursor: 'pointer',
                  backgroundColor: colorMode === 'light' ? 'blue.200' : 'blue.700',
                }}>
                <Avatar
                  size="lg"
                  name={person.name}
                  src={TMDB_API_POSTER_URL + person.profile_path}
                  marginX={2}
                  boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.5)"
                />
                <Box flexGrow={1}>
                  <Text fontWeight={600}>{person.name}</Text>
                  <Text as="small">{person.character}</Text>
                </Box>
                <RiArrowRightSLine />
              </HStack>
            ))}
          </ModalBody>

          <ModalFooter
            borderBottomRadius={12}
            backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.800'}>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default CastSection;
