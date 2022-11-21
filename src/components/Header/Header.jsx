import { Outlet } from 'react-router-dom';
import { HeaderContainer, StyledNav } from './Header.styled';
import { UserMenu } from 'components/Header/UserMenu/UserMenu';
import { UserNav } from './UserNav/UserNav';
import { AuthNav } from './AuthNav/AuthNav';

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <StyledNav>
          <UserNav />
          <AuthNav />
        </StyledNav>
        <UserMenu />
      </HeaderContainer>
      <Outlet />
    </>
  );
};
