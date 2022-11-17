import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Section, H1, H2 } from 'components/App/App.styled';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

export const App = () => {
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
