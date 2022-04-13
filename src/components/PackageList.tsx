import { Box, Button, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store';
import { PackageFromList } from '../types/type';
import Package from './Package';

interface PackageListProps {
  packages: PackageFromList[];
}

const PackageList: FC<PackageListProps> = ({ packages }) => {
  const customerBasket = useAppSelector((state) => state.customerBasket);
  const navigate = useNavigate();

  const totalAmount = () => {
    let total = 0;
    customerBasket.forEach((item) => {
      total += item.amount;
    });
    return total;
  };

  return (
    <Box mx="auto" rounded="lg" bg="white" mt="50px" p="20px">
      <SimpleGrid columns={2} spacing={10}>
        {packages.map((item) => {
          return <Package key={item.id} packageFL={item} />;
        })}
      </SimpleGrid>
      <Divider orientation="horizontal" mt="20" borderColor="blackAlpha.400" />
      <Box display="flex" justifyContent="space-between" alignItems="center" mt="2">
        <Box display="flex" flexDirection="row" gap="1">
          <Text>Seçilen Paket Tutarı:</Text>
          <Text fontWeight="bold">{totalAmount()}₺</Text>
        </Box>
        <Button colorScheme="purple" onClick={() => navigate('/payment')}>
          Devam Et
        </Button>
      </Box>
    </Box>
  );
};

export default PackageList;
