import { apiSlice } from '.';
import { MyPageLessonResponse } from '../../types/Response/MyPage/getLessonsType';

export const guestApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 비회원 신청 내역 조회
    getLessons: builder.query<MyPageLessonResponse, string>({
      // invalidatesTags: ['Guest'],
      query: (phoneNum) => {
        return {
          url: `/guest/lessons/${phoneNum}`,
          method: 'GET',
        };
      },
    }),

    // 비회원 수강 내역 조회
    getCompletedLessons: builder.query<MyPageLessonResponse, string>({
      // invalidatesTags: ['Guest'],
      query: (phoneNum) => {
        return {
          url: `/guest/lessons/${phoneNum}/completed`,
          method: 'GET',
        };
      },
    }),
    // 비회원 수업 신청
    postLessonGuest: builder.mutation({
      invalidatesTags: ['Guest'],
      query: ({ lessonId, ...post }) => {
        return {
          url: `/lesson/${lessonId}/guest`,
          method: 'POST',
          body: post,
        };
      },
    }),

    // 비회원 수업 취소
    deleteLesson: builder.mutation({
      invalidatesTags: ['Guest'],
      query: ({ phoneNum, lessonId }) => {
        return {
          url: `/guest/lessons/${phoneNum}/${lessonId}`,
          method: 'DELETE',
          body: {},
        };
      },
    }),
  }),
});

export const {
  usePostLessonGuestMutation,
  useGetLessonsQuery,
  useGetCompletedLessonsQuery,
  useDeleteLessonMutation,
} = guestApi;
