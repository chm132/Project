import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.38.228.144:8080' }),
  tagTypes: ['Lesson', 'Community', 'News'],
  endpoints: (builder) => ({}),
});
