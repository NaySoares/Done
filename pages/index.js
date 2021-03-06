import {
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import { VSlide } from "../components/animations/slide";
import { Input } from "../components/form/input";
import { useForm } from "react-hook-form";

function SignIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <VSlide delay={1}>
      <Flex align="center" justify="center" direction="column">
        <VStack align="flexStart">
          <HStack>
            <Heading as="h1" fontSize={100}>
              Done
            </Heading>
            <Heading as="h1" fontSize={100} color="twitter.500">
              .
            </Heading>
          </HStack>
          <VSlide delay={2}>
            <Text as="strong" fontSize={20} color="gray.700">
              Um TO-DO e nada mais...
            </Text>
          </VSlide>
        </VStack>

        <Flex
          as="form"
          w="100%"
          maxWidth={360}
          bg="whiteAlpha.500"
          p="8"
          mt={20}
          borderRadius={8}
          flexDir="column"
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing={4}>
            <Input
              name="name"
              type="name"
              label="Login"
              {...register ('name', { required: true })}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              {...register ('password', { required: true })}
            />
          </Stack>

          <Button
            type="submit"
            mt="6"
            colorScheme="twitter"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </VSlide>
  );
}

export default SignIn;
