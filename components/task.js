import { Stack, Checkbox, Text, Icon, Button } from "@chakra-ui/react";
import { HiOutlineTrash as Trash } from "react-icons/hi";
import React, { useState } from "react";

import { HSlide } from "./animations/slide";
import { Jump } from "./animations/jump";

function Task({ title, handleDeleteTask }) {
  const [checked, setChecked] = useState(false);
  return (
    <Jump>
      <Stack
        direction="row"
        bg="whiteAlpha.700"
        w="450px"
        h="100%"
        minHeight="50px"
        px="20px"
        py="10px"
        align="center"
        justify="space-between"
        borderRadius={5}
        mx={4}
        _hover={{
          backgroundColor: "gray.300",
          transition: "all 0.5s ease",
        }}
      >
        <Checkbox
          colorScheme="twitter"
          spacing="1em"
          isChecked={checked}
          onChange={() => setChecked(!checked)}
        >
          <Text as="strong">{title}</Text>
        </Checkbox>
        {checked && (
          <HSlide>
            <Button colorScheme="gray.300" onClick={handleDeleteTask}>
              <Icon
                as={Trash}
                w={5}
                h={5}
                color="red.500"
                _hover={{ cursor: "pointer" }}
              />
            </Button>
          </HSlide>
        )}
      </Stack>
    </Jump>
  );
}

export default Task;
