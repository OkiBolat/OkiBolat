import React, { useState } from "react";
import logo from "assets/sprites/logo.svg"
import "./Header.scss"
import { useDispatch } from "react-redux";
import { getCardsByFilter } from "store/Home/actionCreators";

const Header = ({tabs, title }) => {
  const [activeTag, setActiveTag] = useState(null)
  const dispatch = useDispatch()

  const addFilter = (tag) => {
    if (activeTag === tag) {
      setActiveTag(null)
      dispatch(getCardsByFilter(""))
    } else {
      dispatch(getCardsByFilter(tag))
      setActiveTag(tag)
    }

  }

  return (
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
          {tabs.map(item =>
            <li key={item.value} onClick={() => addFilter(item.label)}
              on
              className={activeTag !== item.label ?
                "header__filter-list-item" : "header__filter-list-item active"}>
              {item.label}</li>)}
        </ul>
      </div>
    </header>
  )
}

export default Header;