import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "./api/apiSlice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productQuantitySetTo } from "./cart/cartSlice";
import { productFavored } from "./favoriteProducts/favoritePoductsSlice";

export default function SingleProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading } = useGetProductQuery(productId);
  const [amountOfItems, setAmountOfItems] = useState(1);
  const productInCartQuantity = useSelector(
    (state) =>
      state.cart.find((cartItem) => cartItem.id === parseInt(productId))
        ?.quantity ?? 1
  );

  const likedProducts = useSelector((state) => state.favoriteProducts);

  useEffect(() => {
    setAmountOfItems(productInCartQuantity);
  }, [product, productId, productInCartQuantity]);

  function onAddItemsToCart(event) {
    event.preventDefault();
    const updatedProduct = { ...product, quantity: event.target.amount.value };
    dispatch(productQuantitySetTo(updatedProduct));
  }

  function onLike(event) {
    dispatch(productFavored({ id: parseInt(event.target.value) }));
  }

  if (isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    product && (
      <article>
        <h1>{product.title}</h1>
        <button
          type="button"
          value={product.id}
          onClick={onLike}
          style={
            likedProducts.find((likedProduct) => likedProduct.id === product.id)
              ? { backgroundColor: "green" }
              : null
          }
        >
          Like!
        </button>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{ width: "20%", height: "auto" }}
        />
        <p>{product.description}</p>
        <p>{product.price} €</p>
        <form onSubmit={onAddItemsToCart}>
          <button
            disabled={amountOfItems === 1}
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
