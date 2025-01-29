import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Register from "./carousel/Register";

function Hero() {
  var settings = {
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="p-10 bg-slate-100 h-[30rem]">
      <Slider {...settings}>
        <Register />
        <Register />
        <Register />
      </Slider>
    </div>
  );
}

export default Hero;
