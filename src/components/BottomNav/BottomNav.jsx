import React, { useState } from "react";
import searchBtn from "assets/sprites/searchBtn.svg"
import closeBtn from "assets/sprites/closeBtn.svg"
import "./BottomNav.scss"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCards, searchCard } from "store/Home/actionCreators";

const BottomNav = ({ btnCaption, btnOptions}) => {
  
  const [isSearchOpern, setIsSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  const onSearchCard = () => {
    dispatch(searchCard(searchValue))
  }

  const closeInput = () => {
    dispatch(searchCard(''))
    setSearchValue('')
    setIsSearchOpen(false)
  }

  return (
    <footer className="bar">
      {isSearchOpern ?
        <div className="bar__search-box">
          <div className="bar__search-box-input">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value) }
                spellCheck={false}
                onBlur={() => onSearchCard()}
                type="text"
                className="bar__search-input"
                placeholder="Названиe..." />
            <img onClick={() => closeInput()} src={closeBtn} alt="" />
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