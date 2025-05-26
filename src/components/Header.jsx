import React from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
// находится выше папки main-layout потому что отрисовываться должен на каждой странице.
export default function Header() {
  const location = useLocation();
  return (
    <div className="header-container">
      {/* Здесь ссылки через react-router, на страницы сайта*/}

      <Link to="/admin" className="header-admin-button">
        Админ
      </Link>
      <div className="header-firstline">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>GreenTaste</h1>
        </Link>
        <div className="header-firstline-links">
          <Link to="/shop" className="header-shop-button">
            МАГАЗИН
          </Link>
          <Link to="/cart">
            <img src="/store.svg" alt="#" />
          </Link>
        </div>
      </div>
      <span className="whiteline"></span>
      <div className="header-secondline">
        {/* Здесь ссылки через react-router, на страницы сайта*/}

        <Link to="/about">О нас</Link>

        <Link to="/sustainable-agriculture">Устойчивое земледелие</Link>
        <Link to="/products">Продукция</Link>
        <Link to="/news">Новости</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/reviews">Отзывы</Link>
      </div>
      {location.pathname === "/" && (
        <div className="header-title">
          <h1>
            ДОБРО ПОЖАЛОВАТЬ <br /> В «GREENTASTE»
          </h1>
          <p>
            Всё, что вы найдёте у нас — выращено <br /> с заботой о природе и
            здоровье
          </p>
        </div>
      )}
      <img src="/black-wave-line.svg" alt="#" className="blackwave" />
    </div>
  );
}
