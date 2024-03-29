import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComps from "./components/FooterComps";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Error404 from "./components/error404";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";
import ItemDiseño from "./components/ItemDiseño";




function App() {
  return (
    <CartContextProvider>
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemDiseño/>} />
          <Route path={"/allProduct"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/checkout"} element={<Checkout />} />
          <Route path={"/thankyou/:id"} element={<Thanks />} />
          <Route path={"*"} element={<Error404 />} />
        </Routes>
        <FooterComps />
      </BrowserRouter>
    </div>
    </ CartContextProvider>
  );
}

export default App;
