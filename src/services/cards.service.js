import instance from './instance'

const getCards = () => {
  return instance("items")
}

const getCard = (id) => {
  return instance("items/" + Number(id))
}

const update = (obj) => {
  return instance.put(`items/${obj.id}`, obj)
}



export const cardsService = {
  getCards,
  getCard,
  update,
}

/*
[
 {
  "id": 1,
  "parentId": "1",
  "name": "Глёги",
  "categoty": "(Финляндия и Швеция)",
  "isFavorite": false,
  "discount": "30%",
  "description": "Глёги – это напиток на основе вина, специй, орехов и сухофруктов. Он является официальным напитком Рождества и многих других зимних праздников. Его алкогольные и безалкогольные версии продаются в скандинавских странах в готовом виде. Например, в Финляндии – в сети Alko. Также на рынках можно встретить уже готовые наборы специй, орехов и сухофруктов для приготовления это любимого скандинавами напитка.",
  "image": "../../assets/image/blackberry.png",
  "filter": [
   "Сладкие",
   "Лонг",
   "Шот"
  ]
 },
 {
  "id": 2,
  "parentId": "2",
  "name": "Мохито",
  "price": 10239,
  "isFavorite": true,
  "discount": "20%",
  "image": "../../assets/image/mohito.png",
  "filter": [
   "Новинки",
   "Хит",
   "Крепкие"
  ]
 },
 {
  "id": 3,
  "parentId": "3",
  "name": "Blackberry",
  "price": 15499,
  "isFavorite": false,
  "discount": "30%",
  "image": "../../assets/image/blackberry.png",
  "filter": [
   "Сладкие",
   "Лонг",
   "Шот"
  ]
 },
 {
  "id": 4,
  "parentId": "4",
  "name": "Мохито",
  "price": 11999,
  "isFavorite": true,
  "discount": "20%",
  "image": "../../assets/image/mohito.png",
  "filter": [
   "Новинки",
   "Хит",
   "Крепкие"
  ]
 },
 {
  "id": 5,
  "parentId": "5",
  "name": "Blackberry",
  "price": 12999,
  "isFavorite": false,
  "discount": "30%",
  "image": "../../assets/image/blackberry.png",
  "filter": [
   "Сладкие",
   "Лонг",
   "Шот"
  ]
 },
 {
  "id": 6,
  "parentId": "6",
  "name": "Мохито",
  "price": 10239,
  "isFavorite": true,
  "discount": "20%",
  "image": "../../assets/image/mohito.png",
  "filter": [
   "Новинки",
   "Хит",
   "Крепкие"
  ]
 },
 {
  "id": 7,
  "parentId": "7",
  "name": "Blackberry",
  "price": 15499,
  "isFavorite": false,
  "discount": "30%",
  "image": "../../assets/image/blackberry.png",
  "filter": [
   "Сладкие",
   "Лонг",
   "Шот"
  ]
 },
 {
  "id": 8,
  "parentId": "8",
  "name": "Мохито",
  "price": 11999,
  "isFavorite": true,
  "discount": "20%",
  "image": "../../assets/image/mohito.png",
  "filter": [
   "Новинки",
   "Хит",
   "Крепкие"
  ]
 }
] */