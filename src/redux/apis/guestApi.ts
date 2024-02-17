import { apiSlice } from '.';
import { GuestLessonResponse } from '../../types/Response/MyPage/guestLessonType';

export const guestApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
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

    // 비회원 신청 내역 조회
    getLessons: builder.mutation<GuestLessonResponse, any>({
      invalidatesTags: ['Guest'],
      query: ({ ...post }) => {
        return {
          url: '/guset/lessons',
          method: 'POST',
          body: post,
        };
      },
    }),

    // 비회원 수강 내역 조회
    getCompletedLessons: builder.mutation<GuestLessonResponse, any>({
      invalidatesTags: ['Guest'],
      query: ({ ...post }) => {
        return {
          url: '/guest/lessons/completed',
          method: 'POST',
          body: post,
        };
      },
    }),

    deleteLesson: builder.mutation({
      invalidatesTags: ['Guest'],
      query: ({ lessonId, phoneNum }) => {
        return {
          url: `/guest/lessons/${lessonId}`,
          method: 'DELETE',
          body: phoneNum,
        };
      },
    }),
  }),
});

export const {
  usePostLessonGuestMutation,
  useGetLessonsMutation,
  useGetCompletedLessonsMutation,
  useDeleteLessonMutation,
} = guestApi;
