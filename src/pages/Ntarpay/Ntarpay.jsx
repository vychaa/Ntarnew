import React from "react";
import "./Ntarpay.css";
import Footer from "../../components/Footer/Footer.jsx";
import qr from "../../assets/images/qr.png";
import phone from "../../assets/images/phone.png";
import sideleft from "../../assets/images/sideleft.png";
import sideright from "../../assets/images/sideright.png";
import blackappstore from "../../assets/images/blackappstore.png";
import blackplaystore from "../../assets/images/blackplaystore.png";
import Bbpscroll from "./Bbpscroll.jsx";

import managebills from "../../assets/images/managebills.png";
import paybills from "../../assets/images/paybills.png";
import split from "../../assets/images/split.png";
import billrem from "../../assets/images/billrem.png";
import goodbye from "../../assets/images/goodbye.png";
import manage from "../../assets/images/manage.png";
import charts from "../../assets/images/charts.png";
import rackup from "../../assets/images/rackup.png";
import Headernew from "../../components/Headernew/Headernew.jsx";

const billData = [
  {
    icon: managebills, // Use your actual icon paths
    title: "Manage your Bills and Credit Cards",
    description:
      "Keep close track of all your Bills from your phone. Get an overview of what’s already been paid and what’s due when, so you can control your cash flow.",
  },
  {
    icon: paybills, // Use different icons if you have them
    title: "Pay Bills on the Go",
    description:
      "Make payment check the status of any bill at anytime, anywhere. All from NTAR mobile app.",
  },
  {
    icon: split, // Use different icons if you have them
    title: "Split the Damn Bill",
    description:
      "With NTAR, it’s easy to split your bills and make sure everyone pays what they’re due to. and partial payments give you more flexibility than ever.",
  },
  {
    icon: billrem, // Use different icons if you have them
    title: "Bill Reminder and Notifications",
    description:
      "NTAR will remind your bills are due so you will never miss a bill payment again and stay organized with ease.",
  },
  {
    icon: goodbye, // Use different icons if you have them
    title: "Say goodbye to late fees",
    description:
      "It’s hard to keep track of which bills come monthly, quarterly, yearly and when they are due. Review and schedule bill payments in advance so they are always paid on time and you have on less thing to worry about.",
  },
  {
    icon: manage, // Use different icons if you have them
    title: "Pay multiple bills together",
    description:
      "Save time on making individual payments. Collate your bills and pay them all at once. Your can also pay many bills with single payment method.",
  },
  {
    icon: charts, // Use different icons if you have them
    title: "Charts and Calendar View",
    description:
      "NTAR's charts and calendar view—track payments, due dates, and budgeting all with clear, interactive graphics.",
  },
  {
    icon: rackup, // Use different icons if you have them
    title: "Rack up Rewards.",
    description:
      "Use your credit cards to pay your bills to collect rewards like points, miles and cashback each month on all the bill you have to pay anyway.",
  },

  // Add more items as needed
];

const Ntarpay = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Headernew/>
      <section className="bbps-hero">
        <div className="bbps-hero-content b">
          <p className="ntar_text">NTAR Pay</p>
          <h1>
            An easier way to <br /> pay your bills online
          </h1>
        </div>
        <p className="trans_easy">Pay Bills. Easy As</p>
      </section>
      <Bbpscroll />
      <section className="bbps-bills-section">
        <h2 style={{ margin: "4px" }}>The perfect features for you</h2>
        <p className="the_per_sub_text">
          With NTAR - Bill Reminder Feature you will never miss a bill again
        </p>
        <div className="bill-container">
          {billData.map((item, index) => (
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

      <section className="info-container-main">
        <h2>Your Bills at your fingertips</h2>
        <p className="bbps_sub">
          With BBPS built-in, you know where your money’s going
          <br /> and when it’s going to land.
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
            rel="noopener noreferrer"
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
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/Education"
          >
            <p className="p_texts">Education</p>
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

export default Ntarpay;
