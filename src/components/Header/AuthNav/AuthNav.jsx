import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/selectors';
import { StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <div>
      {!isLoggedIn && (
        <>
          <StyledNavLink to="/register">Register</StyledNavLink>
          <StyledNavLink to="/login">Log In</StyledNavLink>
        </>
      )}
    </div>
  );
};
