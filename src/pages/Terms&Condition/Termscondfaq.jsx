import React, { useState } from "react";
import "./TermsCondfaq.css";
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

const TermsCondfaq = () => {
  const [selectedSection, setSelectedSection] = useState("TermsConditions");

  // Data for the different sections
  const sections = {
    TermsConditions: {
      icon: book,
      title: "Purpose:",
      subtitle: "TermsConditions",
      content: `Welcome to NTAR’s Term and Conditions webpage!!!

We are here to introduce you to clear terms for fair use and mutual protection.

This introduced document should be regarded as a legally binding agreement, amended from time to time. Please read these NTAR terms and conditions (“Terms”) carefully before registering, accessing, or using the NTAR payment app. The terms below govern users' use and access to this payment app. If you disagree or believe in adhering to these terms and conditions, you may stop using these features immediately.

Here, it needs to be mentioned that this term and condition clause is an electric record following the Terms of Information Technology Act, 2000, and amendments thereof from time to time and the rules there under as applicable, and the amended provisions about electronic records in different statutes as amended by the Information Technology Act, 2000. It does not need any sort of physical or digital
signatures since the electronic record is generated following a computer system.

•     At this term and condition page, “We”, “Us”, and “Our” shall refer to NTAR Entities.

•     Any non-registered individual or corporate body, registered user of Ntar Entities or NTAR customer will refer as “You”, “, and “Yourself”, “NTAR User”. 

•     NTAR App is the mobile application introduced by NTAR and NTAR Entities to impart NTAR Services to its users including service providers and it also adds all services where it performs as an Intermediary.

•     NTAR Website belongs to https://ntar.com/ registered by NTAR and used in the form of medium to communicate and inform users of services imparted by NTAR and NTAR Entities not restricting to its features, terms and conditions.

•     NTAR Entities belong to the main group, affiliates, associates, and subsidiaries of NTAR.

•     NTAR Services shall include all sorts of services extended/to extend by NTAR .

•     Service Providers refers to any individual, or group of individuals coming under a law whose services are used by NTAR or NTAR Entities to impart the intended services to you through the NTAR Platform.`,
    },
    // Definitions: {
    //   icon: Education,
    //   title: "Definitions",
    //   subtitle: "Definitions",
    //   content: `This Privacy Policy goes with Ntar Private Limited a company incorporated under the Companies Act 1956 following its registered official address 5-5-165/2/TF, Plot no. 4, 3rd Floor, beside Vanasthali Hills, Vanasthalipuram, Ranga Reddy, Hyderabad, and Telangana 500070. Here, it needs to be mentioned that this policy is all about how Ntar accumulates, collects, and uses the users’ information through Ntar websites, apps, SMS oriented notifications. When a user visits or downloads a Ntar website or app, you agrees to the Privacy Policy and the mentioned service/product terms and conditions. The most important thing is that being the best platform we always believe you and respect users’ privacy. As a reputed platform, we also believe in going with the highest standards to protect our user's personal information.`,
    // },
    "Legal Binding Agreement": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Legal Binding Agreement",
      content: `The terms and conditions are a legal contract (“Agreement”) between you and NTAR Private Limited having its registered office at 5-5-165/2/TF, Plot no. 4, 3rd Floor, beside Vanasthali Hills, Vanasthalipuram, Ranga Reddy, Hyderabad, and Telangana 500070. You agree and acknowledge that you have gone through all the below-mentioned terms and conditions thoroughly. In case you do not agree to these terms and conditions or do not desire to be bound by these terms and conditions, you should not go ahead to stop using or uninstall the app.

We hold all the rights to amend the terms and conditions at any time by adding an updated version to the NTAR website and NTAR app. Moreover, the updated version of the Terms of Service shall take effect immediately once it is posted on the official website and app. Users should be aware of their responsibilities and that they should keep reviewing these Terms of User periodically for updates/changes. Your continued use of the NTAR app following the posting of changes would be considered that you agree to the revised terms and conditions or the removed portion of the terms and modifications.

If you agree with the introduced term of use, we allow you to use this service. Using the NTAR app indicates your agreement to all sorts of terms and conditions so therefore you should go through the terms and conditions thoroughly. You also accept and agree to adhere to NTAR and NTAR Entity Policies available on
the NTAR website and NTAR app as amended accordingly.`,
    },
    Eligibility: {
      icon: Eligibility,
      // title: "Eligibility",
      subtitle: "Eligibility",
      content: `While using the NTAR Website or App, you must be aware of the below-mentioned Eligibility criteria -
Age Requirement/ Qualifications
  
Users of 18 years are eligible to enter into a contract or a legally binding agreement.

Agreeing to these NTAR Terms and Conditions, users hold the right, authority as well as capability to get into this agreement adhering to all sorts of provisions mentioned in the “terms of use” of NTAR Services.

Users are not barred or otherwise legally restricted from accessing or using the services of NTAR or NTAR Entities coming under Indian laws.

It is expected that you would not be assuming the identity of any individual nor submitting any sort of false information in the context of your age or affiliation with any person or entity. NTAR and its Entities hold the right to terminate your contract to use the NTAR Platform in case of any sort of wrong representation of the conditions above.
`,
    },
    "Account Registration": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Account Registration",
      content: `Once the registration process is done successfully, you will keep your login credentials confidential. Make sure that you do not share your password with any third party.

If you want to go with the full spectrum of NTAR Services, it is needed to register yourself only on NTAR App and provide us with all the required accurate and complete information. Users are expected to keep all their KYC-related information completely updated to avoid any sort of issues.

Your device by which you are registered on the NTAR app will become your registered device and device details shall be stored by us. If you login into your official NTAR account using a different device, you will be asked to allow NTAR to send an SMS from the new device so that your device will be turned into the
registered device. It means your previous device would not be helpful anymore to let you access your NTAR account using your previous device or your login again following authorization yourself on that device.

While doing this procedure, your phone number using which you have registered on NTAR is transferred, surrendered, and/or deactivated irrespective of any reason, it shall be your responsibility to make NTAR aware in this regard. It will enable NTAR to secure your NTAR account. If any third party/individual/person tries to register using the phone number that has been transferred, surrendered, and/or deactivated, NTAR would need time to remove/delink the details of the previous NTAR account holder and that is why, it needs time to rest the account which probably take up to two years from the date of request.

NTAR makes everything quite easy and simple for its users. To put it in simple words, Account registration is also quite a simple process.

You may also get away by exploring our official website.

Then you need to go ahead by clicking the “Sign Up” or “Register” Button.
          Now, you need to add the required details including your name and email address.

Verify your mail automatically.

Provide any additional profile information as prompted.

KYC Process – 

You will be required to agree that the “KYC” details provided by “You” following respect to the NTAR Account as stated above probably be used following the KYC requirements for your registration as a user.  

Firstly, you need to add your mobile number linked to your bank account and press the “agree and continue” button.

Then you will have a verification code, do add that.

Now, you will be asked to permit access, press the “Continue” button.

The next step is to provide your email ID and press the “Continue” button.

Add your PAN card number in the next step and then press the “Continue” button.

Then you need to submit your “Aadhaar Details”.

Once you provide “Aadhaar Details", you get a code. Do add that code and press the “Continue” button.

Then, you will be asked to click a selfie facing your mobile camera.

Once it is captured, your details will be verified.

And you are welcome to NTAR App.`,
    },
    "Found User Errors": {
      icon: Credentials,
      // title: "Found User Errors",
      subtitle: "Found User Errors",
      content: `In case the user sends a payment to the wrong party, double pay, wrong biller, or sends a payment for the wrong amount because of any sort of typographical error, then you should contact the party to whom you sent the payment and request a refund. It is mentioned clearly that NTAR would not be responsible for any
reimbursement or reverse payment made in error by users.
`,
    },
    "Ntar Services": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Ntar Services",
      content: `The most important thing is that this account allows you to access the NTAR Platform, browse the NTAR service, make your payments using a credit card, or net banking collectively regarded as (‘Payment Gateway Services’) on the NTAR platform or Participating Platforms.

You can go ahead to make Recharge & Bill Payment facility available to NTAR users following the Terms of Use of such service.

To make a payment, you would need to register by imparting additional information to make payments going with these modes of payments.

You will be able to share and maintain your customer KYC-oriented details and information following the services. NTAR imparts different sorts of below-mentioned services and users are expected to go with responsibility following terms and conditions –

Recharge and Pay bills.

Rental Payments

Education Payments

Credit card Payment

Gold Savings

Expenses Management….etc

Information Required:

We expect that users will only add accurate and authentic information while registering on the NTAR app or website.

Accuracy of Information

The accurate and truthful information by users helps to build up trust and avoid any issues in the future while using the service via NTAR app.

Detailed Sign-up Registration Process –

To explore the entire range of NTAR Service Terms, it is quite important to register on the NTAR Web portal or App and accomplish accurate and comprehensive information.

Users need to get registered on the NTAR Webportal/App to have comprehensive information on NTAR Service Terms. Users should add only updated and complete account details including KYC information as well as contact details.

The device you used to get yourself registered will be called your registered device and all needed information will be stored. If you log into your NTAR account using a different device, you will have a notification to allow NTAR to send an SMS from your new current device designating it as a registered device. The user will not be able to access his/her NTAR account from the previous device until re-login or re-authorize on that device.

It is necessary to inform NTAR in case your registered phone number on NTAR is surrendered, transferred, or deactivated for any reason so that your account will be secured timely.
`,
    },
    "User Obligations": {
      icon: userobligations,
      // title: "User Obligations",
      subtitle: "User Obligations",
      content: `Continuing the app or website means you understand and agree that NTAR and NTAR entities hold the right to use their services of themselves to impart any of the mentioned NTAR services to you within NTAR platforms.  

Safeguarding Credentials
Here, it needs to be mentioned that we do not sell, trade, or rent our users’ personal information to anyone without their permission. However, we also never share any sort of information or data with any third-party service providers assisting us unless those parties agree to hold this information completely confidential.

Prohibited Activities

On the NTAR website and app, users are prohibited from providing any sort of wrong information. Moreover, NTAR also holds the right to only let its users any offers incase they do not sit well with the eligibility criteria. We do not entertain any sort of misuse of  fraud, or suspicious transactions/activities.

Fraudulent Behavior:

Users should be responsible for not engaging in or promoting any sort of fraudulent activities. The below-mentioned behavior will not be acceptable –

You must not use any sort of false information to sign in or register at NTAR.

You should not try to manipulate transactions to fetch any sort of unauthentic financial advantages at all.

You must not use the NTAR website or app for any sort of illegal or unauthorized motive at all.

Moreover, you should also not engage in phishing or different schemes to use other people’s personal information.


Misuse of Platform:

You should not go with an automated system to have interaction with the platform without its permission.

Uploading any harmful software will also be considered a serious misuse of the platform.

Do not try to interfere with the following platform’s normal operation.

Do not try to access other users’ details without authorization.`,
    },
    Fees: {
      icon: Fee,
      // title: "Fees",
      subtitle: "Fees",
      content: `Registration on the NTAR app is free. However, NTAR holds the right to introduce fees upon charging for access, third-party payment, or such other data fees from third-party payment participants and/ or Biller the users do agree to and NTAR should not be liable for the same.

Types of Fees: Payment Term/Transaction Terms

Transaction – The NTAR app’s transaction is quite easy as you just need to
choose the Terms of Service/product you intend to purchase and proceed to the
payment section. Fulfill the needed payment-oriented details and confirm the
transaction.

Transaction Failures – Make sure that the payment details you provided are
accurate. In case the issue persists then you should contact our customer support to get assistance.

Transaction Limits – Particular transactions probably hold limits based on the service or product. These limits would be communicated while having the transaction process. You should make sure that you are aware of any limits before completing it.
`,
    },
    Communication: {
      icon: book,
      // title: "Communication",
      subtitle: "Communication",
      content: `Following communication policy, we probably send different types of needed notifications, service, alerts, SMS, and emails to our users including the below-mentioned –

We update you about important information regarding your account, services, or transactions.

We also notify you about new promotions, special, and new features.

We also send reminders or confirmations of Payments following in this
communication policy
We also seek feedback or conduct surveys to improve our services.`,
    },
    "Force Majeure": {
      icon: Education,
      // title: "Force Majeure",
      subtitle: "Force Majeure",
      content: `A Force Majeure Event adheres to any event that goes beyond the reasonable control of the NTAR and shall include but not stagnant to war, fire, riots, flood, acts of God, strikes, explosion, slowdowns, lockouts, pandemics, prolonger shortage of energy supplies, unauthorized, computer hacking, unauthorized access to computer data as well as storage devices, computer-oriented crashes, governmental, acts of state, legal or regulatory actions prohibiting or impeding NTAR Entities from doing its respective obligations following the contract.
`,
    },
    Security: {
      icon: goldsavings,
      // title: "Security",
      subtitle: "Security",
      content: `Security
We come up with privacy policies that will probably be updated from time to time to reflect changes in our practices or legal needs. We would also notify you of any important changes and seek your consent if needed by law.

Security Measures:

By using our services, you also agree to the collection, use, and protection of your personal information as mentioned in our privacy policy. It is quite important to review the entire privacy policy to understand how your data would be handled.
`,
    },
    "User Responsibilities": {
      icon: Eligibility,
      // title: "User Responsibilities",
      subtitle: "User Responsibilities",
      content: `Users should verify the success or failure of the transaction by checking out the transaction history and/or notifications.

Any sort of charges introduced by the Biller for Recharge and Pay Bills Services would be deducted from your account or added to the user’s bill/subscription fees.

Always have a close eye on your periodic bills, subscription fees, and recharge expirations as well as due dates following utilities/services or recurring charge services.

Users should provide accurate as well as truthful information only while registering and using the services.

Keep your credentials confidential and completely secured.
Keep updating your personal information to ensure it remains accurate.

Use NTAR service only for the right intentions following rules and regulations.

NOTE: NTAR would not be responsible for any sort of technical issues associated with the periodic retrieval of bills from Billers or any errors/discrepancies in the bills.
`,
    },
    "Privacy Policy": {
      icon: Accountreg,
      // title: "Privacy Policy",
      subtitle: "Privacy Policy",
      content: `We have always been a believer in introducing the respectful and lawful use of our Terms of Service to our users. We expect users to agree on these terms protecting user data and privacy and establishing clear guidelines for mutual responsibility and accountability. It also includes accepting our policies regarding usage, content, and Privacy Policies as well as any sort of future amendments following these terms to maintain a safe as well as efficient platform for all.
Data Collection: Being a reputed platform, we always ensure the user&#39;s privacy policy. We accumulate personal information including name, email address, PAN, Adhaar and contact details while registering or when you voluntarily impart it while using the NTAR service. We probably also accumulate usage data, device information, and location data to take our services to the next level for our users.

Data Usage Personal information is used to impart and improve our services, communicate with you, and get it to customize your experience. We probably also use aggregated as well as anonymized data for analytics and research purposes.
Data Protection

We also assure you about the security measures to protect your personal information from alteration, unauthorized access, alteration, destruction, or disclosure. It also mentions encryption, regular security audits, and secure data storage.
`,
    },
    "Intellectual Property": {
      icon: Credentials,
      // title: "Intellectual Property",
      subtitle: "Intellectual Property",
      content: `Ownership:

At NTAR, all sort of intellectual property rights belongs to it including trade names, service marks, copyrights, text, images, software, and any other content. Here, it is mentioned that these properties are the exclusive property of NTAR and its entities. These rights are completely protected by intellectual property laws and treaties all across the country. Following the intellectual property rights terms, no part mentioned on the website or app can be transferred to the user. Any intellectual property rights coming in the form of these presents shall also be in absolute ownership/control/possession. Whether it is images, audio clips, video clips, or any sort of illustration available on the website or mobile application, everything mentioned on the NTAR website is protected by copyrights, and other intellectual property rights of NTAR/NTAR Entities or Business Partners. It is prohibited to copy, reproduce, upload, post, transmit, or distribute such material in any way, including by SMS, email. Make sure users should not allow any person doing such directly or indirectly. In case it happens, it will be regarded as the violation of copyright and other property-oriented rights unless you hold written consent from our official authority.

Use of Trademarks

NTAR, NTAR’s logo, and all related names, product and service names, slogans, and designs are trademarks of NTAR and its entities. You are not allowed to use such marks unless you have written permission from the official authority of NTAR. Logos, names, products and services, designs, and slogans related to this platform are considered trademarks of their respective owners.

Dispute Resolution

In case any sort of dispute arises between users and NTAR, we are here to encourage amicable resolution through direct communication as well as negotiation. In case a resolution cannot be solved informally, both parties need to agree to submit the dispute to mediation or arbitration before resorting or litigation. Any legal disputes or claims coming from the use of NTAR services shall be governed by and constructed by the laws of the mentioned jurisdiction. Here, it needs to be mentioned that both parties agree to submit to the exclusive jurisdiction of the court in (mentioned jurisdiction) to sort out any disputes or claims that
probably happen.


Arbitration Clauses:

By going with this NTAR website or app, you and NTAR agree to solve any dispute, claim, or controversy coming out of or associating with these terms and conditions or the breach, or termination through binding arbitration instead of heading to court.

Jurisdiction

Users agree by continuing the NTAR website or WebApp that any legal action will be instituted only in the courts which does not adhere to the arbitration subject.  
`,
    },
    "Dispute Resolution": {
      icon: ntarservices,
      // title: "Dispute Resolution",
      subtitle: "Dispute Resolution",
      content: `In case any sort of dispute arises between users and NTAR, we are here to encourage amicable resolution through direct communication as well as negotiation. In case a resolution cannot be solved informally, both parties need to agree to submit the dispute to mediation or arbitration before resorting or litigation. Any legal disputes or claims coming from the use of NTAR services shall be governed by and constructed by the laws of the mentioned jurisdiction. Here, it needs to be mentioned that both parties agree to submit to the exclusive jurisdiction of the court in (mentioned jurisdiction) to sort out any disputes or claims that
probably happen.


Arbitration Clauses:

By going with this NTAR website or app, you and NTAR agree to solve any dispute, claim, or controversy coming out of or associating with these terms and conditions or the breach, or termination through binding arbitration instead of heading to court.

Jurisdiction

Users agree by continuing the NTAR website or WebApp that any legal action will be instituted only in the courts which does not adhere to the arbitration subject.  
`,
    },
    Termination: {
      icon: userobligations,
      // title: "Termination",
      subtitle: "Termination",
      content: `NTAR holds all the right to suspend a user account at any time for any reason upon finding of violation of these terms and conditions. `,
    },
    "Limitation of Liability": {
      icon: Fee,
      // title: "Limitation of Liability",
      subtitle: "Limitation of Liability",
      content: `User Limitation and Restriction –

Please read the below-mentioned limitation and restriction points which can lead to suspension or termination of your account if not followed.

NTAR services must not be used for illegal or any sort of unauthorized purposes.

Misleading or false information would not be entertained.

Respect for the Privacy and rights of other user policies.

Should not disrupt or interfere with service functionality.
    
Do not share your account with the third party or do not use someone else’s account.

Attempting to hack, disrupt, or manipulate the app’s functionality is strictly prohibited.

Users should not engage in activities which probably violate any laws or regulations. 


Jurisdiction

User registration, responsibilities of the users, liability, confidentiality, indemnification, and other general provisions should be incorporated following Terms of Use referred to the general terms.
`,
    },
    Disclaimers: {
      icon: Fee,
      // title: "Disclaimers",
      subtitle: "Disclaimers",
      content: `Users need to understand that all risk arising from online transactions would be their responsibility.

NTAR and third-party partners provide no warranty, express or implied, regarding the service quality including the below-mentioned like

  i) Meeting your requirements;

  II) Being uninterrupted, timely, or error-free; or

  III) Any  services, information, or material obtained in connection with the
services meeting your requirements.
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
                    Terms&Conditions / General T&C{" "}
                  </span>
                </a>
                / {selectedSection}
              </p>
              <h1 className="termscond">
                {sections[selectedSection].subtitle}
              </h1>
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

export default TermsCondfaq;
