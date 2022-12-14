import React from "react";
import Item from "./Item";

const ItemList = ({items})=>{

    return(
        <div className="row justify-content-center gap-5 py-5 px-0">
            {
            items.map(item =>
                <div className="col-lg-3 col-md-4 col-sm-12" key={item.id}>
                    <Item item={item} />
                </div>
                    
                )
        }
        </div>
    )
}

export default ItemList;