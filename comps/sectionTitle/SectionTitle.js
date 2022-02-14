import React from "react";
import { useInView } from "react-intersection-observer";
import styles from "./sectionTitle.module.css";

function SectionTitle({ text }) {
  const { ref, inView, entry } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const letterArr = text.split("");
  return (
    <div ref={ref} className={styles.SectionTitle}>
      <h2>
        {inView &&
          letterArr.map((letter, index) => (
            <span
              style={{ animationDelay: `${(5 + index) * 25}ms` }}
              key={index}
            >
              {letter}
            </span>
          ))}
      </h2>
    </div>
  );
}

export default SectionTitle;
