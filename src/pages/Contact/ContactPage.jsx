import React, { useState } from "react";
import "./ContactPage.css";
import Help from "../../components/Help/Help.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import fbicon from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import twitter from "../../assets/images/Twitter.png";
import Headernew from "../../components/Headernew/Headernew.jsx";

const ContactPage = () => {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      // Handle form submission here
      console.log("Form Submitted", { email, phone, message });
      // Redirect or perform further actions
      window.open(
        `https://wa.me/9188545454?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else {
      setEmailError("Please enter a valid email address.");
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    // Allow only digits and limit to 10 digits
    if (/^\d{0,10}$/.test(value)) {
      setPhone(value);
    }
  };

  const handleMapClick = () => {
    window.open("https://www.google.com/maps", "_blank");
  };
  return (
    <div style={{ overflowX: "hidden" }} className="contact-page-container">
      <Headernew />
      {/* Contact Form Section */}
      <section className="contact-form-section">
        <h4>Get Started</h4>
        <h2>Get in touch with us</h2>
        <h2>We're here to assist you.</h2>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/ntarofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fbicon" src={fbicon} alt="fbicon" />
          </a>
          <a
            href="https://www.instagram.com/ntarofficial/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fbicon" src={insta} alt="fbicon" />
          </a>
          <a
            href="https://twitter.com/Ntarofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="fbicon" src={twitter} alt="fbicon" />
          </a>
        </div>

        <div className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          {/* <input
            type="email"
            placeholder="Email Address"
            className="form-input"
          /> */}
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="form-input"
              value={email}
              onChange={handleEmailChange}
              required
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <input
            type="tel"
            placeholder="Phone Number"
            className="form-input"
            value={phone}
            onChange={handleInputChange}
            maxLength="10" // Additional safeguard
          />
          <textarea placeholder="Message" className="form-textarea"></textarea>
          <a
            href="https://wa.me/9188545454"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="contact-submit-button">
              Leave us a Message
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_6_14)">
                  <path
                    d="M10.0501 5.3846L11.8529 3.58179L15.8247 7.49728C15.8247 7.49728 17.543 8.9339 17.543 10.5959C17.543 12.2578 15.8247 13.6381 15.8247 13.6381L11.8529 17.5818L10.0782 15.8071L14.7303 11.1551C15.0389 10.8465 15.0382 10.3459 14.7288 10.0382L10.0501 5.3846Z"
                    fill="white"
                  />
                  <path
                    d="M4.05007 5.3846L5.85289 3.58179L9.82472 7.49728C9.82472 7.49728 11.543 8.9339 11.543 10.5959C11.543 12.2578 9.82472 13.6381 9.82472 13.6381L5.85289 17.5818L4.07824 15.8071L8.73029 11.1551C9.03889 10.8465 9.03822 10.3459 8.72878 10.0382L4.05007 5.3846Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_14">
                    <rect width="21.6" height="21.6" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </a>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          <div>
            <h4 style={{ fontFamily: "Youth" }}>Contact Info</h4>
            <h3>
              We are always<br></br> happy to assist you
            </h3>
          </div>
          <div className="contact-info">
            <div className="info-box1">
              <h4>Email Address</h4>
              <p>_</p>
              <p className="Hello">hello@ntar.com</p>
              <p className="mon-hr">
                Assistance hours: <br />
                Monday - Friday 9 am to 8 pm EST
              </p>
            </div>
            <div className="info-box2">
              <h4>Contact Number</h4>
              <p>_</p>
              <p className="Hello">+91 86866 01234</p>
              <p className="mon-hr">
                Assistance hours: <br />
                Monday - Friday 9 am to 8 pm EST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="map-section">
        <div className="map-placeholder">
          <img className="map-big" src={bigmap} alt="NTAR Animation" />
        </div>
      </section> */}

      <section className="map-section">
        <div className="map-placeholder" onClick={handleMapClick}>
          <iframe
            className="map-big"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1904.27521428525!2d78.56958933887087!3d17.337227295885352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba1bba16c0f95%3A0xbe1311e3ba8dc03c!2sVCare%20Hair%20And%20Skin%20Clinic%20-%20LB%20Nagar!5e0!3m2!1sen!2sin!4v1724308103875!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <Help
        buttonLabel="Chat Support"
        href="https://wa.me/9188545454"
        isExternalLink={true}
      />
      <br />
      <Footer />
    </div>
  );
};

export default ContactPage;
