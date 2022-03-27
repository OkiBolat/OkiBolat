import { cardsService } from "services/cards.service";
import { GET_CARDS, GET_CARDS_BY_FILTER, SEARCH_CARD, SET_DETAILED_CARD, SET_IS_LOADING_PROGRESS, SWITCH_CARD_FAVORITE } from "./actions";

export const getCards = (payload) => ({
  type: GET_CARDS,
  payload
});

export const switchCardFavorite = (payload) => ({
  type: SWITCH_CARD_FAVORITE,
  payload
});


export const searchCard = (payload) => ({
  type: SEARCH_CARD,
  payload
})

export const setIsLoadingProgress = (payload) => ({
  type: SET_IS_LOADING_PROGRESS,
  payload
})

export const setDetailedCard = (payload) => ({
  type: SET_DETAILED_CARD,
  payload
})

export const getCardsByFilter = (payload) => ({
  type: GET_CARDS_BY_FILTER,
  payload
})

export const getCardsThunk = () => {
  return (dispatch) => {
    dispatch(setIsLoadingProgress(true))
    cardsService.getCards().then(res => {
      dispatch(getCards(res.data))
    }).then(() => dispatch(setIsLoadingProgress(false)))
  }
}

export const getDetailedCardThunk = (id) => {
  return (dispatch) => {
    dispatch(setIsLoadingProgress(true))
    cardsService.getCard(id).then(res => {
      dispatch(setDetailedCard(res.data))
    }).then(() => dispatch(setIsLoadingProgress(false)))
  }
}

export const switchCardFavoriteThunk = (obj) => {
  return (dispatch) => {
    cardsService.update({...obj, isFavorite: !obj.isFavorite}).then(res => {
      dispatch(switchCardFavorite(res.data))
    })
  }
}