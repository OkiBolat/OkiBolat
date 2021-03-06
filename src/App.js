import React from "react";
import Home from "./pages/Home/Home.jsx";
import "./App.css"
import Detailed from "./pages/Detailed/Detailed.jsx";
import { Route, Routes } from "react-router";
import Favorites from "./pages/Favorites/Favorites.jsx";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path={'/detailed/:id'} element={<Detailed />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App;