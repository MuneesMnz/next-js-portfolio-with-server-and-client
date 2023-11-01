"use client"

import { useContext } from "react";
import styles from "./DarkmodeToggle.module.css";
import { ThemeContect } from "@/context/themeContext";

const DarkmodeToggle = () => {
  const { toggle, mode } = useContext(ThemeContect);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🔆</div>
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default DarkmodeToggle;
