import React, { Component } from "react";
import { dataTwo } from "./dataTwo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SliderCardTwo } from "./SliderCardTwo/SliderCardTwo";
import './SliderTwo.css';

export default class PreviousNextMethodsTwo extends Component {
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
      <div className="slider-buckground-two">
        <div className="sliderUp-wrap-two">
          <h3 className="sliderUp-wrap-two__h3">Примеры онлайн-магазинов</h3>
          <Slider ref={c => (this.slider = c)} {...settings}>
            <div>
              <div className="sliderCardTwo">
                <SliderCardTwo img={dataTwo[0].image} id={dataTwo[0].id} />
                <SliderCardTwo img={dataTwo[1].image} id={dataTwo[1].id}/>
                <SliderCardTwo img={dataTwo[2].image} id={dataTwo[2].id}/>
                <SliderCardTwo img={dataTwo[3].image} id={dataTwo[3].id}/>
                <SliderCardTwo img={dataTwo[4].image} id={dataTwo[4].id}/>
                <SliderCardTwo img={dataTwo[5].image} id={dataTwo[5].id}/>
              </div>
            </div>
          </Slider>
          <div className="sliderUp-wrap-buttons hide">
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
