import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";




const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 180) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);


  return (
    <div className="d-flex justify-content-center position-relative">
      <nav id="Nav-id" className={navbar ? "navbar navbar-expand-lg active px-2" : "navbar navbar-expand-lg container px-2 glass"} aria-label="Offcanvas navbar large">
        <div className="container-fluid">
          <Link className="navbar-brand" to={"/"}>
            <img src={"/imgs/bx-game-logo-bg0.png"} alt={"Logo De Bx Game Store"} width={120} />
          </Link>
          <button className="navbar-toggler custom-toggler fs-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas w-50 offcanvas-start footerBackApp" tabIndex="-1" id="offcanvasNavbar2" aria-labelledby="offcanvasNavbar2Label">
            <div className="offcanvas-header">
              <Link className="navbar-brand" to={"/"}>
                <img src={"/imgs/bx-game-logo-bg0.png"} alt={"Logo De Bx Game Store"} width={80} />
              </Link>
              <button type="button" className="btn-close btn-close-icon fs-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body  navTextWhiteApp">
              <ul className="navbar-nav justify-content-center flex-grow-1 gap-3 colorRender">
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" aria-current="page" to={"/allProduct"}>NUEVOS JUEGOS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" aria-current="page" to={"/category/tendencias"}>TENDENCIAS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link fw-bold" aria-current="page" to={"/category/ofertas"}>OFERTAS</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link disabled text-secondary fw-bold" aria-current="page" to={"/error404"}>SOPORTE 24/7</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link disabled text-secondary fw-bold" aria-current="page" to={"/error404"}>BLOG</NavLink>
                </li>
              </ul>
              <hr className="colorActive py-1"/>
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
