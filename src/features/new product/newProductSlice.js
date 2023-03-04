import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  newProduct: {},
  error: "",
};
export const addNewProduct = createAsyncThunk(
  "newProduct/addNewProduct",
  (values) => {
    return axios
      .post("https://62d6874451e6e8f06f0c0fb0.mockapi.io/products", values)
      .then((res) => {
        localStorage.setItem(
          "addProductToAPI",
          JSON.stringify({
            title: "Success",
            description: "The product added successfully.",
          })
        );
        return res.data;
      });
  }
);

const newProductSlice = createSlice({
  name: "newProduct",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(addNewProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addNewProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.newProduct = action.payload;
      state.error = "";
    });
    builder.addCase(addNewProduct.rejected, (state, action) => {
      state.loading = false;
      state.newProduct = {};
      state.error = action.error.message;
    });
  },
});

export default newProductSlice.reducer;
