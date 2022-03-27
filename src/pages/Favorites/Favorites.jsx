import BottomNav from "components/BottomNav/BottomNav";
import CardsList from "components/CardsList/CardsList";
import Header from "components/Header/Header";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from "store/Home/actionCreators";
import {favoritesCardsSelector } from "store/Home/selectors";

const Favorites = () => {

  const dispatch = useDispatch()
  const isLoading = useSelector((state) => state.products.requestInProgress)
  const cards = useSelector(favoritesCardsSelector)
  const filter = useSelector((state) => state.products.filter)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  return(
    <>
    <Header  tabs={filter} title="Избранное" />
    <CardsList isLoading={isLoading} cards={cards} />
    <BottomNav btnOptions="" btnCaption="Назад" />
    </>
  )
}

export default Favorites;