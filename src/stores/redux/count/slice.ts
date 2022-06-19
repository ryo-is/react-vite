import { createSlice, SliceCaseReducers } from '@reduxjs/toolkit';
import { ReduxState } from './types';

export const countSlice = createSlice<
  ReduxState,
  SliceCaseReducers<ReduxState>
>({
  name: 'count',
  initialState: {
    countByRedux: 0,
  },
  reducers: {
    increment: (state) => {
      state.countByRedux += 1;
    },
    decrement: (state) => {
      state.countByRedux -= 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export const countReducer = countSlice.reducer;
