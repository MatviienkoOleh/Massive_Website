import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminMenu from "../adminMenu/AdminMenu";
import Basket from "../basket/Basket";
import Categories from "../categories/Categories";
import Error from "../Error/Error";
import Home from "../home/Home";
import About from "../navigation/About/About";
import Contact from "../navigation/Contact/Contact";
import FAQ from "../navigation/FAQ/FAQ";
import PopUpForm from "../navigation/PopUpForm/PopUpForm";
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
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/PopUpForm" element={<PopUpForm />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
