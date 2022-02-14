import React from "react";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import styles from "./about.module.css";

function AboutCard({ icon, text }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const cardStyle = {
    transition: "400ms",
    transform: inView ? "scale(1)" : "scale(0)",
  };
  return (
    <article ref={ref} className={styles.AboutCard} style={cardStyle}>
      <div className={styles.iconContainer}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
      </div>
      <p>{text}</p>
    </article>
  );
}

export default AboutCard;
