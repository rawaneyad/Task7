import productsReducer, { fetchProducts } from "./products/productsSlice";
import newProductReducer, {
  addNewProduct,
} from "./new product/newProductSlice";
import shoppingCartReducer, {
  addToCart,
  getShoppingCart,
  removeFromCart,
} from "./cart/shoppingCartSlice";

export {
  addNewProduct,
  addToCart,
  shoppingCartReducer,
  fetchProducts,
  getShoppingCart,
  newProductReducer,
  productsReducer,
  removeFromCart,
};
