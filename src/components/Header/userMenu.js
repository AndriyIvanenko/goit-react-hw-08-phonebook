import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn } from 'redux/Auth/selectors';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/operations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);

  const dispatch = useDispatch();

  const onLogoutClick = event => {
    event.preventDefault();
    dispatch(logOut());
  };

  return (
    isLoggedIn && (
      <Flex alignItems={'center'}>
        <>
          <Text fontWeight={500} mr={2}>
            {user.email}
          </Text>
          <Button
            size={'sm'}
            type="button"
            onClick={onLogoutClick}
            _hover={{ color: '#fff', backgroundColor: '#cf2828' }}
          >
            Logout
          </Button>
        </>
      </Flex>
    )
  );
};
