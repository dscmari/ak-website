import React from "react";
import { NavLink } from "react-router-dom";
import "/src/css/navigation.css";

export default function Navbar() {

    
  return (
    <nav>
      <div className="logo-burger-container">
        <NavLink to="/">
          <div className="logo">
            <img src="./src/assets/react.svg" alt="" />
          </div>
        </NavLink>
        <div id="burger-menu">
          <span></span>
        </div>
      </div>
      <div className="items-container">
        <NavLink to="/Psychotherapie">Psychotherapie</NavLink>
        <NavLink to="/Angebot">Angebot</NavLink>
        <NavLink to="/UeberMich">Über Mich</NavLink>
        <NavLink to="/Krise">Krise</NavLink>
        <NavLink to="/Kontakt">Kontakt</NavLink>
      </div>
    </nav>
  );
}
