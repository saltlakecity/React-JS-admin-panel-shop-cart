import React from "react";
import { useState, useEffect } from "react";
import "./News.css";
// import news from "./news.json";
export default function News({ news = [] }) {
  const [activeNewsId, setActiveNewsId] = useState(null);
  const handleCardFlip = (id) => {
    setActiveNewsId(activeNewsId === id ? null : id);
  };
  return (
    <div className="news-container">
      <h1 className="news-title">НОВОСТИ</h1>
      {/* здесь отрисовка идет через айди, как ключ берется айди, по их количеству отрисовывается такое же количество обьектов */}
      {news.map((item) => (
        <div
          /* Все что в скобках где item.id и т.д, это item - обьект, .id или например .title - поле этого обьекта*/
          key={item.id}
          className={`news-item ${activeNewsId === item.id ? "flipped" : ""}`}
          style={{ backgroundImage: `url(${item.backgroundurl})` }}
          onClick={() => handleCardFlip(item.id)}
        >
          <div className="news-front">
            <h1>{item.title}</h1>
            <button
              className="news-button"
              onClick={() => handleCardFlip(item.id)}
              /* При клике на кнопку срабатывает функция handleCardFlip, в которую передается айди элемента у которого была нажата кнопка*/
            >
              ПОДРОБНЕЕ
            </button>
          </div>
          <div className="news-back">
            <div className="news-content">
              <p>{item.content}</p>
              {/* <button className="news-button">НАЗАД</button> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
