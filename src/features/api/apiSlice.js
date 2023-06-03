import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({ query: () => "/products?limit=10" }),
    getCategories: builder.query({ query: () => "/products/categories" }),
    getProduct: builder.query({ query: (id) => `products/${id}` }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductQuery,
} = apiSlice;
