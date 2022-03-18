import React from "react"
import backBtn from "../../assets/sprites/backBtn.svg"
import background from 'assets/image/background.png'
import image from 'assets/image/backgroundBlackberry.jpeg'
import "./Detailed.scss"


const Detailed = (props) => {
  return(
    <div className="detaile">
      <div style={{backgroundImage: `URL(${image})`}} className="detaile__image">
        <div className="detaile__image-header">
          <button>
            <img src={backBtn} alt="back" />
          </button>
        </div>
      </div>
      <div style={{backgroundImage:`URL(${background})`}}  className="detaile__info">
        <div className="detaile__info-name">
          <p>{props.name}</p>
          <p>{props.category}</p>
        </div>
        <div className="detaile__info-composition">

        </div>
        <div className="detaile__info-cooking">
        
        </div>
      </div>
    </div>
  )
}

export default Detailed;