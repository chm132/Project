import { apiSlice } from '.';
import { CategoryLessonsResponse } from '../../types/Response/Category/CategoryLessonsType';

interface ParamsProps {
  categoryId: number;
  pageNo?: number;
}

interface SearchParamsProps {
  keyword: string | null;
  fee: boolean | null;
  status: boolean | null;
  pageNo: any;
}

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryLessons: builder.query<CategoryLessonsResponse, ParamsProps>({
      providesTags: ['Lesson'],
      query: ({ categoryId, pageNo }) => {
        return {
          // url: `/lesson/category/${categoryId}?page=${pageNo}`,
          url: pageNo
            ? `/lesson/category/${categoryId}?page=${pageNo}`
            : `/lesson/category/${categoryId}`,
          method: 'GET',
        };
      },
    }),
    getSearchLessons: builder.query<CategoryLessonsResponse, SearchParamsProps>(
      {
        providesTags: ['Lesson'],
        query: ({ keyword, fee, status, pageNo }) => {
          return {
            url: `/lesson/search?page=${pageNo}&query=${keyword}&fee=${fee}&status=${status}`,
            method: 'GET',
          };
        },
      },
    ),
  }),
});

export const { useGetCategoryLessonsQuery, useGetSearchLessonsQuery } =
  categoryApi;
