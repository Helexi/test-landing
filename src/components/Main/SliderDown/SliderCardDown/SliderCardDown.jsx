import React from "react";
import './SliderCardDown.css';

export const SliderCardDown = ({ img, id }) => {
  const className = 'slider-card-down';
  return (
    <div className={className + id}>
      <img className="slider-card-down__img" src={img} alt="img" />
    </div>
  )
}