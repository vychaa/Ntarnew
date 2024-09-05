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

const Educationfaq = () => {
  const [selectedSection, setSelectedSection] = useState("Terms of Use");

  // Data for the different sections
  const sections = {
    "Terms of Use": {
      icon: book,
      //   title: "Purpose:",
      subtitle: "Understanding and Agreeing to Terms of Use",
      content: `When we mention “you” and “your” in this Educational Term and Condition page, it stands for anyone who looks at us, uses, or grabs information from our webportal. The motive for mentioning these terms is how users can use our site and services.

Exploring and using our website to pay educational fees means you agree that you have gone through, understood, and accepted all these mentioned terms and conditions. In case you do not agree, you may stop using the service and leave the site immediately.

Please go through these Terms of Use quite carefully before continuing our site. We hold the right to do any altercation in these terms at any time. Therefore, it is expected that you keep reading the page from time to time. The newly done changes will be implemented as soon as we publish them. Using the site after we publish the changes, means you agree to all those new terms. In case you do not agree, you may stop using the site and exit.
`,
    },
    " Overview": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Overview Of Educational Payment Services ",
      content: `NTAR introduces educational payment services specifically to national students and their families to pay tuition and fee payments, school fees other fees to their designated schools, colleges, universities, or secondary school. You may use these services to pay your designated school but not for any other purpose at all.
      
The transaction remains between you and your educational institute only when you make payment through NTARr. We will not be responsible in case you fail to complete a payment. Transaction stands for the act of paying tuition and fee payments to designated schools, colleges, universities, or secondary schools using NTAR’s services. Once the transaction is accomplished, the user will receive a notification mentioning all transaction-related information.
`,
    },

    "Prohibited Activities": {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle:
        "Prohibited Activities While Using Educational Payment Services ",
      content: `Users are expected to not go with any of these below-mentioned activities as they are completely prohibited at NTAR platform.

·  Users are not allowed to have more than one account on our site.

·  Do not provide any sort of false, misleading, or incorrect information.

·  User should not use any anonymous proxy to hide their identity. 

·  At NTAR, users are not allowed to use any sort of automated tools such as spiders, robots, or any 
   manual copying of our official site
   
·  Not agreeing on the terms of Use or any other agreement you hold with us
`,
    },

    "Illegal Transactions": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Illegal Transactions/Improper Use of Services ",
      content: `Users must not use these services in ways that break these Terms of Use or any laws and regulations. It is declared here officially that the service must only be used to pay tuition and fees to your designated institution/college/university/school. You are not allowed to go with these services for any other purpose including but not stagnant to

·  Engaging in gambling activities

·  Committing fraud or money laundering activities

·  Sending or distributing sexually explicit materials or services

·  Doing any fraud or money laundering activities

·  Funding terrorist organizations

·  Purchasing or selling firearms, tobacco, prescription drugs, or other unauthorized substances

In case you use the service with the motive of doing any illegal activities, NTAR holds the right to cancel your transaction and report you to law enforcement.
`,
    },
    Procedure: {
      icon: Credentials,
      // title: "Found User Errors",
      subtitle: "Education Payment Procedure ",
      content: ` · Users need to open the NTAR dashboard.

·  Then, click on the Educational Fee Payment Page.

·  Here, you will find three buttons named Tuition Fees, School Fees and College Fees

·  Now, pick the type of education fee, add the Amount, and press “continue.”

·  Next you need to add the recipient’s bank account details or UPI ID and press the “continue” button.

·  Now, you need to “add a new card” and pick the type of card for payment such as a credit card.

·  Press the “continue” button and you will be having an OTP following your registered number.

·  It’s time to enter the OTP and click “continue” to accomplish the payment.`,
    },

    "Education Delayed ": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Why Your Education Payment Transaction Might Be Delayed",
      content: `In this section, we are going to mention what could be the possible reasons for delayed transactions. Your transaction might be delayed or even canceled while verifying your identity and transaction details. The verifying process includes checking against government sanctions or watch lists. Apart from this, other legal requirements are also checked. Moreover, delays can also happen during business hours and following specific currencies. Users might be eligible for a refund considering the situation and NTAR’s policies.`,
    },
    "Password Protection": {
      icon: userobligations,
      // title: "User Obligations",
      subtitle: "Users’ Education Payment Transaction Password Protection",
      content: `At NTAR, all students’ profiles are protected by passwords as we adhere to maintain the privacy of our users. Users are allowed to change your password accordingly. Moreover, users are also allowed to control can access their profile anytime using their dashboard after logging in securely.`,
    },
    "Personal Information": {
      icon: Fee,
      // title: "Fees",
      subtitle: "Accessing Your Personal Information",
      content: `Users can easily view, change, or update the personal information they have submitted on NTAR by logging into their account. Users can easily adjust the information following their preferences. However, you may need to keep in mind that any sort of significant changes may take some time or probably delay the transaction process or may even lead to cancellation.`,
    },
    "Personal Information Safe": {
      icon: book,
      // title: "Communication",
      subtitle: "Keeping Safe Users’ Personal Information",
      content: `NTAR holds the security of your personal information quite seriously. Being a distinguished platform, we believe in maintaining strong security measures similar to the way it is used by banks. We understand the value of protecting our users’ data so that no unauthorized access or use will happen. Though we cannot promise 100% security, we hold a robust security program in place that comes up with secure infrastructure, processes, and applications. The motto is to impart highly comprehensive, layered protection following users’ personal information. NTAR believes in maintaining users’ peace of mind while using our education payment services.`,
    },
    "Use Limits": {
      icon: Education,
      // title: "Force Majeure",
      subtitle: "Privacy and Information Use Limits ",
      content: `According to federal and state laws, users are restricted regarding their personal information in some specific cases. To have an in-depth understanding, explore NTAR’s privacy policy. Users have the right not to share some particular information with us; there are specific details we probably require to process your transaction properly. We probably not are able to accomplish your transaction until we have this important information.`,
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
                    Terms&Conditions / Education{" "}
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

export default Educationfaq;
