import { AddNewContact } from 'components/createNewContact';
import { Contacts } from 'components/contacts';
import { Filter } from 'components/contactsFilter';
import { Loader } from 'components/loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/Contacts/selectors';
import { fetchContacts } from 'redux/Contacts/operations';
import { getIsLoggedIn } from 'redux/Auth/selectors';
import { Container, Heading } from '@chakra-ui/react';

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
        <Container w={400}>
          <Heading as={'h1'} textAlign={'center'} mb={8}>
            Phonebook
          </Heading>
          <AddNewContact />
          <Heading as={'h2'} size={'lg'} textAlign={'center'} mb={4}>
            Contacts
          </Heading>
          <Filter />
          {isLoading && !error && <Loader />}
          <Contacts />
        </Container>
      )}
    </>
  );
};

// export default PhoneBook;
