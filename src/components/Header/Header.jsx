import React from 'react';
import Frame from './img/Frame.png';
import './Header.css';
import { UlList } from './UlList/UlList';

export const Header = ({ showBugreg }) => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__content">
          <div className="top-actions">
            <a href="/">
              <img src={Frame} alt="logo" className='logo' />
            </a>
            <UlList />
              <a href="/" className="top-actions-button">
                Заказать
              </a>
            
            <button 
              className="show-burger"
              onClick={showBugreg}
            >
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </button>
          </div>
        </div>
        <div className="title-wrap">
          <div className="header-title">
            <h1 className="header-title__h1">
              Разработка интернет-магазина с нуля за неделю
            </h1>
            <p className="header-title__desc">
              Дизайн интернет магазина, элементов микро UX,
              корзин, личного кабинета - от фирменного стиля
              до пользовательского интерфейса в сжатые сроки
              с командой Virtual Designers
            </p>
            <button className="header-title__button button">
              Заказать
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}