import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <h1>{darkMode ? "Koyu Tema" : "Açık Tema"}</h1>
      <button onClick={toggleTheme}>
        {darkMode ? "Açık Tema" : "Koyu Tema"}
      </button>
    </div>
  );
};

export default ThemeToggle;
