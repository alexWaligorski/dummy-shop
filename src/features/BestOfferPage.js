import React, {useState} from "react";
import { useGetAllProductsQuery } from "./api/apiSlice";


export default function BestOfferPage() {
  const { mostDiscountedProducts, isLoading } = useGetAllProductsQuery(
    undefined,
    {
      selectFromResult: ({ data, isLoading, isUninitialized }) => ({
        mostDiscountedProducts: data?.filter(
          (product) => product.discountPercentage > 10
        ),
        isLoading: isUninitialized || isLoading,
      }),
    }
  );

  const [isSmartphonesChecked, setIsSmartphonesChecked] = useState(false);
  const [maxPrice, setMaxPrice] = useState(0)
  if (isLoading) {
    return <h2>Is Loading...</h2>;
  }


  return (
    <>
      <h2>Best Offers!</h2>
      <label>
        <input type="checkbox" value={isSmartphonesChecked} onChange={() => setIsSmartphonesChecked(prevState => !prevState)}/> only smartphones
      </label>
      <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}/>
      <ul>
        {mostDiscountedProducts?.filter((product) => {
          let smartphoneCondition = true;
          if (isSmartphonesChecked) {
            smartphoneCondition = product.category === "smartphones"
          }
          let maxPriceCondition = true;
          if (maxPrice > 0 ) {
            maxPriceCondition = product.price <= maxPrice
          }

          return smartphoneCondition && maxPriceCondition
        }).map((product) => (
          <li key={product.id}>
            {product.title}
            <br></br>
            {product.discountPercentage} % off
            <br></br>
            {product.price} €
          </li>
        ))}
      </ul>
    </>
  );
}
