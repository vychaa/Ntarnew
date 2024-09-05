// Helpmenu;
import React from "react";
import "./Helpmenu.css";
import Footer from "../../components/Footer/Footer.jsx";
import Help from "../../components/Help/Help.jsx";
import book from "../../assets/images/book.png";
import Education from "../../assets/images/education.png";
import goldsavings from "../../assets/images/goldsav.png";
import ntarGif from "../../assets/images/ntar.gif.webp";
import Eligibility from "../../assets/images/Eligibility.png";
import Accountreg from "../../assets/images/Accountreg.png";
import Credentials from "../../assets/images/credentialsconfi.png";
import ntarservices from "../../assets/images/ntarservices.png";
import userobligations from "../../assets/images/userobligations.png";
import Fee from "../../assets/images/fee.png";
import Headernew from "../../components/Headernew/Headernew.jsx";

const Helpmenu = () => {
  return (
    <div>
      <Headernew />
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
          How can
          <br />
          we
          <img className="home__gif-help" src={ntarGif} alt="NTAR Animation" />
          Help
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

          <div className="popular-queries">
            <span className="popular">POPULAR :</span>
            <a href="/">What is Rent?</a>
            <a href="/">Why my website is slow?</a>
          </div>
        </div>
      </section>

      {/* Help Center Section */}
      <section className="help-center">
        <div className="small_cards">
          <h2>Browse our help centre</h2>
          <div className="help-cards">
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={book} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>
                Getting Started
              </h3>
              <p>
                All the answers and videos you need to get started with Plutus
              </p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={book} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>
                Bill Payments
              </h3>
              <p>Learn about your Plutus account and manage settings</p>
            </a>

            {/* <div className="help-card"> */}
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={goldsavings} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>
                Pay Rent
              </h3>
              <p>Understand and manage your Plutus card</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={Eligibility} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>
                Credit Card Bill Payment
              </h3>
              <p>Manage and understand your Plutus card transactions</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={Accountreg} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>
                Tuition Fee
              </h3>
              <p>Learn about earning and using PLU rewards</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={Credentials} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>QR</h3>
              <p>Understand your Plutus perks and benefits</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={ntarservices} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>Pots</h3>
              <p>Current and past promotions</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={userobligations} alt="fbicon" />

              <h3 style={{ textDecoration: "none", color: "black" }}>Manage</h3>
              <p>Understanding Plutus reward levels</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>Borrow</h3>
              <p>Details about our 2024 White Paper</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>Clubs</h3>
              <p>Details about our 2024 White Paper</p>
            </a>
            <a className="help-card" href="/HelpFaq">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3 style={{ textDecoration: "none", color: "black" }}>Reward</h3>
              <p>Details about our 2024 White Paper</p>
            </a>
            {/* <div className="help-card">
              <img className="icon_size" src={Fee} alt="fbicon" />
              <h3>Shop</h3>
              <p>Details about our 2024 White Paper</p>
            </div> */}
          </div>
        </div>
      </section>
      <Help buttonLabel="Chat Support" href="https://wa.me/9188545454" />
      <br></br>
      <br />
      <Footer />

      {/* <section className="chat-support"></section> */}
    </div>
  );
};

export default Helpmenu;
