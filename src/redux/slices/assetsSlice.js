import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTradableAssets } from '../../utils/alpacaAPI';

export const loadAssets = createAsyncThunk('assets/loadAssets', fetchTradableAssets);

const assetsSlice = createSlice({
  name: 'assets',
  initialState: {
    list: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadAssets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loadAssets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(loadAssets.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export default assetsSlice.reducer;
