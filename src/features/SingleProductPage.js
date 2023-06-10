import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./api/apiSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productQuantitySetTo } from "./cart/cartSlice";

export default function SingleProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductQuery(productId);
  const [amountOfItems, setAmountOfItems] = useState(1);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    if (product) {
      const parsedProductId = parseInt(productId);
      const productInCart = cart.find(
        (cartItem) => cartItem.id === parsedProductId
      );
      if (productInCart) {
        const productQuantity = productInCart.quantity;
        setAmountOfItems(productQuantity);
      }
    }
  }, [product, productId, cart]);

  function onAddItemsToCart(event) {
    event.preventDefault();
    const updatedProduct = { ...product, quantity: amountOfItems };
    dispatch(productQuantitySetTo(updatedProduct));
  }

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    product && (
      <article>
        <h1>{product.title}</h1>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "20%", height: "auto" }}
        />
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <form onSubmit={onAddItemsToCart}>
          <button
            disabled={amountOfItems === 0}
            onClick={() =>
              setAmountOfItems((prevAmountOfItems) => prevAmountOfItems - 1)
            }
            type="button"
          >
            -
          </button>
          <input
            name="amount"
            type="text"
            value={amountOfItems}
            onChange={(event) => setAmountOfItems(parseInt(event.target.value))}
          />
          <button
            type="button"
            onClick={() =>
              setAmountOfItems((prevAmountOfItems) => prevAmountOfItems + 1)
            }
          >
            +
          </button>
          <button>{product.price * amountOfItems} €</button>
        </form>
      </article>
    )
  );
}
