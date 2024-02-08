import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://3.38.228.144:8080' }),
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['Lesson', 'Community', 'News'],
  endpoints: (builder) => ({}),
});
