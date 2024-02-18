import { apiSlice } from '.';
import { SubCategoryResponse } from '../../types/Response/Survey/SubCategoryType';
import { SurveyResultResponse } from '../../types/Response/Survey/SurveyLessonType';

export const surveyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 2번 문항들 불러오기
    getSubCategories: builder.query<SubCategoryResponse, number>({
      query: (categoryId) => {
        return {
          url: `/sub_categories/${categoryId}`,
          method: 'GET',
        };
      },
    }),
    // 로그인한 회원 한정 카테고리 교육 리스트 클릭 시 설문조사폼으로 넘어가는 것이 아닌
    // 설문완료한 교육 목록 보여주기
    getSurveyResults: builder.query<SurveyResultResponse, number>({
      query: (categoryId) => {
        return {
          url: `/lessons/${categoryId}/surveys`,
          method: 'GET',
        };
      },
    }),

    // 설문조사 폼 제출
    postSurvey: builder.mutation<SurveyResultResponse, any>({
      invalidatesTags: ['Lesson'],
      query: ({ ...post }) => ({
        method: 'POST',
        url: '/lessons/survey',
        body: post,
      }),
    }),
  }),
});

export const {
  useGetSubCategoriesQuery,
  useGetSurveyResultsQuery,
  usePostSurveyMutation,
} = surveyApi;
