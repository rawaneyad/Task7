import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
const initialState = {
    loading: false,
    products: [],
    error: ''
  }
  export const fetchProducts = createAsyncThunk('products/fetchProducts', () => {
    return axios
      .get('https://62d6874451e6e8f06f0c0fb0.mockapi.io/products')
      .then(res => res.data)
  })

 const productsSlice= createSlice({
    name: 'products',
    initialState,
    extraReducers: builder => {
      builder.addCase(fetchProducts.pending, state => {
        state.loading = true
      })
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.products = action.payload
        state.error = ''
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.products = []
        state.error = action.error.message
      })
    }
  })
  
export default productsSlice.reducer