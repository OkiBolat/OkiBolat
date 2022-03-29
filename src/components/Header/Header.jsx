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
      <div className="upper-block">
        <div className="upper-block__text">
          <h1>{title}</h1>
          <h3 className="upper-block__date">17 июля 2022</h3>
        </div>
        <div className="upper-block__logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="filter">
        <ul className="filter__list">
          {tabs.map(item =>
            <li key={item.value} onClick={() => addFilter(item.label)}
              className={activeTag !== item.label ?
                "filter__item" : "filter__item active"}
                >
              {item.label}</li>)}
        </ul>
      </div>
    </header>
  )
}

export default Header;