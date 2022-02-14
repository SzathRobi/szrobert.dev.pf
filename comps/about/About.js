import React from "react";
import Image from "next/image";
import {
  faIdCard,
  faHeart,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./about.module.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import AboutCard from "./AboutCard";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/imgs/aboutCard.svg"
            layout="responsive"
            width={300}
            height={300}
            alt="heyhoo"
          />
        </div>
        <SectionTitle text="About" />
        <div className={styles.imgContainer}>
          <Image
            src="/imgs/aboutMe.svg"
            layout="responsive"
            width={300}
            height={300}
            alt="heyhoo"
          />
        </div>
      </div>
      <div className={styles.cardContainer}>
        <AboutCard
          icon={faIdCard}
          text="I am a 23 years old frontend developer located in Budapest,
                Hungary. I am a well-organised person with good problem 
                solving skills."
        />
        <AboutCard
          icon={faHeart}
          text="I started to interest in coding in 2019. I have a great passion 
                for UI effects, animations and creating good user experiences."
        />
        <AboutCard
          icon={faBookOpen}
          text="For 2 years, I have learned web development on my own, beside 
                a full time job, which was not an easy task. After that, a joined 
                to CodeCool frontend developer course to bring my coding skills to 
                the next level."
        />
      </div>
    </div>
  );
}

export default About;
