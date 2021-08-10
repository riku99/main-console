import React from "react";
import { Flex } from "@chakra-ui/react";

import { Form } from "./Form";

export const RClient = React.memo(() => {
  return (
    <Flex w="40%">
      <Form />
    </Flex>
  );
});
