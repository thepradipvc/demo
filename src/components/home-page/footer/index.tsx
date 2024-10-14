import Link from "next/link";
import React from "react";
import styles from './styles.module.scss'

function index() {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <Link href="/refund-policy">Refund Policy</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <Link href="/terms-and-conditions">Terms and Conditions</Link>
      </div>
      <div>Siddhartha Vikram</div>
    </div>
  );
}

export default index;
