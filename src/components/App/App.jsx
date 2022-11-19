import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Home } from 'pages/Home/Home';
import { PhoneBook } from 'pages/PhoneBook/PhoneBook';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/LogIn/LogIn';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="phonebook" element={<PhoneBook />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
};
