import React, { useContext } from "react";
import {CartContext} from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
    const {cart, removeItem, clear, cartTotal, sumTotal} = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-success" role="alert">No se encontraron Productos en el Carrito!</div>
                        <Link to={"/"} className="btn btn-success">Volver a la Página Principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table text-white">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center"><Link onClick={clear} className="btn btn-danger" title="Vaciar Carrito">Vaciar Carrito</Link></th>
                                <th scope="col" className="text-center">Producto</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="text-center align-middle"><Link onClick={() => {removeItem(item.id)}} title="Eliminar Producto"><img src={item.imagen} alt={item.titulo} width={100} /></Link></td>
                                    <td className="text-center align-middle">{item.titulo}</td>
                                    <td className="text-center align-middle">{item.quantity}</td>
                                    <td className="text-center align-middle">${item.quantity * item.costo}</td>
                                    <td>&nbsp;</td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Suma Total</td>
                                <td className="text-center align-middle"><b>${sumTotal()}</b></td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center pt-5">
                            <Link to={"/checkout"} className="btn btn-warning" title="Finalizar Compra">Finalizar Compra</Link>
                            </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;