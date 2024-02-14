import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface NonUserStateProps {
  phoneNum: string;
}

const initialState = {
  phoneNum: '',
} as NonUserStateProps;

const nonUserSlice = createSlice({
  name: 'nonUser',
  initialState,
  reducers: {
    setNonUser: (state, action: PayloadAction<NonUserStateProps>) => {
      state.phoneNum = action.payload.phoneNum;
    },

    removeNonUser: (state) => {
      state.phoneNum = '';
    },
  },
});

export const { setNonUser, removeNonUser } = nonUserSlice.actions;

export default nonUserSlice.reducer;
