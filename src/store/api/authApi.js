import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    // getUserInfo: build.query({
    //   query: (token) => ({
    //     url: "/api/v1/users/me",
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization" : `Bearer ${token}`
    //     }
    //   })
    // }),
    postAuth: build.mutation({
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

export const { usePostAuthMutation, useGetTokenMutation  } = authApi;
