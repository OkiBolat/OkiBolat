import instance from './instance'

const getCards = () => {
  return instance("items")
}

const addCard = (data) => {
  return instance.post("items", data.id)
}

const deleteCard = (id) => {
  return instance.delete("cards/" + id )
}

export const cardsService = {
  getCards,
  addCard,
  deleteCard
}