import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Home } from 'pages/Home/Home';
import { PhoneBook } from 'pages/PhoneBook/PhoneBook';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/LogIn/LogIn';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { refreshUser } from 'redux/Auth/operations';
import { PrivateRoute } from 'components/PrivateRoute/privateRoute';
import { RestrictedRoute } from 'components/RestrictedRoute/restrictedRoute';

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
          element={
            <PrivateRoute redirectTo="/login" component={<PhoneBook />} />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
      </Route>
    </Routes>
  );
};
