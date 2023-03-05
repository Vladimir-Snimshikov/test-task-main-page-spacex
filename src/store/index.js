import { configureStore } from '@reduxjs/toolkit';
import cardsReducers from './cardsSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducers,
  },
});
