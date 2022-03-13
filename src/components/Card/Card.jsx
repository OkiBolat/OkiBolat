import React from "react";
import './Card.scss'
import favorBtn from "assets/sprites/favorBtn.svg"

const Card = (props) => {
  return (
    <div  className="card">
      <div className="card__header">
        <div className="card__header-info">
        </div>
        <button className="card__header-favorites-btn">
            <img src={favorBtn} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Card