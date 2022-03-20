import instance from './instance'

const getCards = () => {
  return instance("items")
}

const favoritesSwitch = (data) => {
  return instance.put(`items/${data.id}` , data)
}


export const cardsService = {
  getCards,
  favoritesSwitch,
}