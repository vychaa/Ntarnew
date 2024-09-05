import React from "react";
import tadaimage from "../../assets/images/Tada.png";
import giftIcon from "../../assets/images/gifticon.png";

import "./Pots.css";
const Pots = () => {
  return (
    <div>
      <div className="main-div">
        <div className="nextimg">
          <img className="addimg" src={tadaimage} alt="Girl" />
          <p className="earnmin">
            Save today for a Better
            <br /> Tomorrow – Start Saving Now
          </p>
        </div>

        <div>
          <div className="icon-container">
            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Save</p>
            </div>

            <div className="icontext-div3">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Manage</p>
            </div>

            <div className="icontext-div">
              <img className="gificon" src={giftIcon} alt="Girl" />
              <p className="icon-text">Borrow</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pots;
