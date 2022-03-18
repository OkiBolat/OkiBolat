import Card from "components/Card/Card"
import React from "react"
import "./CardsList.scss"
const CardsList = ({ cards }) => {
  return (
    <main className="main">
        {cards?.map(data => (
          <Card key={data.id} card={data} />))}
    </main>
  )
}

export default CardsList;

