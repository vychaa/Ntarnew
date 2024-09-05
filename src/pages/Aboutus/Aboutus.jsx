import React from "react";
import "./Aboutus.css";
import aboutushand from "../../assets/images/aboutushand.png";
import ntarGif from "../../assets/images/ntar.gif.webp";
import ourorigin from "../../assets/images/ourorigin.png";
import mapimage from "../../assets/images/map.png";
import blackyellback from "../../assets/images/blackyell.png";
import Footer from "../../components/Footer/Footer.jsx";
import Help from "../../components/Help/Help.jsx";
import Headernew from "../../components/Headernew/Headernew.jsx";

const Aboutus = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Headernew />
        <div className="home__blue-container-contact">
          <p className="Not_just_word">Not just words on a page</p>
          <p className="Not_just_sub_text">
            We’re on a mission to liberate everyone with a rewarding and
            accessible financial system for a better future.
          </p>
          <img className="aboutus_hand_img" src={aboutushand} alt="Girl" />
        </div>

        <div className="about__sec-white-container-contact">
          <div className="about_sec-white-row_div">
            <div className="each_card_mar">
              <p className="Welcome_heading">Welcome to NTAR PVT LTD.., </p>
              <br></br>
              <p className="welcome_Sub_text">
                At NTAR PVT LTD..,, we are dedicated to enhancing your shopping
                experience with our innovative solutions designed to simplify
                and improve how you find and manage Bill Payments & product /
                Services . Our goal is to make your shopping journey as seamless
                and efficient as possible by offering cutting-edge tools that
                connect you with the product / Services you need, right where
                you need them.
              </p>
            </div>
            <img className="About__gif" src={ntarGif} alt="NTAR Animation" />
          </div>
        </div>
        <br />

        <div className="about__sec-white-container-contact">
          <div className="about_third-white-row_div">
            <div className="each_card_mar">
              <p className="Welcome_heading">Our Origins</p>
              <br></br>
              <p className="origin_Sub_text">
                Founded in Hyderabad, NTAR PVT LTD.., was born out of a desire
                to revolutionize the way people discover and Bill Payments &
                purchase product / Services. Our journey began with a vision to
                create a platform that bridges the gap between customers and the
                product / Services they seek. Hyderabad's vibrant
                entrepreneurial spirit and technological prowess inspired us to
                develop a solution that combines convenience with advanced
                technology.
              </p>
            </div>
            <img className="origin__anim" src={ourorigin} alt="Origin_Ribbon" />
          </div>
        </div>

        <div className="about__sec-blue-container-contact">
          <div className="about_fourth-white-row_div">
            <div className="each_card_mar">
              <p className="vision_heading">Our Vision</p>
              <br></br>
              <p className="vision_Sub_text">
                As we look ahead, we are committed to continually evolving and
                expanding our services to better serve you. Our vision is to be
                the go-to platform for all your product / Service needs,
                providing real-time information and seamless experiences. We aim
                to be at the forefront of innovation, integrating the latest
                advancements to ensure you always have the best tools at your
                fingertips.
              </p>
            </div>
            <img className="origin__anim" src={ourorigin} alt="Origin_Ribbon" />
          </div>
        </div>

        <div className="about__fifth-blue-container-contact">
          <div className="about_fourth-white-row_div">
            <div className="each_card_mar">
              <p className="meet_heading">Meet Our Team</p>
              <br></br>
              <p className="meet_Sub_text">
                Our team at NTAR PVT LTD.., is passionate about improving your
                shopping experience. Comprising experts in technology, customer
                service, and data management, we work tirelessly to deliver
                solutions that meet your needs. We believe in collaboration,
                creativity, and a relentless focus on making your experience as
                enjoyable and efficient as possible.
              </p>
            </div>
            <img className="origin__anim" src={ourorigin} alt="Origin_Ribbon" />
          </div>
        </div>
        <br></br>

        <div className="about__sec-white-container-contact">
          <div className="about_third-white-row_div">
            <div>
              <p className="Welcome_heading">What We Offer</p>
              <br></br>
              <p className="product_Sub_text">
                -Product / Service Availability: Easily find out where product /
                Services are available, both online and in nearby stores.
                <br /> -Real-Time Information: Get accurate, up-to-date details
                about stock levels and product / Service availability.
                <br /> -Convenience: Enjoy a streamlined shopping experience
                with our user-friendly tools and features.
              </p>
            </div>
            <img className="origin__anim" src={ourorigin} alt="Origin_Ribbon" />
          </div>
        </div>

        <div className="about__sec-blue-container-contact">
          <div className="about_fourth-white-row_div">
            <div className="each_card_mar">
              <p className="vision_heading">Our Payment Solutions</p>
              <br></br>
              <p className="vision_Sub_text">
                We offer a range of integrated payment solutions to make
                managing your bills and expenses as simple as possible: <br />
                <br />
                -Bharat Bill Payment System (BBPS): An mandated system that
                ensures integrated, interoperable bill payment services across
                geographies with certainty, reliability, and safety of
                transactions. This includes payments for utilities, rentals,
                education, credit cards, and more. -Rental Payments: Easily
                manage and pay for rental expenses. -Education Payments:
                Simplify the process of paying for educational fees. <br />-
                Credit Card Payments: Conveniently handle your credit card
                payments.
              </p>
            </div>
            <img className="origin__anim" src={ourorigin} alt="Origin_Ribbon" />
          </div>
        </div>

        <div className="about__sec-white-container-contact">
          <div className="about_third-white-row_div_2">
            <div>
              <p className="Welcome_heading">Our Commitment to You</p>
              <br></br>
              <p className="origin_Sub_text">
                Your satisfaction is our top priority. We are committed to
                providing you with the best possible service and ensuring that
                you have all the information you need to make informed
                purchasing decisions. Our team is here to support you every step
                of the way, ensuring a smooth and enjoyable shopping experience.
                <br />
                <br />
                Thank you for choosing NTAR PVT LTD..,. We look forward to
                serving you and helping you find exactly what you need.
              </p>
            </div>
            <img className="origin__anim" src={ourorigin} alt="Origin_Ribbon" />
          </div>
        </div>

        <div className="about__sec-white-container-contact">
          <div className="head_office_container">
            <div className="media-div">
              <p className="headoffice_heading">Our Head Office</p>
              <img className="map_image" src={mapimage} alt="Girl" />
              <div className="map_help__blue-container-contact">
                <p className="map_address">
                  H.No. 5-5-165/2/TF, Plot no. 4, 3rd Floor, Vanasthali Hills,
                  Vanastalipuram Hayathnagar K.V.Rangareddy TG 500070 IN
                </p>
              </div>
            </div>

            <div>
              <p className="headoffice_heading">Connect on Social Media</p>
              <div className="media-two">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.instagram.com/ntarofficial/"
                >
                  <img className="social-icon" src={blackyellback} alt="Girl" />
                  <p className="med-one">INSTAGRAM</p>
                </a>

                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.facebook.com/ntarofficial/"
                >
                  <img className="social-icon" src={blackyellback} alt="Girl" />
                  <p className="med-one">FACEBOOK</p>
                </a>

                <a
                  style={{ textDecoration: "none" }}
                  href="https://twitter.com/Ntarofficial"
                >
                  <img className="social-icon" src={blackyellback} alt="Girl" />
                  <p className="med-one">TWITTER</p>
                </a>

                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.linkedin.com/company/ntar-private-limited/"
                >
                  <img className="social-icon" src={blackyellback} alt="Girl" />
                  <p className="med-one">LINKEDIN</p>
                </a>

                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.youtube.com/@ntarofficial"
                >
                  <img className="social-icon" src={blackyellback} alt="Girl" />
                  <p className="med-one">YOUTUBE</p>
                </a>
              </div>
            </div>
          </div>
          <br></br>
          <br />
          <br />
          <Help buttonLabel="Help" href="/Helpmenu" isExternalLink={false} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Aboutus;
