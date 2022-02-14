import React, { useState } from "react";
import styles from "./themeSwitch.module.css";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ThemeSwitch({ setTheme }) {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
    checked ? setTheme("light") : setTheme("dark");
  };
  const switchStyle = {
    left: checked ? "calc(100% - 4px - 1.25rem)" : "4px",
  };

  return (
    <label className={styles.ThemeSwitch}>
      <FontAwesomeIcon icon={faSun} />
      <div style={switchStyle}>
        <div />
      </div>

      <FontAwesomeIcon icon={faMoon} />
      <input
        type="checkbox"
        checked={checked}
        onChange={() => toggleChecked()}
      />
    </label>
  );
}

export default ThemeSwitch;
