import Image from "next/image";
import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import SkillGrid from "./SkillGrid";
import styles from "./skills.module.css";

function Skills() {
  return (
    <section className={styles.Skills} id="Skills">
      <SectionTitle text="Skills" />
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            src="/imgs/skillsMe.svg"
            layout="responsive"
            width={300}
            height={300}
            priority
            alt="Me standing next to a clipboard"
          />
        </div>
        <SkillGrid />
      </div>
    </section>
  );
}

export default Skills;
