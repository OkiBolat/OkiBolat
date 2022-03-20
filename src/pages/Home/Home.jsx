import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from "store/Home/actionCreators";
import { cardsSelector, isSearchedSelector } from "store/Home/selectors";
import CardsList from "components/CardsList/CardsList";
import Header from "components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav.jsx";

const Home = () => {
  const filter = ["Новинки", "Хит", "Крепкие", "Сладкие", "Лонг", "Шот"]
  const pageTitle = useSelector(isSearchedSelector) ? "Поиск" : "Главная";

  const dispatch = useDispatch()

  const cards = useSelector(cardsSelector)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  return (
    <>
      <Header title={pageTitle} tabs={filter} />
      <CardsList cards={cards} />
      <BottomNav btnOptions="favorites" btnCaption="Избранное" />
    </>
  )
}

export default Home;