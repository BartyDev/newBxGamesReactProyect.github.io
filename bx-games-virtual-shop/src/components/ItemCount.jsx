import React from "react";
import { useState } from "react";

const ItemCount = ({ stockBox }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockBox);
  const [disable, setDisable] = useState(false);


  const agregarStock = () => {
    if (counter < stock) {
      console.log(counter);
      setCounter(counter + 1);
    }
  };

  const quitarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const onAdd = () => {
    if ((stock > 0) && (counter <= stock) ) {
      setStock(stock - counter);
      setCounter(1);
      console.log("agregaste: " + counter + " productos al carrito!!");
    }else if(counter >= stock){
      setDisable(true);
      console.log("Stock Agotado!!!");
      alert("stock agotado")
    }

  };

  return (
    <div className="container">
      <div className="row mx-2 my-3">
        <div className="col-md-2">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example">
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={quitarStock}>
              -
            </button>
            <button type="button" className="btn btn-outline-primary">{counter}</button>
            <button type="button" className="btn btn-outline-primary" onClick={agregarStock} >+</button>
          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-2">
          <button
            type="button"
            className="btn btn-outline-primary" disabled={disable}
            onClick={onAdd}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
