import { FormLabel, Input, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/Contacts/filterSlice';

export const Filter = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const filterChangeHandler = evt => {
    const filterValue = evt.target.value;
    setValue(filterValue);
    dispatch(setFilterValue(filterValue));
  };

  return (
    <Box px={4}>
      <FormLabel ml={4} mb={2}>
        Find contacts by name
      </FormLabel>
      <Input mb={4} value={value} onChange={filterChangeHandler} />
    </Box>
  );
};
