import React from "react";
import styles from './styles.module.scss'

const RefundPolicy = () => {
  return (
    <div className={styles.refund_wrapper}>
      <h1>Refund Policy</h1>
      <p>
        At <strong>Lnkr.store, we do not provide refunds </strong> due to the nature of our products, as they are digital. Please ensure that you review your purchase carefully before completing the transaction.
      </p>
    </div>
  );
}

export default RefundPolicy;