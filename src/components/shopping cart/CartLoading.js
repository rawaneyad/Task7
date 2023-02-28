import { SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const CartLoading = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="20px">
      <Skeleton height="250" />
      <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="4" />
    </SimpleGrid>
  );
};

export default CartLoading;
