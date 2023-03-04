import React from "react";
import { Card, CardBody, CloseButton, Spacer, Stack } from "@chakra-ui/react";
import { HeadingItem, ImageItem, TextItem } from "../items";
import { removeFromCart } from "../../features";
import { useDispatch } from "react-redux";
const CartBox = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <ImageItem maxW={{ base: "100%", sm: "350px" }} src={product.image} />
      <Stack>
        <CardBody>
          <HeadingItem name={product.name} />
          <TextItem name={product.description} color="brand.600" />
          <TextItem name={`$ ${product.price}`} color="brand.900" />
        </CardBody>
      </Stack>
      <Spacer />
      <CloseButton
        size="lg"
        color="brand.900"
        onClick={() => dispatch(removeFromCart(product.id))}
      />
    </Card>
  );
};

export default CartBox;
