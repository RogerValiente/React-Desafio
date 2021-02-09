import React from "react";
import cart from "../../imagen/cart.png";

function CartWidget() {
  return (
    <a href="../../App.jsx">
      <img src={cart} alt="..." width="60" height="60" />
    </a>
  );
}

export default CartWidget;
