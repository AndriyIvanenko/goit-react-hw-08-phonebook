import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/selectors';
import { StyledNavLink } from './AuthNav.styled';
import { Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    !isLoggedIn && (
      <Flex alignItems={'center'}>
        <StyledNavLink to="/register">Register</StyledNavLink>
        <StyledNavLink to="/login">Log In</StyledNavLink>
      </Flex>
    )
  );
};
