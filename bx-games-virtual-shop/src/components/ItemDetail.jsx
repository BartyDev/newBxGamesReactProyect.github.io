import React from "react";
import ItemCount from "./ItemCount";


const ItemDetail = ({item}) => {
    return(
        <div className="row my-5">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 text-center mt-5">
                <img src={item.imagen} className="w-100 rounded-pill mb-4" alt={item.titulo} />
                <h3 className="">{item.titulo}</h3>
                <p className="text-muted mt-4 mb-1">{item.tipo}</p>
                <p className="text-muted mb-4">stock : {item.cantidad}</p>
                <p>{item.descripcion}</p>
                <p className="fs-5 text-success">CLP.<b className="fs-3"> {item.costo}</b></p>
                <ItemCount stockBox={10} />
            </div>
        </div>
    )
}

export default ItemDetail;