import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = props => {
  return (
    <header className="main-header">
      <div>
        <Link to="/" className="main-header__brand">
          uHost
        </Link>
      </div>
      <nav className="main-nav">
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <Link to="/packages">חבילות</Link>
          </li>
          <li className="main-nav__item">
            <Link to="/customers">לקוחות</Link>
          </li>
          <li className="main-nav__item main-nav__item--cta">
            <Link to="/hosting">הוסטינג</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
