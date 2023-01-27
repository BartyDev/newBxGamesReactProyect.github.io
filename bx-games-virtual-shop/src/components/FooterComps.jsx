import React from "react";


const FooterComps = () => {
  return (
    <div>
      <div className="bg-black py-5">
        <div className="align-items-center justify-content-center text-center px-1">
          <div className="pb-3">
            <i className="fa-regular fa-paper-plane fs-3"></i>
            <h5>¡No te pierdas ninguna oferta o promoción!</h5>
            <p className="text-secondary">¡Y sé el primero en recibir nuestras ofertas privadas, newsletters y promociones de la semana!</p>
          </div>
          <a href="/"><button className="btn btn-danger px-3 py-2 fw-bold">¡Suscríbete!</button></a>
        </div>
      </div>
      <div className="container-fluid footerBackApp">
        <div className="container-fluid">
          <div className="d-flex justify-content-evenly flex-wrap align-items-center pt-5">
            <div className="p-3 text-center">
              <img src={"https://www.pngplay.com/wp-content/uploads/13/Playstation-Logo-Transparent-Background.png"}
                width={100} alt={"PlayStation"} title="PlayStation" />
            </div>
            <div className="p-3 text-center">
              <img src={"https://cdn.cloudflare.steamstatic.com/steamdeck/images/steamdeck_steamlogo.png"} width={90} alt={"Steam"} title="Steam" />
            </div>
            <div className="p-3 text-center">
              <img src={"https://cdn.cdkeys.com/media/wysiwyg/cdkeys/activation/xbox-logo.png"} width={100} alt={"X-box"} title="X-Box" />
            </div>
            <div className="p-3 text-center">
              <img src={"https://www.iceberg-games.com/wp-content/uploads/2021/12/nintendo-switch-logo-white.png"} width={100}
                alt={"Switch"} title="Nintendo Switch" />
            </div>
          </div>
        </div>
        <div className="container">
          <footer className="pt-5">
            <div className="row align-items-center navTextWhiteApp">
              <div className=" col-md-3 text-center pb-5">
                <img src={"/imgs/bx-game-logo-bg0.png"} alt={"Elden Ring"} title="Bx GAMES CL" width={180} />
              </div>
              <div className=" col-md-3 text-center pb-5">
                <ul className="nav flex-column colorRender">
                  <li className="nav-item mb-2">
                    <a href="/" aria-current="page" className="nav-link p-0" rel="noreferrer">
                      Términos y Condiciones
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" aria-current="page" className="nav-link p-0" rel="noreferrer">
                      Soporte 24/7
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" aria-current="page" className="nav-link p-0" rel="noreferrer">
                      FaQ
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" aria-current="page" className="nav-link p-0" rel="noreferrer">
                      Mapa
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/" aria-current="page" className="nav-link p-0" rel="noreferrer">
                      Política de Privacidad
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 text-end pb-5">
                <div className="d-flex justify-content-center aling-items-center mb-5">
                  <ul className="list-unstyled d-flex justify-content-center  flex-wrap mb-0 gap-3">
                    <li className="rounded-pill justify-content-center bg-black fs-2 px-3 py-2">
                      <a
                        href="https://www.linkedin.com/in/bartydesing/"
                        target={"_blank"} rel="noreferrer"
                      >
                        <i className="fa-brands fa-linkedin text-success fs-2" title="LinkedIn"></i>
                      </a>
                    </li>
                    <li className="rounded-pill bg-black fs-2 px-3 py-2">
                      <a href="https://github.com/BartyDev" target={"_blank"} rel="noreferrer">
                        <i className="fa fa-github text-success fs-2" title="GitHub"></i>
                      </a>
                    </li>
                    <li className="rounded-pill bg-black fs-2 px-3 py-2">
                      <a
                        href="https://www.instagram.com/b4rtyyt/"
                        target={"_blank"} rel="noreferrer"
                      >
                        <i className="fa fa-instagram text-success fs-2" title="Instagram"></i>
                      </a>
                    </li>
                    <li className="rounded-pill bg-black fs-2 px-3 py-2">
                      <a href="https://twitter.com/elvisTPA" target={"_blank"} rel="noreferrer">
                        <i className="fa fa-twitter text-success fs-2" title="Twitter"></i>
                      </a>
                    </li>
                    <li className="rounded-pill bg-black fs-2 px-3 py-2">
                      <a href="https://wa.link/59gfcd" target={"_blank"} rel="noreferrer">
                        <i className="fa fa-whatsapp text-success fs-2" title="WhatsApp"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="d-flex justify-content-center flex-wrap gap-4 align-items-center">
                  <div >
                    <a
                      href="/"
                      type="button"
                      className="btn bg-black py-3 px-4 border-white" target={"_blank"} rel="noreferrer"
                    >
                      <img src={"/imgs/apple-font.svg"} width={90} title="AppleServices" alt={"AppleServices"} />
                    </a>
                  </div>
                  <div >
                    <a
                      href="/"
                      type="button"
                      className="btn bg-black py-3 px-4  border-white" target={"_blank"} rel="noreferrer"
                    >
                      <img src={"/imgs/android-font.svg"} width={90} alt={"AndroidServices"} title="AndroidServices" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </footer>
        </div>
        <div className="d-flex justify-content-center align-items-center flex-wrap pt-2 mx-2 border-top bottom-0">
          <div className="px-4 col-lg-5 text-center">
            <p >
              &copy; 2023 Bx' Games CL. All rights reserved.
            </p>
          </div>
          <div className="offset-lg-3 col-lg-4  text-center">
            <p>Created with 💚 by bartyDv</p>
          </div >

        </div>
      </div>
    </div>

  );
};

export default FooterComps;
