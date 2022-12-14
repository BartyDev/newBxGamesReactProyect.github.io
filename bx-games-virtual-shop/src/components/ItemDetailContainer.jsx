import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import arrayJuegos from "./json/arrayJuegos.json";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(arrayJuegos.find(item => item.id === 1))
            }, 2000);
        });

        promesa.then((data) => {
            setItem(data);
        })
    }, []);



    return (
        <div className="container">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;