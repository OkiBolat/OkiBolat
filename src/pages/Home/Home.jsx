import React, { useEffect } from "react";
import logo from "assets/sprites/logo.svg"
import Bar from "components/SearchBar/Bar.jsx";
import Card from "components/Card/Card";
import "./Home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from "store/Home/actionCreators";
import { cardsSelector } from "store/Home/selectors";

const Home = () => {
  const filter = ["Новинки", "Хит", "Крепкие", "Сладкие", "Лонг", "Шот"]
  
  const dispatch = useDispatch()

  const cards = useSelector(cardsSelector)

  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  return (
    <div>
      <header className="header">
        <div className="header__up">
          <div className="header__up-name">
            <h1>Главная</h1>
            <h3 className="header__up-name-date">17 июля 2022</h3>
          </div>
          <div className="header__up-logo">
            <img src={logo} alt="logo" />
          </div>
        </div>
        <div className="header__filter">
          <ul className="header__filter-list">
            {filter.map(item => <li className="header__filter-list-item">{item}</li>)}
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="main__drink-cards">
          {cards.map(data => (
            <Card card={data} />))}
        </div>
      </main>
      <footer className="footer">
        <Bar />
      </footer>
    </div>
  )
}

export default Home;