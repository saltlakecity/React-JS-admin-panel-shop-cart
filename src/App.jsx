import { useState, useEffect } from "react";
// импорт роутера
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// здесь импорт всех задействованных компонентов
import Header from "./components/Header";
import MainSection from "./components/main-layout/Home/MainSection";
import About from "./components/main-layout/About/About";
import shopData from "./components/main-layout/Shop/shop.json";
import Shop from "./components/main-layout/Shop/Shop";
import Cart from "./components/main-layout/Cart/Cart";
import Admin from "./components/main-layout/Admin/Admin";
function App() {
  // useState'ы, первый для сохранения добавленных товаров в корзину
  // Второй больше для админки и сохранения или редактирования или удаления объектов новостей из json'а, который загружается ниже в useEffect

  const [cartItems, setCartItems] = useState([]);
  const [news, setNews] = useState([]);
  // Здесь через useEffect подгрузка news.json, в локальное хранилище в браузере, чтобы в реал-тайме его отрисовывать
  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then(setNews)
      .catch(console.error);
  }, []);
  /**
   * здесь просто сохранение айдишника объекта
   * @param {} id
   * @returns
   */
  const findProductById = (id) => shopData.find((item) => item.id === id);

  /**
   * Функция для добавления в корзину
   * @param {} productId
   */

  const handleAddToCart = (productId) => {
    const product = findProductById(productId);
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === productId);
      if (existingItem) {
        return prev.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  /**
   * Функция для счетчика (+)
   * @param {*} productId
   */

  const handleIncrement = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  /**
   * Функция для счетчика (-)
   * @param {*} productId
   */
  const handleDecrement = (productId) => {
    setCartItems((prev) => {
      const updated = prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      );
      return updated.filter((item) => item.quantity > 0);
    });
  };

  const addNews = (newNews) => {
    setNews((prev) => [...prev, { ...newNews, id: Date.now() }]);
  };

  const deleteNews = (id) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      <BrowserRouter>
        <div className="main-wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<MainSection news={news} />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/admin"
              element={
                <Admin
                  news={news}
                  onAddNews={addNews}
                  onDeleteNews={deleteNews}
                />
              }
            />
            <Route
              path="/shop"
              element={
                // Компонент Shop (магазин), передаю функции как пропс для счетчика, и функцию для добавления в корзину
                <Shop
                  cartItems={cartItems}
                  onAddToCart={handleAddToCart}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
              }
            />
            <Route
              path="/cart"
              element={
                <Cart
                  // Компонент Cart (корзина), передаю только функции как пропс для счетчика
                  cartItems={cartItems}
                  onIncrement={handleIncrement}
                  onDecrement={handleDecrement}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
