import { apiSlice } from '.';
import { CategoryLessonsResponse } from '../../types/Response/Category/CategoryLessonsType';
import { DetailLessonResponse } from '../../types/Response/Category/DetailLessonType';
import { HeaderSearchResponse } from '../../types/Response/Category/HeaderSearchType';
import { RowResponse } from '../../types/Response/Category/RowType';

interface ParamsProps {
  categoryId: number;
  pageNo?: string;
  keyword?: string;
}

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 헤더에 붙어있는 검색기능
    getHeaderSearch: builder.query<HeaderSearchResponse, string>({
      query: (keyword) => {
        return {
          url: `/lesson/search?keyword=${keyword}`,
          method: 'GET',
        };
      },
    }),

    // Row 컴포넌트 담당 기능
    getOrderByLessons: builder.query<RowResponse, string>({
      providesTags: ['Lesson'],
      query: (condition) => {
        return {
          url: `/lesson?orderBy=${condition}`,
          method: 'GET',
        };
      },
    }),

    //
    getCategoryLessons: builder.query<CategoryLessonsResponse, ParamsProps>({
      providesTags: ['Lesson'],
      query: ({ categoryId, pageNo, keyword }) => {
        let queryParams = '';

        if (keyword) {
          queryParams += `?keyword=${keyword}`;
        }

        if (pageNo) {
          queryParams += `${queryParams ? '&' : '?'}page=${pageNo}`;
        }

        return {
          url: `/lesson/category/${categoryId}${queryParams}`,
          method: 'GET',
        };
      },
    }),
    getDetailLesson: builder.query<DetailLessonResponse, number>({
      providesTags: ['Lesson'],
      query: (lessonId) => {
        return {
          url: `/lesson/${lessonId}`,
          method: 'GET',
        };
      },
    }),
    // 회원일때 신청
    postApply: builder.mutation({
      invalidatesTags: ['Lesson'],
      query: (lessonId) => ({
        method: 'POST',
        url: `lesson/${lessonId}/member`,
        body: {},
      }),
    }),
    deleteApply: builder.mutation({
      invalidatesTags: ['Lesson'],
      query: (lessonId) => ({
        method: 'DELETE',
        url: `/lesson/${lessonId}/member`,
        body: {},
      }),
    }),

    // 회원일떄 찜하기, 찜취소
    postLike: builder.mutation({
      invalidatesTags: ['Lesson'],
      query: (lessonId) => ({
        method: 'POST',
        url: `/lesson/${lessonId}/like`,
        body: {},
      }),
    }),
    deleteLike: builder.mutation({
      invalidatesTags: ['Lesson'],
      query: (lessonId) => ({
        method: 'DELETE',
        url: `/lesson/${lessonId}/like`,
        body: {},
      }),
    }),

    postSurvey: builder.mutation({
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
  useGetHeaderSearchQuery,
  useGetOrderByLessonsQuery,
  useGetCategoryLessonsQuery,
  useGetDetailLessonQuery,
  useDeleteApplyMutation,
  usePostLikeMutation,
  useDeleteLikeMutation,
  usePostSurveyMutation,
  usePostApplyMutation,
} = categoryApi;
