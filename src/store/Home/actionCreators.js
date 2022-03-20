import { cardsService } from "services/cards.service";
import { GET_CARDS, SEARCH_CARD, SWITCH_CARD_FAVORITE} from "./actions";

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


export const getCardsThunk = () => {
  return (dispatch) => {
    cardsService.getCards().then(res => {
      dispatch(getCards(res.data))
    })
  }
}

export const switchCardFavoriteThunk = (data) => {
  return (dispatch) => {
    cardsService.favoritesSwitch({...data, isFavorite: !data.isFavorite}).then(res => {
      dispatch(switchCardFavorite(data))
    })
  }
}