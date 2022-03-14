import React, { useState } from "react";
import searchBtn from "assets/sprites/searchBtn.svg"
import closeBtn from "assets/sprites/closeBtn.svg"
import "./Bar.scss"
const Bar = () => {
  const [isSearchOpern, setIsSearchOpen] = useState(false)

  return (
    <div className="bar">
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
            <button className="bar__button">Избранное</button>
            <img onClick={() => setIsSearchOpen(true)} src={searchBtn} alt="" />
          </div>
        </div>
      }
    </div>
  )
}

export default Bar;