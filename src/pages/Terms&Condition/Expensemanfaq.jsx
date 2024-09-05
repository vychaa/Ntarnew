import React, { useState } from "react";
import "./Expensemanfaq.css";
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

const Expensemanfaq = () => {
  const [selectedSection, setSelectedSection] = useState("Introduction");

  // Data for the different sections
  const sections = {
    Introduction: {
      icon: book,
      //   title: "Purpose:",
      subtitle: "Introduction",
      content: `NTAR, a financial app provided by NTAR PRIVATE LIMITED ("NTAR," "we," "our," or "us"). By accessing or using our Expense Management services ("Services"), Must and should agree to these Terms and Conditions ("Terms"). 
Ntar securely connects to your Bank accounts and provides a comprehensive view of your finances. This enables you to make informed decisions and improve your financial well-being.
`,
    },
    " Service Terms": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Service Terms",
      content: `NTAR simplifies expense tracking by automatically retrieving transaction details from your bank accounts. This feature allows the app to categorize your expenses, offering a comprehensive view of your spending patterns and financial habits. While NTAR endeavors to present accurate financial information, it's essential to recognize that the app relies on data directly sourced from your banks. Therefore, the completeness and accuracy of this data may vary and cannot be guaranteed consistently.

To ensure secure access to your financial information, NTAR implements a stringent security measure: the use of One-Time Passwords (OTPs). These OTPs are necessary to securely link and retrieve data from your bank accounts, safeguarding your privacy and financial details throughout the process.

By leveraging NTAR's automated expense tracking capabilities and its commitment to security through OTP verification, users can effectively manage their finances with confidence and peace of mind. This combination of convenience and security underscores NTAR's dedication to providing a reliable and user-friendly platform for financial management.
`,
    },

    "User Responsibilities": {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle: "User Responsibilities",
      content: `You are responsible for maintaining the confidentiality of your Ntar account and OTPs used for bank connections. Any unauthorized use of your account or OTPs must be reported to us immediately.

You agree to provide accurate and current information when registering for and using Ntar.. Any discrepancies in information provided may affect the functionality of the app.
`,
    },

    "Fraudulent Activities": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Fraudulent Activities",
      content: `You agree not to engage in any unauthorized access to NTAR accounts or systems.
      
Prohibiting any attempts to manipulate data within the NTAR app or its associated systems.

Users are not allowed to attempt to breach NTAR's security protocols or infrastructure.

Any fraudulent use of NTAR services, including exploiting vulnerabilities or bugs.

Users must not engage in phishing or attempts to obtain sensitive information fraudulently.

NTAR accounts should not be used for money laundering or illegal financial activities.

Users are responsible for safeguarding their credentials and preventing unauthorized use.

NTAR prohibits any use of automated scripts to manipulate or access the service.

Users must report any suspected security vulnerabilities or incidents promptly.

NTAR reserves the right to suspend or terminate accounts involved in fraudulent activities.

Reservation of Rights: NTAR reserves the right to modify, suspend, or discontinue any part of its expense management services at any time without prior notice. We won't be responsible to users or any other party for any such modification, suspension, or discontinuance.

Legal Compliance: Users agree to use NTAR in compliance with all applicable laws and regulations. NTAR shall not be liable for any illegal or unauthorized use of its expense management services by users.

`,
    },

    " Contact Us": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Contact Us",
      content: `If you have any questions or concerns about these terms and conditions, please contact us at info@ntar.com.

By using Ntar, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions. These terms constitute a legally binding agreement between you and NTAR PRIVATE LIMITED.

By using NTAR, you agree to these Terms and Conditions. Thank you for choosing NTAR to manage your finances responsibly and effectively.
`,
    },
    "Third Party ": {
      icon: userobligations,
      // title: "User Obligations",
      subtitle: "Third Party ",
      content: `NTAR PRIVATE LIMITED ("NTAR") collaborates with RBI-licensed account aggregators to offer Third Party Services, enabling you to access your financial information conveniently. By using NTAR's services, you agree to adhere to the following terms: We utilize third-party products and services within the NTAR App to enhance functionality and may direct you to external applications and websites ("Third Party Services"). Your utilization of these services may entail acceptance of additional terms and compliance with specific requirements set by the respective third parties. NTAR ensures that all interactions with {keyword} are secure.`,
    },
    "Limitations of Liability": {
      icon: Fee,
      // title: "Fees",
      subtitle: "Limitations of Liability",
      content: `Accuracy of Information: NTAR strives to provide accurate expense management services. However, we do not guarantee the accuracy, completeness, or reliability of the financial information provided through NTAR. Users are responsible for verifying the accuracy of their financial data.

Consequential Damages: NTAR shall not be liable for any indirect, consequential, punitive, or incidental damages arising out of or related to the use of NTAR’s expense management services, including but not limited to loss of profits, loss of data, or business interruption.

Limitation of Liability: In no event shall NTAR or its affiliates, directors, officers, employees, agents, or suppliers be liable for damages exceeding the amount paid by the user for the NTAR services during the twelve (12) months preceding the event giving rise to the liability.

Force Majeure: NTAR shall not be liable for any failure or delay in performing its obligations under these terms and conditions if such failure or delay is due toevents outside of its reasonable control, such as but not restricted to actions of God,natural disasters, war, terrorism, or governmental actions.

Disclaimer of Warranties: NTAR provides its expense management services on an "as is" and "as available" basis. We disclaim all warranties, express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
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
                    Terms&Conditions / Expense Management{" "}
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

export default Expensemanfaq;
