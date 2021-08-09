import React from "react";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = React.memo(({ children }: Props) => {
  return (
    <Box h="100vh">
      <Flex h="100%" w="100%">
        <Box h="100%" w="10%" bg="blue.300"></Box>
        <Box w="100%">
          <Box h="8%" boxShadow="md"></Box>
          <Box padding="10px">{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
});
