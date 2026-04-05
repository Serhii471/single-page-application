import React from "react";
import { NavLink } from "react-router-dom";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <div className="logo">👨‍💻 MyPortfolio</div>
      <nav>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>Про мене</NavLink>
        <NavLink to="/my-city" className={({ isActive }) => (isActive ? "active" : "")}>Моє місто</NavLink>
        <NavLink to="/my-future" className={({ isActive }) => (isActive ? "active" : "")}>Мій розвиток</NavLink>
      </nav>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Темна" : "☀️ Світла"}
      </button>
    </header>
  );
};

export default Header;