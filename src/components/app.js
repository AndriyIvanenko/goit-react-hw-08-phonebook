import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/header';
import { Home } from 'pages/home';
import { PhoneBook } from 'pages/phoneBook';
import { Register } from 'pages/register';
import { Login } from 'pages/logIn';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/Auth/operations';
import { PrivateRoute } from 'components/privateRoute';
import { RestrictedRoute } from 'components/restrictedRoute';
import { NotFound } from 'pages/notFound';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <span>Page is refreshing...</span>
  ) : (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route
          path="phonebook"
          element={<PrivateRoute redirectTo="/login" component={<PhoneBook />} />}
        />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/phonebook" component={<Register />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/phonebook" component={<Login />} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
