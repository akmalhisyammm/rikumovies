import { Button, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { FaArrowLeft } from 'react-icons/fa';
import { usePersonDetail } from 'hooks/person';
import { SWRPersonDetail } from 'types/person';

import Layout from 'components/layout';
import { PersonSection } from 'components/detail/person';

const PersonDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const personDetail: SWRPersonDetail = usePersonDetail(id as string);

  return (
    <Layout title={personDetail.data?.name}>
      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>

      <Box marginY={4}>
        <PersonSection
          data={personDetail.data}
          isLoading={personDetail.isLoading}
          isError={personDetail.isError}
        />
      </Box>
    </Layout>
  );
};

export default PersonDetail;
