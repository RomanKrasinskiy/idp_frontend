import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../utils/constans";

const token = localStorage.getItem('token')

export const idpApi = createApi({
  reducerPath: "idpApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}` }),
  endpoints: (build) => ({
    getIdp: build.query({
      query: () => ({
        url: "/api/v1/idp",
        headers: {
          "Content-Type": "application/json",
          "Authorization" : `Bearer ${token}`
        }
      }),
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
  useDeleteIdpMutation,
  usePostIdpMutation,
  useUpdatetIdpMutation,
} = idpApi;
