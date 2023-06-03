import React from "react";
import { useGetCategoriesQuery, useGetProductsQuery } from "./api/apiSlice";
import { Link } from "react-router-dom";

export default function ShopHomePage() {
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();
  const { data: products, isLoading: isLoadingProducts } =
    useGetProductsQuery();

  if (isLoadingCategories || isLoadingProducts) {
    return <h2>Is Loading...</h2>;
  }
  return (
    <>
      <h1>DUMMY SHOP</h1>
      {categories && (
        <>
          <h2>Product Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>{category}</li>
            ))}
          </ul>
        </>
      )}
      {products && (
        <>
          <h2>Products</h2>
          <ul>
            {products.products.map((products) => (
              <li key={products.id}>
                <Link to={`/products/${products.id}`}>{products.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
