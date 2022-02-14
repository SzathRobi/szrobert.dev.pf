import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView } from "react-intersection-observer";
import styles from "./contact.module.css";
function ContactCard({ text, icon }) {
  const { ref, inView, entry } = useInView({
    threshold: 1,
    triggerOnce: true,
  });

  const iconStyle = {
    transition: "300ms",
    transform: inView ? "translateY(0)" : "translateY(-5rem)",
  };

  const letterArr = text.split("");
  return (
    <div ref={ref} className={styles.ContactCard}>
      <FontAwesomeIcon icon={icon} style={iconStyle} />
      <p>
        {inView &&
          letterArr.map((letter, index) => (
            <span
              style={{ animationDelay: `${(10 + index) * 25}ms` }}
              key={index}
            >
              {letter}
            </span>
          ))}
      </p>
    </div>
  );
}

export default ContactCard;
