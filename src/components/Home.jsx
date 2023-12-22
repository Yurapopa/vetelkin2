// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png'
const Home = () => {
  return (
    <div className="home-container">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Логотип" />
        </Link>
      </div>
      <div className="action-buttons">
        <Link to="/contacts">
          <button className="action-button">О нас</button>
        </Link>
        <Link to="/payment">
          <button className="action-button">Оплата</button>
        </Link>
        <Link to="/delivery">
          <button className="action-button">Доставка</button>
        </Link>
      </div>
      <div className="product-button">
        <Link to="/products">
          <button className="nav-button">Товары</button>
        </Link>
      </div>
      {logo}
    </div>
  );
}

export default Home;
