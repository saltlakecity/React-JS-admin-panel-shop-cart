import React from "react";
import DescriptionCards from "./DescriptionCards";
import "./Main.css";
import AgricultureCards from "./AgricultureCards";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Production from "./Production";
import News from "./News";
import Footer from "./Footer";
import { useEffect } from "react";
export default function MainSection({ news }) {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    const scrollToSection = () => {
      const hash = location.hash.replace("#", "");
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          const yOffset = -180;
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          setTimeout(() => {
            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          }, 300);
        }
      }
    };

    scrollToSection();

    if (location.state?.scrollTo) {
      scrollToSection();
    }
  }, [location.hash, location.state]);

  return (
    <div className="main-container">
      <DescriptionCards />
      <section id="sustainable-agriculture" className="section-anchor">
        <div
          className="scroll-marker"
          style={{ position: "absolute", top: "50%" }}
        ></div>
        <AgricultureCards />
      </section>

      <section id="products" className="section-anchor">
        <div
          className="scroll-marker"
          style={{ position: "absolute", top: "50%" }}
        ></div>
        <Production />
      </section>

      <section id="news" className="section-anchor">
        <div
          className="scroll-marker"
          style={{ position: "absolute", top: "50%" }}
        ></div>
        <News news={news} />
      </section>
      <Footer />
    </div>
  );
}
