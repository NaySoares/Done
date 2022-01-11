import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Stack,
  Checkbox,
  Input,
  FormControl,
} from "@chakra-ui/react";

const Content = () => (
  <Stack w="100%" h="100%" align="center" justify="center">
    <Flex
      direction="column"
      w="80%"
      h="100%"
      align="flexStart"
      justify="flexStart"
      py={8}
    >
      <Heading as="h3">Início</Heading>

      <VStack>
        <Stack my={9} w="450px">
          <FormControl>
            <Input
              name="name"
              id="task"
              focusBorderColor="twitter.500"
              bgColor="gray.300"
              variant="filled"
              placeholder="Escreva uma nova tarefa..."
              fontSize="14"
              _hover={{
                bgColor: "gray.300",
              }}
              size="lg"
            />
          </FormControl>
        </Stack>

        <Stack
          direction="row"
          bg="whiteAlpha.700"
          w="450px"
          h="100%"
          minHeight="50px"
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
          <Checkbox colorScheme="twitter">
            <Text as="strong">Ir ao mercado</Text>
          </Checkbox>
        </Stack>

        <Stack
          direction="row"
          bg="whiteAlpha.700"
          w="450px"
          h="100%"
          minHeight="50px"
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
          <Checkbox colorScheme="twitter">
            <Text as="strong">Terminar o arquivo de edição</Text>
          </Checkbox>
        </Stack>
      </VStack>
    </Flex>
  </Stack>
);

export default Content;
