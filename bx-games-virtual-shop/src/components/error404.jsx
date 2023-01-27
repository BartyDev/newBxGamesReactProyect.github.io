import React from "react";

const Error404 = () => {
    return(
        <div className="fondo3 ">
            <div className="container">
                <div className="text-center renderPtop">
                <h1 className="py-4 text-primary">Error 404!</h1>
                    <h3 className="text-primary">La página que estas buscando no existe!</h3>
                    <div className="py-5">
                    <img src="/imgs/godofwarragnarok.png" className="img-fluid" width={570} alt="" />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Error404;