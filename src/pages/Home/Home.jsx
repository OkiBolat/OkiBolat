import React, { useEffect } from "react";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { cardsSelector, isSearchedSelector } from "store/Home/selectors";
import CardsList from "components/CardsList/CardsList";
import Header from "components/Header/Header";
import BottomNav from "../../components/BottomNav/BottomNav.jsx";
import { getCardsThunk } from "store/Home/actionCreators";

const Home = () => {
  const dispatch = useDispatch()

  const filter = useSelector(state => state.products.filter)
  const pageTitle = useSelector(isSearchedSelector) ? "Поиск" : "Главная";
  const isLoading = useSelector((state) => state.products.requestInProgress)
  const cards = useSelector(cardsSelector)

  useEffect(() => {
    dispatch(getCardsThunk())
  },[dispatch])

  return (
    <>
      <Header title={pageTitle} tabs={filter} />
      <CardsList isLoading={isLoading} cards={cards} />
      <BottomNav btnOptions="favorites" btnCaption="Избранное" />
    </>
  )
}

export default Home;