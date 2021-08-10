import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Header } from "./Header";
import { SideBar } from "./SideBar";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = React.memo(({ children }: Props) => {
  return (
    <Box minH="100vh" bg="gray.100">
      <Flex h="100%" w="100%">
        <SideBar />
        <Box w="100%">
          <Header />
          <Box padding="20px">{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
});
