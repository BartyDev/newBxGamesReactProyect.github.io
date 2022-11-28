import React from "react"


const CartWidget = () => {
    return (
        <button type="button" className="btn position-relative border-0">
            <i className="fas fa-shopping-cart text-white fs-5"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1</span>
        </button>
    )
};

export default CartWidget;