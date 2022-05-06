import React, { useEffect } from "react"
import { createBrowserHistory } from "history"
import background from 'assets/image/background.png'
import anismelk from 'assets/image/anismelk.jpg'
import glegy from 'assets/image/glegi.jpg'
import myatnychai from 'assets/image/myatnychai.jpg'
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { cn } from "assets/bem";
import { getDetailedCardThunk } from "store/Home/actionCreators";
import "./Detailed.scss";

const detaile = cn('detaile')

const Detailed = () => {

  const imgMap = {
    anismelk,
    myatnychai,
    glegy
  }

  const history = createBrowserHistory()

  const params = useParams()
  const dispatch = useDispatch()
  const detailedCard = useSelector(state => state.products.detailedCard)

  useEffect(() => {
    dispatch(getDetailedCardThunk(params.id))
  }, [dispatch, params.id])

  const image = detailedCard.image

  return (
    <div className={detaile()}>
      <div style={{ backgroundImage: `URL(${imgMap[image]})` }} className={detaile("image")}>
        <button onClick={() => history.back()} className={detaile("button")}>
          <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.383924 11.0671L11.0016 0.386228C11.5135 -0.128743 12.3439 -0.128743 12.8558 0.386228L14.0943 
            1.63216C14.6056 2.14658 14.6062 2.97977 14.0965 3.49529L5.68155 11.9997L14.0959 20.5047C14.6062 21.0202
             14.6051 21.8534 14.0937 22.3678L12.8552 23.6138C12.3433 24.1287 11.5129 24.1287 11.001 23.6138L0.383924
              12.9324C-0.127974 12.4174 -0.127974 11.582 0.383924 11.0671Z"  />
          </svg>
        </button>
      </div>
      <div style={{ backgroundImage: `URL(${background})` }} className={detaile("info")}>
        <div className="detaile__title">
          <p className={detaile("name")}>{detailedCard.name}</p>
          <p className={detaile("category")}>Освежающий напиток</p>
        </div>
        <h2 className={detaile("ingredients-title")}>Ингредиенты</h2>
        <ul className={detaile("ingredients")}>
          {detailedCard.recipe && Object.keys(detailedCard.recipe).map(item => (
            <li key={item} className="">
              <span className="text">{item}</span>
              <span className="page">{detailedCard.recipe[item]}</span>
            </li>
          ))}
        </ul>
        <h2>Как готовить</h2>
        <p className={detaile("description")}>{detailedCard.description}</p>
      </div>
    </div>
  )
}

export default Detailed;