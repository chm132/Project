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
      if (state.count === 5) {
        setCookie('isEntered', true);
      }
    },
  },
});

export const { plusStep } = stepSlice.actions;

export default stepSlice.reducer;
