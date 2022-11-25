import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/Contacts/operations';
import { getContacts } from 'redux/Contacts/selectors';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Input,
  Container,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';

export const AddNewContact = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const formSubmitHandler = (values, actions) => {
    if (
      contactsList.find(contact => contact.name.toLowerCase() === values.name.toLowerCase())
    ) {
      alert(`${values.name} is already in contacts`);
      actions.resetForm();
      return;
    }
    dispatch(addContact(values));
    actions.resetForm();
  };

  const initialValues = {
    name: '',
    number: '',
  };

  const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
  const namePromt =
    "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
  const phoneRegex =
    /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;
  const phonePromt =
    'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

  const schema = yup.object().shape({
    name: yup.string().matches(nameRegex, namePromt).required(),
    number: yup.string().matches(phoneRegex, phonePromt).required(),
  });

  return (
    <Container m={'auto'}>
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmitHandler}
        validationSchema={schema}
      >
        {props => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel ml={4}>Enter new contact name</FormLabel>
                  <Input type={'text'} {...field} placeholder="contact name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="number">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.number && form.touched.number}>
                  <FormLabel ml={4} mt={2}>
                    Enter new contact number
                  </FormLabel>
                  <Input type={'text'} {...field} placeholder="contact number" />
                  <FormErrorMessage>{form.errors.number}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              w={150}
              mt={4}
              mb={10}
              _hover={{ color: '#fff', backgroundColor: '#cf2828' }}
            >
              Add new contact
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
