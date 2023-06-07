import React from "react";
import {
  productAdded,
  productQuantityDecremented,
  productDeleted,
} from "./cartSlice";
import { useDispatch } from "react-redux";

export default function CartItemControl({ quantity, productId }) {
  const dispatch = useDispatch();

  function onIncrementQuantity(event) {
    const clickedProductId = parseInt(event.target.value, 10);

    dispatch(productAdded({ id: clickedProductId }));
  }

  function onDecrementQuantity(event) {
    const clickedProductId = parseInt(event.target.value, 10);

    dispatch(productQuantityDecremented({ id: clickedProductId }));
  }

  function onRemoveFromCart(event) {
    const clickedProductId = parseInt(event.target.value, 10);
    dispatch(productDeleted({ id: clickedProductId }));
  }

  return (
    <div>
      <button type="button" onClick={onDecrementQuantity} value={productId}>
        {" "}
        -
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={onIncrementQuantity} value={productId}>
        {" "}
        +
      </button>
      <button type="button" onClick={onRemoveFromCart} value={productId}>
        {" "}
        remove from cart
      </button>
    </div>
  );
}
