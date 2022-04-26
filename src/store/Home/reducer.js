/* eslint-disable no-unused-vars */
import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
import { cardsService } from "services/cards.service";
import { getCardsThunk, getDetailedCardThunk, switchCardFavoriteThunk } from "./actionCreators";

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
    searchCard(state, action) {
      state.filteredCards = state.cards.filter(item => item.name.toLowerCase()
        .includes(action.payload
          .toLowerCase()))
    },
    getCardsByFilter(state, action) {
      state.filteredCards = state.cards.filter(card => action.payload === "" ? card : card.tags.includes(action.payload))
    }
  },
  extraReducers: {
    [getCardsThunk.pending]: (state) => {
      state.requestInProgress = true
    },
    [getCardsThunk.fulfilled]: (state, action) => {
      state.cards = action.payload;
      state.filteredCards = action.payload;
      state.requestInProgress = false
    },
    [getCardsThunk.rejected]: () => {
      console.error("Not response")
    },
    [getDetailedCardThunk.fulfilled]: (state, action) => {
      state.detailedCard = action.payload
    },
    [switchCardFavoriteThunk.fulfilled]: (state, action) => {
      state.cards = state.cards.map(item => item.id === action.payload.id ? action.payload : item)
      state.filteredCards = state.filteredCards.map(item => item.id === action.payload.id ? action.payload : item)
    }
  }
})

export default toolkitSlice.reducer;
export const { searchCard, getCardsByFilter } = toolkitSlice.actions
