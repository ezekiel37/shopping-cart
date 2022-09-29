import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import { Home, Cart, SingleProductPage, NotFound } from "./pages";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
   <Header />
    <div className="App">
      <Routes>
       
      <Route path="/" element={<Home />} />
       
        <Route path="/product/:id" element={<SingleProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
