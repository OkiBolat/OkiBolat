import { GET_CARDS, ADD_CARD, REMOVE_CARD } from "./actions";

const initialState = {
  cards: [
  ]
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state, cards: action.payload
      }
    default:
      return state
  }
}

export default productsReducer
