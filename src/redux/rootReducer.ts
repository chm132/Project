import { combineReducers } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';

const rootReducer = combineReducers({
  step: stepReducer,
});

export default rootReducer;