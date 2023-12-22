// Например, в компоненте Header.js
import React from 'react';
import reactLogo from './path/to/react-logo.png'; // Укажите правильный путь к изображению

const Header = () => {
  return (
    <div className="header">
      <img src={reactLogo} alt="React Logo" className="react-logo" />
      {/* Другие элементы заголовка */}
    </div>
  );
}

export default Header;