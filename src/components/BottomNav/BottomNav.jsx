import React, { useState } from "react";
import searchBtn from "assets/sprites/searchBtn.svg"
import closeBtn from "assets/sprites/closeBtn.svg"
import "./BottomNav.scss"
import { useDispatch } from "react-redux";
import { searchCard } from "store/Home/actionCreators";
import Button from "components/Button/Button";
import { cn } from "assets/bem";

const bar = cn("bar")

const BottomNav = ({ btnCaption, btnOptions }) => {

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
    <footer className={bar()}>
      {isSearchOpern ?
        <div className={bar("search-box")}>
          <div className={bar("input")}>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              spellCheck={false}
              onBlur={() => onSearchCard()}
              type="text"
              className={bar("search-input")}
              placeholder="Названиe..." />
            <img onClick={() => closeInput()} src={closeBtn} alt="" />
          </div>
        </div>
        :
        <div className={bar("search-box")}>
          <div className={bar("button")}>
              <Button btnCaption={btnCaption} btnOptions={btnOptions} ></Button>
            <img onClick={() => setIsSearchOpen(true)} src={searchBtn} alt="" />
          </div>
        </div>
      }
    </footer>
  )
}

export default BottomNav;