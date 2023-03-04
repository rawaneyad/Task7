import { Box, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const ProductsLoading = () => {
  return (
    <SimpleGrid minChildWidth="300px" spacing="20px">
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height="250" />
        <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="4" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height="250" />
        <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="4" />
      </Box>
      <Box padding="6" boxShadow="lg" bg="white">
        <Skeleton height="250" />
        <SkeletonText mt="4" noOfLines={6} spacing="4" skeletonHeight="4" />
      </Box>
    </SimpleGrid>
  );
};

export default ProductsLoading;
