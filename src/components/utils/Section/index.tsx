import React from "react";
import { Box, Stack, StackProps } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
} & StackProps;

export const Section = React.memo(({ children, ...props }: Props) => {
  return (
    <Stack
      p={2}
      shadow="md"
      borderWidth="1px"
      bg="white"
      spacing={4}
      {...props}
    >
      {children}
    </Stack>
  );
});
