/* eslint-disable no-unused-vars */
import { GET_CARDS, SWITCH_CARD_FAVORITE, SEARCH_CARD, SET_IS_LOADING_PROGRESS, TAKE_URL, SET_DETAILED_CARD, GET_CARDS_BY_FILTER } from "./actions";

const initialState = {
  cards: [],
  filteredCards: [],
  requestInProgress: false,
  filter: [
    {
      value: 1,
      label: "Новинки"
    },
    {
      value: 2,
      label: "Хит"
    },
    {
      value: 3,
      label: "Сладкие"
    },
    {
      value: 4,
      label: "Национальные"
    },
    {
      value: 5,
      label: "Чай"
    },
    {
      value: 6,
      label: "Молочные"
    }],
  detailedCard: {
    id: "",
    name: "",
    categoty: "",
    isFavorite: false,
    discount: "",
    description: "",
  }
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
        // filter: state.filter.filter(item => state.filteredCards.map(item => item.filter.filter(i => state.filter.includes(i))))
      }
    case SWITCH_CARD_FAVORITE:
      return {
        ...state,
        cards: state.cards.map(item => item.id === action.payload.id ? action.payload : item),
        filteredCards: state.filteredCards.map(item => item.id === action.payload.id ? action.payload : item),
      }
    case SET_IS_LOADING_PROGRESS:
      return {
        ...state, requestInProgress: action.payload
      }
    case SET_DETAILED_CARD:
      return {
        ...state,
        detailedCard: action.payload
      }
    case GET_CARDS_BY_FILTER: 
      return {
        ...state,
        // cards: state.cards.filter(card => card.tags.includes(action.payload)),
        filteredCards:  state.cards.filter(card => action.payload === ""? card : card.tags.includes(action.payload))
      }
    default:
      return state
  }
}

export default productsReducer
