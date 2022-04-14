import { Box, Input, Text } from '@chakra-ui/react';
import Basket from '../../components/Basket';
import Header from '../../components/Header';
import Cleave from 'cleave.js/react';
import { ChangeEvent, FC, useState } from 'react';

import './Payment.css';

const Payment: FC = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expireDate, setExpireDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [securityNumber, setSecurityNumber] = useState('');

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };

  const handleExpireDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setExpireDate(e.target.value);
  };
  const handleCustomerNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomerName(e.target.value);
  };

  const handleSecurityNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSecurityNumber(e.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" height="100vh" minWidth="1535px" overflowX="auto" bg="gray.200">
      <Header />
      <Box display="flex" flexDirection="row" gap="20px" mx="auto" px="100px" mt="50px" boxSizing="border-box">
        <Box width="905px" display="flex" flexDirection="column" rounded="lg" bg="white" p="10" gap="30px">
          <Box>
            <Text>Kart Bilgileri</Text>
            <Box
              display="flex"
              flexDirection="column"
              gap="20px"
              rounded="lg"
              border="1px"
              borderColor="gray.300"
              p="10px"
              mt="5px"
            >
              <Box>
                <Text>Kart Üzerindeki İsim Soyisim</Text>
                <Input
                  width={'300px'}
                  size="sm"
                  borderColor={'rgb(211,211,211)'}
                  value={customerName}
                  onChange={handleCustomerNameChange}
                />
              </Box>
              <Box display="flex" flexDirection="row" justifyContent="space-between">
                <Box>
                  <Text>Kart Numarası</Text>
                  <Cleave
                    options={{ creditCard: true }}
                    className="creditCardNumber"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                  />
                </Box>
                <Box>
                  <Text>Son Kul. Tar.</Text>
                  <Cleave
                    options={{ date: true, datePattern: ['m', 'y'] }}
                    className="creditCardExpireDate"
                    value={expireDate}
                    onChange={handleExpireDateChange}
                  />
                </Box>
                <Box>
                  <Text>CVV/CVC</Text>
                  <Input
                    type="password"
                    size="sm"
                    borderColor={'rgb(211,211,211)'}
                    width="150px"
                    value={securityNumber}
                    onChange={handleSecurityNumberChange}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>
            <Text>Sözleşme</Text>
            <Box rounded="lg" border="1px" borderColor="gray.300" p="10px" mt="5px">
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel enim labore non minima officiis! Delectus,
                maxime? Quia culpa, consequuntur vero quidem ab perspiciatis, sed sequi doloremque aspernatur quas
                debitis dolor illum delectus at necessitatibus voluptatum excepturi expedita? Assumenda ipsa consectetur
                unde ducimus quibusdam iste ipsam aliquid, eos voluptate, modi repudiandae? Repellat id ullam quisquam,
                consequuntur dolor et eius molestiae fugiat.
              </Text>
              <br />
              <Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti, temporibus tempora. Accusantium,
                assumenda! Voluptatem eius quas sapiente quae voluptatibus consectetur reiciendis nobis asperiores dolor
                sint! Saepe, quibusdam! Ut sequi mollitia nostrum maiores quidem numquam culpa reprehenderit quasi quas
                facere necessitatibus rem dicta consequuntur, quia non. tempora? Quis porro harum facilis molestias
                amet?
              </Text>
            </Box>
          </Box>
        </Box>
        <Box width="400px">
          <Basket cardHolderName={customerName} cardNumber={cardNumber} cvv={securityNumber} expireDate={expireDate} />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
