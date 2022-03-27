import React from "react";
import Home from "pages/Home/Home.jsx";
import "./App.css"
import Detailed from "pages/Detailed/Detailed";
import { Route, Routes } from "react-router";
import Search from "pages/Search/Search";
import Favorites from "pages/Favorites/Favorites";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path={'/detailed/:id'} element={<Detailed />} />
        <Route path='/search' element={<Search />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </div>

  )
}

export default App;
