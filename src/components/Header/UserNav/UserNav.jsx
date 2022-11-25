import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/selectors';
import { StyledNavLink } from './UserNav.styled';
import { Flex } from '@chakra-ui/react';

export const UserNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <Flex alignItems={'center'}>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/phonebook">PhoneBook</StyledNavLink>}
    </Flex>
  );
};
