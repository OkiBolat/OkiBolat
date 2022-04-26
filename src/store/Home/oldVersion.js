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
// switchCardFavorite(state, action) {
    //   state.cards = state.cards.map(item => item.id === action.payload.id ? action.payload : item)
    //   state.filteredCards = state.filteredCards.map(item => item.id === action.payload.id ? action.payload : item)
    // },
    // setIsLoadingProgress(state, action) {
    //   state.requestInProgress = action.payload
    // },
    // setDetailedCard(state, action) {
    //   state.detailedCard = action.payload
    // },

      // getCards(state, action) {
    //   state.cards = action.payload
    //   state.filteredCards = action.payload
    // },
    // import { cardsService } from "services/cards.service";
// import { getCards, setDetailedCard, setIsLoadingProgress, switchCardFavorite } from "./reducer";

// export const getCardsThunk = () => {
//   return (dispatch) => {
//     dispatch(setIsLoadingProgress(true))
//     cardsService.getCards().then(res => {
//       dispatch(getCards(res.data))
//     }).then(() => dispatch(setIsLoadingProgress(false)))
//   }
// }

// export const getDetailedCardThunk = (id) => {
//   return (dispatch) => {
//     dispatch(setIsLoadingProgress(true))
//     cardsService.getCard(id).then(res => {
//       dispatch(setDetailedCard(res.data))
//     }).then(() => dispatch(setIsLoadingProgress(false)))
//   }
// }

// export const switchCardFavoriteThunk = (obj) => {
//   return (dispatch) => {
//     cardsService.update({...obj, isFavorite: !obj.isFavorite}).then(res => {
//       dispatch(switchCardFavorite(res.data))
//     })
//   }
// }