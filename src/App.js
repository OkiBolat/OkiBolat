import React, { useEffect } from "react";
import Home from "pages/Home/Home.jsx";
import "./App.css"
import { useDispatch, useSelector } from "react-redux";
import { getCardsThunk } from "store/Home/actionCreators";
import { cardsSelector } from "store/Home/selectors";

function App() {
  const dispatch = useDispatch();

  const cards = useSelector(cardsSelector)
  
  useEffect(() => {
    dispatch(getCardsThunk())
  }, [dispatch])

  return (
    <div className="container">
      <Home cards={cards} />
    </div>
  );
}

export default App;
