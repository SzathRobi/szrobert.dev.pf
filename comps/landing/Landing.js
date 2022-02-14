import React from "react";
import styles from "./landing.module.css";
import LandingImgContainer from "./LandingImgContainer";
import TitleContainer from "./TitleContainer";
//#2EFFFF
//#00D2D2
function Landing() {
  return (
    <section className={styles.Landing}>
      <TitleContainer />
      <LandingImgContainer />
    </section>
  );
}

export default Landing;
