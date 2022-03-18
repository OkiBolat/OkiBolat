import React  from "react";
import logo from "assets/sprites/logo.svg"
import "./Header.scss"

const Header = ({selected, onSelect, tabs, title }) => (
  <header className="header">
  <div className="header__up">
    <div className="header__up-name">
      <h1>{title}</h1>
      <h3 className="header__up-name-date">17 июля 2022</h3>
    </div>
    <div className="header__up-logo">
      <img src={logo} alt="logo" />
    </div>
  </div>
  <div className="header__filter">
    <ul className="header__filter-list">
      {tabs.map(item => <li className="header__filter-list-item">{item}</li>)}
    </ul>
  </div>
</header>
)

export default Header;