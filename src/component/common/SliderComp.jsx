import React from 'react';
import { Component } from 'react';


import Slider from "react-slick";



import {
  Container,

} from 'reactstrap';



class SliderComp extends Component {
  render() {
    var settings = {
      
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true,
      className: "slider variable-width",
    };
    return (
      <div className="slider-size">
      <Slider {...settings}>
        <div>
          <img  className="slider-image" src="/assets/silde/VOwQpd.jpg" />
        </div>
        <div>
        <img className="slider-image" src="/assets/silde/VOwQpd1.jpg" />
        </div>
      </Slider>
    </div>
    );
  }
  }
  export default SliderComp;