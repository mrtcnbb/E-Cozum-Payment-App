import { ChakraProvider, theme } from '@chakra-ui/react';
import PaymentApp from './components/PaymentApp';

export const App = () => (
  <ChakraProvider theme={theme}>
    <PaymentApp />
  </ChakraProvider>
);
