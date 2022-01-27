import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { BiMenu } from 'react-icons/bi';

const AppMenu = () => {
  const router = useRouter();

  return (
    <Menu id="menu" isLazy>
      <MenuButton as={IconButton} aria-label="Menu" icon={<BiMenu />} variant="ghost" />
      <MenuList>
        <MenuItem onClick={() => router.replace('/')}>Home</MenuItem>
        <MenuItem onClick={() => router.replace('/about')}>About</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AppMenu;
