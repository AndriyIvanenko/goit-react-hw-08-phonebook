import { Outlet } from 'react-router-dom';
import { StyledNav, StyledNavLink, Button } from './Header.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/selectors';

export const Header = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <>
      <StyledNav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>
        {isLoggedIn && <StyledNavLink to="/phonebook">PhoneBook</StyledNavLink>}
        <div style={{ marginLeft: 'auto' }}>
          {!isLoggedIn && (
            <StyledNavLink to="/register">Register</StyledNavLink>
          )}
          <StyledNavLink to="/login">Log In</StyledNavLink>
          {isLoggedIn && <Button type="button">Log off</Button>}
        </div>
      </StyledNav>

      <Outlet />
    </>
  );
};
