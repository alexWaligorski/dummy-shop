import React from "react";
import { useGetCategoriesQuery, useGetProductsQuery } from "./api/apiSlice";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ShopHomePage() {
  const [productBatch, setProductBatch] = useState(0);
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();
  const { data: products, isLoading: isLoadingProducts } =
    useGetProductsQuery(productBatch);

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
              <li key={category}>
                <Link to={`/products/category/${category}`}>{category}</Link>
              </li>
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
          <button
            type="button"
            disabled={productBatch <= 0}
            onClick={() => setProductBatch((prevBatch) => prevBatch - 10)}
          >
            Previous Products
          </button>
          <div>{productBatch / 10 + 1}</div>
          <button
            type="button"
            onClick={() => setProductBatch((prevBatch) => prevBatch + 10)}
          >
            Next Products
          </button>
        </>
      )}
    </>
  );
}
