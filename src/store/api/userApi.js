import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: "/users",
        params: {},
      }),
    }),
  }),
});

export const { useGetUserInfoQuery, useGetIdpQuery, useGetTaskQuery } = userApi;
