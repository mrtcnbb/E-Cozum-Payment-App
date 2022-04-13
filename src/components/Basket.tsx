import { Box, Button, Text } from '@chakra-ui/react';
import axios from 'axios';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';

interface BasketProps {
  cardHolderName: string;
  cardNumber: string;
  expireDate: string;
  cvv: string;
}

const Basket: FC<BasketProps> = ({ cardHolderName, cardNumber, expireDate, cvv }) => {
  const customerBasket = useAppSelector((state) => state.customerBasket);
  const navigate = useNavigate();

  const packageIds: string[] = [];

  customerBasket.forEach((item) => {
    packageIds.push(item.id.toString());
  });

  const totalAmount = () => {
    let total = 0;
    customerBasket.forEach((item) => {
      total += item.amount;
    });
    return total;
  };

  const paymentBody = {
    packageIds: packageIds,
    cardHolderName: cardHolderName,
    cardNumber: cardNumber,
    expireDate: expireDate,
    cvv: cvv,
    totalAmount: totalAmount(),
  };

  const handlePayment = () => {
    axios
      .post('https://6249a1e8fd7e30c51c042ccb.mockapi.io/api/payment', paymentBody)
      .then()
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box rounded="lg" bg="white" p="5" display="flex" flexDirection="column" gap="3">
      <Text fontWeight="semibold">Sepetteki Paketler</Text>
      {customerBasket &&
        customerBasket.map((item) => {
          return (
            <Box
              key={item.id}
              rounded="lg"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              p="1"
              bg="teal.100"
            >
              <Text>{item.title}</Text>
              <Text>{item.amount}₺</Text>
            </Box>
          );
        })}
      <Box rounded="lg" display="flex" flexDirection="row" justifyContent="space-between" p="1" bg="teal.100">
        <Text>Toplam</Text>
        <Text>{totalAmount()}₺</Text>
      </Box>
      <Button
        colorScheme="purple"
        onClick={() => {
          handlePayment();
          navigate('/info');
        }}
      >
        Ödeme Yap
      </Button>
    </Box>
  );
};

export default Basket;
