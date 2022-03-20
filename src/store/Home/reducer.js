/* eslint-disable no-unused-vars */
import { GET_CARDS, SWITCH_CARD_FAVORITE, SEARCH_CARD } from "./actions";

const initialState = {
  cards: [
  ],
  filteredCards: []
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARDS:
      return {
        ...state,
        cards: action.payload,
        filteredCards: action.payload
      }
    case SEARCH_CARD:
      return {
        ...state, filteredCards: state.cards.filter(item => item.name.toLowerCase()
          .includes(action.payload
            .toLowerCase())),
      }
    case SWITCH_CARD_FAVORITE:
      return {
        ...state, 
        cards: action.payload,
        filteredCards: action.payload
      }
    default:
      return state
  }
}

export default productsReducer
