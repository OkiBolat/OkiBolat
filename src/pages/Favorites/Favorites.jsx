import BottomNav from "components/BottomNav/BottomNav";
import CardsList from "components/CardsList/CardsList";
import Header from "components/Header/Header";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from "store/Home/actionCreators";
import { cardsSelector } from "store/Home/selectors";

const Favorites = () => {
  const filter = ["Новинки", "Хит", "Крепкие", "Сладкие", "Лонг", "Шот"]

  const dispatch = useDispatch()

  const cards = useSelector(cardsSelector)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])
  return(
    <>
    <Header  tabs={filter} title="Избранное" />
    <CardsList cards={cards} />
    <BottomNav btnCaption="Назад" />
    </>
  )
}

export default Favorites;