import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getUserInfo: build.query({
      query: () => ({
        url: "/api/v1/users/me",
      })
    }),
    postUser: build.mutation({
      query: ({email, password}) => ({
        url: '/api/v1/auth/jwt/create',
        method: "POST",
        body:{email, password}
      })
    }),
    getToken: build.mutation({
      query: ({token}) => ({
        url: '/api/v1/auth/jwt/verify/',
        method: 'POST',
        body: {token},
      })
    })
  }),
});

export const { useGetUserInfoQuery, usePostUserMutation, useGetTokenMutation  } = userApi;
