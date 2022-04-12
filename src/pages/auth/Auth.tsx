import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { FC } from 'react';
import { BiEnvelope, BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import useHandleFormData from '../../hooks/useHandleFormData';

const Auth: FC = () => {
  const { formData, emailError, handleFormData } = useHandleFormData();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.username.trim() === '' || formData.email.trim() === '') {
      onOpen();
    } else {
      localStorage.setItem('username', formData.username);
      navigate('/selection');
    }
  };

  return (
    <Box height="100vh" display="flex" alignItems="center">
      <Box
        mx="auto"
        width={'md'}
        border="1px"
        borderColor="gray.200"
        px="8"
        py="12"
        borderRadius="10px"
        boxShadow="lg"
        bg="white"
      >
        <form onSubmit={handleSubmit}>
          <Box display="flex" flexDirection="column" gap={8}>
            <FormControl>
              <FormLabel htmlFor={'username'}>Adınız Soyadınız</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon color="gray.300" as={BiUser} />} />
                <Input id={'username'} name="username" type="text" onChange={handleFormData} />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor={'email'}>Email Adresiniz</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<Icon color="gray.300" as={BiEnvelope} />} />
                <Input id={'email'} name="email" onChange={handleFormData} />
              </InputGroup>
              {emailError === 'Email adresi geçersiz' ? (
                <Text color="red">{emailError}</Text>
              ) : (
                <Text>{emailError}</Text>
              )}
            </FormControl>
            <Button disabled={emailError === 'Email adresi geçersiz' ? true : false} type="submit" colorScheme="purple">
              Devam Et
            </Button>
          </Box>
        </form>
      </Box>
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>UYARI</ModalHeader>
            <ModalCloseButton />
            <ModalBody>Lütfen zorunlu alanları doldurunuz!</ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" onClick={onClose}>
                Kapat
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

export default Auth;
