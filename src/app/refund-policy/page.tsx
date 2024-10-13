import React from "react";
import styles from './styles.module.scss'

function index() {
  return (

    <div className={styles.refund_wrapper}>
      <h1>Refund Policy</h1>
      <p>
        At <strong>Lnkr.store</strong>, we are committed to providing
        high-quality content, products, and services that support your business.
        However, we understand that sometimes things don't work out as planned.
        Please read our refund policy carefully to understand how refunds are
        handled.
      </p>

      <div className="policy-section">
        <h2>
          1. <em>Digital Products</em>
        </h2>
        <p>
          Due to the nature of digital products (e.g., eBooks, workout plans,
          meal guides), all sales are final. Once the content has been accessed
          or downloaded, we are unable to offer a refund. If you experience any
          issues with your purchase, please contact our support team, and we
          will be happy to assist in resolving any problems.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          2. <em>Online Courses and Subscriptions</em>
        </h2>
        <p>
          For online courses and subscription-based content, we offer a 7-day
          satisfaction guarantee. If you are unsatisfied with your purchase
          within the first 7 days of enrollment or subscription activation, you
          may request a full refund by contacting us. After 7 days, no refunds
          will be provided.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          3. <em>Personalized Services</em>
        </h2>
        <p>
          Refunds for personalized services (e.g., 1-on-1 coaching, custom
          workout plans) will be evaluated on a case-by-case basis. Please
          contact us within 48 hours of your purchase to request a refund or
          reschedule a service. Once the service has been delivered or
          initiated, refunds may not be possible.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          4. <em>Physical Products</em>
        </h2>
        <p>
          If you are not completely satisfied with any physical product (e.g.,
          fitness gear or accessories), you may return it within 14 days of
          receipt for a full refund or exchange, provided the product is unused,
          in its original packaging, and in resalable condition. Return shipping
          costs are the responsibility of the buyer.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          5. <em>How to Request a Refund</em>
        </h2>
        <p>
          To request a refund, please contact our support team at{" "}
          <strong>support@lnkr.com</strong> with your order number and
          details of the issue. We aim to process all refund requests within 3-5
          business days.
        </p>
      </div>

      <div className="policy-section">
        <h2>
          6. <em>Non-Refundable Situations</em>
        </h2>
        <ul>
          <li>
            Refunds will not be provided for any digital products that have been
            accessed, downloaded, or partially consumed.
          </li>
          <li>
            Refunds will not be issued for failure to use the purchased product
            or service.
          </li>
          <li>
            Refunds requested outside of the stipulated time frames outlined in
            this policy.
          </li>
        </ul>
      </div>

      <div className="policy-section">
        <h2>
          7. <em>Changes to This Policy</em>
        </h2>
        <p>
          We reserve the right to update or change this refund policy at any
          time. Any changes will be reflected on this page, and it is your
          responsibility to review the refund policy periodically.
        </p>
      </div>
    </div>
  );
}

export default index;
