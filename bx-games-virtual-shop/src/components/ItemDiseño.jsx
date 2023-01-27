import React from "react";
import { Link } from "react-router-dom";


const ItemDiseño = (item) => {
  return (
    <div>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-7 text-center" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="fw-normal lh-1 text-white">Welcome to ||<span className="text-danger"> Bx' Game</span></h2>
            <br />
            <p className="lead text-white-50">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem quos enim
              expedita reiciendis facilis soluta incidunt, quia rem culpa, quis corporis, dolores delectus mollitia
              corrupti odio beatae eum ab..</p>
          </div>
          <div className="col-md-5 text-center imageVariant">
            <div className="img-fluid">
              <img src={"./imgs/mario.png"} width={250} alt={"Mario Bross"} title="Mario Bross" data-aos="zoom-in" data-aos-duration="1000" />
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-7 order-md-2 text-center" data-aos="zoom-in" data-aos-duration="1000">
            <h2 className="fw-normal lh-1 text-success">Find What <span className="text-white"> You Want !!!</span></h2>
            <br />
            <p className="lead text-white-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea libero cupiditate
              neque debitis animi ut, dignissimos, omnis iste voluptatum, sint eaque sapiente dolorem aspernatur? Nostrum
              vel vitae velit obcaecati et.</p>
          </div>
          <div className="col-md-5 order-md-1 text-center imageVariant">
            <div className="img-fluid">
              <img src="https://www.instant-gaming.com/themes/igv2/modules/categoryMenu/images/category-icon7.png"
                width={250} alt={"Street Fighter"} title="Street Fighter" data-aos="zoom-in" data-aos-duration="1000" />
            </div>
          </div>
        </div>
      </div>
      <div >
      <Link to={"item/uGB9CPueQtGK2VmVOQG0"}>
      <div className="ratio ratio-16x9">    
        <video src={"./imgs/callofDuty.mp4"} autoPlay muted loop title="Call of Duty: Modern Warfare II Cross-Gen Bundle"></video> 
      </div>
      </Link>
      </div>
      <div className="d-flex justify-content-evenly flex-wrap gap-5 py-5">
        <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
          <Link to={"/item/AuPTM4S5DooqJYbn3aoa"}>
            <img src={"./imgs/eldenr.png"} width={300} alt={"Elden Ring"} title="Elden Ring" />
          </Link>
          <h5 className="text-warning pt-2">Compralo Ahora! ~ 44% dto.</h5>
        </div>
        <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
          <Link to={"/item/5A2aenDweWRSgJHx2Pxi"}>
            <img src={"./imgs/lastofus.png"} width={300} alt={"The Last of Us Part I"} title="The Last of Us Part I" />
          </Link>
          <h5 className="text-warning pt-2">Compralo Ahora! ~ 29% dto.</h5>
        </div>
        <div className="text-center" data-aos="zoom-in" data-aos-duration="1000">
          <Link to={"/item/zHSud6d0ZTgpC0NXpomg"}>
            <img src={"./imgs/spidey.png"} width={300} alt={"Marvel’s Spider-Man: Miles Morales"} title="Marvel’s Spider-Man: Miles Morales" />
          </Link>
          <h5 className="text-warning pt-2">Compralo Ahora! ~ 49% dto.</h5>
        </div>
      </div>
    </div>
  );
};

export default ItemDiseño;
