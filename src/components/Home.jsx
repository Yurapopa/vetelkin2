// Home.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Home.css';

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="home-container">
      {/* Фиксированный фон */}
      <div className="fixed-background"></div>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>
      <div className="button-container">
        <div className="buttons-wrapper">
          <div className="product-button">
            <Link to="/products">
              <button className="button nav-button transparent-button">Товары</button>
            </Link>
          </div>
          <div className="company-button">
            <button
              className="button company-button transparent-button"
              onClick={openModal}
            >
              О нас
            </button>
          </div>
          <div className="cart-button">
            <Link to="/cart"></Link>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>О нашей компании</h2>
            <p>
              Мы — талантливая команда профессионалов, стремящихся создать удивительные
              вещи и улучшить вашу жизнь.
            </p>
            {/* Закрыть модальное окно по клику или другому действию */}
            <button onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
