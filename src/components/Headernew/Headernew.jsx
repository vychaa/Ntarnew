import React, { useState, useEffect } from "react";
import "./Headernew.css";
import whitebgarrow from "../../assets/images/whitebackarrows.png";
import mainlogo from "../../assets/images/mainlogo.png";
import menu from "../../assets/images/menu.webp";
import closeIcon from "../../assets/images/close.png";
import Mobnav from "../Mobnav";
const Headernew = ({ isScrolled }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showMobNav, setShowMobNav] = useState(false);

  const handleClick = () => {
    setShowMobNav(!showMobNav);
  };

  useEffect(() => {
    if (showMobNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMobNav]);

  useEffect(() => {
    if (menuOpen || isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [menuOpen, isOpen]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768);
  //   };
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768 || (width >= 768 && width <= 1024)); // Includes iPads in the range
    };

    handleResize(); // Check initial width
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="header-top">
        <div className="header-menu">
          <span className="active_tab">{isMobile ? " Customer" : "NTAR"}</span>
          <span style={{ color: "black", fontSize: "15px", fontWeight: "500" }}>
            Business
          </span>
          <span style={{ color: "black", fontSize: "15px", fontWeight: "500" }}>
            Community
          </span>
        </div>
      </div>
      <div className={`header-container ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-bottom">
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="/"
            className="header-logo"
          >
            {/* Add the small image here */}
            <img src={mainlogo} alt="Small Icon" className="small-icon" />
            <span className="logo-icon"></span> NTAR{" "}
          </a>
          {/* <div className="header-links">
            <span>Inside</span>
            <span>Moneylytics</span>
            <span>Deals</span>
            <span>Why NTAR</span>
            <span>Stories</span>
            <span>Careers</span>
          </div> */}
          <div className="header-links">
            <span onClick={handleClick}>Inside</span>
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="/Comingsoon"
            >
              <span>Moneylytics</span>
            </a>

            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="/Comingsoon"
            >
              <span>Deals</span>
            </a>

            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="/Aboutus"
            >
              <span>Why NTAR</span>
            </a>

            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="/Comingsoon"
            >
              <span>Stories</span>
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="/Comingsoon"
            >
              <span>Careers</span>
            </a>

            {showMobNav && (
              <>
                <div className="overlay" onClick={handleClick}></div>{" "}
                {/* Overlay background */}
                <div className="mobnav-wrapper">
                  <div className="mobnav-container_2">
                    <Mobnav />
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="header-actions">
            <button
              onClick={() =>
                window.open(
                  "https://play.google.com/store/apps/details?id=com.NTAR&pcampaignid=web_share",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="header-btn"
            >
              Let's NTAR
              <img
                src={whitebgarrow}
                alt="top arrows"
                className="button_arrow"
              />
            </button>

            <div className="theme-toggle">
              <div className="hamburger-menu" onClick={toggleMenu}>
                <img src={menuOpen ? closeIcon : menu} alt="Menu" />
              </div>
            </div>
          </div>
        </div>

        {menuOpen && (
          <>
            <div className="overlay" onClick={toggleMenu}></div>
            <div className="dropdown-scrollable">
              <div className="header-dropdown">
                <span
                  onClick={toggleDropdown}
                  style={{
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  Inside
                  {isOpen ? (
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5684 0.985899L15.5 2.91749L11.3048 7.17302C11.3048 7.17302 9.76559 9.01407 7.98491 9.01407C6.20423 9.01407 4.72535 7.17302 4.72535 7.17302L0.5 2.91749L2.40141 1.01608L7.38574 6.00041C7.71639 6.33106 8.2527 6.33034 8.58246 5.9988L13.5684 0.985899Z"
                        fill="#3203EA"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="12"
                      viewBox="0 0 16 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.4316 9.0141L0.5 7.08251L4.69522 2.82698C4.69522 2.82698 6.23441 0.985931 8.01509 0.985931C9.79577 0.985931 11.2746 2.82698 11.2746 2.82698L15.5 7.08251L13.5986 8.98392L8.61426 4.99959C8.28361 4.66894 7.7473 4.66966 7.41754 5.0012L2.4316 9.0141Z"
                        fill="#3203EA"
                      />
                    </svg>
                  )}
                </span>

                {isOpen && <Mobnav />}

                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                  href="/Comingsoon"
                >
                  <span>Moneylytics</span>
                </a>

                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                  href="/Comingsoon"
                >
                  <span>Deals</span>
                </a>

                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                  href="/Aboutus"
                >
                  <span>Why NTAR</span>
                </a>

                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                  href="/Comingsoon"
                >
                  <span>Stories</span>
                </a>

                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    width: "100%",
                  }}
                  href="/Comingsoon"
                >
                  <span>Careers</span>
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Headernew;
