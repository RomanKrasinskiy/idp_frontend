import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from '../../utils/constans'

export const idpApi = createApi({
    reducerPath: 'idpApi',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
    endpoints:(build) => ({
        getIdp: build.query({
            query: () => ({
                url: '/idp',
            })
        }),
        postIdp: build.mutation({
            query: (body) => ({
                url: '/idp',
                method: 'POST',
                body
            })
        }),
        updatetIdp: build.mutation({
            query: (id,body) => ({
                url: `/idp/${id}`,
                method: 'PUT',
                body
            })
        }),
        deleteIdp: build.mutation({
            query: (id) => ({
                url: `/idp/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {useGetIdpQuery,useDeleteIdpMutation,usePostIdpMutation,useUpdatetIdpMutation} = idpApi