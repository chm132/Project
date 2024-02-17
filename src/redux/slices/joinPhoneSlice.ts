import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface JoinStateProps {
  phoneNum: string;
}

const initialState = {
  phoneNum: '',
} as JoinStateProps;

const joinPhoneSlice = createSlice({
  name: 'joinPhone',
  initialState,
  reducers: {
    // 인증번호가 확인이 되면 dispatch
    setPhoneNum: (state, action: PayloadAction<JoinStateProps>) => {
      state.phoneNum = action.payload.phoneNum;
    },
  },
});

export const { setPhoneNum } = joinPhoneSlice.actions;

export default joinPhoneSlice.reducer;
