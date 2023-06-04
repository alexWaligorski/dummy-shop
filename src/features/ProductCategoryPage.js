import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "./api/apiSlice";
import ProductsList from "../components/ProductsList";

export default function ProductCategoryPage() {
  const { category } = useParams();
  const { data: products, isLoading } = useGetProductsByCategoryQuery(category);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <>
      <h1>{category}</h1>
      {products && <ProductsList products={products} />}
    </>
  );
}
