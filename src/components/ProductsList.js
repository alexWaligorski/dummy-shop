import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ products }) {
  return (
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
  );
}
