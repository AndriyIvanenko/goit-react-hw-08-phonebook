import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const sholdRedirect = !isLoggedIn && !isRefreshing;
  return sholdRedirect ? <Navigate to={redirectTo} /> : Component;
};
