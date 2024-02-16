import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SurveyStateProps {
  sub_categoryIds: number[];
  classType: number[];
  teacher_gender: number;
  teacher_age: number[];
  choices: number[];
  age: number;
  gender: number;
  address: string;
}

const initialState = {
  sub_categoryIds: [],
  classType: [],
  teacher_gender: 0,
  teacher_age: [],
  choices: [],
  age: 0,
  gender: 0,
  address: '',
} as SurveyStateProps;

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setSurveyOne: (state, action: PayloadAction<any>) => {
      state.sub_categoryIds = action.payload.sub_categoryIds;
      state.classType = action.payload.classType;
    },
    setSurveyTwo: (state, action: PayloadAction<any>) => {
      state.teacher_gender = action.payload.teacher_gender;
      state.teacher_age = action.payload.teacher_age;
    },
    setSurveyThird: (state, action: PayloadAction<any>) => {
      state.choices = action.payload.choices;
    },
    setSurveyFourth: (state, action: PayloadAction<any>) => {
      state.age = action.payload.age;
      state.gender = action.payload.gender;
    },
    setSurveyFifth: (state, action) => {
      state.address = action.payload.address;
    },
  },
});

export const {
  setSurveyOne,
  setSurveyTwo,
  setSurveyThird,
  setSurveyFourth,
  setSurveyFifth,
} = surveySlice.actions;

export default surveySlice.reducer;
