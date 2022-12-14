import React from "react";


const ItemDetail = ({item}) => {
    return(
        <div className="row">
            <div className="col-md-4 offset-md-4 text-center">
                <img src={item.imagen} className="w-100 rounded-pill mb-4" alt={item.titulo} />
                <h3 className="">{item.titulo}</h3>
                <p className="text-muted my-4">{item.tipo}</p>
                <p>{item.descripcion}</p> 
                <hr />  
                <p className="fs-5 text-success">CLP.<b className="fs-3"> {item.costo}</b></p>
               
                 
            </div>
        </div>
    )
}

export default ItemDetail;