import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import arrayJuegos from "./json/arrayJuegos.json";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { id } = useParams();


  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(id ? arrayJuegos.filter(item => item.categoria === id) : arrayJuegos);
      }, 2000);
    });

    promesa.then((data) => {
      console.log(data);
      setItems(data);
    })
  }, [id]);


  return (
    <div className="container py-5">
      <div className="row justify-content-center pt-5">
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default ItemListContainer;

