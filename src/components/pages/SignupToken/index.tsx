import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Section } from "components/utils/Section";
import { CreateButton } from "./CreateButton";

import { useCreateSignupToken } from "hooks/signupTokens";

export const SignupToken = () => {
  const { createSignupToken, isLoading } = useCreateSignupToken();

  const [token, setToken] = useState("");
  const onCreateButtonClick = async () => {
    const result = window.confirm("発行してよろしいですか?");
    if (result) {
      const token = await createSignupToken();
      if (token) {
        setToken(token);
      }
    }
  };

  return (
    <Flex justifyContent="center">
      <Section p="20px 10px" w="400px" mt="100px">
        <Text>サインアップトークンの発行</Text>
        <Text h="50px">{token}</Text>
        {!!token && (
          <Text color="red" fontSize="14px">
            有効期限は発行してから6時間です
          </Text>
        )}
        <CreateButton onClick={onCreateButtonClick} isLoading={isLoading} />
      </Section>
    </Flex>
  );
};
