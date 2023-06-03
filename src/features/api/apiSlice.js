import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (productsToSkip) => `/products?limit=10&skip=${productsToSkip}`,
    }),
    getCategories: builder.query({ query: () => "/products/categories" }),
    getProduct: builder.query({ query: (id) => `products/${id}` }),
    getProductsByCategory: builder.query({
      query: (category) => `products/category/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
} = apiSlice;
