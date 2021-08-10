import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import { Header } from "./Header";
import { SideBar } from "./SideBar";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = React.memo(({ children }: Props) => {
  return (
    <Box h="100vh">
      <Flex h="100%" w="100%" bg="gray.100">
        <SideBar />
        <Box w="100%" h="100%">
          <Header />
          <Box padding="20px">{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
});
