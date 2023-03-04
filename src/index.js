import React from "react";
import ReactDOM from "react-dom/client";
import store from "./app/store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { ChakraBaseProvider, extendTheme } from "@chakra-ui/react";
import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#A34A28",
    800: "#FEE1D1",
    700: "#DFDDC7",
    600: "#55433C",
  },
};
const brandPrimary = defineStyle({
  background: "brand.900",
  color: "white",
});
const buttonTheme = defineStyleConfig({
  variants: { brandPrimary },
});
const theme = extendTheme({ colors, components: { Button: buttonTheme } });
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </React.StrictMode>
  </Provider>
);
