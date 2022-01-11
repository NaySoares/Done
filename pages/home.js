import { HStack } from '@chakra-ui/react'
import Sidebar from '../components/sidebar'
import Content from '../components/content'

const Home = () => (
  <HStack
    w="95%"
    h="90vh"
    p={2}
    style={{ backgroundColor: "rgba(160,174,192,0.1)" }}
    borderRadius={8}
  >
    <Sidebar />
    <Content />
  </HStack>
);

export default Home