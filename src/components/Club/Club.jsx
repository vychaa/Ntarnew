import React from "react";
import clubimage from "../../assets/images/club.webp";
import giftIcon from "../../assets/images/gifticon.png";
import "./Club.css";
const Club = () => {
  return (
    <div>
      <div className="main-div">
        <div className="nextimg">
          <img className="addimg" src={clubimage} alt="Girl" />
          <p className="earnmin">
            Earn a minimum of 3% for every <br></br>swipe or tap of your card.
          </p>
        </div>

        <div>
          <div className="icon-container">
            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text-gift">Gift Cards</p>
            </div>

            <div className="icontext-div3">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Shop</p>
            </div>

            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Rewards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Club;
