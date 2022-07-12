import React, { Component } from "react";
import { dataDown } from "./dataDown";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCardDown } from "./SliderCardDown/SliderCardDown";
import './SliderDown.css';

export default class PreviousNextMethodsDown extends Component {
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
      <div className="slider-buckground-down">
        <div className="sliderUp-wrap-down">
          <h3 className="sliderUp-wrap-down__h3">Примеры онлайн-магазинов</h3>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div>
              <div className="sliderCardDown">
                <SliderCardDown img={dataDown[0].image} id={dataDown[0].id}/>
                <SliderCardDown img={dataDown[1].image} id={dataDown[1].id}/>
                <SliderCardDown img={dataDown[2].image} id={dataDown[2].id}/>
              </div>
            </div>
            <div>
              <div className="sliderCardDown">
                <SliderCardDown img={dataDown[3].image} id={dataDown[3].id}/>
                <SliderCardDown img={dataDown[4].image} id={dataDown[4].id}/>
                <SliderCardDown img={dataDown[5].image} id={dataDown[5].id}/>
              </div>
            </div>
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
