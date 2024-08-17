import React from "react";
import "./Home.css";
import ntarGif from "../../assets/images/ntar.gif.gif";
import mobileImage from "../../assets/images/mobile.gif.png";
import manScrollingCoin from "../../assets/images/reversescroll.gif";

import { finance_items } from "./JsonData";
// import finance_items from './JsonData.jsx'

const Home = () => {
  return (
    <div className="home">
      <div className="home__blue-container">
        <div className="home__intro">
          <p className="home__intro-text">
            Your NTAR
            <br />
            story begins here!
          </p>
          <div className="home__ntar-section">
            <div className="home__magicmoney-text">
              <span className="home__magic-lets">Let's </span>
              <img className="home__gif" src={ntarGif} alt="NTAR Animation" />
              <span className="home__ntar-text">
                Ntar
                <br />
              </span>
            </div>
          </div>
        </div>
        <div className="home__mobile-image-container">
          <img
            className="home__mobile-image"
            src={mobileImage}
            alt="Mobile Display"
          />
        </div>
        <div className="finance_container">
          <span className="finance_header_text">
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
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="payments_container">
        <div className="payments_sub">
          <span className="your_finance">Your Finance at<br />Your Fingertips
          </span>
          <div className="your_finance_container">
            {finance_items.map((each) => {
              return (
                <div className="your_finance_item" id={each.title}>
                  <img
                    className="your_finance_icon"
                    src={each.icon}
                    alt="Pay Bills"
                  />
                  <div className="your_finance_sub_card">
                    <span className="your_finance_title">{each.title}</span>
                    <span className="your_finance_sub_text">
                     {each.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="scroll_image_container">
        <img className="manScrollingCoin" src={manScrollingCoin} alt="manScrollingCoin" />
        <span className="inside-img-text">NTAR Pay</span>
        </div>
        <button className="Explore">Explore</button>

      </div>
    </div>
  );
};

export default Home;
