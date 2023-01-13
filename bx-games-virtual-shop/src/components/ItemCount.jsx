import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({stock, onAdd}) => {
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock] = useState(stock);
  const [vendido, setVendido] = useState(false);

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
          <div className="row mb-3">
              <div className="col-md-12">
                  <div className="btn-group" role="group" aria-label="Basic outlined example">
                      <button type="button" className="btn btn-outline-danger rounded-1 text-white" onClick={decrementarStock}>-</button>
                      <button type="button" className="btn text-white fs-5">{counter}</button>
                      <button type="button" className="btn btn-outline-primary rounded-1 text-white" onClick={incrementarStock}>+</button>
                  </div>
              </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  {vendido ? <Link to={"/cart"} className="btn btn-outline-warning">Terminar Compra</Link> : <button className="btn btn-outline-success" onClick={() => {addToCart(counter)}}>Agregar al Carrito</button>}
              </div>
          </div>
      </div>
  )
}

/* const ItemCount = ({ stockBox }) => {
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
      alert("agregaste: " + counter + " productos al carrito!!");
    }else if(counter >= stock){
      setDisable(true);
      console.log("Stock Agotado!!!");
      alert("stock agotado")
    }

  };

  return (
    <div className="container">
      <div className="row my-3">
        <div>
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example">
            <button
              type="button"
              className="btn btn-outline-danger rounded-2 text-white"
              onClick={quitarStock}>
              -
            </button>
            <button type="button" className="btn text-white">{counter}</button>
            <button type="button" className="btn btn-outline-primary rounded-2 text-white" onClick={agregarStock} >+</button>
          </div>
        </div>
      </div>
      <div className="row ">
        <div>
          <button
            type="button"
            className="btn btn-outline-success" disabled={disable}
            onClick={onAdd}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
}; */

export default ItemCount;
