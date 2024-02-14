import { combineReducers, configureStore } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import currentUserReducer from './slices/currentUserSlice';
import nonUserReducer from './slices/nonUserSlice';
import storage from 'redux-persist/lib/storage/session';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import { apiSlice } from './apis';
import persistStore from 'redux-persist/es/persistStore';
import { setupListeners } from '@reduxjs/toolkit/query';

const rootReducer = combineReducers({
  step: stepReducer,
  currentUser: currentUserReducer,
  nonUser: nonUserReducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['currentUser', 'nonUser'],
};

const persistedRedcuer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRedcuer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiSlice.middleware),
});

export const persistor = persistStore(store); // store 내부에서 persist 작동

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch); // refetch 하기 위한 dispatch listen
