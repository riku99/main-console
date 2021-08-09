import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

import { MainLayout } from "../../components/templates/MainLayout";
import { useLogin } from "../../hooks/auth";

export const Login = React.memo(() => {
  const { loginWithGoogle } = useLogin();

  const history = useHistory();

  useEffect(() => {
    const _login = async () => {
      console.log("login");
      await loginWithGoogle();
      history.push("/");
    };
    _login();
  }, [loginWithGoogle, history]);

  return (
    <MainLayout>
      <Box>Hello Login</Box>
    </MainLayout>
  );
});
