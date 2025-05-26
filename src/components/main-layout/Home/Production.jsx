import React from "react";
import "./Production.css";
import { Link, useLocation } from "react-router-dom";
export default function Production() {
  return (
    <div className="production-cards-container">
      <h1 className="production-cards-title">ПРОДУКЦИЯ</h1>
      <div className="production-cards-cards">
        <div className="production-cards-row1">
          <div className="production-card card-description">
            <p>
              небольшая агрокомпания, которая выращивает натуральные продукты
              без химии и пестицидов
            </p>
            <p>
              <br /> органические овощи, фрукты, зелень, злаки, переработанные
              продукты (варенье, мед, мука).
            </p>
          </div>
          <div className="production-card-link">
            <Link to="/shop" rel="stylesheet" href="">
              ПЕРЕЙТИ В МАГАЗИН
            </Link>
            <img src="/cards-arrow.svg" alt="/cards-arrow.svg" />
          </div>
        </div>
        <div className="production-cards-row2">
          <div className="production-card">
            <p>ЗЛАКИ</p>
          </div>
          <div className="production-card">
            <p>ОВОЩИ ФРУКТЫ ЗЕЛЕНЬ</p>
          </div>
          <div className="production-card">
            <p>МЕД ВАРЕНЬЕ МУКА</p>
          </div>
        </div>
      </div>
    </div>
  );
}
