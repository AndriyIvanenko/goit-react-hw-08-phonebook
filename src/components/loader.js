import { Box } from '@chakra-ui/react';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box w={'fit-content'} m={'auto'} mb={'20px'}>
      <ThreeDots
        height="40"
        width="80"
        radius="9"
        color="#e21919"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Box>
  );
};
