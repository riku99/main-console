import React, { useState } from "react";
import { Box, Button, Flex, HStack } from "@chakra-ui/react";

import { RClient } from "./RClient";

const SelectTargetButton = React.memo(
  ({
    isSelected,
    titile,
    onClick,
  }: {
    isSelected: boolean;
    titile: string;
    onClick: () => void;
  }) => {
    return (
      <Button
        bg={isSelected ? "gray.500" : "transparent"}
        _hover={{ backgroundColor: undefined }}
        color={isSelected ? "white" : undefined}
        _active={{ backgroundColor: undefined }}
        onClick={onClick}
      >
        {titile}
      </Button>
    );
  }
);

export const Notifications = () => {
  const [selected, setSelected] = useState("r-client");

  return (
    <>
      <Flex>
        <HStack spacing="10px">
          <SelectTargetButton
            isSelected={selected === "user"}
            titile="ユーザー"
            onClick={() => setSelected("user")}
          />
          <SelectTargetButton
            isSelected={selected === "r-client"}
            titile="Rクライアント"
            onClick={() => setSelected("r-client")}
          />
        </HStack>
      </Flex>
      <Box mt={5}>{selected === "r-client" && <RClient />}</Box>
    </>
  );
};
