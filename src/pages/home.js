import { Container, Heading } from '@chakra-ui/react';

export const Home = () => {
  return (
    <Container pt={32}>
      <Heading as={'h1'} size={'2xl'} textAlign={'center'}>
        Your Phone Book
      </Heading>
    </Container>
  );
};
