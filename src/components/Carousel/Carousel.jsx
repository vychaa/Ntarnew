// Carousel.js
import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // Ensure this file has the appropriate styles
import carousel1 from "../../assets/images/Background.webp";
import carousel2 from "../../assets/images/background2.webp";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow arrow-next" onClick={onClick}>
      &#x2192; {/* Right Arrow */}
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="arrow arrow-prev" onClick={onClick}>
      &#x2190; {/* Left Arrow */}
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide speed
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const isMobile = window.innerWidth <= 768;
  if (!isMobile) {
    return (
      <div className="carousel-container web-Carousel">
        <div className="slide">
          <img src={carousel1} alt="Slide 1" />
          <div className="text-overlay">
            <p className="title_crl">SPEND</p>
            <p className="card-sub-crl-text">
              Pay all your<br></br>Bills in one<br></br>easy app
            </p>
          </div>
        </div>
        <div className="slide">
          <img src={carousel2} alt="Slide 2" />
          <div className="text-overlay">Another Slide</div>
        </div>
        <div className="slide">
          <img src={carousel1} alt="Slide 3" />
          <div className="text-overlay">Yet Another Slide</div>
        </div>
        {/* Add more slides as needed */}
      </div>
    );
  }
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        <div className="slide">
          <img src={carousel1} alt="Slide 1" />
          <div className="text-overlay">Hello World</div>
        </div>
        <div className="slide">
          <img src={carousel2} alt="Slide 2" />
          <div className="text-overlay">Another Slide</div>
        </div>
        <div className="slide">
          <img src={carousel1} alt="Slide 3" />
          <div className="text-overlay">Yet Another Slide</div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
