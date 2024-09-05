import React, { useState } from "react";
import "./Goldsavingfaq.css";
import Help from "../../components/Help/Help.jsx";
import Footer from "../../components/Footer/Footer.jsx";
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

const Goldsavingfaq = () => {
  const [selectedSection, setSelectedSection] = useState("Gold Savings");

  // Data for the different sections
  const sections = {
    "Gold Savings": {
      icon: book,
      //   title: "Purpose:",
      subtitle: "Introduction",
      content: `Welcome to the digital gold savings app "NTAR," operated by NTAR PRIVATE LIMITED. We offer our services through the platform, For more information, please visit https://ntar.com or contact us via email at info@ntar.com. By accessing or using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our services. `,
    },
    " Account Security": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Registration and Account Security",
      content: `AUsers must create an account on the NTAR app to access the digital gold savings.

You are accountable for keeping your account information confidential.

If you detect any unauthorized activity or access to your account, you agree to promptly notify the Company.

The Company is not responsible for any loss or damage arising from your failure to protect your account information.
`,
    },

    "Digital Gold Purchasing ": {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle: "Digital Gold Purchasing",
      content: `Through our Gold Savings service on the NTAR app, users can buy digital gold at the current market rates.

All purchasers of digital gold are subject to mandatory applicable taxes and charges.

The minimum and maximum purchase limits are subject to the Company’s policies, which may be updated from time to time.
`,
    },

    "Fees & Charges": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Fees & Charges ",
      content: `The Company may charge fees using NTAR App for digital gold purchase, digital gold storage, and sale gold in digital.

All fees will be clearly disclosed to Users before completing any transaction.

The Company reserves the right to change its fee structure at any time, with prior notice to the Users.
`,
    },
    "User Obligations": {
      icon: Credentials,
      // title: "Found User Errors",
      subtitle: "User Obligations",
      content: `Users must provide accurate and complete information during registration and while using the Service.

Users must adhere to all terms and conditions.

Users are prohibited from engaging in any illegal or restricted activities while using the Service.
`,
    },
    "Terms & Conditions": {
      icon: book,
      // title: "Ntar Services",
      subtitle: "Acceptance of Safe Gold Terms & Conditions",
      content: `To access our Platform, it's essential to review and accept the terms and conditions of Safe Gold (accessible at https://www.safegold.com/terms-and-conditions). Your use of the Platform signifies your agreement to comply with Safe Gold's terms, including any updates made in the future. If you do not consent to Safe Gold's terms and conditions, you are not authorized to use our services.

"NTAR acts as an online platform allowing Users to buy, sell, or transfer digital gold provided by 'Safe Gold', managed by Digital Gold India Private Limited ("Safe Gold"), a company registered under Indian law with corporate identification number U74999MH2017PTC293205.
`,
    },

    "Force Majeure": {
      icon: Education,
      // title: "Force Majeure",
      subtitle: "Force Majeure",
      content: `NTAR shall not be held liable for any failure or delay in the performance of its obligations under these Terms and Conditions if such failure or delay results from events or circumstances beyond its reasonable control. Such events may include, but are not limited to, natural disasters (such as earthquakes, floods, or storms), acts of terrorism, war, civil commotion, governmental actions, strikes, lockouts, or any other industrial disputes, and any other events that are unforeseeable or unavoidable.
In the event of a Force Majeure situation, NTAR will make reasonable efforts to resume the performance of its obligations as soon as practicable. However, any delay or non-performance due to such circumstances shall not constitute a breach of these Terms and Conditions and NTAR shall not be liable for any resulting losses or damages.
 `,
    },

    "Amendments To Terms ": {
      icon: Credentials,
      // title: "Intellectual Property",
      subtitle: "Amendments/originality Terms ",
      content: `NTAR PRIVATE LIMITED (NTAR) reserves the right to amend these Terms and Conditions at any time. Users will be notified of significant changes. Continued use of the Service constitutes acceptance of the updated terms.

NTAR is dedicated to ensuring the originality of its Terms and Conditions. The content presented here is specifically developed for NTAR’s unique operational and service framework.

8.1 The terms and conditions outlined in this document are tailored to NTAR's distinct operations and offerings. Any unauthorized use or adaptation of NTAR’s terms and conditions content for other purposes or entities is prohibited.

8.3 NTAR may revise or update these Terms and Conditions as needed to comply with legal requirements and to reflect any changes in our services. Updates will be made to maintain the content’s originality and relevance.

8.4 Unauthorized reproduction or use of NTAR’s Terms and Conditions is strictly prohibited and may result in legal consequences. All rights to the content of these Terms and Conditions are reserved by NTAR.
`,
    },

    "Feed Back": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Feed Back",
      content: `We appreciate your opinions and are working hard to continuously improve our services. If you have any comments, suggestions, or concerns regarding our Gold Savings Service or these Terms and Conditions, please contact us at info@ntar.com. Your input is important to us and helps us enhance your experience with our services.
        
Please include relevant details about your experience, including any specific issues you encountered, so we can address them effectively. Thank you for your cooperation and support.
  `,
    },

    "Fraudulent Transactions": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Fraudulent Transactions",
      content: `NTAR PRIVATE LIMITED (NTAR) takes the security of your transactions and personal information seriously. However, in the event of fraudulent transactions involving your account or the Services, the following terms apply:

Detection and Reporting: You must promptly report any suspected fraudulent activity or unauthorized transactions on your account to NTAR. Failure to report such activities within a reasonable timeframe may result in your liability for any losses incurred.

Investigation: NTAR will investigate any reported fraudulent transactions and take necessary actions to address the issue. This may include suspending your account, requesting additional information from you, and cooperating with relevant authorities.

Liability: NTAR shall not be liable for any losses arising from fraudulent transactions if it is determined that such transactions occurred due to your negligence or failure to adhere to security measures, including but not limited to sharing your account credentials or failing to use secure login practices.

Compensation: If NTAR determines that a fraudulent transaction occurred due to a failure in its security systems, NTAR will take appropriate steps to compensate you for the loss, subject to verification and the terms outlined in these Terms and Conditions.

Legal Action: NTAR reserves the right to take legal action against any individual or entity involved in fraudulent activities affecting the Platform or its Services.

Cooperation: You agree to cooperate fully with NTAR in any investigation of fraudulent transactions and to provide all necessary information and documentation as requested.

Account Security: It is your responsibility to maintain the confidentiality of your account information and to use the Platform in a secure manner. NTAR advises regularly updating your passwords and monitoring your account activity for any suspicious behavior.

By using the NTAR gold savings service, you acknowledge and agree to these terms regarding fraudulent transactions and the handling of such incidents.
 `,
    },

    Termination: {
      icon: userobligations,
      // title: "Ntar Services",
      subtitle: "Termination",
      content: `The Company reserves the right to terminate or suspend any User’s account at any time, without notice, for any reason, including but not limited to a breach of these terms.
Users may terminate their account by contacting the Company’s customer service.
`,
    },
  };

  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Headernew />
        <div style={{ overflowX: "hidden" }} className="faq-container">
          {/* Sidebar */}
          <aside className="sidebar">
            <ul>
              {Object.keys(sections).map((section, index) => (
                <React.Fragment key={index}>
                  <li>
                    <li>
                      <a href="#" onClick={() => setSelectedSection(section)}>
                        <img
                          src={sections[section].icon}
                          alt={section}
                          className="sidebar-icon"
                        />
                        {section}
                      </a>
                    </li>
                  </li>
                  <hr /> {/* Horizontal line after each list item */}
                </React.Fragment>
              ))}
            </ul>
          </aside>

          {/* Content Area */}
          <section className="content">
            <div className="disclaimer-section">
              <p style={{ margin: "0px" }}>
                <a
                  style={{ textDecoration: "none", color: "black" }}
                  href="/Termmenu"
                >
                  <span style={{ fontFamily: "Youth_bold", fontSize: "13px" }}>
                    Terms&Conditions / Gold Savings{" "}
                  </span>
                </a>
                / {selectedSection}
              </p>
              <h1 className="termscond">
                {sections[selectedSection].subtitle}
              </h1>
              {/* <h4 className="disclamaier">Disclaimers</h4> */}
              <br />

              <h3>{sections[selectedSection].title}</h3>
              <p>{sections[selectedSection].content}</p>
            </div>
          </section>
        </div>
        <Help
          buttonLabel="Chat Support"
          href="https://wa.me/9188545454"
          isExternalLink={true}
        />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Goldsavingfaq;
