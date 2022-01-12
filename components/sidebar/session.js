import { Stack, Box, Text, Link as LinkChakra } from "@chakra-ui/react";
import { ActiveLink } from "../activeLink";

const Session = ({ title, itens, href }) => (
  <ActiveLink href={href} passHref>
    <LinkChakra variant="ghost">
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
        <Text as="strong">{title}</Text>
        <Box
          w="25px"
          h="25px"
          bg="gray.300"
          align="center"
          justify="center"
          borderRadius={5}
        >
          <Text color="gray.400">{itens}</Text>
        </Box>
      </Stack>
    </LinkChakra>
  </ActiveLink>
);

export default Session;
