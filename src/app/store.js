import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import favoriteProductsReducer from "../features/favoriteProducts/favoritePoductsSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    favoriteProducts: favoriteProductsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
