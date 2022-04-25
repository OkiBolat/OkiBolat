/* eslint-disable no-unused-vars */
import { createReducer, createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
  name: "products",
  initialState: {
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
  },
  reducers: {
    getCards(state, action) {
      state.cards = action.payload
      state.filteredCards = action.payload
    },
    searchCard(state, action) {
      state.filteredCards = state.cards.filter(item => item.name.toLowerCase()
        .includes(action.payload
          .toLowerCase()))
    },
    switchCardFavorite(state, action) {
      state.cards = state.cards.map(item => item.id === action.payload.id ? action.payload : item)
      state.filteredCards = state.filteredCards.map(item => item.id === action.payload.id ? action.payload : item)
    },
    setIsLoadingProgress(state, action) {
      state.requestInProgress = action.payload
    },
    setDetailedCard(state, action) {
      state.detailedCard = action.payload
    },
    getCardsByFilter(state, action) {
      state.filteredCards = state.cards.filter(card => action.payload === "" ? card : card.tags.includes(action.payload))
    }
  }
})

export default toolkitSlice.reducer;
export const {searchCard, getCards, switchCardFavorite,getCardsByFilter,setDetailedCard, setIsLoadingProgress} = toolkitSlice.actions




// export default createReducer(initialState, {
//   [GET_CARDS]: (state, action) => {
//     state.cards = action.payload
//     state.filteredCards = action.payload
//   },
//   [SEARCH_CARD]: (state, action) => {
//     state.filteredCards = state.cards.filter(item => item.name.toLowerCase()
//       .includes(action.payload
//         .toLowerCase()))
//   },
//   [SWITCH_CARD_FAVORITE]: (state, action) => {
//     state.cards = state.cards.map(item => item.id === action.payload.id ? action.payload : item)
//     state.filteredCards = state.filteredCards.map(item => item.id === action.payload.id ? action.payload : item)
//   },
//   [SET_IS_LOADING_PROGRESS]: (state, action) => {
//     state.requestInProgress = action.payload
//   },
//   [SET_DETAILED_CARD]: (state, action) => {
//     state.detailedCard = action.payload
//   },
//   [GET_CARDS_BY_FILTER]: (state, action) => {
//     state.filteredCards = state.cards.filter(card => action.payload === "" ? card : card.tags.includes(action.payload))
//   }
// })


// const productsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // case GET_CARDS:
//     //   return {
//     //     ...state,
//     //     cards: action.payload,
//     //     filteredCards: action.payload
//     //   }
//     case SEARCH_CARD:
//       return {
//         ...state, filteredCards: state.cards.filter(item => item.name.toLowerCase()
//           .includes(action.payload
//             .toLowerCase())),
//       }
//     case SWITCH_CARD_FAVORITE:
//       return {
//         ...state,
//         cards: state.cards.map(item => item.id === action.payload.id ? action.payload : item),
//         filteredCards: state.filteredCards.map(item => item.id === action.payload.id ? action.payload : item),
//       }
//     case SET_IS_LOADING_PROGRESS:
//       return {
//         ...state, requestInProgress: action.payload
//       }
//     case SET_DETAILED_CARD:
//       return {
//         ...state,
//         detailedCard: action.payload
//       }
//     case GET_CARDS_BY_FILTER:
//       return {
//         ...state,
//         filteredCards: state.cards.filter(card => action.payload === "" ? card : card.tags.includes(action.payload))
//       }
//     default:
//       return state
//   }
// }

// export default productsReducer

