import Cart from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import All from "./All";
import { CartProvider } from "./CartContext"; 
import "@fontsource/roboto";          
import "@fontsource/roboto/700.css"; 
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

export default function Projets() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<All />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
