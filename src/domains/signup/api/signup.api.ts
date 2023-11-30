import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints: (builder) => ({
        login: builder.query<{ email: string }, string>({
            query: () => `login`,
        }),
    })
})

export const { useLoginQuery } = authApi