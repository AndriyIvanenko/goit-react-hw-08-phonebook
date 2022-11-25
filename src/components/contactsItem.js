import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';
import { Flex, Text, Button } from '@chakra-ui/react';

export const ContactsItem = ({ contact }) => {
  const dispatch = useDispatch();
  const onDeleteClick = () => dispatch(deleteContact(contact.id));

  return (
    <Flex alignItems={'center'}>
      <Text w={150}>{contact.name}:</Text>
      <Text mr={4}>{contact.number}</Text>
      <Button
        type="button"
        size={'xs'}
        onClick={onDeleteClick}
        // colorScheme={'red'}
        _hover={{ color: '#fff', backgroundColor: '#cf2828' }}
      >
        delete
      </Button>
    </Flex>
  );
};

ContactsItem.propTypes = {
  contact: PropTypes.object.isRequired,
};
