import { apiSlice } from '.';
import { CategoryLessonsResponse } from '../../types/Response/Category/CategoryLessonsType';
import { DetailLessonResponse } from '../../types/Response/Category/DetailLessonType';

interface ParamsProps {
  categoryId: number;
  pageNo?: string;
  keyword?: string;
}

export const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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
  }),
});

export const { useGetCategoryLessonsQuery, useGetDetailLessonQuery } =
  categoryApi;
