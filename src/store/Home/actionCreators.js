import { cardsService } from "services/cards.service";
import { getCards, setDetailedCard, setIsLoadingProgress, switchCardFavorite } from "./reducer";

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