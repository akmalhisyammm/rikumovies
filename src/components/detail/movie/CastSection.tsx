import {
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
import { SWRMovieCredits } from 'types/movie';

import { CastAvatar, CastItem } from 'components/images';

const CastSection = ({ data, isLoading, isError }: SWRMovieCredits) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  if (isError) return <Text>Failed to Fetch Data</Text>;

  return (
    <Box marginY={8}>
      <HStack justifyContent="space-between" marginBottom={4}>
        <Heading fontSize="2xl">Top Billed Cast</Heading>
        <Button variant="ghost" onClick={onOpen}>
          See more
        </Button>
      </HStack>

      <Box whiteSpace="nowrap" overflowX="auto" padding={2}>
        <Skeleton isLoaded={!isLoading} fadeDuration={2}>
          {data?.cast.slice(0, 8).map((cast) => (
            <CastAvatar
              key={cast.id}
              castName={cast.name}
              imagePath={cast.profile_path}
              routerPath={`/person/${cast.id}`}
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
            {data?.cast.map((cast) => (
              <CastItem
                key={cast.id}
                name={cast.name}
                character={cast.character}
                imagePath={cast.profile_path}
                routerPath={`/person/${cast.id}`}
              />
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
