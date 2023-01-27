import React from "react";
import { useParams, Link } from "react-router-dom";

const Thanks = () => {
    const {id} = useParams();

    return (
        <div className="container py-5 mt-5">
            <div className="row mt-5">
                <div className="col-md-12 text-center">
                    <div className="mb-5">
                        <img src={"https://i.pinimg.com/originals/7d/99/e3/7d99e305758e0b93632128b945c0f4c2.gif"} className="img-fluid" alt={"Mario Bross Salute"} />
                        <h1>Gracias por tu Compra!</h1>
                        <p>Tu Número de Compra es: <b>{id}</b></p>
                    </div>
                    <Link to={"/"} className="btn btn-warning">Volver a la Página Principal</Link>
                </div>
            </div>
            <div className="renderTop">
            </div>
        </div>
    )
}

export default Thanks;