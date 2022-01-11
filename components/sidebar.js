import { Flex, Text, Box, Stack, VStack } from "@chakra-ui/react";

const Sidebar = () => (
  <Flex
    h="100%"
    bg="whiteAlpha.700"
    justify="flexStart"
    borderRadius={8}
    w="360px"
    justify="center"
    pt={12}
  >
    <VStack>
      <Stack
        direction="row"
        bg="gray.200"
        w="280px"
        h="50px"
        px="20px"
        align="center"
        justify="space-between"
        borderRadius={5}
        mx={4}
        _hover={{
          backgroundColor: "gray.300",
          transition: "all 0.5s ease",
        }}
      >
        <Text as="strong">Início</Text>
        <Box
          w="25px"
          h="25px"
          bg="gray.300"
          align="center"
          justify="center"
          borderRadius={5}
        >
          <Text color="gray.400">8</Text>
        </Box>
      </Stack>
      
      <Stack
        direction="row"
        bg="gray.200"
        w="280px"
        h="50px"
        px="20px"
        align="center"
        justify="space-between"
        borderRadius={5}
        _hover={{
          backgroundColor: "gray.300",
          transition: "all 0.5s ease",
        }}
      >
        <Text as="strong">Hoje</Text>
        <Box
          w="25px"
          h="25px"
          bg="gray.300"
          align="center"
          justify="center"
          borderRadius={5}
        >
          <Text color="gray.400">2</Text>
        </Box>
      </Stack>
      <Stack
        direction="row"
        bg="gray.200"
        w="280px"
        h="50px"
        px="20px"
        align="center"
        justify="space-between"
        borderRadius={5}
        _hover={{
          backgroundColor: "gray.300",
          transition: "all 0.5s ease",
        }}
      >
        <Text as="strong">Semana</Text>
        <Box
          w="25px"
          h="25px"
          bg="gray.300"
          align="center"
          justify="center"
          borderRadius={5}
        >
          <Text color="gray.400">6</Text>
        </Box>
      </Stack>
    </VStack>
  </Flex>
);

export default Sidebar;
