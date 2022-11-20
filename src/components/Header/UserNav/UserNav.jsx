import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/Auth/selectors';
import { StyledNavLink } from './UserNav.styled';

export const UserNav = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/phonebook">PhoneBook</StyledNavLink>}
    </div>
  );
};
