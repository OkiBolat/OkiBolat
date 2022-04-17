import React, { useState } from "react";
import logo from "assets/sprites/logo.svg"
import "./Header.scss"
import { useDispatch } from "react-redux";
import { getCardsByFilter } from "store/Home/actionCreators";
import { cn } from "assets/bem";

const upprerBlock = cn("upper-block")
const filter = cn("filter")

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
      <div className={upprerBlock()}>
        <div className={upprerBlock("text")}>
          <h1>{title}</h1>
          <h3 className={upprerBlock("date")}>17 июля 2022</h3>
        </div>
        <div className={upprerBlock("logo")}>
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className={filter()}>
        <ul className={filter("list")}>
          {tabs.map(item =>
            <li key={item.value} onClick={() => addFilter(item.label)}
              className={activeTag !== item.label ?
                filter("item") : filter("item-active")}
                >
              {item.label}</li>)}
        </ul>
      </div>
    </header>
    
  )
}

export default Header;