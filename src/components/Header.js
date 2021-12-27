import React, { useState } from "react";
import { ReactComponent as DarkModeIcon } from "../assets/icons/icon-moon.svg";
import { ReactComponent as LightModeIcon } from "../assets/icons/icon-sun.svg";
import background from "../assets/images/bg-mobile-light.jpg";


function Header() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header>
       <div className="header_image" style={{ backgroundImage: `url(${background})` }}>
         

      <div className="title__container">
        <h1 className="title">Todo</h1>
        <div className="icon" onClick={toggleDarkMode}>
            {darkMode ?
            (<LightModeIcon height="30px" fill="var(--elements-bg-color)"/>) :
            (<DarkModeIcon height="30px" fill="var(--elements-bg-color)"/>)}
        </div>
      </div>
            </div>
    </header>
  );
}

export default Header;
