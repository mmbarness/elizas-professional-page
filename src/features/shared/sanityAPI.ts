import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import imageUrlBuilder from '@sanity/image-url';
import { HomePage, HomePageQuery } from '../01-home/types';
import { DiaryEntry, DiaryEntryQuery } from '../02-diary/types';
import { HobbyDeath, HobbyDeathQuery } from '../03-hobbyDeath/types';
import { MyFavoriteMonument, MyFavoriteMonumentQuery } from '../04-myFavoriteMonument/types';
import { SelfMaintaining, SelfMaintainingQuery } from '../05-selfMaintaining/types';
import { SincerelyYours, SincerelyYoursQuery } from '../06-sincerelyYours/types';
import { MusicVideoQuery, MusicVideo } from '../07-musicVideos/types';
import { MyHusband, MyHusbandQuery } from '../08-myHusband/types';
import { SanityImage } from './basicSanityTypes';
const sanityClient = require('@sanity/client')
const baseURL = 'https://lnkrniw1.api.sanity.io/v2022-02-01/data/query/production';

export const baseSanityClient = sanityClient({
    projectId: 'lnkrniw1',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2022-02-01',
    token: '',
})

const imageBuilder = imageUrlBuilder(baseSanityClient);

export const imageUrlFor = (source: SanityImage) => imageBuilder.image(source);

export const sanityApi = createApi({
    reducerPath: 'sanity',
    baseQuery: fetchBaseQuery({
        baseUrl: baseURL,
    }),
    endpoints: (builder) => ({
        getImageUrl: builder.query<string, string | undefined>({
            query: (ref) => `?query=*[_type == "image"]{
                "imageUrl": image.asset->url
            }`
        }),
        getHomePage: builder.query<HomePage, void>({
            query: () => `?query=*[_type == "homePage"]`,
            transformResponse: (response: HomePageQuery) => response.result[2],
        }),
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
        getMusicVideos: builder.query<MusicVideo[], void>({
            query: () => `?query=*[_type == "musicVideo"]|order(orderRank)`,
            transformResponse: (response: MusicVideoQuery) => response.result
        }),
        getMyHusband: builder.query<MyHusband[], void>({
            query: () => `?query=*[_type == "myHusband"]|order(orderRank)`,
            transformResponse: (response: MyHusbandQuery) => response.result
        })
    })
})

export const {
    useGetImageUrlQuery,
    useGetHomePageQuery,
    useGetDiaryEntriesQuery,
    useGetHobbyDeathQuery,
    useGetMFMQuery,
    useGetSelfMaintainingQuery,
    useGetSincerelyYoursQuery,
    useGetMusicVideosQuery,
    useGetMyHusbandQuery,
} = sanityApi 



