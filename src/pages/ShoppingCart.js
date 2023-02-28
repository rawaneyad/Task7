import React, { useEffect } from "react";
import { Flex, Spacer, Stack, VStack } from "@chakra-ui/react";
import { HeadingItem, CartBox, EmptyCart, CartLoading } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getShoppingCart } from "../features";

const ShoppingCart = () => {
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCart());
  }, []);

  return (
    <Stack className="main">
      <Flex>
        <HeadingItem name="Shopping Cart" />
        <Spacer />
      </Flex>
      {shoppingCart.shoppingCart.length ? (
        <VStack spacing={4} align="stretch">
          {shoppingCart.loading && <CartLoading />}
          {shoppingCart.shoppingCart.map((product) => (
            <CartBox key={product.id} product={product} />
          ))}
        </VStack>
      ) : (
        <EmptyCart />
      )}
    </Stack>
  );
};

export default ShoppingCart;
