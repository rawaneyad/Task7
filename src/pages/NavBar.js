import React from "react";
import {
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import logo from "../Image/logo.png";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
const NavBar = () => {
  return (
    <Tabs defaultIndex={1}>
      <TabList bg="brand.900" color="brand.700">
        <Tab isDisabled>
          <Image boxSize="30px" objectFit="cover" src={logo} alt="logo" />
        </Tab>
        <Tab _selected={{ color: "brand.800" }}>Products</Tab>
        <Tab _selected={{ color: "brand.800" }}>Shopping Cart</Tab>
      </TabList>
      <TabPanels>
        <TabPanel></TabPanel>
        <TabPanel>
          <Products />
        </TabPanel>
        <TabPanel>
          <ShoppingCart />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default NavBar;
