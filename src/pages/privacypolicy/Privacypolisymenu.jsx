//  Privacypolisymenu
import React from "react";
import "./Privacypolisymenu.css"; // Import your custom CSS here for styling
// import bookImage from '../../assets/images/book.png';
import Footer from "../../components/Footer/Footer.jsx";
import Help from "../../components/Help/Help.jsx";
import book from "../../assets/images/book.png";
import Education from "../../assets/images/education.png";
import goldsavings from "../../assets/images/goldsav.png";
import Eligibility from "../../assets/images/Eligibility.png";
import Accountreg from "../../assets/images/Accountreg.png";
import Credentials from "../../assets/images/credentialsconfi.png";
import ntarservices from "../../assets/images/ntarservices.png";
import userobligations from "../../assets/images/userobligations.png";
import Fee from "../../assets/images/fee.png";
import Headernew from "../../components/Headernew/Headernew.jsx";

const Privacypolisymenu = () => {
  return (
    <div>
      <Headernew />
      {/* Privacy Policy Section */}
      <section className="privacy-policy">
        <h1
          style={{
            color: "white",
            fontSize: "70px",
            fontFamily: "Youth",
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          Privacy Policy
        </h1>
        <br></br>
        <br></br>
        <br />
        <div className="support-center">
          <p style={{ fontSize: "18px" }}>Support Center</p>
          <p
            className="browse-through"
            style={{ color: "white", fontSize: "14px", textAlign: "center" }}
          >
            Browse through our frequently asked questions, tutorials, and other
            self-help resources to<br></br> find the answers you need.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Ex: Rent" />
            <button>Search</button>
          </div>
          {/* 
          <div className="popular-queries">
            <span className="popular">POPULAR :</span>
            <a href="/">What is Rent?</a>
            <a href="/">Why my website is slow?</a>
          </div> */}
        </div>
      </section>

      {/* Help Center Section */}
      <section className="help-center">
        <div className="small_cards">
          <h2>Browse our help centre</h2>
          <div className="help-cards">
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={book} alt="fbicon" />
              <h3 className="box">Privacy policy </h3>
              <p>
                All the answers and videos you need to get started with Plutus
              </p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Education} alt="fbicon" />
              <h3 className="box">Information Collection</h3>
              <p>Learn about your Plutus account and manage settings</p>
            </a>

            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={goldsavings} alt="fbicon" />
              <h3 className="box">Purpose Of Information</h3>
              <p>Understand and manage your Plutus card</p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Eligibility} alt="fbicon" />
              <h3 className="box">Cookies</h3>
              <p>Manage and understand your Plutus card transactions</p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Accountreg} alt="fbicon" />
              <h3 className="box">Sharing and Disclosures</h3>
              <p>Learn about earning and using PLU rewards</p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Credentials} alt="fbicon" />
              <h3 className="box">Storage and Retention</h3>
              <p>Understand your Plutus perks and benefits</p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={ntarservices} alt="fbicon" />
              <h3 className="box">Security Practices</h3>
              <p>Current and past promotions</p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={userobligations} alt="fbicon" />
              <h3 className="box">Third-party</h3>
              <p>Understanding Plutus reward levels</p>
            </a>

            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={userobligations} alt="fbicon" />
              <h3 className="box">Your-Consent</h3>
              <p>Understanding Plutus reward levels</p>
            </a>

            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={userobligations} alt="fbicon" />
              <h3 className="box">Rectification and Consent</h3>
              <p>Understanding Plutus reward levels</p>
            </a>
            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3 className="box">Children's Information</h3>
              <p>Details about our 2024 White Paper</p>
            </a>

            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3 className="box">Changes to Policy</h3>
              <p>Details about our 2024 White Paper</p>
            </a>

            <a className="help-card" href="/Faqsection">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3 className="box">Contact Us</h3>
              <p>Details about our 2024 White Paper</p>
            </a>
          </div>
        </div>
      </section>
      <Help
          buttonLabel="Chat Support"
          href="https://wa.me/9188545454"
          isExternalLink={true}
        />
      <br></br>
      <br />
      <Footer />

      {/* <section className="chat-support"></section> */}
    </div>
  );
};

export default Privacypolisymenu;
