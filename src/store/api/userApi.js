import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: "/users",
      })
    }),
    postUser: build.mutation({
      query: (body) => ({
        url: '/auth/jwt/create',
        method: "POST",
        body
      })
    }),
    getToken: build.mutation({
      query: (token) => ({
        url: '/auth/jwt/verify',
        method: 'POST',
        body: token,
      })
    })
  }),
});

export const { useGetUserInfoQuery, usePostUserMutation, useGetTokenMutation  } = userApi;
