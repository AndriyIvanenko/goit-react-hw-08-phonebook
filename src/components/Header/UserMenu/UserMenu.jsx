import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn } from 'redux/Auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { Button, UserInfo, MenuContainer } from './UserMenu.styled';
// import { useNavigate } from 'react-router-dom';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  // const navigate = useNavigate();

  const dispatch = useDispatch();

  const onLogoutClick = event => {
    event.preventDefault();
    // navigate('/');
    dispatch(logOut());
  };

  return (
    <MenuContainer>
      {isLoggedIn && (
        <>
          <UserInfo>{user.email}</UserInfo>
          <Button type="button" onClick={onLogoutClick}>
            Logout
          </Button>
        </>
      )}
    </MenuContainer>
  );
};
