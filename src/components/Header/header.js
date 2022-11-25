import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/Header/userMenu';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';
import { Divider, Flex } from '@chakra-ui/react';

export const Header = () => {
  return (
    <>
      <Flex as={'nav'} pb={2} justifyContent={'space-around'}>
        <UserNav />
        <AuthNav />
        <UserMenu />
      </Flex>
      <Divider mb={8} borderColor={'lightgrey'} />
      <Outlet />
    </>
  );
};
