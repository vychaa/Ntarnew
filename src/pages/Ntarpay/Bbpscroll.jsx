import React, { useEffect, useRef, useState } from "react";
import "./Bbpsscroll.css";
import broadband from "../../assets/images/broadband.png";
import tapwater from "../../assets/images/tap-water.png";

import electricity from "../../assets/images/electricity.png";
import Loan from "../../assets/images/loan.png";
import dish from "../../assets/images/satellite-dish.png";
import creditcard from "../../assets/images/credit-card.png";
import Fasttag from "../../assets/images/fastag.png";
import Insurance from "../../assets/images/insurance.png";
import Landline from "../../assets/images/landline.png";
import Mobilepre from "../../assets/images/mobile-data.png";
import Mobilepost from "../../assets/images/mobile-wifi.png";
import pipedgas from "../../assets/images/piped gas.png";
import Rent from "../../assets/images/tax.png";
import Lpg from "../../assets/images/lpg.png";
import search from "../../assets/images/search.png";

const Bbpscroll = () => {
  const listRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [scrollCount, setScrollCount] = useState(0); // Track the number of scrolls

  useEffect(() => {
    const list = listRef.current;
    const scrollSpeed = 6; // Speed of scroll

    const autoScroll = () => {
      if (scrollCount < 20) {
        // Stop scrolling after 20 times
        if (scrollDirection === "down") {
          list.scrollBy({ top: scrollSpeed, behavior: "smooth" });

          if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
            setScrollDirection("up");
            setScrollCount((prevCount) => prevCount + 1); // Increment scroll count
          }
        } else if (scrollDirection === "up") {
          list.scrollBy({ top: -scrollSpeed, behavior: "smooth" });

          if (list.scrollTop === 0) {
            setScrollDirection("down");
            setScrollCount((prevCount) => prevCount + 1); // Increment scroll count
          }
        }
      }
    };

    const scrollInterval = setInterval(autoScroll, 80); // Adjust the interval timing as needed

    return () => {
      clearInterval(scrollInterval); // Clean up the interval on component unmount
    };
  }, [scrollDirection, scrollCount]); // Depend on scrollDirection and scrollCount

  return (
    <div className="bbpscroll-container">
      <div className="left-section">
        <h1>
          Pay all your Bills <br />
          in One NTAR APP
        </h1>
        <p>
          With NTAR, you can pay for your recharge, water, gas, and electric
          bills all in the same place. Save time and take care of all your
          business' utility bills at once.
        </p>
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <img className="searchicon" src={search} alt="Feature 2" />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="right-section">
        <ul className="bill-list" ref={listRef}>
          {[...Array(90)].map((_, idx) => (
            <React.Fragment key={idx}>
              <li>
                <img src={dish} alt="Water" /> DTH
              </li>

              <li>
                <img src={broadband} alt="Water" /> Broad Band
              </li>

              <li>
                <img src={electricity} alt="Mobile Prepaid" />
                Electricity
              </li>
              <li>
                <img src={Lpg} alt="LPG" /> LPG
              </li>
              <li>
                <img src={Loan} alt="Loan Repayment" /> Loan Repayment
              </li>
              <li>
                <img src={Mobilepre} alt="Mobile Prepaid" /> Mobile Prepaid
              </li>

              <li>
                <img src={Fasttag} alt="LPG" />
                Fasttag
              </li>

              <li>
                <img src={tapwater} alt="Mobile Prepaid" />
                water
              </li>

              <li>
                <img src={Mobilepost} alt="Mobile Prepaid" />
                Mobile Prepaid
              </li>

              <li>
                <img src={pipedgas} alt="LPG" /> Piped Gas
              </li>

              <li>
                <img src={Landline} alt="LPG" /> Land Line
              </li>

              <li>
                <img src={creditcard} alt="LPG" /> Credit Card
              </li>

              <li>
                <img src={Rent} alt="LPG" />
                Rent
              </li>

              <li>
                <img src={Insurance} alt="Insurance" /> Insurance
              </li>
            </React.Fragment>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bbpscroll;
