import React from "react";
import styles from './styles.module.scss'

function index() {
  return (
    <div className={styles.refund_wrapper}>
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to <strong>Lnkr.store</strong>. These Terms and Conditions govern your use of our website and services. By accessing or using our platform, you agree to be bound by these terms. Please read them carefully.
      </p>

      <div className="policy-section">
        <h2>
          1. <em>Acceptance of Terms</em>
        </h2>
        <p>
          By accessing or using Lnkr.store, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          2. <em>User Accounts</em>
        </h2>
        <p>
          To access certain features of our platform, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          3. <em>Intellectual Property</em>
        </h2>
        <p>
          All content on Lnkr.store, including text, graphics, logos, and software, is the property of Lnkr.store or its content suppliers and is protected by copyright laws. You may not use, reproduce, or distribute any content from our site without our express written permission.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          4. <em>Product and Service Usage</em>
        </h2>
        <p>
          Our products and services are for personal and non-commercial use unless otherwise specified. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from Lnkr.store.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          5. <em>User Conduct</em>
        </h2>
        <p>
          You agree not to use our platform for any unlawful purpose or in any way that could damage, disable, overburden, or impair our services. This includes refraining from any attempts to gain unauthorized access to any part of the site, other accounts, or any of our computer systems or networks.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          6. <em>Limitation of Liability</em>
        </h2>
        <p>
          Lnkr.store and its affiliates will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our site or services.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          7. <em>Termination</em>
        </h2>
        <p>
          We reserve the right to terminate or suspend your account and access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users, us, or third parties, or for any other reason.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          8. <em>Governing Law</em>
        </h2>
        <p>
          These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          9. <em>Changes to Terms</em>
        </h2>
        <p>
          We reserve the right to modify these Terms and Conditions at any time. We will notify users of any significant changes by posting a notice on our website. Your continued use of Lnkr.store after changes are posted constitutes your acceptance of the modified terms.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          10. <em>Contact Information</em>
        </h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at <strong>legal@lnkr.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default index;