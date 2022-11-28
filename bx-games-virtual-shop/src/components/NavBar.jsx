import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <div className="row">
            <nav className="navbar navbar-expand-lg" aria-label="Offcanvas navbar large">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/HOME"><img src={"imgs/bx-game-logo-bg0.png"} alt={"Logo De Bx Game Store"} width={120} /></a>
                    <button className="navbar-toggler custom-toggler fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start footerBackApp" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
                        <div className="offcanvas-header">
                            <a className="navbar-brand" href="/HOME"><img src={"imgs/bx-game-logo-bg0.png"} alt={"Logo De Bx Game Store"} width={100} /></a>
                            <button type="button" className="btn-close btn-close-icon fs-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body navTextWhiteApp">
                            <ul className="navbar-nav justify-content-center flex-grow-1 gap-3 colorRender">
                                <li className="nav-item">
                                    <a className="nav-link colorActive" aria-current="page" href="/TENDENCIAS">TENDENCIAS</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/TIENDA" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        TIENDA
                                    </a>
                                    <ul className="dropdown-menu sectionBackApp colorRender">
                                        <li><a className="dropdown-item" href="/">PROXIMOS LANZAMIENTOS</a></li>
                                        <li><a className="dropdown-item" href="/">RESERVAS</a></li>
                                        <li>
                                            <hr className="dropdown-divider colorActive" />
                                        </li>
                                        <li><a className="dropdown-item" href="/">CONSOLAS</a></li>
                                        <li><a className="dropdown-item" href="/">RECURSOS</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="/SOPORTE-24-7" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    SOPORTE 24/7
                                    </a>
                                    <ul className="dropdown-menu sectionBackApp colorRender">
                                        <li><a className="dropdown-item" href="/">CONTACTOS</a></li>
                                        <li>
                                            <hr className="dropdown-divider colorActive" />
                                        </li>
                                        <li><a className="dropdown-item" href="/">PREGUNTAS FRECUENTES</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled text-success" href="/error-404">error 404</a>
                                </li>
                            </ul>
                            <hr className="colorActive" />
                            <div className="col-md-1">
                                <CartWidget />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;