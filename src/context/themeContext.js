"use client";

import { createContext, useState } from "react";

export const ThemeContect = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");
  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContect.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContect.Provider>
  );
};
