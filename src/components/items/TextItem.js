import { Text } from "@chakra-ui/react";
import React from "react";

const TextItem = ({ name, color }) => {
  return <Text color={color}>{name}</Text>;
};

export default TextItem;
