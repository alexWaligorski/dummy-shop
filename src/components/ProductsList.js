import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productAdded, productDeleted } from "../features/cart/cartSlice";

export default function ProductsList({ products }) {
  const dispatch = useDispatch();

  function onAddToCart(event) {
    const clickedProductId = parseInt(event.target.value, 10);
    const clickedProduct = products.find(
      (product) => product.id === clickedProductId
    );

    dispatch(productAdded(clickedProduct));
  }

  function onRemoveFromCart(event) {
    const clickedProductId = parseInt(event.target.value, 10);
    dispatch(productDeleted({ id: clickedProductId }));
  }
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link to={`/products/${product.id}`}>
            {product.title}
            {" // "} {product.rating}
          </Link>
          <button type="button" onClick={onAddToCart} value={product.id}>
            {" "}
            Add to cart
          </button>
          <button type="button" onClick={onRemoveFromCart} value={product.id}>
            {" "}
            Remove from cart
          </button>
        </li>
      ))}
    </ul>
  );
}
