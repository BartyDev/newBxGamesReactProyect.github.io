import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComps from "./components/FooterComps";
import ItemDiseño from "./components/ItemDiseño";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import NavBar from "./components/NavBar";
import Error404 from "./components/error404";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/categoria/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <ItemDiseño />
        <FooterComps />
      </BrowserRouter>
    </div>
  );
}

export default App;
