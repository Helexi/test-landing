import React, { Component } from "react";
import { data } from "./data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCard } from "./SliderCard/SliderCard";
import './SliderUp.css';

export default class PreviousNextMethods extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="slider-buckground">
        <div className="sliderUp-wrap">
          <h3 className="sliderUp-wrap__h3">Этапы разработки интернет-магазина</h3>
          <Slider ref={c => (this.slider = c)} {...settings}>
            {data.map(item => {
              return (
                <li key={item.id}>
                  <SliderCard name={item.name} title={item.title} img={item.image} />
                </li>
              )
            })}
          </Slider>
          <div className="sliderUp-wrap-buttons">
            <button className="sliderUp-wrap-button-forward" onClick={this.previous}>
              <div className="sliderUp-wrap-button-forward-chevron"></div>
            </button>
            <button className="sliderUp-wrap-button-buck" onClick={this.next}>
              <div className="sliderUp-wrap-button-buck-chevron"></div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
