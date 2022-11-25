import { Flex, Box, Heading, Text, Link } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Flex flexDirection={'column'} alignItems={'center'}>
      <Box mb={'20px'} mt={'150px'} display={'flex'} alignItems={'end'}>
        <Heading>404 Error</Heading>
        <Text fontSize={20}>, page not found</Text>
      </Box>
      <Link as={ReactLink} to={'/'} color={'blue'} fontSize={18} fontWeight={500}>
        Go to the Home page
      </Link>
    </Flex>
  );
};
