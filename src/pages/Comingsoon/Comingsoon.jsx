import React from "react";
import "./Comingsoon.css"; // Import the CSS file
import Footer from "../../components/Footer/Footer.jsx";
import search from "../../assets/images/search.png";
import comsoonimg from "../../assets/images/comesoon.webp";
import Headernew from "../../components/Headernew/Headernew.jsx";

const Comingsoon = () => {
  return (
    <div>
      <Headernew />

      <div className="Black_Content">
        <div className="lef-section">
          <p className="hello">Coming Soon!!</p>
          <h1>
            Get Notified
            <br />
            When we Launch
          </h1>

          <div className="search-container_hi">
            <input type="text" placeholder="Enter your email address" />
            <button className="notify_me">Notify Me</button>
            <button className="search-btn_hi"></button>
          </div>
          <p className="worry">*Don’t worry we will not spam you :)</p>
        </div>

        <div className="total_img_div">
          <img className="side_bg_img" src={comsoonimg} alt="soon" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Comingsoon;
