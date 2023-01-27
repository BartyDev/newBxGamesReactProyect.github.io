import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [vendido, setVendido] = useState(true);

  const incrementarStock = () => {
      if (counter < itemStock) {
          setCounter(counter + 1);
      }
  }

  const decrementarStock = () => {
      if (counter > 1) {
          setCounter(counter - 1);
      }
  }

  const addToCart = (quantity) => {
      setItemStock(itemStock - quantity);
      setCounter(1);
      setVendido(true);
      onAdd(quantity);
  }

  useEffect(() => {
      setItemStock(stock);
  }, [stock])

  return (
      <div className="container text-center">
          <div className="row mb-4">
              <div className="col-md-12">
                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" className="btn btn-danger rounded-1 text-white" onClick={decrementarStock}>-</button>
                      <button type="button" className="btn text-white fs-5">{counter}</button>
                      <button type="button" className="btn btn-danger rounded-1 text-white" onClick={incrementarStock}>+</button>
                  </div>
              </div>
          </div>
          <div className="d-flex justify-content-center gap-3 flex-wrap mb-3">
          <div className="text-center">
              <button className="btn btn-danger py-2" onClick={() => {addToCart(counter)}} title="Agregar Al Carrito"><i className="fa-solid fa-cart-plus" alt={"Carrito"}></i></button>
              </div>
              <div className="text-white">
                  {vendido ? <Link to={"/cart"} className="btn px-4 py-2 btn-danger" title="Ir Al Carrito">Comprar Ahora</Link> : ""}
              </div>
          </div>
      </div>
  )
}

export default ItemCount;
