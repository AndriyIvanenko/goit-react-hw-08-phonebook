import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn } from 'redux/Auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { Button, InfoContainer, MenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();

  const onLogoutClick = event => {
    event.preventDefault();
    dispatch(logOut());
  };

  return (
    <MenuContainer>
      {isLoggedIn && (
        <>
          <InfoContainer>{user.email}</InfoContainer>
          <Button type="button" onClick={onLogoutClick}>
            Logout
          </Button>
        </>
      )}
    </MenuContainer>
  );
};
