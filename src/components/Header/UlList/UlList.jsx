import React from "react";
import './UlList.css';

export const UlList = (props) => {
  return (
    <ul className="top-actions-menu">
      <li className="top-actions-menu__li">
        <a href="/" className="top-actions-menu__link text">
          Услуги
        </a>
      </li>
      <li className="top-actions-menu__li">
        <a href="/" className="top-actions-menu__link text">
          Портфолио
        </a>
      </li>
      <li className="top-actions-menu__li">
        <a href="/" className="top-actions-menu__link text">
          Этапы
        </a>
      </li>
      <li className="top-actions-menu__li">
        <a href="/" className="top-actions-menu__link text">
          Дизайнеры
        </a>
      </li>
    </ul>
  )
}