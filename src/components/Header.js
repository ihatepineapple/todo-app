import React, { useState } from "react";
import { ReactComponent as DarkModeIcon } from "../assets/icons/icon-moon.svg";
import { ReactComponent as LightModeIcon } from "../assets/icons/icon-sun.svg";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);

    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else if (!darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  return (
    <header>
      <div className="title__container">
        <h1 className="title">Todo</h1>

        {darkMode ? (
          <div className="icon" onClick={toggleDarkMode}>
            <LightModeIcon height="30px" fill="white" />
          </div>
        ) : (
          <div className="icon" onClick={toggleDarkMode}>
            <DarkModeIcon height="30px" fill="white" />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
