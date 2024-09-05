import React, { useState } from "react";
import "./RentalFaq.css";
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

const RentalFaq = () => {
  const [selectedSection, setSelectedSection] = useState(
    "General Terms&Conditions"
  );

  // Data for the different sections
  const sections = {
    "General Terms&Conditions": {
      icon: book,
      //   title: "Purpose:",
      subtitle: "TermsConditions",
      content: `NTAR introduces its registered users to an ideal and convenient way to make house and office rental payments, security deposits, etc., using its website and mobile app to their recipients, home owners, and beneficiaries. Using this platform means you agree to our Term of Rental Payment Terms.
You confirm that there is an official and valid rental agreement between you and the recipient. The amount being transferred by you is completely accurate following this agreement. The user is responsible for ensuring the transaction’s authenticity and adding the correct recipient details. NTAR offers a platform to pay rent, security, and token payment easily. NTAR is not responsible or involved in the actual transaction between you and the recipient. Users must comply with relevant payment regulations and are responsible for any non-compliance or default. NTAR is not a bank and does not introduce banking services beyond facilitating these payments. Our motive is to make your rental and related payment completely simple and secure. We request our customers to always double-check all the details and understand the terms while using rental payment services.
These Rental Payment Terms & Conditions stand for the rental payment services introduced by NTAR. Being a user using this service indicates your acceptance of the following terms. If you do not agree to any section of these terms, you may discontinue the service.
`,
    },
    " Usage of NTAR’s": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Usage of NTAR’s Rental Payment Service",
      content: `While using the NTAR Website or App, you must be aware of the below-mentioned Eligibility criteria -
Age Requirement/ Qualifications
  
Users of 18 years are eligible to enter into a contract or a legally binding agreement.

Agreeing to these NTAR Terms and Conditions, users hold the right, authority as well as capability to get into this agreement adhering to all sorts of provisions mentioned in the “terms of use” of NTAR Services.

Users are not barred or otherwise legally restricted from accessing or using the services of NTAR or NTAR Entities coming under Indian laws.

It is expected that you would not be assuming the identity of any individual nor submitting any sort of false information in the context of your age or affiliation with any person or entity. NTAR and its Entities hold the right to terminate your contract to use the NTAR Platform in case of any sort of wrong representation of the conditions above.
`,
    },

    "Tax Deduction": {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle: "Tax Deduction",
      content: `It will be solely user’s responsibility to handle in case he/she needs to deduct tax for rent payment following the Income Tax Act, of 1961. NTAR would not be responsible regarding taking care of tax deduction obligations for you.`,
    },

    "Account Registration": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Account Registration for Rental Payments ",
      content: `While registering to use the rental payment service, we (NTAR) expect you to provide only accurate and complete information. You should keep your registration information up-to-date. Keep your account’s credentials confidential.`,
    },
    "Eligibility Criteria ": {
      icon: Credentials,
      // title: "Found User Errors",
      subtitle:
        "Guidelines for Eligibility in Rental Payment Service/ Eligibility Criteria for Accessing Rental Payment Service",
      content: `To use NTAR’s rental payment services, users must be at least 18 years old. Moreover, users must not be suspended or removed from NTAR’s platform. Continuing the service, you agree that you meet these requirements and hold the authority to get into this agreement. To use this service, users must have a registered account with NTAR.`,
    },
    "KYC Documentation ": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "KYC Documentation ",
      content: `You are responsible for providing the authenticity of your transactions. We may request you to verify some documents like rental agreement, Aadhaar card, PAN card, etc.`,
    },
    Overview: {
      icon: userobligations,
      // title: "User Obligations",
      subtitle: "Overview of Rental Payment Services ",
      content: `NTAR allows users to pay various bills including rent. Using NTAR’s rental payment service, users can easily pay their shop rent, house rent, office rent, etc. The motto of the rental payment service is to simplify the entire process by consolidating different payments into one platform.`,
    },
    "Payment Protocols": {
      icon: Fee,
      // title: "Fees",
      subtitle: "Payment Protocols and Refund Policy for Rentals  ",
      content: `NTAR’s rental payment service does not permit any refunds or exchanges. Users must be responsible for ensuring the accuracy of details submitted for their transactions.`,
    },
    Processing: {
      icon: book,
      // title: "Communication",
      subtitle: "Processing of Rental Payments ",
      content: `Users can make payments easily by using our NTAR app. The processing is probably different as per the payment methods you pick up. To make rental payments without any hassles, users are responsible to hold sufficient funds in their account.`,
    },
    Acknowledgment: {
      icon: Education,
      // title: "Force Majeure",
      subtitle: "Acknowledgment of Payment/ Confirmation of Transaction",
      content: `You will receive a payment confirmation via email or SMS once the transaction is processed. We expect users to check and verify the transaction details immediately upon receipt of the confirmation. In case you find any discrepancies, you should notify us (NTAR’s officials) within the stipulated time.`,
    },
    "Payment Failures": {
      icon: goldsavings,
      // title: "Security",
      subtitle: "Uncompleted Rental Payments/ Rental Payment Failures",
      content: `In case a user's transaction fails, NTAR will send you a notification notifying you of the failure. Users will be responsible for re-initiating the payment.`,
    },
    "Handling Disagreements": {
      icon: Eligibility,
      // title: "User Responsibilities",
      subtitle: "Handling Disagreements/ Dispute Handling and Resolution",
      content: `Any disputes associated with rental payments should be resolved between you and the recipient. NTAR will provide you with important transaction details to assist in resolving disputes. NTAR is not responsible for any claims, damage occurring from rental payments, or disputes.  `,
    },
    "Privacy Assurance": {
      icon: Accountreg,
      // title: "Privacy Policy",
      subtitle:
        "Confidentiality and Data Safeguards/ Privacy Assurance and Secure Transactions",
      content: `NTAR adheres to maintaining its customer’s privacy and personal information. All sorts of rental payment transactions are encrypted and processed securely. Please go through NTAR’s privacy policy to churn out more details on how your data is handled.`,
    },
    "Amendments To Terms ": {
      icon: Credentials,
      // title: "Intellectual Property",
      subtitle: "Amendments To Terms ",
      content: `NTAR holds the right to modify these Terms at any time. Users are expected to keep checking the updated terms from time to time. Continuing use of the Service after changes means you agree to the new terms.`,
    },
    Illegal: {
      icon: ntarservices,
      // title: "Dispute Resolution",
      subtitle: "Illegal/Improper Use Of Rental Payment Service ",
      content: `Users are expected not to use this service for anything illegal or improper as it is completely forbidden.
·         False claims or imparting any wrong information is prohibited
·         This service does not allow to disguise the origins of illegally obtained money
·         To  fund or support terrorist activities is strictly forbidden
·         Users must not use this service to make payments for anything other than legitimate rental 
           transactions
·         Not allowed to use the services to pay for illegal goods or services.
`,
    },
    "Service Termination": {
      icon: userobligations,
      // title: "Termination",
      subtitle: "Service Termination ",
      content: `NTAR holds the right to terminate or suspend your account or access to the services at any time without sending any notice or for any reason. Closing your account means you will not be able to use the service anymore.`,
    },
    "Contact Information ": {
      icon: Fee,
      // title: "Limitation of Liability",
      subtitle: "Contact Information ",
      content: `If you have any sort of questions or concerns regarding these Terms, you should contact NTAR’s officials via mail/website chat box/app chat box.
By using the rental payment services provided by NTAR, you acknowledge that you have read, understood, and agree to be bound by these Terms.`,
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
                    Terms&Conditions / Rental{" "}
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

export default RentalFaq;
