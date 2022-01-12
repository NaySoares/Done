import {
  Flex,
  Heading,
  VStack,
  HStack,
  Stack,
  Input,
  FormControl,
  Button,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Task from "./task";
import { randomId } from "../lib/generator";
import { AnimatePresence } from "framer-motion";
import { Visible } from "./animations/visible";

function Content() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTaskChange = (e) => setTask(e.target.value);

  const handleNewTask = (event, task) => {
    event.preventDefault();
    const newTask = {
      title: task,
      id: randomId(9999999),
    };

    if (newTask.title !== " ") {
      setTasks([...tasks, newTask]);
    }
    setTask("");
  };

  const handleDeleteTask = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);

    setTasks(newTasks);
  };
  return (
    <Stack w="100%" h="100%" align="center" justify="center">
      <Flex
        direction="column"
        w="80%"
        h="100%"
        align="flexStart"
        justify="flexStart"
        py={8}
        overflowY="scroll"
      >
        <Heading as="h3">Início</Heading>

        <VStack>
          <HStack
            as="form"
            my={9}
            w="450px"
            onSubmit={() => handleNewTask(event, task)}
          >
            <FormControl>
              <Input
                name="task"
                type="text"
                id="task"
                value={task}
                onChange={handleTaskChange}
                focusBorderColor="twitter.500"
                bgColor="gray.300"
                variant="filled"
                placeholder="Escreva uma nova tarefa..."
                fontSize="14"
                w="100%"
                _hover={{
                  bgColor: "gray.300",
                }}
                size="lg"
              />
            </FormControl>
            {task && (
              <>
              <Visible>
                <Button
                  type="submit"
                  colorScheme="twitter"
                  size="sm"
                  alignSelf="flexStart"
                >
                  Done
                </Button>
              </Visible>
              </>
            )}
          </HStack>
          {tasks == "" ? (
            <>
              <Visible>
                <Text as="strong" color="gray.400">
                  Nenhuma tarefa registrada
                </Text>
              </Visible>
            </>
          ) : (
            <>
              <AnimatePresence>
                {tasks.map((item) => {
                  return (
                    <Task
                      key={item.id}
                      title={item.title}
                      handleDeleteTask={() => handleDeleteTask(item.id)}
                    />
                  );
                })}
              </AnimatePresence>
            </>
          )}
        </VStack>
      </Flex>
    </Stack>
  );
}

export default Content;
