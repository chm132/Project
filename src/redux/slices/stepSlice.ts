import { createSlice } from '@reduxjs/toolkit';
import { setCookie } from '../../utils/cookies';

interface StepSliceProps {
  count: number;
}

const initialState: StepSliceProps = {
  count: 1,
};

const stepSlice = createSlice({
  name: 'step',
  initialState,
  reducers: {
    plusStep: (state) => {
      state.count += 1;
      if (state.count === 7) {
        setCookie('isEntered', true, {
          maxAge: 10 * 60 * 60, // isEntered 쿠키의 지속시간은 1시간
        });
      }
    },
  },
});

export const { plusStep } = stepSlice.actions;

export default stepSlice.reducer;
