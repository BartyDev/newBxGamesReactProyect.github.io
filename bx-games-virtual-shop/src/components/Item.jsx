import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
    return (
        <div className="card gap-2 bg-transparent border-0">
            <Link to={"/item/" + item.id}>
                <img src={item.imagen} className="w-100 rounded-5" alt={item.titulo} title={item.titulo} />
            </Link>
            <div className="card-body">
                <p className="card-text text-center">CLP. {item.costo}</p>
            </div>
        </div>
    )
}

export default Item;