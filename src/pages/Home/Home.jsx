import React from "react";
import "./Home.css";
import Shutter from "../../components/Shutter/Shutter.jsx";
import Ntargif from "../../assets/images/ntar.gif.webp";
import sectioncard1 from "../../assets/images/5sectioncard1.png";
import treeicon from "../../assets/images/Tree.png";
import manScrollingCoin from "../../assets/images/reversescroll-unscreen.gif";
import coinsfloating from "../../assets/images/coinsfloating.gif";
// import orgphone from "../../assets/images/shutter.json";
import sideImage from "../../assets/images/side.png";
import yellside from "../../assets/images/yellowside.png";
import anothermage from "../../assets/images/anothermage.png";
import { finance_items } from "./JsonData";
import Footer from "../../components/Footer/Footer.jsx";
import { features_list } from "./JsonData.jsx";
import Homebluecont from "../../components/Homebluecont/Homebluecont.jsx";
import Headernew from "../../components/Headernew/Headernew.jsx";

const Home = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <div>
          <Headernew />
        </div>
        <div className="home">
          <Homebluecont />
        </div>

        <div className="payments_container">
          <div className="payments_sub">
            <span className="your_finance">
              Your Finance at
              <br />
              Your Fingertips
            </span>

            <span className="your_finance_mob">
              YOUR FINANACE AT
              <br />
              YOUR FINGERTIPS
            </span>
            <div className="your_finance_container">
              {finance_items.map((each) => {
                return (
                  <div
                    className="your_finance_item"
                    id={each.title}
                    key={each.title}
                  >
                    <div
                      className="your_finance_icon"
                      dangerouslySetInnerHTML={{ __html: each.icon }}
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
          <a
            style={{ textDecoration: "none" }}
            href="/Ntarpay"
            className="web_explore_btn"
          >
            <button href="/Education" className="Explore">
              Explore
              <img className="explor-side" src={sideImage} alt="Girl" />
            </button>
          </a>
        </div>

        <div className="payments_container_down">
          <div className="payments_container_down mob_reverse_column">
            <div className="container_with_explore">
              <div className="scroll_image_container ">
                <img
                  className="manScrollingCoinLeft"
                  src={manScrollingCoin}
                  alt="manScrollingCoin"
                />
              </div>
              <a
                style={{ textDecoration: "none", display: "contents" }}
                href="/Ntarpay"
              >
                <button className="Explore mob_explore">
                  Explore
                  <img className="explor-side" src={sideImage} alt="Girl" />
                </button>
              </a>
            </div>
            <div className="payments_container_down">
              <div className="payments_sub_down">
                <span className="your_finance_white">
                  Perfect Features for You!
                </span>
                <span className="your_finance_mob_white">
                  PERFECT FEATURES FOR YOU!
                </span>
                <div className="your_finance_container">
                  {features_list.map((each) => {
                    return (
                      <div
                        className="your_finance_item"
                        id={each.title}
                        key={each.title}
                      >
                        <div
                          className="your_finance_icon"
                          dangerouslySetInnerHTML={{ __html: each.icon }}
                        />
                        <div className="your_finance_sub_card">
                          <span className="your_finance_title_white">
                            {each.title}
                          </span>
                          <span className="your_finance_sub_text_white">
                            {each.subtext}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <a
              style={{ textDecoration: "none" }}
              href="/Ntarpay"
              className="web_explore_btn"
            >
              <button className="Explore web_explore">
                Explore
                <img className="explor-side" src={sideImage} alt="Girl" />
              </button>
            </a>
          </div>
        </div>

        <div className="contentboxwhite-5">
          <div className="section-5">
            <p className="moneygrow">
              Money Doesn’t<br></br> Grow On{"\n"}
              <img className="treeicon" src={treeicon} alt="Girl" />
              {"\n"}Trees.<br></br> It Grows on{"\n"}
              <img className="ntarsmallgif" src={Ntargif} alt="Girl" />
              {"\n"} NTAR
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
          <Shutter>
            <div className="button-div">
              <br></br>
              <p className="org-text">
                Build your Business<br></br>on
                <br></br>
              </p>
            </div>
          </Shutter>

          <div className="org-div"></div>

          {/* <div className="new-one">
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="https://play.google.com/store/apps/details?id=com.NTAR&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="letsbutton-outside">
                  LET’S NTAR
                  <img className="whitearrow" src={whitearrow} alt="Arrow" />
                </button>
              </a>
            </div> */}
        </div>
        <div className="contentboxblack-7">
          <div className="ntar-begins2">
            <div className="money-div">
              <p className="money">Money Magic</p>

              <br></br>
            </div>
          </div>
          <p className="ntarway"> NTAR this way</p>
          <div className="black-w-gif">
            <img className="float-gif" src={coinsfloating} alt="Girl" />
          </div>
          <div className="letsntarsweet-div">
            <a
              href="https://play.google.com/store/apps/details?id=com.NTAR&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="letsbutton-2">
                LET’S NTAR
                <img className="whitearrow" src={yellside} alt="Girl" />
              </button>
            </a>
          </div>
        </div>
        <div
          style={{
            position: "relative",
            zIndex: "2",
            paddingTop: "20px",
            backgroundColor: "black",
          }}
        >
          <Footer />
        </div>
      </div>

      {/* footer */}
    </>
  );
};

export default Home;
