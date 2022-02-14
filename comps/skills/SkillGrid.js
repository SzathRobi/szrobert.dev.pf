import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./skills.module.css";

function SkillGrid() {
  const skills = [
    "Js",
    "React",
    "Next",
    "Node",
    "Bootstrap",
    "Material-UI",
    "Tailwind",
    "Sass",
    "UI/UX",
    "MongoDB",
    "Figma",
    "Git",
  ];

  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const cardStyle = {
    transition: "400ms",
    transform: inView ? "scale(1)" : "scale(0)",
  };
  return (
    <div ref={ref} className={styles.SkillGrid} style={cardStyle}>
      {skills.map((skill) => (
        <div key={skill}>
          <p>{skill}</p>
        </div>
      ))}
    </div>
  );
}

export default SkillGrid;
