import React from "react";
import styles from './styles.module.scss'

const RefundPolicy = () => {
  return (
    <div className={styles.refund_wrapper}>
      <h1>Refund Policy</h1>
      <p>
        At <strong>Lnkr.store</strong>, we provide a platform for creators to sell their digital products directly to consumers. Please read our refund policy carefully to understand how we handle refunds for digital products.
      </p>
      <div className="policy-section">
        <h2>1. <em>Digital Products</em></h2>
        <p>
          Due to the nature of digital products (e.g., eBooks, audio files, video content, software, or any downloadable items), all sales are final. Once a digital product has been purchased and access has been granted, we are unable to offer refunds. This policy is in place to protect the intellectual property rights of our creators and to prevent unauthorized distribution of their work.
        </p>
      </div>
      <div className="policy-section">
        <h2>2. <em>No Refund Policy</em></h2>
        <p>
          We do not provide refunds for any digital products sold on our platform. This includes, but is not limited to:
        </p>
        <ul>
          <li>Products that have been accessed, downloaded, or partially consumed</li>
          <li>Products that did not meet the buyer's expectations</li>
          <li>Accidental purchases</li>
          <li>Change of mind after purchase</li>
        </ul>
        <p>
          We encourage all buyers to carefully review the product description, preview any available samples, and consider their purchase decision before completing a transaction.
        </p>
      </div>
      <div className="policy-section">
        <h2>3. <em>Technical Issues</em></h2>
        <p>
          If you experience technical difficulties in accessing or downloading your purchased digital product, please contact our support team at <strong>support@lnkr.com</strong>. We will work with you to resolve any technical issues and ensure you can access your purchase.
        </p>
      </div>
      <div className="policy-section">
        <h2>4. <em>Fraud Protection</em></h2>
        <p>
          In cases of fraudulent transactions or unauthorized purchases, please contact your payment provider or credit card company immediately. We will cooperate fully with any investigation and take appropriate action if fraud is confirmed.
        </p>
      </div>
      <div className="policy-section">
        <h2>5. <em>Creator Responsibilities</em></h2>
        <p>
          Creators on our platform are responsible for ensuring their digital products are as described and function as intended. If you believe a product significantly misrepresents its content or functionality, please report this to our support team for review.
        </p>
      </div>
      <div className="policy-section">
        <h2>6. <em>Changes to This Policy</em></h2>
        <p>
          We reserve the right to update or change this refund policy at any time. Any changes will be reflected on this page, and it is your responsibility to review the refund policy periodically.
        </p>
      </div>
      <div className="policy-section">
        <h2>7. <em>Contact Us</em></h2>
        <p>
          If you have any questions about this refund policy, please contact us at <strong>support@lnkr.com</strong>.
        </p>
      </div>
    </div>
  );
}

export default RefundPolicy;