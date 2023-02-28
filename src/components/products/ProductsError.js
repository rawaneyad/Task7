import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

const ProductsError = () => {
  const products = useSelector((state) => state.products);

  return (
    <Alert
      status="error"
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="200px"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {products.error}
      </AlertTitle>
      <AlertDescription maxWidth="sm">
        We're sorry but something went wrong try again
      </AlertDescription>
    </Alert>
  );
};

export default ProductsError;
