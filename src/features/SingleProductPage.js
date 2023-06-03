import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./api/apiSlice";

export default function SingleProductPage() {
  const { productId } = useParams();
  const { data: product, isSuccess } = useGetProductQuery(productId);

  if (isSuccess) {
    console.log(product);
  }

  return product && <h1>{product.title}</h1>;
}
