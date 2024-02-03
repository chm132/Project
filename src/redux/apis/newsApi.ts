import { apiSlice } from '.';
import { NewsResponse } from '../../types/Response/News/NewsType';

const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, number | void>({
      providesTags: ['News'],
      query: (page) => {
        return {
          url: page ? `/news?page=${page}` : '/news',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;
