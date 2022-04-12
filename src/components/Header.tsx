import { Box, Icon, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { BiUser } from 'react-icons/bi';
import logo from '../assets/ecozum-logo.png';

const Header: FC = () => {
  const username = localStorage.getItem('username');

  return (
    <Box
      bg="white"
      w="100%"
      py={2}
      px={4}
      position="sticky"
      zIndex="20"
      top="0"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      boxShadow="md"
    >
      <Box>
        <img className="delete" src={logo} alt="deletePic" />
      </Box>
      <Box display="flex" flexDirection="row" gap="2">
        <Icon rounded="full" boxSize="6" bg="gray.400" as={BiUser} />
        <Text>{username}</Text>
      </Box>
    </Box>
  );
};

export default Header;
