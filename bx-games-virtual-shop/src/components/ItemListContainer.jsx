import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayJuegos from "./json/arrayJuegos.json";

const ItemListContainer = () => {
  const[items,setItems] = useState([]);

  useEffect(()=>{
    const promesa = new Promise((resolve)=>{
      setTimeout(() => {
        resolve(arrayJuegos);
      }, 2000);
    });

    promesa.then((data)=>{
      console.log(data);
      setItems(data);
    })
  },[]);


  return (
    <div className="container py-5">
      <div className="row justify-content-center pt-5">
        <ItemList items={items} />
        <ItemCount stockBox={20} />
        
      </div>
    </div>
  );
};

export default ItemListContainer;

