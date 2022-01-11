import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";

export default function Input({ name, label, ...rest }) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="twitter.500"
        bgColor="gray.200"
        variant="filled"
        _hover={{
          bgColor: "gray.300",
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  );
}
