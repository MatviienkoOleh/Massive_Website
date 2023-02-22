import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Basket from "../basket/Basket";
import Categories from "../categories/Categories";
import Home from "../home/Home";
import Position from "../position/Position";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Categories/Position" element={<Position />} />
        <Route path="/Basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}
