export const cardsSelector = (state) => state.products.filteredCards
export const favoritesCardsSelector = (state) => state.products.filteredCards.filter(item => item.isFavorite)
export const isSearchedSelector = (state) => state.products.cards.length !== state.products.filteredCards.length;