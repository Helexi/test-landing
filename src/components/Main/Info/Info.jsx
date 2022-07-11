import React from "react";
import './Info.css';
import Orders from './Orders.png';

export const Info = () => {
  return (
    <div className="info-container">
      <div className="info-wrap">
        <div className="info">
          <p className="info__p">
            Необходимо больше информации?
          </p>
          <img className="info__img" src={Orders} alt="Orders" />
          <div className="info__title">
            Если Вы владелец онлайн-магазина или только 
            начинаете свой путь в электронной коммерции и 
            вам нужен уникальный дизайн онлайн магазина для 
            стартапа, обратитесь к нашему веб дизайнеру. За 
            выгодную цену и короткий период времени, он поможет  
            визуализировать ваш веб проект.
          </div>

            <button className="button info-button">
              Оставить заявку
            </button>

        </div>
      </div>
    </div>
  )
}