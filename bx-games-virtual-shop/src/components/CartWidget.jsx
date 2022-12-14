import React from "react";

const CartWidget = () => {
  return (
    <button type="button" className="btn position-relative border-0">
      <i className="fas fa-shopping-cart text-white fs-4"></i>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-black bg-warning">
        1
      </span>
    </button>
  );
};

export default CartWidget;
