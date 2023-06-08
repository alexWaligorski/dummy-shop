import React from "react";
import { useState } from "react";
import Cart from "../features/cart/Cart";

export default function Navbar() {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setShowCart(true)}>Cart</button>
      </div>
      {showCart && <Cart onClose={() => setShowCart(false)} />}
    </>
  );
}
