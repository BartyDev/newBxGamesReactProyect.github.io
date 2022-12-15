import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="card gap-2 bg-transparent border-0">
            <Link to={"/item/" + item.id}>
                <img src={item.imagen} className="w-100 rounded-5" alt={item.nombre} />
            </Link>
            <div className="card-body">
                <p className="card-text text-center">{item.titulo}</p>
            </div>
        </div>
    )
}

export default Item;