import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  shoppingCart: [],
  error: "",
};
export const addToCart = createAsyncThunk(
  "shoppingCart/addToCart",
  (product) => {
    const shoppingCart =
      JSON?.parse(localStorage?.getItem("ShoppingCart")) || [];
    shoppingCart.push(product);
    localStorage.setItem("ShoppingCart", JSON.stringify(shoppingCart));
    localStorage.setItem(
      "addProductToCart",
      JSON.stringify({
        title: "Success",
        description: "The product add to cart successfully.",
      })
    );
    return shoppingCart;
  }
);
export const getShoppingCart = createAsyncThunk(
  "shoppingCart/getShoppingCart",
  () => {
    const shoppingCart =
      JSON?.parse(localStorage?.getItem("ShoppingCart")) || [];
    return shoppingCart;
  }
);
export const removeFromCart = createAsyncThunk(
  "shoppingCart/removeFromCart",
  (id) => {
    const shoppingCart =
      JSON?.parse(localStorage?.getItem("ShoppingCart")) || [];
    const filterShoppingCart = shoppingCart.filter((item) => item.id !== id);
    localStorage.setItem("ShoppingCart", JSON.stringify(filterShoppingCart));
    localStorage.setItem(
      "removeProductFromCart",
      JSON.stringify({
        title: "Success",
        description: "The product remove from cart successfully.",
      })
    );
    return filterShoppingCart;
  }
);
const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addToCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      state.loading = false;
      state.shoppingCart = action.payload;
      state.error = "";
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      state.loading = false;
      state.shoppingCart = [];
      state.error = action.error.message;
    });
    builder.addCase(getShoppingCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getShoppingCart.fulfilled, (state, action) => {
      state.loading = false;
      state.shoppingCart = action.payload;
      state.error = "";
    });
    builder.addCase(getShoppingCart.rejected, (state, action) => {
      state.loading = false;
      state.shoppingCart = [];
      state.error = action.error.message;
    });
    builder.addCase(removeFromCart.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(removeFromCart.fulfilled, (state, action) => {
      state.loading = false;
      state.shoppingCart = action.payload;
      state.error = "";
    });
    builder.addCase(removeFromCart.rejected, (state, action) => {
      state.loading = false;
      state.shoppingCart = [];
      state.error = action.error.message;
    });
  },
});

export default shoppingCartSlice.reducer;
