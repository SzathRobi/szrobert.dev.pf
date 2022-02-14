import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import ThemeContext from "../contexts/ThemeContext";
import About from "../comps/about/About";
import Contact from "../comps/contact/Contact";
import Header from "../comps/header/Header";
import Landing from "../comps/landing/Landing";
import Skills from "../comps/skills/Skills";
import Works from "../comps/works/Works";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, [theme]);
  const router = useRouter();
  const [pageAnimation, setPageAnimation] = useState(styles.fadeIn);
  const changePage = (href) => {
    setPageAnimation(styles.fadeOut);
    setTimeout(() => {
      //router here
      router.push(href);
    }, 500);
  };

  return (
    <main className={`${styles.container} ${pageAnimation} ${theme}`} id="Home">
      <Header />
      <Landing />
      <Works changePage={changePage} />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
