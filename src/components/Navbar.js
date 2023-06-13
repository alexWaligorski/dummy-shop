import React from "react";
import { useState } from "react";
import Cart from "../features/cart/Cart";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div>
        <Link to={"/home"}>Home</Link>
        <Link to={"/offers"}>Offers</Link>
        <button onClick={() => setShowCart(true)}>Cart</button>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
}
