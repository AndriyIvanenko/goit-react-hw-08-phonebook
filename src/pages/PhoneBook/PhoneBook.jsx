import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Section, H1, H2 } from 'pages/PhoneBook/PhoneBook.syled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/Contacts/selectors';
import { fetchContacts } from 'redux/Contacts/operations';
import { getIsLoggedIn } from 'redux/Auth/selectors';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoggedIn && (
        <Section>
          <H1>Phonebook</H1>
          <Form />
          <H2>Contacts</H2>
          <Filter />
          {isLoading && !error && <Loader />}
          <Contacts />
        </Section>
      )}
    </>
  );
};

// export default PhoneBook;
