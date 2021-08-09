import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const MainLayout = React.memo(({ children }: Props) => {
  return (
    <Box h="100vh" bg="gray.100">
      {children}
    </Box>
  );
});
