import React from "react";
import "./header.css";
import logo from "../../assets/images/mainlogo.png";
import whitebgarrow from "..//../assets/images/whitebackarrows.png";
import addimage from '../../assets/images/add.png'
import tstore from '../../assets/images/atstore.png'

const Header = () => {
  return (
    <>
      <div className="navbar-top-section">
        <ul>
          <li>NTAR</li>
          <li>Business</li>
          <li>Community</li>
        </ul>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light  p-2 sticky-top">
        <div className="container">
          <div className="logo-card">
            <img src={logo} alt="logo-icon" className="main-logo" />
            <span className="logo-text">NTAR</span>
          </div>
          <button className="navbar-h-btn lg-hide">
              Let's NTAR
              <img src={whitebgarrow} alt="top arrows" className="top-arrow" />
            </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page">
                  Inside
                </a>
                <div className="submenu">
                  <div className="container">  
                  {/* navbar hover after show the first card */}  
                  <div className="navbar-inside-card">
                    <span>Pay</span>
                    <div className="navbar-inside-sec">
                        <div className="navbar-inside-items">
                            <span>pots</span>
                            <button>Coming Soon</button>
                        </div>
                        <div className="navbar-inside-items">
                            <span>Club</span>
                            <button>Coming Soon</button>
                        </div>
                    </div>
                  </div>

                  <hr className="nav-top-hr" />

                  {/* navbar hover after show the second card */}               
                  <div className="navbar-inside-card2">

                    <div className="navbar-inside-erns">
                        <img src={addimage} alt="pament image" />
                        <span>Earn a minimum of 3% for every swipe or tap of your card.</span>
                    </div>

                    <div className="navbar-inside-bills">
                        <div className="navbar-bills-sec">
                            <div className="bills-main-card">
                                <img src={tstore} alt="" />
                                <span>Bills</span>
                            </div>
                            <div className="bills-main-card">
                                <img src={tstore} alt="" />
                                <span>Bills</span>
                            </div>
                            <div className="bills-main-card">
                                <img src={tstore} alt="" />
                                <span>Bills</span>
                            </div>
                        </div>
                        <div className="navbar-bills-sec">
                            <div className="bills-main-card">
                                <img src={tstore} alt="" />
                                <span>Bills</span>
                            </div>
                            <div className="bills-main-card">
                                <img src={tstore} alt="" />
                                <span>Bills</span>
                            </div>
                            <div className="bills-main-card">
                                <img src={tstore} alt="" />
                                <span>Bills</span>
                            </div>
                        </div>
                    </div>

                  </div>
                  </div>
                </div>
              </li>

              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page">
                  Moneylytics
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page">
                  Deals
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page">
                  why NTAR
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page">
                  Stories
                </a>
              </li>
              <li className="nav-item fw-bold me-3">
                <a className="nav-link" aria-current="page">
                  Careers
                </a>
              </li>
            </ul>
            <button className="navbar-h-btn">
              Let's NTAR
              <img src={whitebgarrow} alt="top arrows" className="top-arrow" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
