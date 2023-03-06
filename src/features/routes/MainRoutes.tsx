import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import Basket from "../basket/Basket";
import Categories from "../categories/Categories";
import Error from "../Error/Error";
import Home from "../home/Home";
import Position from "../position/Position";
import Sales from "../sales/Sales";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Position" element={<Position />} />
        <Route path="/Basket" element={<Basket />} />
        <Route path="/AdminMenu" element={<AdminMenu />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}
