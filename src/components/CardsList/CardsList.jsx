import { cn } from "assets/bem.js"
import Card from "components/Card/Card"
import React from "react"
import { renderSkeletone } from "../Loader/CardLoader.jsx"
import "./CardsList.scss"

const main = cn("main")

const CardsList = ({ cards, isLoading }) => {

  const noResultCard = {
    name: "Нет товара",
    id: 12313,
    image: "noResult"
  }

  return (
    <main className={main()}>
      <div className={main("container")}>
        {isLoading ? renderSkeletone() :
          !cards.length ?
            <Card
              card={noResultCard}
              name={noResultCard.name}
              id={2131}
            ></Card>
            :
            cards.map(card => (
              <Card key={card.id}
                name={card.name}
                discount={card.discount}
                image={card.image}
                isFavorite={card.isFavorite}
                id={card.id}
                card={card} />)
            )
        }
      </div>
    </main>

  )
}

export default React.memo(CardsList)

