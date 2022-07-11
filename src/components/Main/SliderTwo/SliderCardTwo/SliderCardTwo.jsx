import React from "react";
import './SliderCardTwo.css';

export const SliderCardTwo = ({ img, id }) => {
  const className = 'slider-card-two';
  return (
    <div className={className + id}>
      <img className='slider-card-two__img' src={img} alt="img" />
    </div>
  )
}