import React from "react";
import ReactDom from "react-dom";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import CartItemControl from "./CartItemControl";

export default function Cart({ onClose }) {
  const modalStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1000,
  };

  const selectCart = (state) => state.cart;

  const priceSelector = createSelector([selectCart], (cart) =>
    cart.reduce((total, product) => total + product.price * product.quantity, 0)
  );

  const productsInCart = useSelector(selectCart);
  const total = useSelector(priceSelector);

  return ReactDom.createPortal(
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2>Shopping Cart</h2>
        {productsInCart.length ? (
          <>
            <ul>
              {productsInCart.map((product) => (
                <li key={product.id}>
                  <span>{product.title}</span>
                  <br></br>
                  <span>Price per item:{product.price}€</span>
                  <CartItemControl
                    productId={product.id}
                    quantity={product.quantity}
                  />
                </li>
              ))}
            </ul>
            <p>Total price: {total}€</p>
          </>
        ) : (
          <p>The cart is empty.</p>
        )}
        <button onClick={onClose}>close cart</button>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
