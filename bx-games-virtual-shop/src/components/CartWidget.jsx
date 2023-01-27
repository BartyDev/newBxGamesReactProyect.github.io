import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const {cartTotal} = useContext(CartContext);

  return cartTotal() ? <Link to={"/cart"} className="btn position-relative border-0" title="Ir al Carrito">
          <i className="fas fa-shopping-cart text-white fs-4" alt={"Carrito"}></i>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-3 text-black bg-warning">
          {cartTotal()}
      </span>
      </Link>:"";  
}

export default CartWidget;
