import React, { ComponentProps } from "react";
import { Button } from "@chakra-ui/react";

type Props = {
  onClick: () => void;
} & ComponentProps<typeof Button>;

export const CreateButton = ({ onClick, ...props }: Props) => {
  return (
    <Button colorScheme="blue" onClick={onClick} {...props}>
      ηΊθ‘γγ
    </Button>
  );
};
