import React from "react";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";

import { Form } from "./Form";

export const RClient = React.memo(() => {
  return (
    <Flex w="40%">
      <Form />
    </Flex>
  );
});
