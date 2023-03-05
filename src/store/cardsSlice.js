import { createSlice } from '@reduxjs/toolkit'; //пока что это все не имеет смысла. Но в будущем,когда данные мы будем брать с сервера,хорошо иметь возможность работать с ними отовсюду
import cardsData from '../utils/cardsData';

const initialState = {
  cardsData: cardsData,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {},
});

export const {} = cardsSlice.actions;

export const selectCardsData = (state) => state.cards.cardsData;

export default cardsSlice.reducer;
