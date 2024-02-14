import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface CurrentUserStateProps {
  id: number;
  name?: string;
  isLoggedIn: boolean;
}

const initialState = {
  id: 0,
  name: '',
  isLoggedIn: false,
} as CurrentUserStateProps;

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUserStateProps>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isLoggedIn = true;
    },

    removeCurrentUser: (state) => {
      state.id = 0;
      state.name = '';
      state.isLoggedIn = false;
    },
  },
});

export const { setCurrentUser, removeCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
