import React, { useState } from "react";
import "./Faqsection.css";
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

const Faqsection = (target, rel) => {
  const [selectedSection, setSelectedSection] = useState("Privacy Policy");

  // Data for the different sections
  const sections = {
    "Privacy Policy": {
      icon: book,
      // title: "Privacy Policy",
      subtitle: "TermsConditions",
      content: `This Privacy Policy goes with NTAR Private Limited a company incorporated under the Companies Act 1956 following its registered official address - 5-5 165/2/TF, Plot no. 4, 3rd Floor, beside Vanasthali Hills, Vanasthalipuram, Ranga Reddy, Hyderabad, and Telangana 500070. 
      Here, it needs to be mentioned that this policy is all about how NTAR accumulates, collects, and uses the users’ information through NTAR websites, apps, SMS oriented notifications. When a user visits or downloads an NTAR website or app, you agrees to the Privacy Policy and the mentioned service/product terms and conditions. The most important thing is
that being the best platform we always believe you and respect users’ privacy. As a reputed platform, we also believe in going with the highest standards to protect our user's personal information.

The NTAR Privacy Policy is published and shall be construed following the Indian laws and regulations including the Information Technology Rules, 2011 going with the Information Technology Act, 2000, the Aadhaar Act, 2016, and its Amendments. User's personal information stands for all sorts of Sensitive Personal Information which needs heightened data protection. Here, we believe in mentioning that our products/services are introduced in India for Indian Customers and your Personal Information Processing would be subjected to Indian laws. In case you do not agree for any reason to mention the Privacy Policy, please do not continue to use this platform.
`,
    },
    "Information Collection": {
      icon: Education,
      // title: "Definitions",
      subtitle: "Information Collection ",
      content: `NTAR may ask for your Personal Information while you go with our service using our website, or app or have a conversation with us. We always adhere to collecting only your relevant and important information for imparting the asked service with the motto to upscale our services.

In this section, we mention what sort of personal and sensitive user information can be asked from our side but we are not stagnant to:

Users may be asked to share their name, gender, age, photo, address, phone number, current email ID, contact, or nominee-oriented details to submit.

 You may also be asked to share KYC-oriented information like email ID, PAN card number, Aadhaar Details, and selfie.

 Next, we may also need your Aadhaar information including your Aadhaar number or virtual ID to make sure that all shared information is authentic. Though Aadhaar information is not compulsory, there are other options as well.

We may also require OTP sent to your registered device by your NTAR.

Device identifier-oriented details like internet brand width, mobile device model, etc., may also require sharing.

Here, it is informed that your short messaging service-oriented details may also be needed for registering you to use the investment services. It also includes OTPs for login details to encourage your security.

Considering the users’ information probably be collected at different stages of your usage of the NTAR platform including –

While users explore the NTAR platform.

While you register yourself on the NTAR platform being a user follow NTAR’s terms and conditions

While you may be doing any sort of transaction using the NTAR platform

While using any official links, chat, emails, or notification owned by the NTAR platform or if you participate in our occasional surveys.

While having any sort of interaction with any NTAR Entities

At the NTAR website or app, we bring the best digital payment app service providers may also require users' personal information from third parties such as

We may need your finance-oriented history and related information so that we can offer you the best NTAR services. It also helps to verify and authenticate following your investment transaction request to make sure that any sort of suspicious transaction should not occur.

You may also need to provide your past employment, educational qualification, etc for the purpose of background checking and verification.

Users may also need to submit demographic and photo information including Aadhaar number, gender, address, DOB, etc to process the KYC procedure seamlessly.
`,
    },
    " Purpose Of Information": {
      icon: goldsavings,
      // title: "Legal Binding Agreement",
      subtitle: "Purpose and Use Of Information",
      content: `NTAR may go ahead to process the user’s personal information considering the below-mentioned reasons –

To process payments without any issues, to communicate on your behalf following your queries, and transactions, or to accomplish any other regulatory requirement.

To make you able to go through the offer of services and to make you have seamless communication with us while doing transactions

To authenticate a transaction-related request, to validate a standing instruction following the payment process, or to confirm a payment made following the services.

To create your NTAR account and verify it

To give you access to explore the products and services.

To find out security breaches and respective attacks. The required personal information of users also helps to prevent and take actions regarding illegal or suspected fraud or money laundering-related activities, to conduct audits in an ideal way.

To go well with legal obligations

To validate or process your or share your KYC information
To make you have the best experience in different processes/submissions of applications or to access different products or services offered by users to analyze user behavior

We may also need users’ personal information to monitor or review products and services accordingly, to customize the services to enhance users’ experience quite safely and easier including conducting audits.

To allow third parties to contact users in the context of services and products and services availed/requested by users on the NTAR platform.

Personal information of users may also be needed for credit checks. It helps to let the screenings or diligence checks detect and keep safe to not let any error, fraud, or other unwanted activity violate our terms and conditions.

To accomplish your service-related request

To keep going on the KYC-oriented compliances flawlessly

We also use the needed personal information to make users informed about offline and online offers, available services, different types of products, and needed updates. Moreover, it also helps to share the custom and improve your experience.

To find out the best solutions to users’ issues, to resolve disputes, to avoid technical support, to fix all the bugs, to lift the promotion of a safe service.

Though we probably process your personal information following other legitimate reasons, we adhere to sophisticated steps to mitigate the processing to the extent possible and not let any issues to your privacy.

Here, we mention that we do not accumulate, use, or process any information to transmit under our services.
`,
    },
    Cookies: {
      icon: Eligibility,
      title: "Eligibility",
      subtitle: "Cookies or Similar Technologies",
      content: `NTAR uses data collection devices like “cookies” or quite familiar new-age technology following specific pages of the platform to analyze our official web page flow, to understand the performance of promotional activities, and to foster trust and safety in a better way.

Cookies or familiar technologies can play a prominent role in imparting information related to your interests. Most cookies are regarded as “session cookies”, meaning for get deleted automatically from your device's hard drive/storage at the end of a session. 

We introduce specific features which are only available through the use of a “cookie” or familiar technologies. NTAR also goes with cookies to make you able to add your password less frequently while logging in to your session.

Users are always free to decline or delete our cookies or familiar technologies if your device allows it. However, it is important to consider that users might not be able to go with specific features on the official platform upon deleting the cookers. It means you probably have to enter your password more frequently whenever you log in to your NTAR account.  NTAR is not responsible for controlling third-party cookies.

Here, it needs to be mentioned that “cookies” are a sort of small-size files located on your device's hard drive/storage responsible for assisting us in imparting our services. Here, it needs to be mentioned that cookies do not hold any of your personal information.
`,
    },
    "Sharing and Disclosures": {
      icon: Accountreg,
      // title: "Account Registration",
      subtitle: "Information Sharing and Disclosures",
      content: `The user’s personal information at NTAR is shared following applicable laws. NTAR may share user’s personal information with different receivers like legal authorities, business partners, service providers, governmental authorities, internal marketing teams, etc.

We adhere to the believe that personal information will be shared considering a need-to-know basis for different below-mentioned purposes –
To enable the provision of the products or services availed by you and facilitate the services between you and the service provider, including the research analysts, sellers, advisors

User's personal information is required for the Aadhaar authentication process.

To comply with applicable laws as well as approaching the KYC requirements necessary by different regulatory bodies responsible for regulating different services and products you go through while using our services, apps, or websites.

We may also need your personal information in order to accomplish the payment transaction procedure.

Personal information may also be required to process your financial product subscription request placed with us.

To process all sorts of your financial product subscription requests made with us.

To protect the rights and personal safety of the users

Personal information may be shared with the financial institution by mitigating, verifying, or stopping fraudulent activities to handle risk or recover funds in accordance with applicable laws/regulations.

To have to communicate with users related to services, marketing data, and other information storage and mitigating the risk

To add more value to our Privacy Policy

In case it is requested by the official government authorities and advantages in the context of grievance redressed and dispute resolution

It will be shared if needed to do so by law or following good faith such as upon asking by court or to accomplish legal process-related activities.

If the user’s information is shared with third parties accordingly the purpose and processing of personal information are governed by their policies. NTAR holds the right to share Personal information if it is asked by the legally recognized authorities, and reputed regulatory institutions following applicable laws.
`,
    },
    "Storage and Retention": {
      icon: Credentials,
      // title: "Credentials confidential.",
      subtitle: "Storage and Retention",
      content: `NTAR stores personal information within India and retails it according to the applicable laws and for a period no longer comparing it is needed for the motto for which it was accumulated.

Though, NTAR may prefer to go with a user's Personal Information if we believe it is probably important to prevent fraud or future abuse if needed by legal authorities regarding regulatory proceeding or receipt of any legal direction which may leave impact on another legitimate motive.
We would like to mention that once the personal information has done its job and approached the needed retention period, it will be deleted following applicable laws.
`,
    },
    "Security Practices": {
      icon: ntarservices,
      // title: "Ntar Services",
      subtitle: "Security Practices",
      content: `NTAR always believes in going with new-age security measures to safeguard user’s personal and sensitive information. To safeguard your Aadhaar-related information, NTAR uses ideal security controls mentioned under and needs to follow the Aadhaar Regulations. Being a distinguished platform, we always understand that the security system should be updated to prevent any unwanted issues. Our technical team adheres to the best security practices and undergoes strict internal and external reviews to ensure ideal information security encryption or needed control irrespective of the fact if data is in most or on the rest mode following our network and servers. Our database is completely secured storing on servers as it requires a password with limited access.

We request our users to maintain confidentiality and security while logging and adding their IDs and passwords. You would be responsible for that. Make sure that you never share your NTAR login, password, and OTP-oriented details with any third party. It is completely a user’s responsibility to inform us in case you notice any compromise regarding your personal information.

At NTAR, our well-experienced technical team goes with multiple levels of security to safeguard the NTAR Application by login/logout option. We go with preventive controls to ensure that you safely use the NTAR application on your device and those same login credentials cannot be used following other devices until additional authentications or OTP-related formalities are done.

NTAR adheres to keeping its users free from stress by following updated and advanced security practices.
`,
    },
    "Third-Party": {
      icon: userobligations,
      // title: "User Obligations",
      subtitle: "Third-Party Products, Services, or Websites",
      content: `Using or continuing NTAR products and services at the NTAR web portal or app means your personal information may be collected by us and it is governed by our privacy policy. Users are allowed to refer to their policy and terms of service to see how the collected Personal Information will be handled by those service providers.

NTAR introduces its users so that our service may come up with links to other web portals or applications while they explore our platform. For your knowledge, we mention that these third-party web portals or applications are governed by their distinguished privacy policies and they do not stand out of control.

If a user discontinues our servers, use of any Personal Information provided by you is governed by the privacy policy of that platform’s operator, you explored the sites. It means these policies have different elements from what our site does. Therefore, users should be responsible for reviewing those policies or seeking access to the policies from the domain owner before the process of using those applications or web portals.

Here, we announce that we do not accept any sort of responsibility or liability for the usage of your personal information by these third parties or their policies.`,
    },
    "Your Consent": {
      icon: Fee,
      // title: "Fees",
      subtitle: "Your Consent",
      content: `NTAR staunchly believes in processing your personal information only with your consent. Using NTAR's official website or app means you will need to share needed Personal Information. By continuing on the site or app means you agree to the processing of your Personal Information by NTAR in accordance with the Privacy Policy term.

In case the user unearths any Personal Information associated with other people, you are entitled to have the authority to do so and permit NTAR to use the information according to our Privacy Policy. Moreover, you also agree and authorize NTAR to communicate via channels such as NTAR Calls and Emails for the motto of believing in the policy.
`,
    },
    "Rectification and Consent": {
      icon: book,
      // title: "Communication",
      subtitle: "Personal Information Access/Rectification and Consent",
      content: `NTAR users are allowed to access and review their Personal Information shared by just placing a request with us. Moreover, you may at any time revoke the consent that you have given us to accumulate your e-KYC-related data following the part of the Aadhaar-oriented e-KYC process. However, you may not be able to access services if the case revokes the consent. Here, it is needed to mention that in some cases we probably keep going on to retain your information following the “Storage and Retention” section of the policy. To raise any sort of request mentioned above, you probably write to us following the contact information imparted under
the “Contact Us section followed by this policy.

Following this case you will be required to delete your account or personal information, please make sure that you go with the “Help” section of the NTAR platform. However, retention of your Personal Information will be considered the subject of applicable laws. Following security measures, users can find themselves at peace that their personal information would not be disclosed to any third party having no right to get it.

NTAR users must check out all the mentioned Terms and Conditions specified regarding all mentioned products and services in case they require more in-depth information associated with any product or service. At NTAR, you can easily access all this information. You may contact the official to seek more assistance.
`,
    },
    "Children's Information": {
      icon: Education,
      subtitle: "Children's Information",
      content: `NTAR is a highly responsible platform and it does not knowingly solicit or accumulate Personal information from children under the age of 18. We clearly mention that the NTAR platform can be used only to persons who can form a legally binding contract under the Indian Contract Act, 1872. If the user does not meet our eligibility policy then you must use the Platform or service under the supervision of, your legal guardian, your parent's mother/father, or any responsible sibling who is an adult.`,
    },
    "Changes to Policy": {
      icon: goldsavings,
      // title: "Security",
      subtitle: "Changes to Policy",
      content: `NTAR is a reputed and established brand and our business changes constantly which leads to changes in our policies as well. Being a distinguished brand, we hold the right at our sole discretion, to add any altercation, to add or delete any portions of the Privacy Policy at any time irrespective of publishing any written notice in advance.

Moreover, we may reasonably endeavor to make you aware of the changes, its users
responsibility to keep checking or going through the mentioned Privacy policy to understand if any updates or changes have been done or not.

Users' continued use of NTAR’s services or platform means you accept and agree to added changes. We always believe in maintaining the trust of our customers and adhere to policies which are fully protecting users' Personal Information indeed.
`,
    },
    "Contact Us": {
      icon: Eligibility,
      // title: "User Responsibilities",
      subtitle: "Contact Us",
      content: `If you have any sort of query, complaint, concern, or doubt regarding the Personal Information or the mentioned Privacy Policy, do write to us NTAR’s Privacy officials using the mentioned link https://ntar.com/ We adhere to answer you within the stipulated time. For us, our customer’s satisfaction is the utmost asset.`,
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
              <a
                style={{ textDecoration: "none", color: "black" }}
                href="/Privacypolisymenu"
              >
                <p style={{ margin: "0px" }}>
                  <span style={{ fontFamily: "Youth_bold", fontSize: "13px" }}>
                    Privacy{" "}
                  </span>
                  / {selectedSection}
                </p>
              </a>

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

export default Faqsection;
