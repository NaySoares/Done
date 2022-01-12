import Container from '../components/layouts/container';
import Sidebar from '../components/sidebar/sidebar'
import { Flex, Text } from '@chakra-ui/react';

const NotFound = () => (
  <Container>
    <Sidebar/>
    <Flex align="center" justify="center" w="100%" h="100%">
      <Text as="strong" fontSize="xl" color="gray.500">Página não encontrada.</Text>
    </Flex>
  </Container>
)

export default NotFound;