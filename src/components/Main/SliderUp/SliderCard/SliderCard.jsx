import React from "react";
import './SliderCard.css';

export const SliderCard = ({ img, title, name }) => {
  return (
    <div className="slider-card">
      <div className="slider-card-container">
        <p className="slider-card__name">
          {name}
        </p>
        <p className="slider-cadr-titile">
          {title}
        </p>
      </div>
      <img className="slider-card__img" src={img} alt="img" />
    </div>
  )
}