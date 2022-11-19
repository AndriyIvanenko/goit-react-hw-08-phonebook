import { StyledForm, Label, Input, Button } from './RegisterForm.styled';

export const RegisterForm = () => {
  const formSubmitHandler = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newUser = {
      username: form.elements.name.value,
      email: form.elements.number.value,
      password: form.elements.password.value,
    };
    console.log(newUser);
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Label htmlFor="username">User name</Label>
      <Input
        type="text"
        name="username"
        title="Enter your user name"
        required
        // autoComplete="off"
      />

      <Label htmlFor="email">Email</Label>
      <Input
        type="tel"
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
