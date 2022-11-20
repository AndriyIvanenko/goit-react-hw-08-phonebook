import { StyledForm, Label, Input, Button } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const formSubmitHandler = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    // console.log(newUser);
    dispatch(register(newUser));
    form.reset();
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Label htmlFor="name">User name</Label>
      <Input
        type="text"
        name="name"
        title="Enter your name"
        required
        // autoComplete="off"
      />

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
        title="Enter your password"
        required
        // autoComplete="off"
      />
      <Button type="submit">Register</Button>
    </StyledForm>
  );
};
