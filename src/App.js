import React from "react";
import Home from "pages/Home/Home.jsx";
import "./App.css"
import Detailed from "pages/Detailed/Detailed";
import { Route, Routes } from "react-router";

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/detailed' element={<Detailed />} />
      </Routes>
    </div>

  )
}

export default App;
