import React from "react";
import {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useGetAllProductsQuery,
} from "./api/apiSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductsList from "../components/ProductsList";

export default function ShopHomePage() {
  const [productBatch, setProductBatch] = useState(0);
  const { data: categories, isLoading: isLoadingCategories } =
    useGetCategoriesQuery();
  const { data: products, isLoading: isLoadingProducts } =
    useGetProductsQuery(productBatch);

  const { data: bestRatedProducts, isLoading: isLoadingBestRated } =
    useGetAllProductsQuery(undefined, {
      selectFromResult: ({ data, isLoading, isUninitialized }) => {
        const filteredData = (data ?? []).filter(
          (product) => product.rating > 4.9
        );
        return {
          data: filteredData,
          isLoading: isUninitialized || isLoading,
        };
      },
    });

  /*   
  
  Problem with isLoading when using selectfrom result:
  https://github.com/reduxjs/redux-toolkit/issues/2827
  
  const { data: bestRatedProducts, isLoading: isLoadingBestRated } =
    useGetAllProductsQuery(undefined, {
      selectFromResult: (result) => {
        const filteredData = (result.data ?? []).filter(
          (product) => product.rating > 4.5
        );
        return {
          ...result,
          data: filteredData,
          isLoading: result.isUninitialized || result.isLoading,
        };
      },
    }); */

  if (isLoadingCategories || isLoadingProducts || isLoadingBestRated) {
    return <h2>Is Loading...</h2>;
  }

  return (
    <>
      <h1>DUMMY SHOP</h1>
      <h2>Product Categories</h2>
      {categories && (
        <>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category}>
                <Link to={`/products/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
      <h2>Best Rated Products</h2>
      {bestRatedProducts && <ProductsList products={bestRatedProducts} />}
      <h2>Products</h2>
      {products && (
        <>
          <ProductsList products={products} />
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
            disabled={productBatch === 90}
            onClick={() => setProductBatch((prevBatch) => prevBatch + 10)}
          >
            Next Products
          </button>
        </>
      )}
    </>
  );
}
