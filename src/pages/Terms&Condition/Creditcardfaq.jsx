import React, { useState } from "react";
import "./Creditcardfaq.css";
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

const Creditcardfaq = () => {
  const [selectedSection, setSelectedSection] = useState("Consent");

  // Data for the different sections
  const sections = {
    Consent: {
      icon: book,
      //   title: "Purpose:",
      subtitle: "User Agreement and Consent:",
      content: `Acceptance of Terms: By using the credit card bill payment service on ntar, you should Agree to and accept ntar terms and conditions.

Consent to Electronic Communications: You consent to receive all communications regarding the credit card bill payment service electronically, including notifications, agreements, and disclosures.

Service Usage: You agree to use the credit card bill payment service solely and in accordance with these terms.

Accuracy of Information: You agree to provide accurate and complete information for processing credit card bill payments.

Modification of Terms: ntar reserves the right to modify these terms and conditions at any time. Continued use of the service constitutes your acceptance of any changes.
`,
    },
    " Eligibility": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Eligibility",
      content: `Age Requirement: Users must be at least 18 years old to use the credit card bill payment service.

Valid Account: Users must have a registered and verified account on the ntar app to access the bill payment service.

Active Credit Card: Users must possess an active credit card with a billing account that can be paid through the ntar app.

Compliance with Terms: Users must agree to and comply with the terms and conditions set forth by ntar for using the service.

Geographic Restrictions: The service may only be available in specific regions or countries as determined by ntar.

Sufficient Funds: Users must ensure there are sufficient funds in their account to cover the payment amount and any associated fees.

.0Technical Requirements: Users must have a compatible device and internet connection to access and use the ntar app effectively.

Compliance with Financial Regulations: Users must comply with all applicable financial regulations and laws governing the use of payment services in their jurisdiction.
`,
    },

    "Fees and Charges": {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle: "Fees and Charges",
      content: `You are responsible for any fees that may apply to certain transactions or the use of the ntar App. Following covers, but is not fixed to:

Service Charges
Transaction Fees
Other Costs associated with the use of ntar App services

These costs could change based on the type of transaction. It is your responsibility to review and understand the fee structure before engaging in credit card bill payments. By using the ntar App, you agree to pay any applicable fees and charges in a timely manner, as specified in the terms and conditions provided by ntar.
`,
    },

    "Payment Processing": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Payment Processing:  ",
      content: `When using the ntar app for credit card bill payments, users authorize the app to process transactions on their behalf. Payments are initiated based on the user's instructions and are subject to the availability of sufficient funds in their account. ntar employs secure payment processing methods to ensure the safety of each transaction, and users will receive confirmation upon successful payment submission. It is important for users to review their payment details before confirmation to prevent errors. Payments are typically processed promptly; however, users should allow sufficient time for processing to avoid any late fees or penalties from their credit card issuer.`,
    },
    "Security and Privacy": {
      icon: Credentials,
      // title: "Found User Errors",
      subtitle: "Security and Privacy:",
      content: `At ntar, safeguarding your information is our top priority when using the credit card bill payment service. We employ advanced encryption technologies and secure servers to protect your personal and financial data during transactions. Your private data, including credit card information and account credentials, is stored and used solely for processing transactions and providing updates on your upcoming payments.`,
    },
    "Resolution and Liability ": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Dispute Resolution and Liability",
      content: `Dispute Resolution and Liability" in the context of terms and conditions refers to how disagreements or disputes between the user (consumer) and the service provider (NTAR in this case) will be handled, and outlines the responsibilities and liabilities of each party in such situations.

Key Points Typically Covered:

Service Interruptions: ntar is not liable for any disruptions in service due to technical issues, maintenance, or other unforeseen circumstances.
No Refund Policy    
NTAR does not provide refunds for any amounts lost during the process of making credit card bill payments. Users acknowledge that once a payment is initiated, NTAR is not liable for any resulting losses.
User Responsibility: Users are responsible for ensuring the accuracy of payment details and for any consequences resulting from incorrect information provided.
Changes to Terms: ntar reserves the right to modify these terms, and users will be notified of any changes that may affect dispute resolution or liability.
These terms are designed to protect both parties' interests while ensuring a fair and efficient process for resolving disputes that may arise from the use of the credit card bill payment service.
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
                    Terms&Conditions / Credit Card{" "}
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

export default Creditcardfaq;
