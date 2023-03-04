import { Button } from "@chakra-ui/react";
import React from "react";

const ButtonItem = ({ name, onClick, type, isLoading }) => {
  return (
    <Button
      isLoading={isLoading}
      colorScheme="brand"
      variant="brandPrimary"
      size="sm"
      type={type}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

export default ButtonItem;
