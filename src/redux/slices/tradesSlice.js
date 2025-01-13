import { createSlice } from '@reduxjs/toolkit';

const tradesSlice = createSlice({
  name: 'trades',
  initialState: {
    history: [],
    balance: 10000, // Solde initial en dollars
  },
  reducers: {
    addTrade: (state, action) => {
      const { price, qty, type } = action.payload;
      const totalCost = price * qty;

      if (type === 'buy') {
        state.balance -= totalCost; // Réduction du solde pour un achat
      } else if (type === 'sell') {
        state.balance += totalCost; // Augmentation du solde pour une vente
      }

      state.history.push(action.payload);
    },
  },
});

export const { addTrade } = tradesSlice.actions;
export default tradesSlice.reducer;
