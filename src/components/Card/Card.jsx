import React from "react";
import './Card.scss'
import favorBtn from "assets/sprites/favorBtn.svg"
import favorBtnWhite from "assets/sprites/favorBtnWhite.svg"
import image1 from "../../assets/image/blackberry.png"
import image2 from "../../assets/image/mohito.png"

const Card = ({ card }) => {

  return (
    <div style={{backgroundImage: `url("${card.image === "blackberry"? image1 : image2}")`}}  className="card">
      <div className="card__header">
        <div className="card__header-info">
          <h1>{card.discount}</h1>
          <p>{card.name}</p>
        </div>
        <button style={{backgroundImage:`url(${card.isFavorites? favorBtn: favorBtnWhite})`}} className="card__header-favorites-btn">
        </button>
      </div>
      <div className="card__name">
        {/* <h1>Молоко</h1>
        <p>профыжвфы</p> */}
      </div>
    </div>
  )
}

export default Card