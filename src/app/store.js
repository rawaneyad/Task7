import { configureStore } from "@reduxjs/toolkit";

import {
  shoppingCartReducer,
  newProductReducer,
  productsReducer,
} from "../features";

export default configureStore({
  reducer: {
    products: productsReducer,
    newProduct: newProductReducer,
    shoppingCart: shoppingCartReducer,
  },
});
