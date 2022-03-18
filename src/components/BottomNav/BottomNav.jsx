import React, { useState } from "react";
import searchBtn from "assets/sprites/searchBtn.svg"
import closeBtn from "assets/sprites/closeBtn.svg"
import "./BottomNav.scss"
const BottomNav = ({ btnCaption }) => {
  const [isSearchOpern, setIsSearchOpen] = useState(false)

  return (
    <footer className="bar">
      {isSearchOpern ?
        <div className="bar__search-box">
          <div className="bar__search-box-input">
            <input spellCheck={false} onBlur={() => setIsSearchOpen(false)} type="text" className="bar__search-input" placeholder="Названиe..." />
            <img src={closeBtn} onClick={() => setIsSearchOpen(false)} alt="" />
          </div>
        </div>
        :
        <div className="bar__search-box">
          <div className="bar__search-box-button">
            <button className="bar__button">{btnCaption}</button>
            <img onClick={() => setIsSearchOpen(true)} src={searchBtn} alt="" />
          </div>
        </div>
      }
    </footer>
  )
}

export default BottomNav;