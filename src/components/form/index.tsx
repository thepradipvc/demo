"use client";

import React, { useState } from "react";
import styles from "./style.module.scss";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <form action="" className={styles.form__wrapper}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </>
  );
}

export default Form;
