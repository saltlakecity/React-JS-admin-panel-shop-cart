import React from "react";
import DescriptionCards from "./DescriptionCards";
import "./Main.css";
import AgricultureCards from "./AgricultureCards";
import { Link, useLocation } from "react-router-dom";
import Production from "./Production";
import News from "./News";
import Footer from "./Footer";
export default function MainSection({ news }) {
  return (
    <div className="main-container">
      <DescriptionCards />
      <AgricultureCards />
      <Production />
      <News news={news} />
      <Footer />
    </div>
  );
}
