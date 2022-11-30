import React from "react";

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="alert alert-secondary mb-0" role="alert">
                        <p className="mb-0 text-center text-danger">{greeting}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer;