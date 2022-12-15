import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="container">
      <nav
        className="navbar navbar-expand-lg"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img
              src={"/imgs/bx-game-logo-bg0.png"}
              alt={"Logo De Bx Game Store"}
              width={140}
            />
          </Link>
          <button
            className="navbar-toggler custom-toggler fs-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-start footerBackApp"
            tabIndex="-1"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <Link className="navbar-brand" to={"/"}>
                <img
                  src={"/imgs/bx-game-logo-bg0.png"}
                  alt={"Logo De Bx Game Store"}
                  width={100}
                />
              </Link>
              <button
                type="button"
                className="btn-close btn-close-icon fs-2"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body navTextWhiteApp">
              <ul className="navbar-nav justify-content-center flex-grow-1 gap-3 colorRender">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"/category/tendencias"}>TENDENCIAS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/category/lanzamientos"}>PROXIMOS LANZAMIENTOS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link disabled text-secondary" to={"/category/soporte"}>SOPORTE 24/7</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"/category/"}>ERROR 404</NavLink>
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
  );
};

export default NavBar;
