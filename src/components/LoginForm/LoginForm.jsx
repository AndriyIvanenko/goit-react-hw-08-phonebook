import { StyledForm, Label, Input, Button } from './LoginForm.styled';

export const LoginForm = () => {
  const formSubmitHandler = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newUser = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };
    console.log(newUser);
  };

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
