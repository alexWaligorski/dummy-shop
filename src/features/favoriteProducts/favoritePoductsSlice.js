import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const favoriteProductsSlice = createSlice({
  name: "favoriteProducts",
  initialState,
  reducers: {
    productFavored(state, action) {
      const { id } = action.payload;
      const alreadyFavoredProduct = state.find((product) => product.id === id);
      if (!alreadyFavoredProduct) {
        state.push({ ...action.payload });
      } else {
        const index = state.findIndex(
          (product) => alreadyFavoredProduct.id === product.id
        );
        state.splice(index, 1);
      }
    },
  },
});

export const { productFavored } = favoriteProductsSlice.actions;

export default favoriteProductsSlice.reducer;
