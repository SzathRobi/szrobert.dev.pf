import { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";
import styles from "./landing.module.css";

function TitleContainer() {
  const { theme } = useContext(ThemeContext);
  const letterArr1 = "Hi, I'm Robert".split("");
  const letterArr2 = "I can make your computer say BEEP-BOOP...".split("");
  const letterArr3 = "Designer & Developer".split("");
  return (
    <div className={`${styles.TitleContainer}`}>
      <h1>
        {letterArr1.map((letter, index) => (
          <span style={{ animationDelay: `${(5 + index) * 25}ms` }} key={index}>
            {letter}
          </span>
        ))}
      </h1>
      <h2>
        {letterArr2.map((letter, index) => (
          <span
            style={{
              animationDelay: `${(20 + letterArr1.length + index) * 25}ms`,
            }}
            key={index}
          >
            {letter}
          </span>
        ))}
      </h2>
      <h3>
        {letterArr3.map((letter, index) => (
          <span
            style={{
              animationDelay: `${
                (30 + letterArr1.length + letterArr2.length + index) * 25
              }ms`,
            }}
            key={index}
          >
            {letter}
          </span>
        ))}
      </h3>
    </div>
  );
}

export default TitleContainer;
