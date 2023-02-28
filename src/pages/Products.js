import { fetchProducts } from "../features";
import { Flex, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";
import {
  HeadingItem,
  ProductsBox,
  ProductsError,
  ProductsLoading,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import React, { useEffect } from "react";

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <Stack className="main">
      <Flex>
        <HeadingItem name="Products" />
        <Spacer />
        <AddProduct />
      </Flex>
      <SimpleGrid minChildWidth="300px" spacing="20px">
        {products.loading && <ProductsLoading />}
        {!products.loading && products.error ? <ProductsError /> : null}
        {!products.loading && products.products.length
          ? products.products.map((product) => (
              <ProductsBox key={product.id} product={product} />
            ))
          : null}
      </SimpleGrid>
    </Stack>
  );
};

export default Products;
