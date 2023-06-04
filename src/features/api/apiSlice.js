import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (productsToSkip = 0) =>
        `/products?limit=10&skip=${productsToSkip}`,
      transformResponse: (response) => response.products,
    }),
    getCategories: builder.query({ query: () => "/products/categories" }),
    getProduct: builder.query({ query: (id) => `/products/${id}` }),
    getProductsByCategory: builder.query({
      query: (category) => `/products/category/${category}`,
      transformResponse: (response) => response.products,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetProductQuery,
  useGetProductsByCategoryQuery,
} = apiSlice;
