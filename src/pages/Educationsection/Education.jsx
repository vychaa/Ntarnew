import React from "react";
import "./Education.css";
import Footer from "../../components/Footer/Footer.jsx";
import qr from "../../assets/images/qr.png";
import phone from "../../assets/images/phone.png";
import blackappstore from "../../assets/images/blackappstore.png";
import blackplaystore from "../../assets/images/blackplaystore.png";
import Tuitionicon from "../../assets/images/tution.png";
import schoolicon from "../../assets/images/school.png";
import collegefee from "../../assets/images/college.png";
import Institution from "../../assets/images/institution.png";
import sideleft from "../../assets/images/sideleft.png";
import sideright from "../../assets/images/sideright.png";
import educa from "../../assets/images/educa.png";
import feess from "../../assets/images/feess.png";
import charts from "../../assets/images/charts.png";
import rackup from "../../assets/images/rackup.png";
import Headernew from "../../components/Headernew/Headernew.jsx";

const EduData = [
  {
    icon: educa, // Update this to the specific icon for each section
    title: "Manage Education payments",
    description:
      "Keep close track of all your children’s Education payments from your phone. Get an overview of what’s already been paid and what’s due when, so you can control your cash flow.",
  },
  {
    icon: feess, // Different icon for this item
    title: "Pay Education Fee on the Go",
    description:
      "Paying education fees online offers the convenience of making payments at any time, anywhere. Removing the need to visit Physical Locations.",
  },
  {
    icon: charts, // Another different icon for this item
    title: "Bill Reminder and Notifications",
    description:
      "NTAR will remind your bills are due so you will never miss a bill payment again and stay organized with ease.",
  },
  {
    icon: rackup, // Different icon for this item as well
    title: "Rack up Rewards.",
    description:
      "Use your credit cards to pay your bills to collect rewards like points, miles, and cashback each month on all the bills you have to pay anyway.",
  },
  // Add more items as needed
];

const Education = () => {
  return (
    <div>
      <Headernew />
      <section className="bbps-hero-edu">
        <div className="bbps-hero-content_1">
          <p>Ntar/Education</p>
          <h1>
            Education Fee payment
            <br />
            is Better with NTAR
          </h1>
        </div>
        <p className="transac_text">Pay Bills. Easy As.</p>
      </section>

      {/* New Section */}
      <section className="new-section">
        <div className="new-section-content">
          <div className="new-section-text">
            <h2>Control the way you Pay your Children’s Fees</h2>
            <p>
              Paying education fees should never stand in between your
              <br /> children’s growth and education.
            </p>
          </div>
          <div className="new-section-icons">
            <div className="icon-card">
              <h3>Pay</h3>
              <p>Tuition Fees</p>
              <img src={Tuitionicon} alt="Feature 1" />
            </div>
            <div className="icon-card">
              <h3>Pay</h3>
              <p>School Fees</p>
              <img src={schoolicon} alt="Feature 2" />
            </div>
            <div className="icon-card">
              <h3>Pay</h3>
              <p>College Fees</p>
              <img src={collegefee} alt="Feature 3" />
            </div>
            <div className="icon-card">
              <h3>pay</h3>
              <p>Institutions</p>
              <img src={Institution} alt="Feature 3" />
            </div>
          </div>
        </div>
      </section>

      <section className="bbps-bills-section">
        <h2>
          NTAR makes it easier
          <br />
          To pay your Education Fees
        </h2>
        <div className="bill-container">
          {EduData.map((item, index) => (
            <div key={index} className="bill-card">
              <div className="bill-texts">
                <img src={item.icon} alt="icon" className="bill-icon" />
                <h3>{item.title}</h3>
                <p className="bill-subtext">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Existing sections */}
      <section className="info-container-main">
        <h2>Your Bills at your fingertips</h2>
        <p className="bbps_sub">
          With BBPS built-in, you know where your money’s going
          <br />
          and when it’s going to land.
        </p>
        <div className="info-container">
          <div className="info-box left-box">
            <p className="let_text">Let’s NTAR Now</p>
            <img src={phone} alt="Phone App" className="info-phone-image" />
            <ol className="info-steps">
              <li>
                <strong>Open the NTAR App</strong> - Tap the Bill icon on the
                dashboard screen in the NTAR App.
              </li>
              <li>
                <strong>Select the Service Provider</strong> - Enter the details
                for your Biller. We will fetch your Bill amount.
              </li>
              <li>
                <strong>Get that payment done</strong> - Enter new card details
                to make payment or use and UPI or existing card you have saved
                in the NTAR app
              </li>
              <li>
                <strong>The future's bright</strong> - Once Paid, your biller is
                saved as a linked biller, for easy upcoming payments.
              </li>
            </ol>
          </div>

          <div className="right-column">
            <div className="info-box right-box">
              <div className="qr-section">
                <img src={qr} alt="QR Code" className="qr-code" />
                <h2>Say yes to More</h2>
                <p style={{ textAlign: "left" }}>
                  With NTAR app, every bill payment becomes an opportunity to
                  save. Unlock exclusive discounts and cashback rewards with
                  Bill payment you make. Embrace cashless payment and make every
                  bill payment count with NTAR app.
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "15px",
                    fontFamily: "Youth_bold",
                  }}
                >
                  Let’s NTAR now
                </p>
              </div>
            </div>

            <div className="info-box bottom-box">
              <h2 style={{ textAlign: "left" }}>
                Can't see your service provider?
              </h2>
              <p style={{ textAlign: "left" }}>
                Let us know & we will get them added!
              </p>
              <button className="request-provider-button">
                Request service provider
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="download-section">
        <h2>
          Enjoy the convenient way to pay.
          <br /> Just NTAR it.
        </h2>
        <p>Download NTAR app on your favourite App store</p>
        <img src={qr} alt="QR Code" className="shop-qr-code" />
        <div className="app-buttons">
          <a href="/Comingsoon">
            <img
              src={blackappstore}
              alt="Download on App Store"
              className="app-button"
            />
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://play.google.com/store/apps/details?id=com.NTAR&pcampaignid=web_share"
            target="_blank"
          >
            <img
              src={blackplaystore}
              alt="Get it on Google Play"
              className="app-button"
            />
          </a>
        </div>
      </section>

      <setion className="side_drops">
        <div className="sideicon_pay">
          <img src={sideleft} alt="QR Code" className="sideleft" />
          <a style={{ textDecoration: "none", color: "black" }} href="/Ntarpay">
            <p className="p_texts">
              Pay
              {/* <button className="coming_soon_edu">Coming soon</button> */}
            </p>
          </a>
        </div>

        <div className="sideicon_pay">
          <p className="p_texts">
            POTS {"\n"}
            <button className="coming_soon_edu">Coming soon</button>
          </p>
          <img src={sideright} alt="QR Code" className="sideleft" />
        </div>
      </setion>

      <Footer />
    </div>
  );
};

export default Education;
