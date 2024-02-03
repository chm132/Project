import { combineReducers } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import { apiSlice } from './apis';

const rootReducer = combineReducers({
  step: stepReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
