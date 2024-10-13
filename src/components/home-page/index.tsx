import React from "react";
import styles from "./styles.module.scss";
import Hero from "./hero";
import Container from "./container";
import Process from "./process";
import CTA from "./cta";
import Transform from "./transform";
import Features from "./features";
import Slider from '../carousel/index'
import Navbar from "./navbar";

function index() {
  return (
    <>
      <Container>
        <Navbar/>
        <Hero />
        <Slider/>
        {/* <Process /> */}
        <Features/>
        <CTA />
      </Container>
      <Transform />
    </>
  );
}

export default index;
