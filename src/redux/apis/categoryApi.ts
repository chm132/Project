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
    getHeaderSearch: builder.query<HeaderSearchResponse, string>({
      query: (keyword) => {
        return {
          url: `/lesson/search?keyword=${keyword}`,
          method: 'GET',
        };
      },
    }),
    getOrderByLessons: builder.query<RowResponse, string>({
      providesTags: ['Lesson'],
      query: (condition) => {
        return {
          url: `/lesson?orderBy=${condition}`,
          method: 'GET',
        };
      },
    }),
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
  usePostSurveyMutation,
} = categoryApi;
