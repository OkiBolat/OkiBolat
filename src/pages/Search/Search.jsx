import React, { useEffect, useMemo, useState } from "react";
import BottomNav from "components/BottomNav/BottomNav";
import CardsList from "components/CardsList/CardsList";
import Header from "components/Header/Header";
import "./Search.scss";
import { useDispatch, useSelector } from "react-redux";
import { cardsSelector } from "store/Home/selectors";
import { getCardsThunk } from "store/Home/actionCreators";

const Search = () => {
  const filter = ["Новинки", "Хит", "Крепкие", "Сладкие", "Лонг", "Шот"]

  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()

  const cards = useSelector(cardsSelector)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  const filteredCards = useMemo(() => cards.filter(item => item.name.toLowerCase()
    .includes(searchValue
      .toLowerCase())),
    [cards, searchValue])
   
  return (
    <>
      <Header tabs={filter} title="Поиск" />
      <CardsList cards={filteredCards}  />
      <BottomNav
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        btnOptions="search"
        btnCaption="Назад"
      />
    </>
  )
}
export default Search;