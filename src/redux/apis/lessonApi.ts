import { apiSlice } from '.';
import { CategoryLessonsResponse } from '../../types/Response/Category/CategoryLessonsType';
import { DetailLessonResponse } from '../../types/Response/Category/DetailLessonType';
import { HeaderSearchResponse } from '../../types/Response/Category/HeaderSearchType';
import { RowResponse } from '../../types/Response/Category/RowType';

interface FilterParamsProps {
  categoryId: number;
  pageNo?: string;
  keyword?: string;
  orderCriteria?: string;
}

interface FreeParamsProps {
  categoryId: number;
  pageNo?: string;
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

    // 카테고리별 공고 리스트 불러오기 - 필터 적용 및 검색어 적용
    getCategoryLessons: builder.query<
      CategoryLessonsResponse,
      FilterParamsProps
    >({
      query: ({ categoryId, pageNo, keyword, orderCriteria }) => {
        let queryParams = '';

        if (keyword) {
          queryParams += `?keyword=${keyword}`;
        }

        if (pageNo) {
          queryParams += `${queryParams ? '&' : '?'}page=${pageNo}`;
        }

        if (orderCriteria) {
          queryParams += `${queryParams ? '&' : '?'}orderBy=${orderCriteria}`;
        }

        return {
          url: `/lesson/category/${categoryId}${queryParams}`,
          method: 'GET',
        };
      },
    }),

    // 무료 강의 버튼 클릭시 동작가능
    getFreeLessons: builder.query<CategoryLessonsResponse, FreeParamsProps>({
      query: ({ categoryId, pageNo }) => {
        return {
          url: `/lesson/category/${categoryId}/free?page=${pageNo}`,
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
  }),
});

export const {
  useGetHeaderSearchQuery,
  useGetOrderByLessonsQuery,
  useGetCategoryLessonsQuery,
  useGetDetailLessonQuery,
  useGetFreeLessonsQuery,
  useDeleteApplyMutation,
  usePostLikeMutation,
  useDeleteLikeMutation,
  usePostApplyMutation,
} = categoryApi;
