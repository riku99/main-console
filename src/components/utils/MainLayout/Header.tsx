import React from "react";
import { Box } from "@chakra-ui/react";
import { styles } from "styles";

export const Header = React.memo(() => {
  return <Box h={styles.headerHeight} boxShadow="md"></Box>;
});
