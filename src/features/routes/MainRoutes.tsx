import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../home/Home";

export default function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
