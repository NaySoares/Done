import Head from "next/head";
import { Flex } from "@chakra-ui/react";

const Main = ({ children, router }) => {
  return (
    <Flex as="main" m={8} align="center" justify="center"> 
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="TO-DO list" />
        <meta name="author" content="Elienai Soares" />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <title>Done</title>
      </Head>

      {children}
    </Flex>
  );
};

export default Main;
