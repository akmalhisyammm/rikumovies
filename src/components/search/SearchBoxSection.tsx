import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { GoSearch } from 'react-icons/go';

const SearchBoxSection = () => {
  const router = useRouter();

  const handleChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const queryParams = e.target.value ? `?query=${e.target.value}&page=1` : '';

    router.push(`/search/movie${queryParams}`);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <GoSearch />
      </InputLeftElement>
      <Input type="text" placeholder="Search movies..." onChange={handleChangeQuery} />
    </InputGroup>
  );
};

export default SearchBoxSection;
