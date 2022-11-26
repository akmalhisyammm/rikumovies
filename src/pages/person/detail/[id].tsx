import { Button, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { FaArrowLeft } from 'react-icons/fa';

import { PersonSection } from 'components/detail/person';
import { usePersonDetail } from 'hooks/person';
import Layout from 'components/layout';

import type { SWRPersonDetail } from 'types/person';

const PersonDetail = () => {
  const router = useRouter();

  const { id } = router.query;

  const personDetail: SWRPersonDetail = usePersonDetail(id as string);

  return (
    <Layout>
      <NextSeo
        title={personDetail.data?.name}
        canonical={`${process.env.NEXT_PUBLIC_WEB_URL}/person/detail/${id}`}
      />

      <Button variant="ghost" leftIcon={<FaArrowLeft />} onClick={() => router.back()}>
        Back
      </Button>

      <Box marginY={4}>
        <PersonSection personId={id as string} />
      </Box>
    </Layout>
  );
};

export default PersonDetail;
