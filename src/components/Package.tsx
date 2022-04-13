import { Box, Divider, Image, Tag, TagLabel, TagLeftIcon, Text } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { BiWifi0 } from 'react-icons/bi';
import { add, remove } from '../features/customerBasketSlice';
import { useAppDispatch, useAppSelector } from '../store';
import { PackageFromList } from '../types/type';

interface PackageProps {
  packageFL: PackageFromList;
}

const Package: FC<PackageProps> = ({ packageFL }) => {
  const [borderGreen, setBorderGreen] = useState(false);
  const dispatch = useAppDispatch();
  const customerBasket = useAppSelector((state) => state.customerBasket);

  const addPackage = () => {
    dispatch(add(packageFL));
    setBorderGreen(!borderGreen);
  };

  const removePackage = () => {
    dispatch(remove(packageFL));
    setBorderGreen(!borderGreen);
  };

  return (
    <Box
      width="450px"
      onClick={() => {
        if (!borderGreen) {
          addPackage();
          console.log(customerBasket);
        } else {
          removePackage();
          console.log(customerBasket);
        }
        setBorderGreen(!borderGreen);
      }}
      _hover={{ cursor: 'pointer' }}
      display="flex"
      flexDirection="row"
      border="2px"
      borderRadius="lg"
      borderColor={borderGreen ? 'green.300' : 'none'}
      bg="blackAlpha.200"
    >
      <Box sx={{ flexGrow: '1' }} width="150px">
        <Image borderLeftRadius="md" src={packageFL.imagePath} alt="packagePic" />
      </Box>
      <Box sx={{ flexGrow: '10' }} pt="3" pl="3" pr="3" boxSizing="border-box">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Text fontSize="larger" fontWeight="semibold">
            {packageFL.name}
          </Text>
          <Text fontSize="larger" fontWeight="semibold">
            {packageFL.amount}
            {packageFL.currency}
          </Text>
        </Box>
        <Box display="flex" flexDirection="row" gap="10" mt="1">
          {packageFL.details.map((item) => {
            return (
              <Tag key={item} colorScheme="none" display={'flex'} p="0">
                <TagLeftIcon boxSize="14px" as={BiWifi0} margin="0" pb="0.5" />
                <TagLabel>{item}</TagLabel>
              </Tag>
            );
          })}
        </Box>
        <Divider orientation="horizontal" mt="4" borderColor="blackAlpha.400" />
        <Box display="flex" flexDirection="row" gap="3">
          {packageFL.details.map((item) => {
            return (
              <Tag key={item} rounded="full" mt="1" size="sm" bg="blackAlpha.400">
                {item}
              </Tag>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Package;
