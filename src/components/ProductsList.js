import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ products, listType }) {
  return (
    <>
      {listType === "bestRated" ? (
        <h2>Best Rated Products</h2>
      ) : (
        <h2>Products</h2>
      )}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>
              {product.title}
              {" // "} {product.rating}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
