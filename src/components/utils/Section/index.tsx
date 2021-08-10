import React from "react";
import { Box } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

export const Section = React.memo(({ children }: Props) => {
  return (
    <Box bg="white" boxShadow="md" padding={2} w="100%" h="100%">
      {children}
    </Box>
  );
});
