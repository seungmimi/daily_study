import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src={process.env.PUBLIC_URL + '/image/banner_1.png'} alt=''/>
        </div>
        <div>
        <img src={process.env.PUBLIC_URL + '/image/banner_2.png'} alt=''/>
        </div>
      </Slider>
    </div>
  );
}

export default ImgSlide
