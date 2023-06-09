import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { productAdded, productDeleted } from "../features/cart/cartSlice";
import { productFavored } from "../features/favoriteProducts/favoritePoductsSlice";
import { useSelector } from "react-redux";

export default function ProductsList({ products }) {
  const likedProducts = useSelector((state) => state.favoriteProducts);
  const dispatch = useDispatch();

  function onAddToCart(event) {
    const clickedProductId = parseInt(event.target.value, 10);
    const clickedProduct = products.find(
      (product) => product.id === clickedProductId
    );

    if (clickedProduct) {
      dispatch(productAdded(clickedProduct));
    }
  }

  function onRemoveFromCart(event) {
    const clickedProductId = parseInt(event.target.value, 10);
    dispatch(productDeleted({ id: clickedProductId }));
  }

  function onLike(event) {
    const clickedProductId = parseInt(event.target.value, 10);
    dispatch(productFavored({ id: clickedProductId }));
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
          <button
            type="button"
            value={product.id}
            onClick={onLike}
            style={
              likedProducts.find(
                (likedProduct) => likedProduct.id === product.id
              )
                ? { backgroundColor: "green" }
                : null
            }
          >
            Like!
          </button>
        </li>
      ))}
    </ul>
  );
}
