import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from '../../utils/constans'

export const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: fetchBaseQuery({baseUrl: `${BASE_URL}`}),
    endpoints:(build) => ({
        getTask: build.query({
            query: () => ({
                url: '/tasks',
            })
        }),
        postTask: build.mutation({
            query: (body) => ({
                url: '/tasks',
                method: 'POST',
                body
            })
        }),
        updatetTask: build.mutation({
            query: (id,body) => ({
                url: `/tasks/${id}`,
                method: 'PUT',
                body
            })
        }),
        deleteTask: build.mutation({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            })
        })
    })
})

export const {useGetTaskQuery,useDeleteTaskMutation,usePostTaskMutation,useUpdatetTaskMutation} = taskApi