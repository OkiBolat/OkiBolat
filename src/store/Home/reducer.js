import { GET_CARDS, ADD_CARD, REMOVE_CARD } from "./actions";

const initialState = {

}

const productsReducer = (state = initialState.cards, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state
      }
      
  
    default:
      return state
  }
}

export default productsReducer
