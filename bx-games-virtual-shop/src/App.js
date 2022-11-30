import React from "react";
import FooterComps from "./components/FooterComps";
import ItemDiseño from "./components/ItemDiseño";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting={"No se encontraron Productos Actualizados!"} />
      <ItemDiseño/>
      <FooterComps/>
    </div>
  );
}

export default App;
