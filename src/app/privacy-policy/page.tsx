import React from "react";
import styles from './styles.module.scss'

function index() {
  return (
    <div className={styles.refund_wrapper}>
      <h1>Privacy Policy</h1>
      <p>
        At <strong>Lnkr.store</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our website and services.
      </p>

      <div className="policy-section">
        <h2>
          1. <em>Information We Collect</em>
        </h2>
        <p>
          We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include your name, email address, shipping address, and payment information.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          2. <em>How We Use Your Information</em>
        </h2>
        <p>
          We use the information we collect to provide, maintain, and improve our services, process transactions, send you important updates, and personalize your experience on our platform.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          3. <em>Data Security</em>
        </h2>
        <p>
          We implement a variety of security measures to protect your personal information. These include encryption of sensitive data, regular security audits, and strict access controls for our employees.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          4. <em>Cookies and Tracking Technologies</em>
        </h2>
        <p>
          We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          5. <em>Third-Party Services</em>
        </h2>
        <p>
          We may use third-party services to help us operate our business. These services may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          6. <em>Your Rights</em>
        </h2>
        <ul>
          <li>
            You have the right to access, correct, or delete your personal information.
          </li>
          <li>
            You can opt-out of marketing communications at any time.
          </li>
          <li>
            You may request a copy of the personal data we hold about you.
          </li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>
          7. <em>Changes to This Policy</em>
        </h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          8. <em>Contact Us</em>
        </h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us at <strong>privacy@lnkr.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default index;