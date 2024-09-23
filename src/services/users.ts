import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { User } from '../types/types'

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.org/' }),
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => 'users',
        }),
    }),
})
export const { useGetUsersQuery } = usersApi
