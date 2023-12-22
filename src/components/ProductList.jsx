import React from 'react';
import { Link } from 'react-router-dom';
import "../index.css"
import logo from "../images/logo.png"
const ProductList = () => {
  const products = [
    { id: 1, name: 'Деревянный стул', price: 50, image: 'https://adas-mebel.ru/images/product/stul_nsm-1.jpg' },
    { id: 2, name: 'Деревянный стол', price: 150, image: 'https://atyrau.ekomebel.com/upload/resize_cache/iblock/992/720_560_1b2c42a83d7250a5c5d048215f0719188/992395a5dc4dfa50cd8f21a9f0c6409f.jpg' },
    { id: 3, name: 'Деревянная полка', price: 80, image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-18/616/360/051/024/428/100049960628b0.jpg' },
    { id: 4, name: 'Деревянная посуда', price: 52, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6dKjxctrZvRefqiGXlrAjgAfIfM3SL22HGKnSSJobjA9vzOrOHF1CNqlO2M4IZiFhMEo&usqp=CAU'},
    { id: 5, name: 'Деревяные украшения', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCTZlxdgAd6DQ2cLZVALfp_6hB6qP4r-66Sgx2iI-6bEWbc1L-wbesKg2V7VsUPvlun4&usqp=CAU'},
    { id: 6, name: 'Дереванный Сундкук', price: 33, image: 'https://lukoshko70.ru/images/thumbnails/240/240/detailed/14/40034__3_.JPG'},
    { id: 7, name: 'Деревянные игры', price: 20, image: 'https://i.pinimg.com/564x/1f/13/59/1f1359a03c8d53ef2199c9415ea80fa2.jpg'},
    { id: 8, name: 'Деревянные качели', price: 40, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3KsTqG-WqXmlCQDRa3tfO4eNNvWQFPg9A1QU4kwa240oHasCGuiMWSx-1oU06Rk8IsU&usqp=CAU'},
    { id: 9, name: 'Деревянный шкаф', price: 55, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uNiYyQF72EBBNNGQ-N42hiBDdU4ft_QAgW2x2TJYuqN0CYk0GSlPJIes-xcgJcGNBgw&usqp=CAU'},
    { id: 10, name: 'Деревянная чашка', price: 35, image: 'https://woodstuff.com.ua/wp-content/uploads/2020/01/salatnica-1-377x410.jpg'},
    { id: 11, name: 'Деревянный сувенир', price: 10, image: 'https://myfin.by/source/1/KduCGesS-JAZ-YqrAeI6uQHy5FzCoR4I.jpg'},
    { id: 12, name: 'Деревянная Ложка', price: 11, image: 'https://lukoshko70.ru/images/detailed/11/DSC_8133__3_.jpg'},
    { id: 13, name: 'Деревянная копилка ', price: 44, image: 'https://qshti.kz/wp-content/uploads/2021/07/1E-1.png'},
    { id: 14, name: 'Деревянный Скворечник', price: 34, image: 'https://photoserver-airis.ru/images/items/277/7705277/7705277-00.jpg'},
    { id: 15, name: 'Деревянная  будка', price: 150, image: 'https://ir.ozone.ru/s3/multimedia-f/c1000/6639706743.jpg'},

    
  ];

  return (
    <>
    <div className="product-list">
      <div className="top-section">
        <Link to="/">
          <img src={logo} alt="Логотип" className="Logo-main" />
        </Link>
        <div className="top-buttons">
          <Link to="/contacts">
            <button className="top-button">Контакты</button>
          </Link>
          <Link to="/payment">
            <button className="top-button">Оплата</button>
          </Link>
          <Link to="/delivery">
            <button className="top-button">Доставка</button>
          </Link>
        </div>
      </div>
      <h2>Товары</h2>
      <div className="album">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <Link to={`/products/${product.id}`} className="button">
              В корзину
            </Link>
          </div>
        ))}
      </div>
    </div>
      <div class="footer">
      </div>
      <div className="bottom-text">
        <p>Все права защищаны</p>
        </div>
    </>
  );
}

export default ProductList;