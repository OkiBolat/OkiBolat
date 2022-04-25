import productsReducer from "./Home/reducer";
const {combineReducers} = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
  products: productsReducer
  
})

export default rootReducer;