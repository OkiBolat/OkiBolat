import { combineReducers } from "redux";
import productsReducer from "./Home/reducer";

const rootReducer = combineReducers({
  products: productsReducer
})

export default rootReducer;