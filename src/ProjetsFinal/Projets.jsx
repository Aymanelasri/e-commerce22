import Cart from "./Cart";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import All from "./All";
import Homme from "./nav/Homme";
import Femme from "./nav/Femme";
import Enfants from "./nav/Enfants";
import { CartProvider } from "./CartContext"; 
         

import "@fontsource/poppins";


export default function Projets() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<All />} />
            <Route path="nav/Homme" element={<Homme />} />
            <Route path="nav/Femme" element={<Femme />} />
            <Route path="nav/Enfants" element={<Enfants />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
