import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import firebase from "firebase";

import { styles } from "styles";

export const Header = React.memo(() => {
  const email = firebase.auth().currentUser!.email;

  return (
    <Flex
      h={styles.headerHeight}
      boxShadow="md"
      alignItems="center"
      pl={2}
      pr={2}
      justifyContent="space-between"
    >
      <Text>コンソール</Text>
      <Text color="gray">{email}</Text>
    </Flex>
  );
});
