import React, { useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./context/CartContext";


const ItemDetail = ({ item }) => {

    const { addItem } = useContext(CartContext);

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    return (
        <div className="d-flex justify-content-center">
            <div className="position-absolute mt-2">
                <img src={item.banner} className="w-100 opacity-25 vh-100 bannerRender" alt="" />
            </div>
            <div className="container mb-5 position-relative">
                <div className="row renderTopx">
                    <div className="col-lg-6 text-center">
                        <img src={item.imagen} className="w-100 rounded-4 mb-4" alt={item.titulo} />
                    </div>
                    <div className="col-lg-6 text-center">
                        <div className="card-text pb-1 glassyng">
                            <h5 className="py-3">{item.titulo}</h5>
                            <div className="d-flex justify-content-center gap-3 align-items-center pb-4">
                                <div>
                                    <p className="card-text d-flex align-items-center text-decoration-line-through text-muted"> $80.00<i className="fa-solid fa-tag  gap-1  fst-italic"></i></p>
                                </div>
                                <div>
                                    <p className="card-text text-danger fs-5 fa-solid fst-italic">{item.descontar}</p>
                                </div>
                                <div>
                                    <p className="card-text fs-4 fa-solid">${item.costo}</p>
                                </div>
                            </div>
                            <ItemCount stock={item.cantidad} onAdd={onAdd} />
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="fw-normal lh-1 text-success">Acerca del <span className="text-white"> Juego</span></h2>
                    <br />
                </div>
                <div className="row align-items-center gap-5">
                    <div className="col-lg-5 order-lg-2">
                        <table className="table text-secondary table-borderless">
                            <tbody>
                                <tr>
                                    <td>Desarrollador:</td>
                                    <td>{item.desarrollador}</td>
                                </tr>
                                <tr>
                                    <td>Distribuidor:</td>
                                    <td>{item.distribuidor}</td>
                                </tr>
                                <tr>
                                    <td>stock:</td>
                                    <td>{item.cantidad}</td>
                                </tr>
                                <tr>
                                    <td>Género:</td>
                                    <td>{item.genero}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-6 order-lg-1">
                        <h6 className="text-success lh-1 fw-normal">DESCRIPCION : </h6>
                        <p>{item.descripcion}</p>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="px-0 ratio ratio-16x9">
                        <video src={item.videos} autoPlay muted loop title="Call Of Dutty"></video>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-md-7 px-0">
                            <img src={item.imagen2} className="w-100 rounded-4 my-4" alt={item.titulo} />
                        </div>
                        <div className="col-md-4 d-flex justify-content-center flex-wrap">
                            <div className="col-10">
                                <img src={item.imagensmall} className="w-100 rounded-4 my-4" alt={item.titulo} />
                            </div>
                            <div className="col-10">
                                <img src={item.imagensamll2} className="w-100 rounded-4 my-4" alt={item.titulo} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;