import React from "react";
import './UlListBurger.css';

export const UlListBurger = ({ show, close }) => {
  return <>
  { show ?
      (
      <div className="burger-wrap">
        <ul className = "burger-actions-menu" >
        <li className="burger-actions-menu__li">
          <a href="/" className="burger-actions-menu__link text">
            Услуги
          </a>
        </li>
        <li className="burger-actions-menu__li">
          <a href="/" className="burger-actions-menu__link text">
            Портфолио
          </a>
        </li>
        <li className="burger-actions-menu__li">
          <a href="/" className="burger-actions-menu__link text">
            Этапы
          </a>
        </li>
        <li className="burger-actions-menu__li">
          <a href="/" className="burger-actions-menu__link text">
            Дизайнеры
          </a>
        </li>
          <div onClick={close} className="close"></div>
      </ul >
      </div>
    ) : null}</>
}