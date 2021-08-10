import React from "react";
import { Box, Center, VStack, Text } from "@chakra-ui/react";
import { styles } from "styles";
import { Icon } from "@chakra-ui/react";
import { MdHome, MdNotifications } from "react-icons/md";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

const MenuItem = React.memo(
  ({
    icon,
    title,
    link,
    seleceted,
  }: {
    icon: IconType;
    title: string;
    link: string;
    seleceted: boolean;
  }) => {
    return (
      <Link to={link}>
        <Center bg={seleceted ? "white" : undefined} borderRadius={20} p="5px">
          <Icon as={icon} color={seleceted ? "blue.300" : "white"} />
          <Text
            color={seleceted ? "blue.300" : "white"}
            fontWeight="bold"
            ml={2}
          >
            {title}
          </Text>
        </Center>
      </Link>
    );
  }
);

export const SideBar = React.memo(() => {
  const location = useLocation();

  return (
    <Box h="100%" w="9%" bg="blue.300">
      <Center mt={styles.headerHeight} w="100%" display="block">
        <VStack spacing="20px">
          <MenuItem
            icon={MdHome}
            title="ホーム"
            link="/"
            seleceted={location.pathname === "/"}
          />
          <MenuItem
            icon={MdNotifications}
            title="お知らせ"
            link="/notifications"
            seleceted={location.pathname.includes("notifications")}
          />
        </VStack>
      </Center>
    </Box>
  );
});
