import React from "react";
import { useState, useEffect } from "react";
import "./Shop.css";
import shop from "./shop.json";
export default function Shop({
  cartItems,
  onAddToCart,
  onIncrement,
  onDecrement,
}) {
  /**
   * UseState для изменения активной категории (нажимаешь на кнопку овощи, активной становится категория овощи, и отображаются товары с категорией овощи)
   */
  const [activeCategory, setActiveCategory] = useState("cereals");
  /**
   * Фильтр по категориям, используется ниже, чтобы при переключении (овощи,злаки и т.д) отображались элементы только с этими категориями
   */
  const filteredProducts = shop.filter((item) => item.type === activeCategory);
  /**
   * Функция для работы счетчика
   * @param {} productId
   * @returns
   */
  const getQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };
  return (
    <div className="shop-container">
      <div className="shop-header">
        <h1>МАГАЗИН</h1>
        <div className="shop-buttons-row">
          <button
            className={activeCategory === "cereals" ? "active" : ""}
            onClick={() => setActiveCategory("cereals")}
          >
            ЗЛАКИ
          </button>
          <button
            className={activeCategory === "vegetables" ? "active" : ""}
            onClick={() => setActiveCategory("vegetables")}
          >
            ОВОЩИ
          </button>
          <button
            className={activeCategory === "ready" ? "active" : ""}
            onClick={() => setActiveCategory("ready")}
          >
            ГОТОВОЕ
          </button>
        </div>
        <div className="shop-content">
          {/* здесь отрисовка идет через айди, как ключ берется айди, по их количеству отрисовывается такое же количество обьектов */}
          {filteredProducts.map((item) => (
            /* Все что в скобках где item.id и т.д, это item - обьект, .id или например .productTitle - поле этого обьекта*/
            <div key={item.id} className="shop-item">
              <img src={item.productLogo} alt="#" />
              <div className="shop-item-row1">
                <p>{item.productTitle}</p>
                <p>{item.productWeight}</p>
              </div>
              <div className="shop-item-row2">
                <p>{item.productPrice}</p>
                {/* ЗДЕСЬ ЧЕРЕЗ ТЕРНАРНЫЕ ОПЕРАТОРЫ, ЕСЛИ КОЛИЧЕСТВО В КОРЗИНЕ 0 ТО ОТРИСОВЫВАЕТСЯ КНОПКА ДОБАВИТЬ В КОРЗИНУ,
                ПОСЛЕ НАЖАТИЯ НА КНОПКУ СЧЕТЧИК СТАНОВИТСЯ РАВЕН ЕДИНИЦЕ, ИЗ-ЗА ЭТОГО ОТРИСОВЫВАЕТСЯ САМ СЧЕТЧИК*/}
                {getQuantity(item.id) > 0 ? (
                  <div className="counter-container">
                    <button
                      onClick={() => onDecrement(item.id)}
                      className="counter-btn"
                    >
                      -
                    </button>
                    <span className="counter-value">
                      {getQuantity(item.id)}
                    </span>
                    <button
                      onClick={() => onIncrement(item.id)}
                      className="counter-btn"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="add-to-cart-btn"
                    onClick={() => onAddToCart(item.id)}
                  >
                    В КОРЗИНУ
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
