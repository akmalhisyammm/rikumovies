import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BiMenu } from 'react-icons/bi';

const AppMenu = () => {
  return (
    <Menu id="menu" isLazy>
      <MenuButton as={IconButton} aria-label="Menu" icon={<BiMenu />} variant="ghost" />
      <MenuList>
        <MenuItem>Menu 1</MenuItem>
        <MenuItem>Menu 2</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AppMenu;
