import React from "react";
import "./Homebluecont.css";
import ntarGif from "../../assets/images/ntar.gif.webp";
import mobileImage from "../../assets/images/mobile.gif.png";
import mobilehomeImage from "../../assets/images/mobhomeimg.png";
import Carousel from "../Carousel/Carousel";

const Homebluecont = () => {
  return (
    <div>
      <div className="home__blue-container">
        <div className="home__intro">
          <p className="home__intro-text">
            Your NTAR
            <br />
            story begins here!
          </p>
          {/* <div className="bb_edu_buttons">
                <a href="/Bbpssection" className="bbps_button">
                  BBPS
                </a>
              </div> */}
          {/* </div> */}
          <div className="home__ntar-section">
            <div className="home__magicmoney-text">
              <span className="home__magic-lets">Let's</span>
              <img className="home__gif" src={ntarGif} alt="NTAR Animation" />
              <span className="home__ntar-text">
                NTAR.
                <br />
              </span>
              {/* <div className="edu_name">
                    <a href="/Education" className="bbps_button">
                      Edu
                    </a>
                  </div> */}
            </div>
          </div>
        </div>
        <div className="home__mobile-image-container">
          <img
            className="home__mobile-image-web-image"
            src={mobileImage}
            alt="Mobile Display"
          />
          <img
            className="home__mobile-image-mobile-image"
            src={mobilehomeImage}
            alt="Mobile Display"
          />
        </div>
        <div className="finance_container">
          <br />
          <span style={{ textAlign: "center" }} className="finance_header_text">
            ONE APP,
            <br />
            TAKES YOU FURTHER{" "}
          </span>
          <span className="finance_description">
            NTAR you can spend, save, shop and manage your finances from a
            single platform.
            <br />
            Experience top-notch security and flexibility.
          </span>
          <div className="courasalImages">
            {/* <NewsSlider /> */}
            <Carousel />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebluecont;
