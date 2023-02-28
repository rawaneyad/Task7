import { Card, CardBody, CardFooter, Stack } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features";
import { ButtonItem, HeadingItem, ImageItem, TextItem } from "../items";

const ProductsBox = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card maxW="lg">
      <CardBody>
        <ImageItem src={product.image}/>
        <Stack mt="6" spacing="3">
          <HeadingItem name={product.name} />
          <TextItem name={product.description} color="brand.600" />
          <TextItem name={`$ ${product.price}`} color="brand.900" />
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonItem name="Add To Cart" onClick={()=>dispatch(addToCart(product))} />
        {/* <ButtonItem name="Remove From Cart" /> */}
      </CardFooter>
    </Card>
  );
};

export default ProductsBox;
