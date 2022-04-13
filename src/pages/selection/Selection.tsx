import { Box, Spinner, Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import Header from '../../components/Header';
import PackageList from '../../components/PackageList';
import { fetchPackages } from '../../features/packagesListSlice';
import { useAppDispatch, useAppSelector } from '../../store';

function Selection() {
  const dispatch = useAppDispatch();
  const packages = useAppSelector((state) => state.packagesList);

  useEffect(() => {
    dispatch(fetchPackages());
  }, []);

  return (
    <Box display="flex" flexDirection="column" height="100vh" minWidth="980px" overflowX="auto" bg="gray.200">
      <Header />
      {packages.loading && (
        <Box display="flex" alignItems="center">
          <Spinner mx="auto" thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Box>
      )}
      {packages.error && <Text>{packages.error}</Text>}
      {packages.data && <PackageList packages={packages.data} />}
    </Box>
  );
}

export default Selection;
