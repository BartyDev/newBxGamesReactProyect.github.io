import React from "react";
import Item from "./Item";



const ItemList = ({ items }) => {

    return (
            <div className="row justify-content-center renderTopx">
                {
                    items.map(item =>
                        <div className="d-flex justify-content-center col-6 col-md-4 px-2" key={item.id}>
                            <Item item={item} />
                        </div>
                    )
                }
            </div>
    )
}

export default ItemList;

