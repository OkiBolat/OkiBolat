import React from "react";
import './Card.scss'
import favorBtn from "assets/sprites/favorBtn.svg"
import favorBtnWhite from "assets/sprites/favorBtnWhite.svg"
import { useDispatch } from "react-redux";
import { switchCardFavoriteThunk } from "store/Home/actionCreators";
import { Link } from "react-router-dom";
import glegy from "../../assets/image/glegi.jpg"
import myatnychai from "../../assets/image/myatnychai.jpg"
import anismelk from "../../assets/image/anismelk.jpg"
import noResult from "../../assets/image/noResult.png"
import { cn } from "assets/bem";



const Card = ({image, discount, id, isFavorite, card, name}) => {
  const dispatch = useDispatch()

  const switchFavorite = (e, card) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(switchCardFavoriteThunk(card))
  }

const cardBem = cn("card")
  const imgMap = {
    anismelk,
    myatnychai,
    glegy,
    noResult
  }
  return (
      name !== "Нет результатов"? <Link  to={"/detailed/" + id}>
        <div style={{ backgroundImage: `url(${imgMap[image]})` }} className={cardBem()}>
          <div className={cardBem("header")}>
            <div className={cardBem("info")}>
              <h1>{discount}</h1>
              <p>{name}</p>
            </div>
            {}
            <button onClick={(e) => switchFavorite(e, card)} style={{ backgroundImage: `url(${isFavorite ? favorBtn : favorBtnWhite})` }} className={cardBem("header-favorites-btn")} />
          </div>
          <div className={cardBem("name")}>
          </div>
        </div>
      </Link> : 
        <div style={{ backgroundImage: `url(${noResult})`, justifyContent: "center"}} className={cardBem()}>
          <div>
            <h1 style={{color: "#ffffff"}}>Нет результатов</h1>
          </div>
        </div>
  )
}

export default Card