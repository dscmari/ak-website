import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "/src/css/navigation.css";
import useScrollPosition from "../utils/useScrollPosition";

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  const [burgermenu, setBurgermenu] = useState(false);
  const scrollPosition = useScrollPosition()

  

  const handleResize = () => {
    setBurgermenu(window.innerWidth < 825);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    console.log("burgermenu: " + burgermenu);
  }, []);

  const toggleMenu = () => {
    console.log("toggleMenu called");
    setMenu(!menu);
  };

  if (burgermenu) {
    return (
      <div className="nav-container">
        <nav>
          <div className="logo-burger-container">
            <NavLink to="/">
              <div className="logo">
                <img
                  src="./src/assets/monkey.jpg"
                  alt="Logo von Ann-Kathrin Kraus"
                  style={{ height: 50 }}
                />
              </div>
            </NavLink>
            <div id="burger-menu" onClick={toggleMenu}>
              <span></span>
            </div>
          </div>
          <div
            className={`items-container burgermenu ${
              menu ? "menu-open" : "menu-closed"
            }`}
          >
            <span className="close-btn" onClick={toggleMenu}>
              &times;
            </span>
            <NavLink to="/Psychotherapie">Psychotherapie</NavLink>
            <NavLink to="/Angebot">Angebot</NavLink>
            <NavLink to="/UeberMich">Über Mich</NavLink>
            <NavLink to="/Krise">Krise</NavLink>
            <NavLink to="/Kontakt">Kontakt</NavLink>
          </div>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="nav-container">
        <nav className={`${scrollPosition > 0 ? 'no-padding' : 'padding'}`}>
          <NavLink to="/">
            <div className="logo">
              <img
                src="./src/assets/monkey.jpg"
                alt="Logo von Ann-Kathrin Kraus"
                style={{ height: 50 }}
              />
            </div>
          </NavLink>
          <div className="items-container">
            <NavLink to="/Psychotherapie">Psychotherapie</NavLink>
            <NavLink to="/Angebot">Angebot</NavLink>
            <NavLink to="/UeberMich">Über Mich</NavLink>
            <NavLink to="/Krise">Krise</NavLink>
            <NavLink to="/Kontakt">Kontakt</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}
