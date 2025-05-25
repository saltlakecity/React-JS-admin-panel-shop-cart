import React from "react";
import "./Cart.css";

export default function Cart({ cartItems, onIncrement, onDecrement }) {
  /**
   * Функция для подсчета сумм всех товаров в корзине
   * @returns
   */
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseInt(item.productPrice.replace(/[^\d]/g, ""));
      return total + price * item.quantity;
    }, 0);
  };
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h1>КОРЗИНА</h1>
      </div>
      <div className="cart-items">
        {/* здесь отрисовка идет через айди, как ключ берется айди, по их количеству отрисовывается такое же количество обьектов */}
        {cartItems.map((item) => (
          /* Все что в скобках где item.id и т.д, это item - обьект, .id или например .productTitle - поле этого обьекта*/
          <div key={item.id} className="cart-item">
            <img src={item.productLogo} alt={item.productTitle} />
            <div className="cart-content">
              <div className="cart-item-row1">
                <p>{item.productTitle}</p>
                <p>{item.productWeight}</p>
                <p>{item.productPrice}</p>
              </div>
              <div className="cart-item-row2">
                <div className="cart-counter">
                  <button onClick={() => onDecrement(item.id)}>-</button>
                  <p>{item.quantity}</p>
                  <button onClick={() => onIncrement(item.id)}>+</button>
                </div>
                <img
                  src="/christ-icon.svg"
                  alt="Удалить"
                  className="cart-christ"
                />
              </div>
            </div>
          </div>
        ))}
        <div className="cart-total">
          {/*Здесь отображается сумма цен всех товаров (через функцию calculateTotal, toLocaleString - для перевода в строку)*/}
          <h2>Итого: {calculateTotal().toLocaleString()} р.</h2>
        </div>
      </div>
    </div>
  );
}
