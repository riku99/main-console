import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { format } from "date-fns";

import { Section } from "components/utils/Section";

export const Form = React.memo(() => {
  return (
    <Section w="100%">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold">お知らせの作成</Text>
        <Button colorScheme="blue">作成</Button>
      </Flex>
      <FormControl mt={3}>
        <FormLabel>タイトル</FormLabel>
        <Input w="100%" />
      </FormControl>
      <FormControl>
        <FormLabel mt={3}>本文</FormLabel>
        <Textarea h="40vh" multiple />
      </FormControl>
      <Box mt={3}>
        <Text>日付</Text>
        <Text>{format(new Date(), "yyyy/MM/dd")}</Text>
      </Box>
    </Section>
  );
});
