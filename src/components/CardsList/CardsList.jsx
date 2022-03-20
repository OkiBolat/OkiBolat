import Card from "components/Card/Card"
import React from "react"
import { renderSkeletone } from "../Loader/CardLoader.jsx"
import "./CardsList.scss"
const CardsList = ({ cards }) => {
  return (
    <main className="main">
        {renderSkeletone() && 
        cards?.map(data => (
          <Card key={data.id} card={data} />))}
    </main>
  )
}

export default CardsList;

