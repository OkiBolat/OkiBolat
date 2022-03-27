import Card from "components/Card/Card"
import React from "react"
import { renderSkeletone } from "../Loader/CardLoader.jsx"
import "./CardsList.scss"
const CardsList = ({ cards, isLoading }) => {

  const noResultCard = {
    name: "Нет товара",
    id: 12313,
    image: "noResult"
  }

  if(!cards.length) {
    return (
      <main className="main">
        <Card
        card={noResultCard}
        image={"noResult"}
        name="Нет результатов"
        id={2131}
        ></Card>
      </main>
    )
  }
  return (
    <main className="main">{isLoading ? renderSkeletone() :
      cards?.map(card => (
        <Card key={card.id}
          name={card.name}
          discount={card.discount}
          image={card.image}
          isFavorite={card.isFavorite}
          id={card.id}
          card={card} />))
    }
    </main>

  )
}

export default CardsList;

