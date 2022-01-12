import { HStack } from "@chakra-ui/react";

const Container = ({ children }) => (
  <HStack
    w="95%"
    h="90vh"
    p={2}
    style={{ backgroundColor: "rgba(160,174,192,0.1)" }}
    borderRadius={8}
  >
    {children}
  </HStack>
);

export default Container;
