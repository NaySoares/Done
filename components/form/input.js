import {
  Input as ChakraInput,
  FormControl,
  FormLabel,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef  } from "react";

const InputBase = ({ name, label, ...rest }, ref) => {
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
        ref={ref}
        {...rest}
      />
    </FormControl>
  );
}

export const Input = forwardRef(InputBase)