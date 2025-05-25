import React from "react";
import "./DescriptionCards.css";
export default function DescriptionCards() {
  return (
    <div className="cards-container">
      <div className="cards-firstline">
        <div className="card">
          <p>100% органические продукты</p>
        </div>
        <div className="card">
          <p>
            Устойчивое <br />
            земледелие
          </p>
        </div>
        <div className="card">
          <p>
            Доставка прямо
            <br /> с фермы
          </p>
        </div>
      </div>
      <div className="cards-secondline">
        <div className="card">
          <p>
            Открытое <br />
            производство
          </p>
        </div>
        <div className="card">
          <p>
            Удобный <br />
            онлайн-магазин
          </p>
        </div>
        <div className="card link">
          <a href="#">
            ПОДРОБНЕЕ <br />О КОМПАНИИ
          </a>
          <img src="/cards-arrow.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
