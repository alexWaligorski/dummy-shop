import React from "react";
import { useGetAllProductsQuery } from "./api/apiSlice";

export default function BestOfferPage() {
  const { mostDiscountedProducts, isLoading } = useGetAllProductsQuery(
    undefined,
    {
      selectFromResult: ({ data, isLoading, isUninitialized }) => ({
        mostDiscountedProducts: data?.filter(
          (product) => product.discountPercentage > 17
        ),
        isLoading: isUninitialized || isLoading,
      }),
    }
  );

  if (isLoading) {
    return <h2>Is Loading...</h2>;
  }

  console.log(mostDiscountedProducts);

  return (
    <>
      <h2>Best Offers!</h2>
      <ul>
        {mostDiscountedProducts?.map((product) => (
          <li key={product.id}>
            {product.title}
            <br></br>
            {product.discountPercentage} % off
          </li>
        ))}
      </ul>
    </>
  );
}
