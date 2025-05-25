import React from "react";
import "./AgricultureCards.css";
export default function AgricultureCards() {
  return (
    <div className="agrocards-container">
      <h1 className="agrocards-title">УСТОЙЧИВОЕ ЗЕМЛЕДЕЛИЕ</h1>
      <div className="agrocards-grid">
        <div className="agrocard imgbg">
          <img
            src="/agriculturecards-icon1.svg"
            alt="#"
            className="agrocard-item"
          />
          <h3 className="agrocard-item">
            КАПЕЛЬНЫЙ <br />
            ПОЛИВ —
          </h3>
          <p className="agrocard-item">
            экономим воду и не <br />
            размываем почву
          </p>
        </div>
        <div className="agrocard whitebg">
          <img
            src="/agriculturecards-icon2.svg"
            alt="#"
            className="agrocard-item"
          />
          <h3 className="agrocard-item">
            БИОЛОГИЧЕСКАЯ <br /> ЗАЩИТА —
          </h3>
          <p className="agrocard-item">
            используем природных <br /> помощников вместо химии
          </p>
        </div>
        <div className="agrocard whitebg">
          <img
            src="/agriculturecards-icon2.svg"
            alt="#"
            className="agrocard-item"
          />
          <h3 className="agrocard-item">СЕВООБОРОТ —</h3>
          <p className="agrocard-item">
            чередуем культуры, чтобы не <br /> истощать почву
          </p>
        </div>
        <div className="agrocard imgbg2">
          <img
            src="/agriculturecards-icon1.svg"
            alt="#"
            className="agrocard-item "
          />
          <h3 className="agrocard-item">СИДЕРАТЫ — </h3>
          <p className="agrocard-item">
            засеваем гречиху, клевер и другие <br /> растения для улучшения
            почвы
          </p>
        </div>
      </div>
    </div>
  );
}
