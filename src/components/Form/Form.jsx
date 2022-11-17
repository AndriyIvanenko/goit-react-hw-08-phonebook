import { StyledForm, Label, Input, Button } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

export const Form = () => {
  const dispatch = useDispatch();
  const contactsList = useSelector(getContacts);

  const formSubmitHandler = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };

    if (
      contactsList.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      form.reset();
      return;
    }
    dispatch(addContact(newContact));
    form.reset();
  };

  return (
    <StyledForm onSubmit={formSubmitHandler}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        // autoComplete="off"
      />

      <Label htmlFor="number">Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        autoComplete="off"
      />
      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
};
