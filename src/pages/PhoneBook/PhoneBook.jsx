import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Section, H1, H2 } from 'pages/PhoneBook/PhoneBook.syled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const PhoneBook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <H1>Phonebook</H1>
      <Form />
      <H2>Contacts</H2>
      <Filter />
      {isLoading && !error && <Loader />}
      <Contacts />
    </Section>
  );
};

// export default PhoneBook;
