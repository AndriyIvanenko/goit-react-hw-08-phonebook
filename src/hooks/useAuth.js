import { useSelector } from 'react-redux';
import { getUser, getIsLoggedIn, getIsRefreshing } from 'redux/Auth/selectors';

export const useAuth = () => {
  const user = useSelector(getUser);
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isRefreshing = useSelector(getIsRefreshing);

  return {
    user,
    isLoggedIn,
    isRefreshing,
  };
};
