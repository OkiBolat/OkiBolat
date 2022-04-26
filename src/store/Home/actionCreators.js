import { createAsyncThunk } from "@reduxjs/toolkit";
import { cardsService } from "services/cards.service";


export const getCardsThunk = createAsyncThunk("products/cards", async function () {
  const response = await cardsService.getCards();
  const data = await response.data
  return data;
})

export const getDetailedCardThunk = createAsyncThunk("products/detailed", async function (id) {
  const resp = await cardsService.getCard(id)
  const data = resp.data
  return data
})

export const switchCardFavoriteThunk = createAsyncThunk("products/switchFav", async (obj) => {
  const resp = await cardsService.update({ ...obj, isFavorite: !obj.isFavorite })
  return resp.data
})