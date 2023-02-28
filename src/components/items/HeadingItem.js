import { Heading } from "@chakra-ui/react";
import React from "react";

const HeadingItem = ({ name }) => {
  return (
    <Heading as="h3" size="md" color="brand.900" mb={4}>
      {name}
    </Heading>
  );
};

export default HeadingItem;
