// Carousel.js
import React from "react";
import Slider from "react-slick";
import "./Carousel.css"; // Ensure this file has the appropriate styles
import carousel1 from "../../assets/images/carousel1.png";
import carousel2 from "../../assets/images/carousel2.png";
import carousel3 from "../../assets/images/carousel3.png";
import smallicon from "../../assets/images/icon.png";
import sideImage from "../../assets/images/side.png";

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
    autoplaySpeed: 3000, // Slide speed
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="carousel-container web-Carousel web_cards">
        <div className="slide">
          <img className="crs_img" src={carousel1} alt="Slide 1" />
          <div className="text-overlay">
            <p className="title_crl">SPEND</p>
            <p className="card-sub-crl-text">
              Pay all your<br></br>Bills in one<br></br>easy app
            </p>
            <img className="iconpng" src={smallicon} alt="Girl" />
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/Ntarpay"
            >
              <p className="ntarpay">NTAR Pay</p>
            </a>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="/Ntarpay"
              className="button-set"
            >
              <p className="exploremore">Explore</p>
              <img className="explorepng" src={sideImage} alt="Girl" />
            </a>
          </div>
        </div>
        <div className="slide">
          <img src={carousel2} alt="Slide 2" />
          <div className="text-overlay">
            <p className="title_crl">SAVE</p>
            <p className="card-sub-crl-text">
              Making your<br></br> financial planning <br></br>simple and
              effective.
            </p>
            <img className="iconpng" src={smallicon} alt="Girl" />
            <p className="ntarpay">
              {" "}
              NTAR Pots
              <button className="coming_soon_Home">Coming soon</button>
            </p>
            <div className="button-set">
              <p className="exploremore">Explore</p>
              <img className="explorepng" src={sideImage} alt="Girl" />
            </div>
          </div>
        </div>
        <div className="slide">
          <img s src={carousel3} alt="Slide 3" />
          <div className="text-overlay">
            <p className="title_crl">SHOP</p>
            <p className="card-sub-crl-text">
              Enjoy special rewards, <br />
              offers, and community perks
              <br /> tailored just for you.
            </p>
            <img className="iconpng" src={smallicon} alt="Girl" />
            <p className="ntarpay">
              NTAR Club
              <button className="coming_soon_Home">Coming soon</button>
            </p>
            <div className="button-set">
              <p className="exploremore">Explore</p>
              <img className="explorepng" src={sideImage} alt="Girl" />
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>
      <div className="carousel-container mobile_cards">
        <Slider {...settings}>
          <div className="slide">
            <img src={carousel1} alt="Slide 1" />
            <div className="text-overlay">
              <p className="title_crl">SPEND</p>
              <p className="card-sub-crl-text">
                Pay all your<br></br>Bills in one<br></br>easy app
              </p>
              <img className="iconpng" src={smallicon} alt="Girl" />
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="/Ntarpay"
              >
                <p className="ntarpay">NTAR Pay</p>
              </a>
              <a
                style={{ textDecoration: "none" }}
                href="/Ntarpay"
                className="button-set"
              >
                <p className="exploremore">Explore</p>
                <img className="explorepng" src={sideImage} alt="Girl" />
              </a>
            </div>
          </div>
          <div className="slide">
            <img src={carousel2} alt="Slide 2" />
            <div className="text-overlay">
              <p className="title_crl">SAVE</p>
              <p className="card-sub-crl-text">
                Making your<br></br> financial planning <br></br>simple and
                effective.
              </p>
              <img className="iconpng" src={smallicon} alt="Girl" />
              <p className="ntarpay">
                NTAR Pots
                <button className="coming_soon_Home">Coming soon</button>
              </p>
              <div className="button-set">
                <p className="exploremore">Explore</p>
                <img className="explorepng" src={sideImage} alt="Girl" />
              </div>
            </div>
          </div>
          <div className="slide">
            <img src={carousel1} alt="Slide 3" />
            <div className="text-overlay">
              <p className="title_crl">SHOP</p>
              <p className="card-sub-crl-text">
                Enjoy special rewards, <br />
                offers, and community perks
                <br /> tailored just for you.
              </p>
              <img className="iconpng" src={smallicon} alt="Girl" />
              <p className="ntarpay">
                NTAR Club
                <button className="coming_soon_Home">Coming soon</button>
              </p>
              <div className="button-set">
                <p className="exploremore">Explore</p>
                <img className="explorepng" src={sideImage} alt="Girl" />
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
