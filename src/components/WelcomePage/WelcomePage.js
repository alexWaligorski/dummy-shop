import React from "react";
import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      <h1>Welcome to the dummy-shop!</h1>
      <p>
        This is the best shop ever with amazing products. Using cutting edge
        technology this shop provides a seemless customer experience. The dummy
        shop was made with love by Alex & Woeishi
      </p>
      <Link to="/home">Zum Shop</Link>
    </>
  );
}
