import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { countReducer } from './count/slice';

const rootReducer = combineReducers({
  count: countReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
