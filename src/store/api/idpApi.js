import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";

const token = localStorage.getItem('token')

export const idpApi = createApi({
  reducerPath: "idpApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getIdp: build.query({
      query: (page) => ({
        url: `/api/v1/idp?page=${page}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        }
      }),
    }),
    // getIdpEmployee: build.query({
    //   query: (page) => ({
    //     url: `/api/v1/idp/subordinates/?page=${page}`,
    //     headers: {
    //       "Content-Type": "application/json",
    //       "Authorization" : `Bearer ${token}`
    //     }
    //   }),
    // }),
    getIdpEmployee: build.query({
      query: (page = 1) => ({
        url: `/api/v1/idp/subordinates/?page=${page}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        }
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    getIdpPrivate: build.query({
      query: (page = 1) => ({
        url: `/api/v1/idp/private/?page=${page}`,
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        }
      }),
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.results.push(...newItems.results);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      }
    }),
    
    postIdp: build.mutation({
      query: (body) => ({
        url: "/api/v1/idp/",
        method: "POST",
        headers:{
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        },
        body,
      }),
    }),
    updatetIdp: build.mutation({
      query: (idp_id, body) => ({
        url: `/api/v1/idp/${idp_id}/`,
        method: "PUT",
        body,
      }),
    }),
    deleteIdp: build.mutation({
      query: (idp_id) => ({
        url: `/api/v1/idp/${idp_id}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetIdpQuery,
  useGetIdpEmployeeQuery,
  useGetIdpPrivateQuery,
  useDeleteIdpMutation,
  usePostIdpMutation,
  useUpdatetIdpMutation,
} = idpApi;
