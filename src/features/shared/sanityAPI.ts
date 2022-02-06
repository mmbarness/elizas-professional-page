import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DiaryEntry, DiaryEntryQuery } from '../02-diary/types';
import { HobbyDeath, HobbyDeathQuery } from '../03-hobbyDeath/types';
import { MyFavoriteMonument, MyFavoriteMonumentQuery } from '../04-myFavoriteMonument/types';
import { SelfMaintaining, SelfMaintainingQuery } from '../05-selfMaintaining/types';
import { SincerelyYours, SincerelyYoursQuery } from '../06-sincerelyYours/types';

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
        getHobbyDeath: builder.query<HobbyDeath, void>({
            query: () => `?query=*[_type == "hobbyDeath"]`,
            transformResponse: (response: HobbyDeathQuery) => response.result[1]
        }),
        getMFM: builder.query<MyFavoriteMonument, void>({
            query: () => `?query=*[_type == "myFavoriteMonument"]`,
            transformResponse: (response: MyFavoriteMonumentQuery) => response.result[0]
        }),
        getSelfMaintaining: builder.query<SelfMaintaining, void>({
            query: () => `?query=*[_type == "selfMaintaining"]`,
            transformResponse: (response: SelfMaintainingQuery) => response.result[0]
        }),
        getSincerelyYours: builder.query<SincerelyYours, void>({
            query: () => `?query=*[_type == "sincerelyYours"]`,
            transformResponse: (response: SincerelyYoursQuery) => response.result[0]
        }),
        getMusicVideos: builder.query<any, void>({
            query: () => `?query=*[_type == "musicVideo"]|order(orderRank)`,
        }),
        getMyHusband: builder.query<any, void>({
            query: () => `?query=*[_type == "myHusband"]`,
        })
    })
})

export const {
    useGetDiaryEntriesQuery,
    useGetHobbyDeathQuery,
    useGetMFMQuery,
    useGetSelfMaintainingQuery,
    useGetSincerelyYoursQuery,
    useGetMusicVideosQuery,
    useGetMyHusbandQuery,
} = sanityApi 



