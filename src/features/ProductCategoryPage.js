import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "./api/apiSlice";

export default function ProductCategoryPage() {
  const { category } = useParams();
  const { data: products, isLoading } = useGetProductsByCategoryQuery(category);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    products && (
      <ul>
        {products.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    )
  );
}
