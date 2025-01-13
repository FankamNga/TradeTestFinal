import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './slices/assetsSlice';
import tradesReducer from './slices/tradesSlice';

export default configureStore({
  reducer: {
    assets: assetsReducer,
    trades: tradesReducer,
  },
});
