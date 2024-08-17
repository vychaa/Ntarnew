import React from "react";
import "./footer.css";
import scanner from "../../assets/images/scanner.png";
import playstore from "../../assets/images/playstorebutton.png";
import googlepay from "../../assets/images/googlepay.png";
import sideImage from "../../assets/images/side.png";


const Footer = () => {
  return (
    <div className="container-footer">
      <footer className="text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            {/* Column 1: Header */}
            <div className="col-12 col-lg-12 mb-4 footer-text-title">
              <span>
                <span className="footer-main-text">HAVE A QUESTION?</span>
                <br />
                WE ANSWER YOU!
              </span>
            </div>

            <div className="cards-container">
            <div class="card1">
            <div class="qr-contaier">
              <img src={scanner} alt="QR Code" class="qr-code" />
              <div class="store-buttons">
                <img src={playstore} alt="Play Store" class="store-img" />
                <img src={googlepay} alt="App Store" class="store-img" />
              </div>
            </div>
            <div class="grey-box"></div>
          </div>

              <div className="cards-container-sub">
              <div className="category">
                  <p className="header-text">INSIDE</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">NTAR Pay</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">NTAR Pots</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">NTAR Club</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <p className="header-text">COMPANY</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Why NTAR</p>
                      <p className="subcategory">About US</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Careers</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">We are Hiring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category">
                  <p className="header-text">EXPLORE</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Deals</p>
                      <p className="subcategory">Stories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 3: Get in Touch */}
            <div className="cards-container">
              <div className="col-lg-6 col-md-6 ">
                <h5 className="text-uppercase">Get in Touch</h5>
                <p>
                  H.No. 5-5-165/2/TF, Plot no. 4, 3rd Floor, Vanasthali Hills,
                  Vanastalipuram, Hayathnagar, K.V.Rangareddy, TG 500070 IN
                </p>
                <div className="mail-div">
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.3335 0.666504H3.66683C2.1085 0.666504 0.847663 1.9415 0.847663 3.49984L0.833496 20.4998C0.833496 22.0582 2.1085 23.3332 3.66683 23.3332H26.3335C27.8918 23.3332 29.1668 22.0582 29.1668 20.4998V3.49984C29.1668 1.9415 27.8918 0.666504 26.3335 0.666504ZM24.9168 20.4998H5.0835C4.30433 20.4998 3.66683 19.8623 3.66683 19.0832V6.33317L13.4985 12.4815C14.4193 13.0623 15.581 13.0623 16.5018 12.4815L26.3335 6.33317V19.0832C26.3335 19.8623 25.696 20.4998 24.9168 20.4998ZM15.0002 10.5832L3.66683 3.49984H26.3335L15.0002 10.5832Z"
                    fill="white"
                  />
                </svg>
                <p className="mail">hello@ntar.com</p>
              </div>
              </div>

              <div className="cards-container-sub">
                <div className="category-2">
                  <p style={{ textWrap: "nowrap" }} className="header-text">
                    GET IN TOUCH
                  </p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Contact Us</p>
                      <p className="subcategory">Complaint</p>
                    </div>
                  </div>
                </div>
                <div className="category-3">
                  <p className="header-text">IN SIGHTS</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Guide</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                      <p className="subcategory">FAQ</p>
                      <div className="pots-comingsoon-button">
                        <p className="subcategory">Community</p>
                        <div className="comingsoon-section-footer">
                          <p className="comingsoon-text-small">Coming soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="category-4">
                  <p className="header-text">LEGAL</p>
                  <div className="subcategories">
                    <div className="subcategory-container">
                      <p className="subcategory">Privacy Policy</p>
                      <p className="subcategory">Terms & Conditions</p>
                      <p className="subcategory">Cookie Policy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 4: Legal */}
          
          </div>
          <div className="footer-bottom d-flex  align-items-center p-3text-white">
            <span className="footer-copyright">
              Copyright ©️ 2020 NTAR Private Limited. All Rights Reserved.
            </span>
            <div className="footer-social d-flex">
              <a href="#!" className="text-white me-4">
              <img className="explorearrow" src={sideImage} alt="Girl" />
              Instagram
              </a>
              <a href="#!" className="text-white me-4">
              <img className="explorearrow" src={sideImage} alt="Girl" />
              Facebook
              </a>
              <a href="#!" className="text-white me-4">
              <img className="explorearrow" src={sideImage} alt="Girl" />
              Twitter
              </a>
              <a href="#!" className="text-white me-4">
              <img className="explorearrow" src={sideImage} alt="Girl" />
              LinkedIn
              </a>
              <a href="#!" className="text-white">
              <img className="explorearrow" src={sideImage} alt="Girl" />
              YouTube
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
