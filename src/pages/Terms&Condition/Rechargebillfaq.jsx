import React, { useState } from "react";
import "./Rechargebillfaq.css";
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

const Rechargebillfaq = () => {
  const [selectedSection, setSelectedSection] = useState("Recharge & Bill");

  // Data for the different sections
  const sections = {
    "Recharge & Bill": {
      icon: book,
      //   title: "Purpose:",
      subtitle: "Recharge & Bill Pay Services - NTAR NC",
      content: `The purpose of publishing these terms and conditions is to regulate the use of Recharge and Bill Pay services enabled by NTAR Private Limited. By continuing to use NTAR Recharge & Pay Bills, you (referred to as "your," "user," or "you") agree to the mentioned Terms of Use, including agreeing to the General NTAR Terms and Conditions located at https://ntar.com/TermsConditions .
`,
    },
    " Services Offered": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Services Offered",
      content: `The Recharge & Pay Bills category includes clients/customers using utility services such as water, electricity, landline, pipe gas, broadband, cylinder, or recharge services, mobile prepaid, mobile postpaid, DTH, etc. NTAR wallet payment method is accepted, allowing users to make bill payments or recharges through the official NTAR app using a payment service through an aggregator or BBPOU (Bharat Bill Payment Operating Unit).`,
    },

    "Application of Terms": {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle: "Application of Terms",
      content: `These Bill Pay T&Cs apply to you when you conduct transactions using NTAR to avail of the Recharge & Pay Bills service. NTAR reserves the right to make changes or modifications, add or remove portions of these Terms of Use at any time without prior written notice to its users. Users are responsible for reviewing these Terms of Use periodically for any updates or changes. Continued use of NTAR’s services implies acceptance of all changes to the policy.`,
    },

    "General Terms ": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "General Terms ",
      content: `By using the NTAR Recharge and Bill Pay feature in the NTAR App, you agree to all terms and conditions. Please review the terms carefully before proceeding. Acceptance of these terms means you agree to follow all NTAR policies, including the Privacy Policy.

Terms of Using Recharge & Pay Bills
NTAR is a payment facilitator and should not be considered a party to the payments.
NTAR enables payments for various services such as:
Mobile prepaid
Mobile postpaid
DTH
Utility services (water, electricity, pipe gas, landline, broadband, cylinder, etc.)
Users can access these services under the "Recharge and Pay Bills" section in the NTAR app. Payments are processed through:
Aggregators with whom NTAR has agreements
BBPOU (Bharat Bill Payment Operating Unit system)

`,
    },
    "Recharge Getting Started  ": {
      icon: Credentials,
      // title: "Found User Errors",
      subtitle: "Getting Started With Recharge and Pay Bills",
      content: `To make recharges or pay bills, users must provide details such as their unique customer ID, subscription ID, bill number, registered mobile number, or official/registered phone number. These details are crucial for accurate payment processing.
      
By using our service, you authorize NTAR to access, retrieve, share, use, and accumulate information associated with your account to facilitate Recharge & Bill Pay services. Users are responsible for ensuring the accuracy of the information provided.

Users must keep account information updated as per the terms and conditions. Failure to do so may result in account suspension or restricted services. The amount to be paid or recharged is an agreement between you and the service provider, and NTAR is not responsible for verifying this amount.

To utilize recharge and bill pay services, users must submit necessary information such as user ID, location/state, KYC information, or other personal details for tax/GST purposes. Users also authorize NTAR to communicate with third-party service providers and aggregators to process transactions.
`,
    },
    "User Responsibilities ": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Charges and User Responsibilities",
      content: `Fees
      
If you use third-party payment services or incur other data fees from third-party participants and billers, you may have to pay charges. NTAR is not responsible for these charges. By continuing to use NTAR services, you agree to these charges.

User Obligations

Track Bills and Subscriptions: Users should track their bills, recharge expiry dates, and subscription fees. NTAR is not responsible for technical issues or errors in retrieving bills.
Verifying Transactions: Users must check their transaction history or notifications to confirm if a transaction was successful or failed.
Pay Charges: Users must be aware that any charges from the biller for Recharge & Pay Bills Services can be deducted from their account or added to their bill/subscription fees.
`,
    },
    "Errors and Disclaimers": {
      icon: userobligations,
      // title: "User Obligations",
      subtitle: "User Errors and Disclaimers",
      content: `User Mistakes
Sending a payment to the wrong person or biller, paying twice, or sending the wrong amount is the user’s responsibility. NTAR is not accountable for these errors. Users must contact the party to whom the payment was sent to request a refund. NTAR will not reimburse or reverse a payment made by mistake.
`,
    },
    Disclaimers: {
      icon: Fee,
      // title: "Fees",
      subtitle: "Disclaimers",
      content: `Online Transactions Related Risks: By using this site, users agree to bear all risks from online transactions.
      
Services Provided “As Is”: Users are responsible for evaluating the accuracy, completeness, and usefulness of the services and information provided by NTAR. NTAR does not authorize any warranties on its behalf. All warranties, representations, conditions, and terms, whether express or implied, are excluded.

By using the NTAR app, users agree to these terms and conditions, ensuring a secure and efficient experience with our Recharge and Bill Pay services.`,
    },
    "(BBPOU)": {
      icon: book,
      // title: "Communication",
      subtitle:
        "Bharat Bill Payment Operating Unit (BBPOU) Complaint Process and Other Terms",
      content: `Transaction Awaiting Confirmation

Generally, bill payments and recharges through NTAR are confirmed quickly. However, there may be instances where confirmation takes longer than usual. If your bill payment or recharge is pending, NTAR is waiting for confirmation from the service provider. This procedure may require 96 hours to complete.. If your transaction is not confirmed within 24 hours, you are allowed to raise a ticket with us. NTAR customer service will follow up with the service provider to expedite the confirmation process. We are committed to resolving issues quickly to ensure the best service for our customers.

Completed Transactions

If your bill payment or recharge is successfully completed but the service is not updated or confirmed, please wait for 48 hours. If the issue persists after 48 hours, report the problem to us. Our officials will review your complaint and aim to resolve it within 48 business hours, but not later than 30 business days. For more detailed information, please refer to our grievance policy.

Getting Your Money Back/Refund

Refunds will be processed to the original payment source if applicable.

Card Payments: Refunds will be processed within 7 to 9 days.
Wallet and Gift Cards: Refunds will be processed within 24 hours.
`,
    },
    "Terms&Conditions": {
      icon: Education,
      // title: "Force Majeure",
      subtitle: "Additional Terms and Conditions",
      content: `The following additional terms and conditions are incorporated by reference to the General Terms and Conditions section:

Indemnification: Users agree to indemnify and hold NTAR harmless from any claims arising from their use of the service.

Privacy: Users' personal information will be handled according to our Privacy Policy.

Responsibilities: Users are responsible for ensuring the accuracy of the information they provide and for any charges incurred.

Registration: Users must complete the registration process and agree to the terms and conditions to use the service.

Intellectual Property: All content and services provided by NTAR are protected by intellectual property laws.

General Provisions: These terms and conditions constitute the entire agreement between the user and NTAR.

Confidentiality: Users agree to keep any confidential information obtained through the service confidential.
By using the NTAR app, users agree to these terms and conditions, ensuring a secure and efficient experience with our Recharge and Bill Pay services.
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
                    Terms&Conditions / Recharge Bill Payments{" "}
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

export default Rechargebillfaq;
