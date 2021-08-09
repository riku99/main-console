import React from "react";
import { Box, Center, VStack, Text } from "@chakra-ui/react";
import { styles } from "styles";
import { Icon } from "@chakra-ui/react";
import { MdHome } from "react-icons/md";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";

const MenuItem = React.memo(
  ({ icon, title }: { icon: IconType; title: string }) => {
    return (
      <Link to="/login">
        <Center>
          <Icon as={icon} color="white" />
          <Text color="white" fontWeight="bold" ml={2}>
            {title}
          </Text>
        </Center>
      </Link>
    );
  }
);

export const SideBar = React.memo(() => {
  return (
    <Box h="100%" w="10%" bg="blue.300">
      <Center mt={styles.headerHeight} w="100%" display="block">
        <VStack spacing="20px">
          <MenuItem icon={MdHome} title="ホーム" />
          <MenuItem icon={MdHome} title="ホーム" />
        </VStack>
      </Center>
    </Box>
  );
});
