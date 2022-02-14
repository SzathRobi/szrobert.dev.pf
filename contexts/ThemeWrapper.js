import { useState } from "react";
import ThemeContext from "./ThemeContext";

function ThemeWrapper({ children }) {
  const [theme, setTheme] = useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeWrapper;
