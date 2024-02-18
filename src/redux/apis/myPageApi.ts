import { apiSlice } from '.';
import { CurrentUserResponse } from '../../types/Response/MyPage/currentUserType';
import { MyPageLessonResponse } from '../../types/Response/MyPage/getLessonsType';
import { LikeResponse } from '../../types/Response/MyPage/likeLessonType';

export const myPageApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // 마이페이지 회원 정보 불러오기
    getUserDetail: builder.query<CurrentUserResponse, void>({
      providesTags: ['User'],
      query: () => {
        return {
          url: '/member/detail',
          method: 'GET',
        };
      },
    }),
    // 회원의 찜목록 조회
    getLikeLessons: builder.query<LikeResponse, void>({
      query: () => {
        return {
          url: '/member/likes',
          method: 'GET',
        };
      },
    }),
    // 회원의 수업 신청 내역 조회
    getUserLessons: builder.query<MyPageLessonResponse, void>({
      // providesTags: ['Lesson'],
      query: () => {
        return {
          url: '/member/lessons',
          method: 'GET',
        };
      },
    }),

    // 회원의 수업 수강 내역 조회
    getUserCompletedLessons: builder.query<MyPageLessonResponse, void>({
      // providesTags: ['Lesson'],
      query: () => {
        return {
          url: '/member/lessons/completed',
          method: 'GET',
        };
      },
    }),
  }),
});

export const {
  useGetUserDetailQuery,
  useGetLikeLessonsQuery,
  useGetUserLessonsQuery,
  useGetUserCompletedLessonsQuery,
} = myPageApi;
