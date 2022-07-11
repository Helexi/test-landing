import React from "react";
import './SliderCardDown.css';

export const SliderCardDown = ({ img }) => {
  return (
    <div className="slider-card-down">
      <img className="slider-card-down__img" src={img} alt="img" />
    </div>
  )
}