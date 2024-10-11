import React from "react";
import styles from "./styles.module.scss";
import Hero from "./hero";
import Container from "./container";
import Process from './process'
import CTA from './cta'

function index() {
  return (
    <>
      <Container>
        <Hero />
        <Process/>
        <CTA/>
      </Container>
    </>
  );
}

export default index;
