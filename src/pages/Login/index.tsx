import React, { useCallback } from "react";
import { Box, Flex, useToast } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";

import { MainLayout } from "../../components/templates/MainLayout";
import { useLogin } from "../../hooks/auth";

export const Login = React.memo(() => {
  const { loginWithGoogle } = useLogin();
  const history = useHistory();
  const toast = useToast();

  const onGoogleClick = useCallback(async () => {
    try {
      await loginWithGoogle();
      history.push("/");
      toast({
        title: "ログインしました",
        status: "success",
        position: "bottom",
      });
    } catch (e) {
      toast({
        title: "ログインに失敗しました",
        status: "error",
        position: "bottom",
      });
      console.log(e);
    }
  }, [loginWithGoogle, history, toast]);

  return (
    <MainLayout>
      <Flex justifyContent="center" alignItems="center" h="100%">
        <Box w="30%">
          <GoogleLoginButton onClick={onGoogleClick}>
            <span>Googleでログイン</span>
          </GoogleLoginButton>
        </Box>
      </Flex>
    </MainLayout>
  );
});
