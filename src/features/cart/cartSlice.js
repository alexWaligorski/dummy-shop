import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    productAdded(state, action) {
      const { id } = action.payload;
      const alreadyAddedProduct = state.find((product) => product.id === id);
      if (!alreadyAddedProduct) {
        state.push({ ...action.payload, quantity: 1 });
      } else {
        alreadyAddedProduct.quantity = alreadyAddedProduct.quantity + 1;
      }
    },
    productQuantityDecremented(state, action) {
      const { id } = action.payload;
      const alreadyAddedProduct = state.find((product) => product.id === id);
      if (alreadyAddedProduct && alreadyAddedProduct.quantity === 1) {
        const index = state.findIndex(
          (product) => product.id === alreadyAddedProduct.id
        );
        state.splice(index, 1);
      } else {
        alreadyAddedProduct.quantity = alreadyAddedProduct.quantity - 1;
      }
    },
    productDeleted(state, action) {
      const { id } = action.payload;
      const index = state.findIndex((product) => product.id === id);
      if (index >= 0) {
        state.splice(index, 1);
      }
    },
  },
});

export const { productAdded, productDeleted, productQuantityDecremented } =
  cartSlice.actions;
export default cartSlice.reducer;
