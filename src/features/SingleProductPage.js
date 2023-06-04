import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./api/apiSlice";

export default function SingleProductPage() {
  const { productId } = useParams();
  const { data: product, isLoading } = useGetProductQuery(productId);

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return product && <h1>{product.title}</h1>;
}
