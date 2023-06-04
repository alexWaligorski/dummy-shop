import React from "react";
import { Link } from "react-router-dom";

export default function ProductsList({ products }) {
  return (
    <>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
