import { apiSlice } from '.';
import { CommunityResponse } from '../../types/Response/Community/CommunityType';
import { DetailCommunityResponse } from '../../types/Response/Community/DetailCommunityType';

const communityApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCommunity: builder.query<CommunityResponse, number | void>({
      providesTags: ['Community'],
      query: (page) => {
        return {
          url: page ? `/community?page=${page}` : '/community',
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
  }),
});

export const { useGetCommunityQuery, useGetDetailCommunityQuery } =
  communityApi;
