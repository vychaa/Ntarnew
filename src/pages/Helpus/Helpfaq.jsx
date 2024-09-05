import React, { useState } from "react";
import "./Helpfaq.css";
import Help from "../../components/Help/Help.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import book from "../../assets/images/book.png";
import Education from "../../assets/images/education.png";
import goldsavings from "../../assets/images/goldsav.png";
import Eligibility from "../../assets/images/Eligibility.png";
import Accountreg from "../../assets/images/Accountreg.png";
import Headernew from "../../components/Headernew/Headernew.jsx";

const Helpfaq = () => {
  
  const [selectedSection, setSelectedSection] = useState("Getting Started");
  const [expandedItemIndex, setExpandedItemIndex] = useState(null); // State to track expanded item

  // Data for the different sections
  const sections = {
    "Getting Started": {
      icon: book,
      subtitle: "Getting Started Basics",
      content: [
        {
          title: "What is NTAR?",
          details:
            "NTAR is a financial app designed to make bill payments, recharge services, and financial management easier. It offers various services like recharges and bill payments, expense management, and lending and credit solutions.",
        },
        {
          title: "How do I sign up for NTAR?",
          details:
            "You can sign up for NTAR by downloading the app from the Google Play Store or the Apple App Store. Follow the on-screen instructions to create an account using your mobile number.",
        },
        {
          title: "What services are available on NTAR?",
          details:
            "With NTAR, you can make bill payments, recharge your phone, transfer money, apply for loans, manage finances, and more. Explore the app to see all the services available.",
        },
        {
          title: "How do I connect my bank account to NTAR?",
          details:
            "You can securely connect your bank account to NTAR by providing the required OTP authentication during the setup process. NTAR uses industry-standard security measures to protect your financial data.",
        },
        {
          title: "What happens if my transaction fails?",
          details:
            "Refunds for failed transactions are usually processed automatically within 5-7 business days. If you haven't received your refund, please contact NTAR customer support with transaction details. Also, regularly check your bank statement for confirmation.",
        },
        {
          title: "How do I track my expenses with NTAR?",
          details:
            "With NTAR’s service, you can easily track and manage your daily expenses. Simply connect your bank account and allow the app to automate the expense tracking process.",
        },
        {
          title: "Is NTAR secure to use?",
          details:
            "Yes, NTAR uses industry-standard encryption and security measures to protect your data. While we take every precaution to prevent unauthorized access, we cannot guarantee against fraudulent activities. Please be vigilant and report any suspicious activity to our support team.",
        },
        {
          title: "What should I do if I encounter an issue with the app?",
          details:
            "If you face any issues while using the NTAR app, please reach out to our customer support team via the app or through our website’s support section. We are here to help!",
        },
        {
          title: "I can't complete my registration on NTAR. What should I do?",
          details:
            "If you're facing issues registering on NTAR, ensure that your mobile number is active and linked to your bank account. Clear any cache and try reinstalling the app. If the problem persists, contact NTAR customer support for assistance.",
        },
        {
          title: "I have a transaction-related concern. What should I do?",
          details:
            "For transaction-related issues, visit the 'Help & Support' section in the NTAR app and select your transaction concern. You can also contact NTAR customer support with your transaction ID for further assistance.",
        },

        {
          title: "Can I use NTAR outside India?",
          details:
            "Currently, NTAR services are only available for use within India. International usage is not supported.",
        },
        {
          title: "Are there any charges for using NTAR?",
          details:
            "NTAR is free to download and use for most services. However, certain transaction services may carry nominal charges. Please refer to the 'Fees & Charges' section in the app for detailed information.",
        },
        {
          title: "Who can use NTAR?",
          details:
            "Anyone with a valid Indian mobile number and bank account can use NTAR. Users must be 18 years or older to access financial services on the app.",
        },
        {
          title: "How does NTAR verify my mobile number during registration?",
          details:
            "NTAR verifies your mobile number by sending a One-Time Password (OTP) to the number you enter during registration. Enter the OTP in the app to complete the verification process.",
        },
        {
          title: "What are the benefits of using NTAR for online payments?",
          details:
            "Using NTAR for online payments offers several benefits, including quick and secure transactions, the ability to manage multiple billers in one place, and access to special offers and rewards on certain payments.",
        },
        {
          title: "What should I do if my PAN verification has failed?",
          details:
            "If your PAN verification fails, ensure that the details entered are accurate and match your PAN card. If the issue continues, reach out to NTAR support for help.",
        },
        {
          title: "Can I skip the update and continue using the app?",
          details:
            "Updates are essential for security and functionality. While you can skip an update temporarily, it is recommended to update the app to the latest version to ensure optimal performance and security.",
        },
        {
          title: "Why am I unable to log in to NTAR?",
          details:
            "If you're unable to log in, check your internet connection, and ensure that you are using the correct mobile number and OTP. If the issue persists, try resetting the app or contacting customer support.",
        },
        {
          title: "Why is KYC necessary?",
          details:
            "KYC (Know Your Customer) is necessary to verify your identity and ensure compliance with regulatory requirements. It helps prevent fraudulent activities and enhances the security of your NTAR account.",
        },
        {
          title: "Is it mandatory to upload my PAN card for KYC?",
          details:
            "Yes, uploading your PAN card is mandatory for completing your full KYC verification on NTAR. This is required for financial transactions and regulatory compliance.",
        },
        {
          title: "What is the purpose of the NTAR App?",
          details:
            "Answer: The NTAR App is designed to simplify your financial life by offering a wide range of services in one convenient platform. With NTAR, you can: Recharge your mobile, DTH, and pay utility bills easily. Track and manage your daily expenses. Connect and monitor your bank accounts securely. Save and invest in gold with features like Save a Gold. Pay credit card bills, rent, and even loans. Access rewards, insurance, and POS services.",
        },
      ],
    },
    Pay: {
      icon: Education,
      subtitle: "Bill payments:",
      content: [
        {
          title: "Is it safe to transfer money using NTAR?",
          details:
            "Yes, NTAR uses industry-standard encryption and security protocols to ensure that your money transfers are safe and secure.",
        },
        {
          title: "Is it safe to link my bank account to NTAR?",
          details:
            "Yes, NTAR follows stringent security measures to protect your bank account information. All bank account details are encrypted and stored securely.",
        },
        {
          title: "Why am I unable to send or receive money on NTAR?",
          details:
            "If you are unable to send or receive money, ensure that your bank account is correctly linked, and your mobile number is active. Check for any app updates or bank server downtime. If the issue continues, contact customer support.",
        },
        {
          title: "What should I do for transaction-related queries on NTAR?",
          details:
            "For any transaction-related queries, access the 'Transaction History' section in the app. If you still need assistance, go to 'Help & Support' and select your concern or reach out to NTAR support.",
        },
        {
          title: "What bills can I pay using NTAR Bill Pay?",
          details:
            "NTAR Bill Pay allows you to pay various types of bills, including electricity, water, gas, mobile recharge, broadband, and more. Check the 'Bill Pay' section for the full list of supported billers.",
        },
        {
          title: "I can't see the Bill Pay option with my linked bank account?",
          details:
            "If you can't see the Bill Pay option with your linked bank account, ensure that your bank account is properly linked and your mobile number is verified. If the issue persists, try updating the app or contact customer support.",
        },
        {
          title: "Can I check my bill details before making a payment?",
          details:
            "Yes, NTAR allows you to review your bill details before confirming payment. In the 'Bill Pay' section, select your biller, and the app will display your bill amount and due date.",
        },
        {
          title: "What are the steps for making a bill payment on NTAR?",
          details: `To pay bills on NTAR, follow these steps:

Open the NTAR app and go to the 'Bill Pay' section.

Select the biller or category (e.g., electricity, water, mobile).

Enter the necessary details

Review your bill and confirm the payment amount.

Complete your payment.
`,
        },
        {
          title: "Do I receive a confirmation for the payment immediately?",
          details:
            "Yes, you will receive a payment confirmation in the NTAR app immediately after the transaction is successful. Additionally, you'll receive an SMS or email from your bank and the biller, depending on their notification process.",
        },
        {
          title:
            "During bill payment, my bank account was debited, but the bill payment failed. When will I get my money back?",
          details:
            "If the payment failed but your bank account was debited, the amount will usually be refunded to your account within 5-7 business days. If the refund is delayed, please contact NTAR customer support with your transaction details.",
        },
      ],
    },
    "Pay Rent": {
      icon: goldsavings,
      subtitle: "Pay Rent",
      content: [
        {
          title: "How does NTAR pay my landlord?",
          details:
            "When you submit your landlord’s bank details on NTAR and make your payment, we verify these details and transfer the rent amount directly to your landlord’s bank account. Please note that transfer may take up to 2 working days to reflect in your landlord’s bank account",
        },
        {
          title: "How can I pay my rent using NTAR?",
          details: `To pay your rent through NTAR, open the NTAR App and navigate to the "Rent Payment" section. Enter the landlord’s details, the amount due, and any other required information. Follow the prompts to complete the payment securely.`,
        },
        {
          title: "Are there any fees for paying rent through NTAR?",
          details:
            "NTAR may charge a nominal fee for processing rent payments. The fee details will be displayed before you confirm the payment. Check the app’s fee schedule for more information.",
        },
        {
          title: "What payment methods can I use to pay rent via NTAR?",
          details:
            "You can use various payment methods including bank transfers, debit/credit cards, and other supported payment options available in the NTAR App to pay your rent.",
        },
        {
          title: "Can I track my rent payments in NTAR?",
          details: `Yes, NTAR provides a history of all your rent payments. You can view past transactions and payment details in the "Payment History" section of the app.`,
        },
        {
          title:
            "What should I do if I encounter an issue with my rent payment?",
          details:
            "If you face any issues with your rent payment, contact NTAR customer support through the app or website. Provide details about the problem, and our support team will assist you in resolving it.",
        },
        {
          title: "How long does it take for a rent payment to be processed?",
          details:
            "Rent payments through NTAR are usually processed quickly. However, the exact time may vary depending on the payment method and bank processing times. You will receive a confirmation once the payment is successfully completed.",
        },
        {
          title: "Is my rent payment secure with NTAR?",
          details:
            "Yes, NTAR employs industry-standard security measures to ensure your rent payments are secure. All transactions are encrypted and processed through secure channels to protect your financial information.",
        },
        {
          title: "In which locations is rent payment available with NTAR?",
          details:
            "NTAR supports rent payments in select locations across India. To verify if rent payment services are available in your area, please check the NTAR App or contact our customer support. We are actively working to expand our coverage to more locations.",
        },
        {
          title: "Can I cancel a rent payment once it has been initiated?",
          details:
            "Once a rent payment is processed, it cannot be canceled. If you need to address an issue with a payment, please contact NTAR customer support for assistance and guidance on next steps.",
        },
        {
          title:
            "How do I contact NTAR customer support for issues with rent payments?",
          details: `To contact NTAR customer support regarding issues with rent payments, open the NTAR App and go to the "Help" or "Support" section. You can either use the in-app chat feature, submit a support request, or find contact details such as email or phone number. Our support team is available to assist you with any questions or concerns you may have.`,
        },
        {
          title: "What happens if my rent payment fails?",
          details: `Once a rent payment is processed, it cannot be canceled. If you need to address an issue with a payment, please contact NTAR customer support for assistance and guidance on next steps.`,
        },
      ],
    },

    "Credit Card Bill Payment": {
      icon: Eligibility,
      subtitle: "Credit Card Bill Payment",
      content: [
        {
          title: "How can I pay my credit card bill using NTAR?",
          details: `To pay your credit card bill using NTAR, follow these steps:
            
Open the NTAR app and log in to your account.

Navigate to the “Bill Payments” section.

Select “Credit Card” from the list of payment options.

Enter your necessary details

Input the payment amount and confirm the payment details.

Complete the payment by following the on-screen instructions.
`,
        },
        {
          title:
            "Are there any fees for paying my credit card bill through NTAR?",
          details:
            "NTAR may charge a nominal convenience fee for processing credit card payments. The exact fee, if applicable, will be displayed before you finalize the payment.",
        },
        {
          title: "How do I know if my credit card payment was successful?",
          details:
            "Once you complete a payment, you will receive a confirmation notification on the NTAR app and an email receipt (if your email is registered with NTAR). You can also check the payment status in the “Transaction History” section of the app.",
        },
        {
          title: "What should I do if my credit card payment fails?",
          details: `If your credit card payment fails, please:

Check that your card details were entered correctly.

Ensure you have sufficient funds or credit limit available.

Contact your credit card issuer to confirm there are no issues with your card.

If the issue persists, please contact NTAR customer support for further assistance.
`,
        },

        {
          title: "Are credit card payments secure on NTAR?",
          details:
            "Yes, NTAR uses industry-standard encryption and security protocols to protect your credit card information. All transactions are securely processed to ensure your financial data is safe.",
        },

        {
          title: "Can I cancel a credit card payment once it’s been made?",
          details:
            "Once a credit card payment is processed through NTAR, it cannot be canceled. If you need to address any issues with the payment, please contact NTAR customer support for assistance.",
        },

        {
          title:
            "Are there any limitations on the amount I can pay towards my credit card bill?",
          details:
            "NTAR does not impose specific limits on the amount you can pay towards your credit card bill. However, your credit card issuer may have their own limits or restrictions on payments.",
        },
        {
          title: "How do I receive a confirmation of my credit card payment?",
          details: `After completing a credit card payment, you will receive a confirmation:
          
In-App Notification: A notification within the NTAR app.

Email Receipt: An email sent to the address associated with your NTAR account.

Transaction History: Payment details will be available in the “Transaction History” section of the NTAR app.
`,
        },

        {
          title: "How often can I make credit card payments using NTAR?",
          details:
            "You can make credit card payments as often as needed through NTAR. However, ensure that each payment is processed individually and confirm that you do not exceed your credit limit.",
        },

        {
          title:
            "What if my credit card payment is charged incorrectly or the amount is wrong?",
          details: `If you notice an incorrect charge or payment amount:

Contact NTAR customer support immediately with details of the transaction.

Also, reach out to your credit card issuer to report the discrepancy.
`,
        },

        {
          title:
            "Is it possible to track the status of a pending credit card payment?",
          details: `Yes, you can track the status of a pending credit card payment:

Check the “Transaction History” section in the NTAR app for updates.

If there are delays or issues, contact NTAR customer support for assistance.
`,
        },
        {
          title:
            "What are the advantages of paying my credit card bill online with NTAR?",
          details: `Convenience: Pay anytime, anywhere using your mobile device.

Speed: Instant payments ensure timely processing and avoid late fees.

Security: Advanced encryption protects your payment information.

Tracking: Easily view and manage payment history within the app.

Simplicity: User-friendly interface makes payment easy and hassle-free.
`,
        },
        {
          title: "Is it easy to use NTAR for credit card bill payments?",
          details:
            "Absolutely. NTAR’s user-friendly interface makes it easy to pay your credit card bills with just a few taps.",
        },
      ],
    },

    "Tuition Fee": {
      icon: Accountreg,
      subtitle: "Tuition Fee",
      content: [
        {
          title: "How can I pay my child's online tuition fee through NTAR?",
          details: `You can pay online tuition fees through NTAR by selecting the "Education" category in the app. Enter the required details, such as the institution's name and the student's information, and follow the prompts to complete the payment securely using your preferred payment method.`,
        },
        {
          title:
            "Are there any transaction fees for paying tuition fees through NTAR?",
          details:
            "NTAR does not charge additional transaction fees for paying tuition fees. However, please check with your educational institution if they have any processing fees associated with the payment.",
        },
        {
          title: "How can I check if my tuition fee payment was successful?",
          details: `After completing the payment, you will receive a confirmation receipt via email or SMS. You can also view your payment history in the NTAR app under the "Transaction History" section to verify the status of your payment.`,
        },
        {
          title:
            "What should I do if my payment is not reflected in the institution's records?",
          details:
            " If your payment is not reflected in the institution's records, please contact NTAR customer support with your transaction details for assistance. Additionally, you may want to confirm with your institution that they have received the payment",
        },
        {
          title: "Can I schedule future tuition fee payments through NTAR?",
          details:
            " Currently, NTAR does not offer the option to schedule future tuition fee payments. You will need to make payments manually when they are due.",
        },
        {
          title:
            "How do I request a refund if I accidentally pay the wrong amount or make a duplicate payment?",
          details:
            "If you accidentally pay the wrong amount or make a duplicate payment, please contact NTAR customer support with your transaction details and request a refund. Refunds will be processed according to NTAR’s refund policy.",
        },
        {
          title:
            "What should I do if my payment is not reflected in the institution's records?",
          details:
            " If your payment is not reflected in the institution's records, please contact NTAR customer support with your transaction details for assistance. Additionally, you may want to confirm with your institution that they have received the payment",
        },
        {
          title:
            "Is my payment information secure when paying tuition fees through NTAR?",
          details:
            " Yes, NTAR uses industry-standard encryption and security measures to protect your payment information. We ensure that all transactions are secure and confidential.",
        },
        {
          title:
            "Can I use NTAR to pay tuition fees for multiple students at once?",
          details:
            "Currently, NTAR processes one payment per transaction. You will need to make separate payments for each student’s tuition fee.",
        },
        {
          title: "How can I update my payment method for tuition fee payments?",
          details: `You can update your payment method in the NTAR app by going to the "Payment Methods" section under your account settings. Here, you can add or modify your payment information as needed.`,
        },
        {
          title:
            "Who should I contact if I have additional questions or issues with my tuition fee payment?",
          details: `For any additional questions or issues, please reach out to NTAR customer support through the app or visit our website for contact information.`,
        },
      ],
    },

    QR: {
      icon: Accountreg,
      subtitle: "QR",
      content: [
        {
          title: "What is QR Pay in NTAR?",
          details: `QR Pay is a feature within the NTAR app that allows you to make payments by scanning a QR code. This feature enables quick and secure transactions at participating merchants or service providers.`,
        },
        {
          title: "How do I use QR Pay to make a payment?",
          details: `To use QR Pay, open the NTAR app and navigate to the QR Pay section. Tap on "Scan QR Code," position your camera over the QR code provided by the merchant or service provider, and confirm the payment amount. Follow the prompts to complete the transaction.`,
        },
        {
          title: "Do I need to be connected to the internet to use QR Pay?",
          details: `Yes, you need an active internet connection to use QR Pay. The app requires internet access to process and verify your payment in real-time.`,
        },
        {
          title: "Is QR Pay secure?",
          details:
            " Yes, QR Pay is secure. NTAR employs industry-standard encryption and security measures to protect your payment information and ensure that transactions are safe and confidential.",
        },
        {
          title: "What should I do if the QR code does not scan?",
          details:
            "If the QR code does not scan, make sure the code is clear and properly aligned within the scanning frame. You can also try adjusting the lighting or distance from the code. If issues persist, contact the merchant or NTAR customer support for assistance.",
        },
        {
          title: "Can I use QR Pay to make payments to any merchant?",
          details:
            "QR Pay can be used at any participating merchant or service provider that supports QR code payments through NTAR. Make sure the merchant accepts QR Pay before attempting a transaction.",
        },
        {
          title: "How do I view my QR Pay transaction history?",
          details: `To view your QR Pay transaction history, go to the "Transaction History" section in the NTAR app. Here, you can find a record of all your QR Pay transactions along with details and status.`,
        },
        {
          title:
            "What should I do if I receive a payment request with an incorrect amount?",
          details:
            "If you receive a payment request with an incorrect amount, do not proceed with the payment. Contact the merchant to verify the amount and correct any discrepancies before completing the transaction.",
        },
        {
          title: "Can I cancel a payment made through QR Pay?",
          details:
            "Once a payment is completed through QR Pay, it cannot be canceled. If you encounter issues with a payment, please contact NTAR customer support for assistance with any disputes or concerns.",
        },
        {
          title: "Who should I contact if I have issues with QR Pay?",
          details: `For any issues with QR Pay, including scanning problems or payment disputes, please contact NTAR customer support through the app or visit our website for further assistance.
`,
        },
        {
          title:
            "I did a transaction, but it is showing as pending. What should I do?",
          details: `Pending transactions usually resolve automatically within a TAT time. If the transaction remains pending for a prolonged period, reach out to NTAR support with your transaction ID for further assistance.`,
        },

        {
          title:
            "I sent money to the wrong person. Can I reverse the transaction?",
          details: `Once a transaction is completed, it cannot be reversed through NTAR. You can try contacting the recipient directly to request a refund. If you need further help, contact NTAR support.`,
        },

        {
          title:
            "How long does it take for an online payment transaction on NTAR to complete?",
          details: `Most online payment transactions on NTAR are processed instantly. However, in some cases, it may take a few minutes depending on network conditions or server delays.`,
        },

        {
          title: "How can I check the status of my pending transaction?",
          details: `For pending transactions, NTAR will automatically update the status within the app once the transaction is processed. If the status remains pending for an extended period, you can check the 'Transaction History' section or contact NTAR support.`,
        },
      ],
    },

    Pots: {
      icon: Accountreg,
      subtitle: "Save",
      content: [
        {
          title: "How do I download the NTAR App?",
          details: `You can download the NTAR App by following these steps:
Android Devices:
Open the Google Play Store on your Android device.
Search for "NTAR" in the search bar.
Look for the NTAR app developed by NTAR PRIVATE LIMITED.
Tap on the "Install" button to download and install the app on your device.

iOS Devices:
Open the Apple App Store on your iPhone or iPad.
Search for "NTAR" in the search bar.
Look for the NTAR app by NTAR PRIVATE LIMITED.
Tap "Get" to download and install the app.
`,
        },
        {
          title:
            "Is KYC required to start investing in Digital Gold using the NTAR App?",
          details: `Yes, KYC (Know Your Customer) verification is required to start investing in Digital Gold through the NTAR App. Completing your KYC ensures a secure and seamless experience while complying with regulatory guidelines. The process is simple and can be completed directly within the app. Once your KYC is verified, you'll be ready to start investing in Digital Gold effortlessly.   `,
        },
        {
          title: "When can I withdraw my savings from the NTAR App?",
          details: `You can withdraw your savings anytime directly from the NTAR App. Simply follow the in-app instructions to transfer your funds securely to your bank account.`,
        },
        {
          title: "What is Digital Gold?",
          details:
            " Digital Gold is a way to invest in gold without physically holding it. Through platforms like the NTAR App, you can buy, sell, and store gold digitally. Your purchased gold is backed by real, physical gold and securely stored in vaults, allowing you to benefit from gold's value without worrying about storage or security.",
        },
        {
          title: "Is Digital Gold real gold?",
          details: `Yes, Digital Gold is real gold. When you invest in Digital Gold through platforms like the NTAR App, you're purchasing a share of physical gold that is securely stored in a vault.`,
        },
        {
          title: "Where is my Digital Gold stored?",
          details:
            "Your Digital Gold is securely stored in high-quality vaults managed by trusted custodians. This ensures that your investment is protected and backed by actual physical gold, even though you access and manage it digitally through the NTAR App.",
        },
        {
          title: "How can I convert my Digital Gold to physical gold?",
          details: `Converting your Digital Gold to physical gold, including Gold Coins or Gold Bars, is straightforward and can be done at any time.`,
        },
        {
          title: "How can I check today's Digital Gold price?",
          details:
            "To view the current price of Digital Gold, download the NTAR App and navigate to the Home Screen. The current Gold Buy Price will be displayed at the top-right corner of the screen.",
        },
        {
          title: "How does Gold Savings work?",
          details:
            "You invest in Digital Gold through the NTAR App, which accumulates over time. Your investment is backed by real physical gold stored in a secure vault, and you can track your gold savings directly in the app.",
        },
        {
          title: "What is Gold Savings in NTAR?",
          details: `Gold Savings with NTAR allows you to invest in and save gold digitally. You can accumulate gold over time, which is securely stored in a vault, and benefit from gold’s value appreciation.`,
        },
        {
          title: "Can I track the performance of my gold savings?",
          details: `Yes, the NTAR App provides detailed tracking of your gold savings. You can view your gold balance, transaction history, and the current value of your gold investments anytime through the app.`,
        },

        {
          title: "Are there any limits on how much gold I can save?",
          details: `NTAR does not impose strict limits on the amount of gold you can save. However, there may be certain guidelines or minimums for transactions and investments. Check the app for specific details related to your savings.`,
        },

        {
          title: "How can I redeem my Gold Savings if I need cash?",
          details: `If you need cash, you can sell your Digital Gold through the NTAR App and transfer the proceeds to your bank account. Follow the app’s instructions for selling your gold and managing the funds.`,
        },

        {
          title: "How do I buy Digital Gold?",
          details: `To buy 24k Digital Gold, simply create an account on the NTAR App in just 45 seconds. Once your account is set up, you can purchase Digital Gold directly through the app. For added convenience, you can also have Gold Coins or Gold Bars delivered to your doorstep by placing an order within the NTAR App.`,
        },
      ],
    },

    Manage: {
      icon: Accountreg,
      subtitle: "Manage",
      content: [
        {
          title: `How does "Expensive Manage" help with financial planning?`,
          details: `The feature helps you with financial planning by providing insights into your high-value expenses. It offers tools for analyzing spending patterns and creating budgets, helping you make informed financial decisions and plan for future expenses.`,
        },
        {
          title: `Is my data secure with "Expensive Manage"?`,
          details: `Yes, NTAR prioritizes the security of your financial data. "Expensive Manage" uses industry-standard security measures to protect your information and ensure that your expense tracking is safe and confidential.`,
        },
        {
          title: `What should I do if I encounter issues with "Expensive Manage"?`,
          details: `If you experience any issues or have questions about "Expensive Manage," please reach out to NTAR customer support. You can contact us through the app or visit our website for assistance. We're here to help you with any concerns you may have.`,
        },
        {
          title: `What is the "Expensive Manage" feature?`,
          details: `The "Expensive Manage" feature in NTAR is designed to help you manage and track your high-value expenses. It provides tools to categorize, monitor, and plan for significant expenditures, ensuring you stay on top of your financial commitments.`,
        },
        {
          title: `How do I access the "Expensive Manage" feature?`,
          details: `To access "Expensive Manage," log in to your NTAR account and navigate to the "Expensive Manage" section. You will find options to input and categorize your high-value expenses, as well as tools to review and analyze them.`,
        },
        {
          title: "What types of expenses can I manage with this feature?",
          details: `You can use "Expensive Manage" to handle various high-value expenses, such as major purchases, investments, and significant bills. The feature allows you to categorize these expenses and track their impact on your overall budget.`,
        },
        {
          title: "How can I track my daily expenses using NTAR?",
          details: `To track your daily expenses with NTAR, log in to your account and navigate to the "Expense Tracker" section. Here, you can input and categorize your expenses, view summaries of your spending, and generate reports to monitor your financial habits over time.`,
        },
        {
          title:
            "How does NTAR ensure the security of my personal and financial information?",
          details:
            "NTAR uses industry-standard security measures to protect your personal and financial information. This includes encryption technology, secure servers, and regular security audits. Additionally, we employ multi-factor authentication and other safeguards to ensure that your data remains safe and confidential.",
        },
        {
          title:
            "How can I view the balances of all my bank accounts in one place using NTAR?",
          details: `To view the balances of all your bank accounts in one place, log in to your NTAR account and navigate to the "Bank Accounts" section. Here, NTAR consolidates and displays the balances from all linked accounts. You can easily see an overview of your financial status without having to check each account individually.`,
        },
        {
          title: "What is my data used for, and how long do you store it?",
          details: `Your data is used solely to provide you with services on the NTAR app. We do not sell or share your data with any third parties, except as necessary to deliver the services you have consented to. We retain your data only for as long as required to fulfill these services and comply with legal and regulatory requirements.`,
        },
      ],
    },

    Borrow: {
      icon: Accountreg,
      subtitle: "Borrow",
      content: [
        {
          title: `What is NTAR Loans?`,
          details: `NTAR Loans is a service provided by NTAR that allows users to apply for and manage personal loans, business loans, or short-term loans directly through the NTAR app. It offers a convenient way to access funds with flexible repayment options.`,
        },
        {
          title: `How can I apply for a loan through NTAR?`,
          details: `To apply for a loan through NTAR:

Open the NTAR app and navigate to the 'Loans' section.
Choose the type of loan you wish to apply for (e.g., personal, business).
Complete the application form with your details.
Submit the required documents for verification.
Review the terms and conditions, then submit your application.
`,
        },

        {
          title: `What documents are required for a loan application?`,
          details: `The documents required may vary depending on the type of loan, but generally include:

Proof of identity (Aadhaar card, PAN card, etc.)
Proof of address
Income proof (salary slips, bank statements)
Business-related documents (for business loans)
Other documents as specified during the application process`,
        },

        {
          title: `What is the eligibility criteria for getting a loan?`,
          details: `Eligibility criteria may vary based on the type of loan, but generally include:
            
Age between 21 to 60 years
A stable source of income
A good credit score
Valid identification and address proof
For business loans, a registered business with a stable income flow
`,
        },
        {
          title: `How long does it take to get loan approval?`,
          details: `The loan approval process typically takes 1-3 business days after submitting all required documents and completing the verification process. However, the timeline may vary depending on the loan type and other factors.`,
        },
        {
          title: "What are the interest rates and repayment terms?",
          details: `Interest rates and repayment terms vary based on the loan type, loan amount, and your credit profile. The NTAR app will display the applicable interest rates and available repayment options during the application process.`,
        },
        {
          title: "How can I repay my loan?",
          details: `Yes, NTAR allows prepayment of loans. However, please check the terms and conditions of your specific loan for any applicable prepayment charges or conditions.`,
        },
        {
          title: "Can I prepay my loan?",
          details:
            "Yes, NTAR allows prepayment of loans. However, please check the terms and conditions of your specific loan for any applicable prepayment charges or conditions",
        },
        {
          title: "What happens if I miss a loan repayment?",
          details: `Missing a loan repayment may result in penalties or additional charges. It could also impact your credit score. NTAR will send reminders before the due date to help you avoid missing a payment. If you anticipate difficulty in making a payment, please contact NTAR customer support for assistance.`,
        },
        {
          title: "How can I track my loan status?",
          details: `You can track your loan application status and repayment schedule directly in the 'Loans' section of the NTAR app. All relevant updates will be available in real-time.`,
        },

        {
          title: "What should I do if I have a problem with my loan?",
          details: `If you encounter any issues or have questions about your loan, you can reach out to NTAR customer support through the app or via our customer service hotline. Our team is here to help with any concerns you may have.`,
        },

        {
          title: "Where will NTAR transfer my loan amount?",
          details: `Your loan amount will be transferred to the bank account you select during the loan application process. `,
        },

        {
          title:
            "What are the fees? Why should I pay them? Are there hidden fees?",
          details: `Standard charges that are applicable are as follows

Processing Fee + GST
Late Payment Fee - Only in cases of delayed EMI payments
Bounce Charges - Only in cases of EMI instalment auto-debit bounce from linked Bank Account

Amount received in your bank account is after Processing Fee deduction and GST Invoice for the same will be sent on your preferred e-mail ID.
All the Charges and Fees are shown clearly in the Loan Agreement
`,
        },

        {
          title: "What happens if I miss or fail to repay my EMI on the loan?",
          details: `We strongly advise our customers to avoid missing their EMI repayments. Here’s what could happen if you do:

Reminders and Legal Action: NTAR, on behalf of the lender, will remind you through various channels to make your payment immediately. If payments are still not made, legal action may be taken.

Additional Charges: You will be charged additional interest for non-payment as outlined in your Loan Agreement, which will increase your outstanding loan balance. Until you pay the full amount, your loan will not be considered closed, and this could negatively impact your credit score.

Future Loan Offers: NTAR may decide not to offer you additional loans in the future due to missed payments.

Credit Score Impact: Missing payments will lower your credit score with agencies like CIBIL and Experian. This could make it more difficult to obtain credit cards, vehicle loans, or home loans from banks in the future.

`,
        },

        {
          title:
            "What documents will I receive during the loan process and upon loan closure?",
          details: `NTAR, on behalf of the lender, will provide the following documents to your registered email address 24/7:

Welcome Letter (upon loan activation)
Loan Agreement (upon loan activation)
EMI Repayment Schedule (upon loan activation)
Statement of Loan Account
GST Invoices for any charges paid
No Objection Certificate (NOC) (upon loan closure)`,
        },

        {
          title: "When can I apply for another loan?",
          details: `You can re-apply for a loan after 90 days. Please note that this time frame may be adjusted based on the lender partner’s policy`,
        },

        {
          title: "My loan application was rejected. How can I reapply?",
          details: `If your loan application is rejected, you can reapply by visiting the 'Loans' section in the NTAR app after a period of 90 days.
`,
        },
        {
          title:
            "I've paid my EMI but am still receiving reminders. What should I do?",
          details: `To address this issue, please visit the Help section in your NTAR app to report the situation.`,
        },
        {
          title:
            "Can I use my personal email for NTAR if I don't have a work email?",
          details: `No, you need to use a work email for NTAR services. Personal emails are not accepted to ensure secure and professional communication.`,
        },
        {
          title: "Will NTAR contact my employers?",
          details: `No, NTAR will not contact your employers. We request your official email ID solely for the purpose of verifying your employment, in accordance with our lender partner policies. This verification is a standard procedure and does not involve any direct contact with your employer.`,
        },
        {
          title: "Why do I need to provide a work email?",
          details: `A work email is needed to verify your employment as per the policies of our lender partners. This requirement helps to ensure that your application is processed accurately and securely.`,
        },
      ],
    },

    Club: {
      icon: Accountreg,
      subtitle: "Club",
      content: [
        {
          title: `What are NTAR Gift Cards?`,
          details: `NTAR Gift Cards are prepaid cards that can be used to make purchases or payments through the NTAR app. They offer a convenient way to shop, pay bills, or even gift funds to others.`,
        },
        {
          title: `How can I purchase an NTAR Gift Card?`,
          details: `You can purchase NTAR Gift Cards directly through the NTAR app. Simply go to the 'Gift Cards' section, select the amount, and complete the payment process.`,
        },

        {
          title: `Are there any fees associated with NTAR Gift Cards? `,
          details: `NTAR Gift Cards may be subject to a nominal issuance fee, which will be displayed during the purchase process. Please check the details before completing your purchase.`,
        },

        {
          title: `Can NTAR Gift Cards be used for all transactions?`,
          details: `NTAR Gift Cards can be used for most transactions within the NTAR app, including bill payments and purchases. However, they may not be valid for certain services or transactions. Please check the app for specific usage details.`,
        },
        {
          title: `How long does it take to get loan approval?`,
          details: `The loan approval process typically takes 1-3 business days after submitting all required documents and completing the verification process. However, the timeline may vary depending on the loan type and other factors.`,
        },
        {
          title: "How do I check the balance on my NTAR Gift Card? ",
          details: `You can check the balance of your NTAR Gift Card by navigating to the 'Gift Cards' section in the NTAR app. Enter your card details to view the current balance.`,
        },
        {
          title: "Can I reload my NTAR Gift Card? ",
          details: `Currently, NTAR Gift Cards are not reloadable. Once the balance is used up, you will need to purchase a new card if you wish to continue using this payment method.`,
        },
        {
          title: "What should I do if my NTAR Gift Card is lost ?",
          details:
            "If your NTAR Gift Card is lost , please contact NTAR customer support immediately. Provide your card details and proof of purchase, and we will assist you in deactivating the lost card and issuing a replacement if applicable.",
        },
        {
          title: "Can I return or exchange my NTAR Gift Card?",
          details: `NTAR Gift Cards are non-returnable and non-exchangeable. Once purchased, they cannot be refunded or exchanged for cash.`,
        },
        {
          title: "Do NTAR Gift Cards have an expiration date?",
          details: `NTAR Gift Cards have an expiration date, which is typically indicated on the card or in the app. Please use your card before the expiration date to avoid losing any remaining balance.`,
        },

        {
          title: "How do I use an NTAR Gift Card for payments?",
          details: ` To use an NTAR Gift Card for payments, select 'Gift Card' as your payment method during checkout. Enter your card details, and the amount will be deducted from your card balance.`,
        },

        {
          title: "Can I use an NTAR Gift Card internationally?",
          details: `Currently, NTAR Gift Cards are only valid for transactions within India. They cannot be used for international purchases.`,
        },

        {
          title: "What if I have issues with my NTAR Gift Card?",
          details: `If you encounter any issues with your NTAR Gift Card, please contact NTAR customer support. Provide your card details and a description of the issue, and our team will assist you in resolving the problem.`,
        },
      ],
    },

    Rewards: {
      icon: Accountreg,
      subtitle: "Rewards",
      content: [
        {
          title: `What are NTAR rewards?`,
          details: `NTAR rewards are incentives you earn through using our app for various transactions and activities. These can include points, cashbacks, discounts, or other benefits depending on the activity or promotion.`,
        },
        {
          title: `How can I earn rewards?`,
          details: `You can earn rewards by performing eligible transactions such as bill payments, recharges, and using specific services through the NTAR app. Keep an eye on promotional offers and campaigns for additional opportunities to earn rewards.`,
        },

        {
          title: `Where can I view my rewards balance? `,
          details: `You can view your rewards balance by logging into your NTAR account and navigating to the 'Rewards' section. This area will display your current points, cashback, and any active offers.`,
        },

        {
          title: `How can I redeem my rewards?`,
          details: `To redeem your rewards, go to the 'Rewards' section in the app and select the reward you wish to use. Follow the prompts to apply your rewards to your transactions or convert them into other benefits as specified.`,
        },
        {
          title: `How long does it take to get loan approval?`,
          details: `The loan approval process typically takes 1-3 business days after submitting all required documents and completing the verification process. However, the timeline may vary depending on the loan type and other factors.`,
        },
        {
          title: "Are there any restrictions on using rewards?",
          details: `Yes, rewards may have certain restrictions, such as minimum transaction amounts or exclusions on specific services. Please refer to the terms and conditions for each reward offer to understand any limitations.`,
        },
        {
          title: "Do my rewards expire? ",
          details: `Yes, rewards may have an expiration date. The expiration date will be displayed in the 'Rewards' section of the app. Make sure to use your rewards before they expire to avoid losing them.`,
        },
        {
          title: "Can I transfer my rewards to another account?",
          details:
            "Currently, rewards are non-transferable and can only be used within your own account. We do not support the transfer of rewards between accounts.",
        },
        {
          title: "What should I do if I have issues with my rewards?",
          details: `If you encounter any issues with your rewards, such as discrepancies or technical problems, please contact NTAR customer support. Provide details of the issue, and our team will assist you in resolving it.`,
        },
        {
          title: "How often are rewards updated?",
          details: `Rewards are updated in real-time or shortly after eligible transactions are completed. If you believe your rewards balance is incorrect, please contact customer support for assistance.`,
        },

        {
          title: "Can I combine rewards with other offers?",
          details: ` To use an NTAR Gift Card for payments, select 'Gift Card' as your payment method during checkout. Enter your card details, and the amount will be deducted from your card balance.`,
        },

        {
          title: "Can I use an NTAR Gift Card internationally?",
          details: `The ability to combine rewards with other offers varies. Some rewards may be used in conjunction with promotions, while others may not. Check the specific terms and conditions of each offer to see if combining is allowed.`,
        },
      ],
    },
  };

  const toggleDropdown = (index) => {
    setExpandedItemIndex(expandedItemIndex === index ? null : index);
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
                    <a href="#" onClick={() => setSelectedSection(section)}>
                      <img
                        src={sections[section].icon}
                        alt={section}
                        className="sidebar-icon"
                      />
                      {section}
                    </a>
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
                href="/Helpmenu"
              >
                <p style={{ margin: "0px" }}>
                  <span style={{ fontFamily: "Youth_bold", fontSize: "12px" }}>
                    Help{" "}
                  </span>
                  / {sections[selectedSection].subtitle}
                </p>
              </a>
              <h2 className="section-title">
                {sections[selectedSection].subtitle}
              </h2>

              {/* Display content in a list format with dropdown functionality */}
              <ul className="content-list">
                {sections[selectedSection].content.map((item, index) => (
                  <React.Fragment key={index}>
                    <li
                      className="content-list-item"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span className="list-item-text">{item.title}</span>
                      <span className="arrow-icon">
                        {expandedItemIndex === index ? "▼" : "➔"}
                      </span>
                    </li>
                    {expandedItemIndex === index && (
                      <div className="dropdown-content">
                        <p>{item.details}</p>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </section>
        </div>

        <Help buttonLabel="Chat Support" href="https://wa.me/9188545454" />
        <br />
        <Footer />
      </div>
    </>
  );
};

export default Helpfaq;
