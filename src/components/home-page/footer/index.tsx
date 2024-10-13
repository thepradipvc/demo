import Link from "next/link";
import React from "react";
import styles from './styles.module.scss'

function index() {
  return (
    <div className={styles.footer}>
      <Link href="/refund-policy">Refund Policy</Link>
    </div>
  );
}

export default index;
