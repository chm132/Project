import { apiSlice } from '.';
import { NewsResponse } from '../../types/Response/News/NewsType';
import { DetailNewsResponse } from '../../types/Response/News/DetailNewsType';

interface GetNewsParams {
  category?: string;
  pageNo?: string;
}

const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, GetNewsParams>({
      providesTags: ['News'],
      query: ({ category, pageNo }) => {
        // 쿼리 파라미터 동적 생성
        let queryParams = '';

        if (pageNo) {
          queryParams += `?page=${pageNo}`;
        }

        if (category && category !== '분류')
          queryParams += `${queryParams ? '&' : '?'}category=${category}`;
        return {
          url: `news${queryParams}`,
          method: 'GET',
        };
      },
    }),
    getDetailNews: builder.query<DetailNewsResponse, number>({
      providesTags: ['News'],
      query: (newsId) => {
        return {
          url: `/news/${newsId}`,
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetDetailNewsQuery } = newsApi;
