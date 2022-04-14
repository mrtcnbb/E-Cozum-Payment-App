import { Box, Icon, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Header from '../../components/Header';
import { BiCheckCircle } from 'react-icons/bi';

const Info: FC = () => {
  return (
    <Box display="flex" flexDirection="column" height="100vh" minWidth="500px" bg="gray.200">
      <Header />
      <Box
        display="flex"
        flexDirection="column"
        p="30px"
        rounded="lg"
        height="200px"
        width="350px"
        bg="white"
        shadow="md"
        my="auto"
        mx="auto"
        justifyContent="start"
        alignItems="center"
      >
        <Icon color="green" boxSize="24" as={BiCheckCircle} />
        <Text fontSize="xl" fontWeight="extrabold">
          Başarıyla Tamamlandı!
        </Text>
      </Box>
    </Box>
  );
};

export default Info;
