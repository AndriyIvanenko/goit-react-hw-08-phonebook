import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
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
import YupPassword from 'yup-password';

YupPassword(yup);

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formSubmitHandler = (values, actions) => {
    // console.log(actions);
    dispatch(logIn(values));
    actions.resetForm();
  };

  const initialValues = {
    email: '',
    password: '',
  };

  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    // password: yup.string().password().min(8).required(),
  });

  return (
    <Container w={400} m={'auto'}>
      <Formik
        initialValues={initialValues}
        onSubmit={formSubmitHandler}
        validationSchema={schema}
      >
        {props => (
          <Form>
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <FormLabel ml={4}>Enter your e-mail</FormLabel>
                  <Input type={'email'} {...field} placeholder="example@mail.com" />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                  <FormLabel ml={4} mt={4}>
                    Enter your password
                  </FormLabel>
                  <Input type={'password'} {...field} placeholder="password" />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              type="submit"
              w={150}
              mt={8}
              _hover={{ color: '#fff', backgroundColor: '#cf2828' }}
            >
              Log In
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
