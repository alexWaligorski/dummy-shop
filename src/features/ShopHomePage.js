import React from "react";
import { useGetCategoriesQuery, useGetProductsQuery } from "./api/apiSlice";
import { Link } from "react-router-dom";

export default function ShopHomePage() {
  const { data: categories } = useGetCategoriesQuery();
  const { data: products } = useGetProductsQuery();
  return (
    <div>
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
          <h2>Product Categories</h2>
          <ul>
            {products.products.map((products) => (
              <li key={products.id}>
                <Link to={`/products/${products.id}`}>{products.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
