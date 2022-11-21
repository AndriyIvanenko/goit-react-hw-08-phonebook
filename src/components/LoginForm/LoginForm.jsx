import { StyledForm, Label, Input, Button } from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/operations';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { getIsLoggedIn } from 'redux/Auth/selectors';

export const LoginForm = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const isLoggedIn = useSelector(getIsLoggedIn);

  const formSubmitHandler = evt => {
    evt.preventDefault();
    const form = evt.target;
    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    dispatch(logIn(user));
    form.reset();
  };

  // if (isLoggedIn) {
  //   navigate('/phonebook');
  // }

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Label htmlFor="email">Email</Label>
      <Input
        type="email"
        name="email"
        title="Enter your e-mail address"
        required
        // autoComplete="off"
      />

      <Label htmlFor="password">Password</Label>
      <Input
        type="password"
        name="password"
        title="Enter Your password"
        required
        // autoComplete="off"
      />

      <Button type="submit">Log In</Button>
    </StyledForm>
  );
};
