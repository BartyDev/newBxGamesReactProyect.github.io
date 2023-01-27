import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import Loading from "./Loading";



const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();


    // consultar por una Id en firestore
    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                setItem({id:snapShot.id, ...snapShot.data()});
                setLoading(false);
            } else {
                console.log("Error ~ No se encontró el Producto!");
            }
        });
    }, [id]);



    return (
            <div className="container pt-5">
            {loading ? <Loading /> : <ItemDetail item={item} />}
            </div>
    )
}

export default ItemDetailContainer;