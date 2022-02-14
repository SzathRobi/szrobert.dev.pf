import React from "react";
import styles from "./header.module.css";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  const navItems = ["Home", "Works", "About", "Skills", "Contact"];
  return (
    <header className={styles.Header}>
      <nav>
        {navItems.map((item) => (
          <a key={item}>{item}</a>
        ))}
        <ThemeSwitch />
      </nav>
    </header>
  );
}

export default Header;
