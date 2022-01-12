import { Flex, VStack } from "@chakra-ui/react";
import Session from './session'

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
      <Session title={"Início"} itens={6} href={"/session/home"}/>
      <Session title={"Hoje"} itens={6} href={"/session/today"}/>
      <Session title={"Semana"} itens={6} href={"week"} href={"/session/week"}/>
      <Session title={"Mês"} itens={6} href={"mouth"} href={"/session/mouth"}/>
      <Session title={"Ano"} itens={6} href={"year"} href={"/session/year"}/>
    </VStack>
  </Flex>
);

export default Sidebar;
