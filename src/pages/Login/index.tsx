import React from "react";
import { Box } from "@chakra-ui/react";

import { MainLayout } from "../../components/templates/MainLayout";

export const Login = React.memo(() => {
  return (
    <MainLayout>
      <Box>Hello Login</Box>
    </MainLayout>
  );
});
