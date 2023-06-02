import React from "react";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "./api/apiSlice";

export default function SingleProductPage() {
  const { productId } = useParams();
  const { data: product, isSuccess } = useGetSingleProductQuery(productId);

  if (isSuccess) {
    console.log(product);
  }

  return product && <h1>{product.title}</h1>;
}
