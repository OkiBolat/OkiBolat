import React from "react"
import { Link } from "react-router-dom"
import "./Button.scss"

const Button = ({ btnCaption, btnOptions }) => {
  return (
    <Link to={`/${btnOptions}`}>
      <button className="button">{btnCaption}</button>
    </Link>
  )
}

export default Button;