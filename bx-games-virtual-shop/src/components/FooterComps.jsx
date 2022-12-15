import React from "react";

const FooterComps = () => {
  return (
    <div className="container-fluid footerBackApp">
      <div className="container">
        <footer className="pt-5">
          <div className="row align-items-center navTextWhiteApp">
            <div className="col-12 col-lg-3 col-md-3">
              <img src={"/imgs/mario.png"} width={140} />
            </div>
            <div className="col-12 col-lg-4 col-md-2">
              <ul className="nav flex-column colorRender">
                <li className="nav-item mb-3">
                  <a href="/" aria-current="page" className="nav-link p-0">
                    Política de Privacidad
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="/" aria-current="page" className="nav-link p-0">
                    Términos y Condiciones
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="/" aria-current="page" className="nav-link p-0">
                    Soporte 24/7
                  </a>
                </li>
                <li className="nav-item mb-3">
                  <a href="/" aria-current="page" className="nav-link p-0">
                    Mapa
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" aria-current="page" className="nav-link p-0">
                    FaQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-5 col-md-7 text-end">
              <div className="d-flex justify-content-end aling-items-center mb-5">
                <ul className="list-unstyled d-flex mb-0 gap-3">
                  <li className="rounded-pill bg-black fs-2 px-3 py-2">
                    <a
                      href="https://www.linkedin.com/in/bartydesing/"
                      target={"_blank"}
                    >
                      <i className="fa-brands fa-linkedin text-success fs-2"></i>
                    </a>
                  </li>
                  <li className="rounded-pill bg-black fs-2 px-3 py-2">
                    <a href="https://github.com/barty91" target={"_blank"}>
                      <i className="fa fa-github text-success fs-2"></i>
                    </a>
                  </li>
                  <li className="rounded-pill bg-black fs-2 px-3 py-2">
                    <a
                      href="https://www.instagram.com/b4rtyyt/"
                      target={"_blank"}
                    >
                      <i className="fa fa-instagram text-success fs-2"></i>
                    </a>
                  </li>
                  <li className="rounded-pill bg-black fs-2 px-3 py-2">
                    <a href="https://twitter.com/elvisTPA" target={"_blank"}>
                      <i className="fa fa-twitter text-success fs-2"></i>
                    </a>
                  </li>
                  <li className="rounded-pill bg-black fs-2 px-3 py-2">
                    <a href="https://wa.link/59gfcd" target={"_blank"}>
                      <i className="fa fa-whatsapp text-success fs-2"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="d-flex justify-content-end gap-4 align-items-center">
                <div>
                  <a
                    href="/"
                    type="button"
                    className="btn bg-black py-3 px-4 border-white"
                  >
                    <img src={"/imgs/apple-font.svg"} width={90} />
                  </a>
                </div>
                <div>
                  <a
                    href="/"
                    type="button"
                    className="btn bg-black py-3 px-4  border-white"
                  >
                    <img src={"/imgs/android-font.svg"} width={90} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 mt-4 border-top">
            <p className="mb-0">
              &copy; 2022 Bx' Games, Inc. All rights reserved.
            </p>
            <p className="mb-2 text-center">Created with 💚 by bartyDv</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default FooterComps;
