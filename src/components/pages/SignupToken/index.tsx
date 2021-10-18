import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Section } from "components/utils/Section";
import { CreateButton } from "./CreateButton";

export const SignupToken = () => {
  const [token, setToken] = useState("");
  const onCreateButtonClick = () => {
    const result = window.confirm("発行してよろしいですか?");
    if (result) {
      const str = Math.random().toString(32).substring(2).slice(0, 6); // 6桁のトークン生成
      setToken(str);
      // APIで処理
    }
  };

  return (
    <Flex justifyContent="center">
      <Section p="20px 10px" w="400px" mt="100px">
        <Text>サインアップトークンの発行</Text>
        <Text h="50px">{token}</Text>
        <CreateButton onClick={onCreateButtonClick} />
      </Section>
    </Flex>
  );
};
