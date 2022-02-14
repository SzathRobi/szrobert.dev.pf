import { useContext } from "react";
import styles from "./header.module.css";
import ThemeContext from "../../contexts/ThemeContext";
import ThemeSwitch from "./ThemeSwitch";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const navItems = ["Home", "Works", "About", "Skills", "Contact"];
  return (
    <header className={`${styles.Header} ${theme}`}>
      <nav>
        {navItems.map((item) => (
          <a key={item}>{item}</a>
        ))}
        {/*  <ThemeSwitch setTheme={setTheme} />*/}
      </nav>
    </header>
  );
}

export default Header;
