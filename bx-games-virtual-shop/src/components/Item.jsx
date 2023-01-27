import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    
    
    return (
        <div className="card bg-transparent" data-aos="zoom-in" data-aos-duration="1000">
            <Link to={"/item/" + item.id}>
                <div className="position-relative">
                    <span className="position-absolute bg-warning text-dark bottom-0 fs-4 fst-italic badge spanProm">{item.descontar}</span>
                <img src={item.imagen} className="img-fluid rounded-3" alt={item.titulo} title={item.titulo}/>
                </div>  
            </Link>
            <div className="d-flex justify-content-center align-items-center pt-2 pb-4 gap-1 text-secondary flex-wrap">
                <div className="d-flex align-items-center gap-1">
                    <p className="card-text fst-italic mb-0">Desde: </p>
                    <h6 className="card-text text-primary ">${item.costo}</h6>
                </div>
                <div>
                <p className="card-text text-decoration-line-through fst-italic">${item.costoReal}</p>
                </div>   
            </div>
        </div>
    )
}


export default Item;