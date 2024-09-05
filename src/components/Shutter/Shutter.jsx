import React from "react";
import Lottie from "lottie-react";
import "./Shutter.css";
import yellside from "../../assets/images/yellowside.png";
import shutterVideo from "../../assets/images/shutter123.mp4";

const Shutter = ({ children }) => {
  return (
    <div className="shutter_video">
      {/* Video for larger screens */}
      <video className="img_video" autoPlay loop muted>
        <source src={shutterVideo} type="video/mp4" />
      </video>

      <video className="lottie_animation" autoPlay loop muted>
        <source src={shutterVideo} type="video/mp4" />
      </video>

      {children}

      <span className="letsbutton-wrapper">
        <a
          style={{ textDecoration: "none", color: "black" }}
          href="https://play.google.com/store/apps/details?id=com.ntarbiz.business&hl=en-IN"
          target="_blank"
          rel="noopener noreferrer"
          className="letsbutton-link"
        >
          <button className="letsbutton">
            LET’S NTAR
            <img className="whitearrow" src={yellside} alt="Girl" />
          </button>
        </a>
      </span>
    </div>
  );
};

export default Shutter;
