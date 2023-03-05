import { fetchProducts } from "../features";
import { Flex, SimpleGrid, Spacer, Stack } from "@chakra-ui/react";
import {
  HeadingItem,
  Pagination,
  ProductsBox,
  ProductsError,
  ProductsLoading,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import AddProduct from "./AddProduct";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const productsPerPage=12;
  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProducts = products.products.slice(
    firstProductIndex,
    lastProductIndex
  );
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
          ? currentProducts.map((product) => (
              <ProductsBox key={product.id} product={product} />
            ))
          : null}
      </SimpleGrid>
      <Pagination
        totalProducts={products.products.length}
        productsPerPage={productsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </Stack>
  );
};

export default Products;
