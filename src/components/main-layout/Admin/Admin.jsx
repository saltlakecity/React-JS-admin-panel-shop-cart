// components/main-layout/Admin/Admin.jsx
import { useState } from "react";
import "./Admin.css";

const Admin = ({
  news,
  shop,
  onAddNews,
  onDeleteNews,
  onAddProduct,
  onDeleteProduct,
  /*Принимаю пропсы из app.jsx*/
}) => {
  const [mode, setMode] = useState("news");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  /**
   * Функция для загрузки изображения
   * @param {} e
   */
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  /**
   * Функция срабатывающая после нажатия кнопки сохранить в админке
   * @param {} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      ...formData,
      [mode === "news" ? "backgroundurl" : "productLogo"]: imagePreview,
    };

    if (mode === "news") {
      onAddNews(newItem);
    } else {
      onAddProduct(newItem);
    }

    setShowModal(false);
    setFormData({});
    setImagePreview("");
  };

  return (
    <div className="admin-panel">
      <div className="mode-selector">
        <button onClick={() => setMode("news")}>Новости</button>
      </div>

      <button className="add-button" onClick={() => setShowModal(true)}>
        Добавить {mode === "news" ? "новость" : "товар"}
      </button>

      <div className="items-list">
        {/* здесь отрисовка идет через айди, как ключ берется айди, по их количеству отрисовывается такое же количество обьектов */}
        {(mode === "news" ? news : shop).map((item) => (
          <div key={item.id} className="admin-item">
            <img
              src={mode === "news" ? item.backgroundurl : item.productLogo}
              alt="Preview"
              className="item-image"
            />
            {/* Все что в скобках где item.id и т.д, это item - обьект, .id или например .title - поле этого обьекта*/}
            <div className="item-info">
              <h3>{mode === "news" ? item.title : item.productTitle}</h3>
              <button
                className="delete-button"
                onClick={() =>
                  mode === "news"
                    ? onDeleteNews(item.id)
                    : onDeleteProduct(item.id)
                }
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>Добавить {mode === "news" ? "новость" : "товар"}</h2>
            <form onSubmit={handleSubmit}>
              {mode === "news" ? (
                <>
                  <input
                    placeholder="Заголовок"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, title: e.target.value })
                    }
                  />
                  <textarea
                    placeholder="Содержание"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, content: e.target.value })
                    }
                  />
                </>
              ) : (
                <>
                  <input
                    placeholder="Название товара"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, productTitle: e.target.value })
                    }
                  />
                  <input
                    placeholder="Вес (кг)"
                    type="number"
                    required
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productWeight: e.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="Цена"
                    type="number"
                    required
                    onChange={(e) =>
                      setFormData({ ...formData, productPrice: e.target.value })
                    }
                  />
                  <select
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value })
                    }
                  >
                    <option value="cereals">Злаки</option>
                    <option value="vegetables">Овощи</option>
                    <option value="ready">Готовое</option>
                  </select>
                </>
              )}

              <div className="image-upload-section">
                <label>
                  {/* input, это как раз инпут поле куда загружается картинка, тип поля file, принимается только image, при сохранении срабатывает функция для сохранения картинки */}
                  Загрузить изображение:
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    required
                  />
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="image-preview"
                  />
                )}
              </div>

              <div className="modal-actions">
                <button type="submit">Сохранить</button>
                {/* После нажатия на кнопку модальное окно закрывается*/}
                <button type="button" onClick={() => setShowModal(false)}>
                  Отмена
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
