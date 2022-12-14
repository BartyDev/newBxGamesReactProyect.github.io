import React from "react";

const Item = ({item}) => {
    return (
        <div className="card gap-2 bg-transparent border-0">
            <img src={item.imagen} className="rounded-5" alt={item.nombre} />
                <div className="card-body">
                    <p className="card-text text-center">{item.titulo}</p>
                </div>
        </div>

    )
}

export default Item;