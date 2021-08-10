import React, { useState } from "react";
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
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <Section w="100%">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold">お知らせの作成</Text>
        <Button colorScheme="blue" disabled={!title || !text}>
          作成
        </Button>
      </Flex>
      <FormControl mt={3}>
        <FormLabel>タイトル</FormLabel>
        <Input w="100%" onChange={(e) => setTitle(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel mt={3}>本文</FormLabel>
        <Textarea h="45vh" multiple onChange={(e) => setText(e.target.value)} />
      </FormControl>
      <Box mt={3}>
        <Text>日付</Text>
        <Text>{format(new Date(), "yyyy/MM/dd")}</Text>
      </Box>
    </Section>
  );
});
