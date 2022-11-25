import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/Contacts/selectors';
import { ContactsItem } from 'components/contactsItem';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import { MdCheckCircle } from 'react-icons/md';

const filteredContacts = (contacts, filterValue) => {
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
};

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const filteredContactList = filteredContacts(contacts, filterValue);

  return (
    <List spacing={1}>
      {filteredContactList.map(contact => (
        <ListItem key={contact.id} display={'flex'} alignItems={'center'}>
          <ListIcon as={MdCheckCircle} color="green.500" />
          <ContactsItem contact={contact}></ContactsItem>
        </ListItem>
      ))}
    </List>
  );
};
