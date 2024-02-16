import { apiSlice } from '.';
import { CommunityResponse } from '../../types/Response/Community/CommunityType';
import { DetailCommunityResponse } from '../../types/Response/Community/DetailCommunityType';

interface GetCommunityParams {
  category?: string;
  pageNo?: string;
}

const communityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommunity: builder.query<CommunityResponse, GetCommunityParams>({
      providesTags: ['Community'],
      query: ({ category, pageNo }) => {
        // 쿼리 파라미터 동적 생성
        let queryParams = '';

        if (pageNo) {
          queryParams += `?page=${pageNo}`;
        }

        if (category && category !== '분류')
          queryParams += `${queryParams ? '&' : '?'}category=${category}`;

        return {
          url: `community${queryParams}`,
          method: 'GET',
        };
      },
    }),
    getDetailCommunity: builder.query<DetailCommunityResponse, number>({
      providesTags: ['Community'],
      query: (communityId) => {
        return {
          url: `/community/${communityId}`,
          method: 'GET',
        };
      },
    }),
    postComment: builder.mutation({
      invalidatesTags: ['Community'],
      query: ({ communityId, ...post }) => ({
        method: 'POST',
        url: `/community/${communityId}/comments`,
        body: post,
      }),
    }),
  }),
});

export const {
  useGetCommunityQuery,
  useGetDetailCommunityQuery,
  usePostCommentMutation,
} = communityApi;
