import { Card, CardBody, CardFooter, Stack, useToast } from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features";
import { ButtonItem, HeadingItem, ImageItem, TextItem } from "../items";

const ProductsBox = ({ product }) => {
  const toast = useToast();

  const onClickAddToCart =()=>{
    dispatch(addToCart(product)).then(() =>
    toast({
      position: "top",
      title:
        JSON?.parse(localStorage?.getItem("addProductToCart")).title ||
        "Error",
      description:
        JSON?.parse(localStorage?.getItem("addProductToCart"))
          .description || "The product added failed",
      status: JSON?.parse(localStorage?.getItem("addProductToCart"))
        ? "success"
        : "error",
      duration: 9000,
      isClosable: true,
    })
  )
  }
  const dispatch = useDispatch();
  return (
    <Card maxW="lg">
      <CardBody>
        <ImageItem src={product.image} />
        <Stack mt="6" spacing="3">
          <HeadingItem name={product.name} />
          <TextItem name={product.description} color="brand.600" />
          <TextItem name={`$ ${product.price}`} color="brand.900" />
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonItem
          name="Add To Cart"
          onClick={() =>
            onClickAddToCart()
          }
        />
        {/* <ButtonItem name="Remove From Cart" /> */}
      </CardFooter>
    </Card>
  );
};

export default ProductsBox;
