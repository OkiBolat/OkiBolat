import { ADD_CARD, REMOVE_CARD, GET_CARDS} from "./actions";

export const getCards = (payload) => ({
  type: GET_CARDS,
  payload
});

export const addToFavorite = (payload) => ({
  type: ADD_CARD,
  payload
});

export const deleteFromFavorite = (payload) => ({
  type: REMOVE_CARD,
  payload
});