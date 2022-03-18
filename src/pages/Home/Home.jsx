import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from "store/Home/actionCreators";
import { cardsSelector } from "store/Home/selectors";
import CardsList from "components/CardsList/CardsList";
import Header from "components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav.jsx";

const Home = () => {
  const filter = ["Новинки", "Хит", "Крепкие", "Сладкие", "Лонг", "Шот"]

  const dispatch = useDispatch()

  const cards = useSelector(cardsSelector)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  return (
    <>
      <Header title="Главная" tabs={filter} />
      <CardsList cards={cards} />
      <BottomNav btnCaption="Избранное" />
    </>
  )
}

export default Home;