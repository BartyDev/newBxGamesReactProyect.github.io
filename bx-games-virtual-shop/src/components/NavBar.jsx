import React from "react";

const NavBar = () => {
    return (
        <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/HOME"><img src={"imgs/bx_game_logo.png"} alt={"Logo De Bx Game Store"} width={100}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/TENDENCIAS">TENDENCIAS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/TIENDA">TIENDA</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/CONTACTO">CONTACTO</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/RECURSOS">RECURSOS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/SOPORTE-24-7">SOPORTE 24/7</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/error-404">error 404</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="col-md-6">
                <p>CartWidget</p>
            </div>
        </div>
    )
}

export default NavBar;