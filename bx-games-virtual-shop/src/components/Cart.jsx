import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="pb-5 fondo1">
                <div className="container">
                    <div className="col-md-12 pt-5 mt-5 text-center">
                        <img src="https://osolepizza.com/images/empty-cart.png" alt="" width={600} className="img-fluid mb-5" />
                        <h1 className="py-5">Tu cesta está vacía</h1>
                        <h6 className=" text-muted pb-5">~No has añadido ningún producto a tu cesta todavía. ¡Navega por la web y encuentra ofertas increíbles!~</h6>
                        <Link to={"/category/tendencias"} className="btn btn-success mb-5">Descubre juegos</Link>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div className="container renderTopx">
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="table-responsive">
                        <table className="table text-white table-borderless">
                            <thead>
                                <tr>
                                    <th scope="col" className="text-center pb-2"><Link onClick={clear} className="btn btn-danger" title="Vaciar Carrito"><img src={"/imgs/trash.svg"} alt={"Vaciar Carrito"} /></Link></th>
                                    <th scope="col" className="text-center pb-3">Producto</th>
                                    <th scope="col" className="text-center pb-3">Cantidad</th>
                                    <th scope="col" className="text-center pb-3">Precio</th>
                                </tr>
                            </thead>
                            <tbody className="flex-nowrap">
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="text-center align-middle py-3"><Link onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><img src={item.imagen} alt={item.titulo} className="rounded-3" width={130} /></Link></td>
                                        <td className="text-center align-middle">{item.titulo}</td>
                                        <td className="text-center align-middle">{item.quantity}</td>
                                        <td className="text-center align-middle">${item.quantity * item.costo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex aling-items-center justify-content-end py-5">
                        <div className="col-md-5">
                            <table className="table text-white table-bordered">
                                <tbody>
                                    <tr>
                                        <td className="text-center align-middle">Suma Total</td>
                                        <td className="text-center align-middle fs-5 text-primary"><b>${sumTotal()}</b></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="text-center pb-5 mb-5">
                        <Link to={"/checkout"} className="btn btn-warning" title="Finalizar Compra">Finalizar Compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;