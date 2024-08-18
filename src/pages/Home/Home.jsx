import React from "react";
import "./Home.css";
import ntarGif from "../../assets/images/ntar.gif.gif";
import mobileImage from "../../assets/images/mobile.gif.png";
import Ntargif from "../../assets/images/ntar.gif.gif";
import sectioncard1 from "../../assets/images/5sectioncard1.png";
import treeicon from "../../assets/images/Tree.png";
import manScrollingCoin from "../../assets/images/reversescroll.gif";
import whitearrow from "../../assets/images/whitebackarrows.png";
import coinsfloating from "../../assets/images/coinsfloating.gif";
import orgphone from "../../assets/images/orgphone.png";

import { finance_items } from "./JsonData";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Carousel from "../../components/Carousel/Carousel.jsx";
// import finance_items from './JsonData.jsx'

const Home = () => {
  return (
    <>
      <Header />
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
              {/* <NewsSlider /> */}
              <Carousel />
            </div>
          </div>
        </div>
        <div className="payments_container">
          <div className="payments_sub">
            <span className="your_finance">
              Your Finance at
              <br />
              Your Fingertips
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
            <img
              className="manScrollingCoin"
              src={manScrollingCoin}
              alt="manScrollingCoin"
            />
            <span className="inside-img-text">NTAR Pay</span>
          </div>
          <button className="Explore">Explore</button>
        </div>
        <div className="payments_container mob_reverse_column">
          <div className="container_with_explore">
            <div className="scroll_image_container ">
              <img
                className="manScrollingCoinLeft"
                src={manScrollingCoin}
                alt="manScrollingCoin"
              />

              <span className="inside-img-text">NTAR Pay</span>
            </div>
            <button className="Explore mob_explore">Explore</button>
          </div>
          <div className="payments_sub">
            <span className="your_finance">Perfect Features for You!</span>
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
          <button className="Explore web_explore">Explore</button>
        </div>
        <div className="contentboxwhite-5">
          <div className="section-5">
            <p className="moneygrow">
              Money Doesn’t<br></br> grow on
              <img className="treeicon" src={treeicon} alt="Girl" />
              trees.<br></br> it Grows on{" "}
              <img className="ntarsmallgif" src={Ntargif} alt="Girl" /> NTAR
            </p>
            <div className="middle-align">
              <div className="section-cards">
                <img className="sectioncard" src={sectioncard1} alt="Girl" />
                <div className="comingsoon-section">
                  <p className="comingsoon-text-section">Coming soon</p>
                </div>
                <p className="pots">Pots</p>
                <p className="create-custom">
                  Create custom funds for specific goals and track your progress
                  effortlessly.
                </p>
              </div>

              <div className="section-cards">
                <img className="sectioncard" src={sectioncard1} alt="Girl" />
                <div className="comingsoon-section">
                  <p className="comingsoon-text-section">Coming soon</p>
                </div>
                <p className="pots">Club</p>
                <p className="create-custom">
                  Enjoy special rewards, offers, and community perks tailored
                  just for you.
                </p>
              </div>

              <div className="section-cards">
                <img className="sectioncard" src={sectioncard1} alt="Girl" />
                <div className="comingsoon-section">
                  <p className="comingsoon-text-section">Coming soon</p>
                </div>
                <p className="pots">Shop</p>
                <p className="create-custom">
                  Enjoy special rewards, offers, and community perks tailored
                  just for you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contentboxorange-6">
          <div className="org-div">
            <img className="orgphone" src={orgphone} alt="Girl" />
            <div className="button-div">
              <p className="org-text">
                Build your Business <br></br>on NTAR BIZZ
              </p>
            </div>
          </div>
          <div className="new-one">
            <button className="letsbutton">
              LET’S NTAR
              <img className="whitearrow" src={whitearrow} alt="Girl" />
            </button>
          </div>
        </div>
        <div className="contentboxblack-7">
          <div className="ntar-begins2">
            <div className="money-div">
              <p className="money">Money </p>
              <img className="gif-yellow" src={Ntargif} alt="Girl" />
              <p className="magic">
                Magic.
                <br />
              </p>
              <br></br>
            </div>
          </div>
          <p className="ntarway">NTAR this way.</p>
          <div className="letsntarsweet-div">
            <button className="letsbutton-2">
              LET’S NTAR
              <img className="whitearrow" src={whitearrow} alt="Girl" />
            </button>
          </div>
          <div className="black-w-gif">
            <img className="float-gif" src={coinsfloating} alt="Girl" />
          </div>
        </div>

        <Footer />
      </div>

      {/* footer */}
    </>
  );
};

export default Home;
