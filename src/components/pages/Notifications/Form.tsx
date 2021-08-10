import React, { useCallback, useMemo, useState } from "react";
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
import { useCreateRClientNotification } from "hooks/notifications";

export const Form = React.memo(() => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const date = useMemo(() => new Date(), []);
  const { createNotification, isLoading } = useCreateRClientNotification();

  const onClick = useCallback(() => {
    const result = window.confirm("作成してよろしいですか?");
    if (result) {
      createNotification({ title, text });
    }
  }, [title, text, createNotification]);

  return (
    <Section w="100%">
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="bold">お知らせの作成</Text>
        <Button
          colorScheme="blue"
          disabled={!title || !text}
          onClick={onClick}
          isLoading={isLoading}
        >
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
        <Text>{format(date, "yyyy/MM/dd")}</Text>
      </Box>
    </Section>
  );
});
