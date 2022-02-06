import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DiaryEntry, DiaryEntryQuery } from '../02-diary/types';
const baseURL = 'https://lnkrniw1.api.sanity.io/v2022-02-01/data/query/production';

export const sanityApi = createApi({
    reducerPath: 'sanity',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: (builder) => ({
        getDiaryEntries: builder.query<Array<DiaryEntry>, void>({
            query: () => `?query=*[_type == "diary"]`,
            transformResponse: (response: DiaryEntryQuery) => response.result
        }),
        getHobbyDeath: builder.query<any, void>({
            query: () => `*[_type == "hobbyDeath"]`
        })
    })
})

export const {
    useGetDiaryEntriesQuery,
    useGetHobbyDeathQuery
} = sanityApi 



