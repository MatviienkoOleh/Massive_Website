import React from "react";
import Footer from "../footer/Footer";
import Navigation from "../navigation/Navigation";
import Main from "./main/Main";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}
