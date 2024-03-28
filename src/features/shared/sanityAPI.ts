import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import imageUrlBuilder from '@sanity/image-url';
import { HomePage, HomePageQuery } from '../01-home/types';
import { DiaryEntry, DiaryEntryQuery } from '../02-diary/types';
import { SanityImage } from './basicSanityTypes';
import { WorkPDF } from '../../types/sanityTypes';
import { InfoQuery } from '../03-info/types';
import { WorkPdfQuery } from '../../types/sharedTypes';
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
        getDiaryEntries: builder.query<Array<DiaryEntry>, void>({
            query: () => `?query=*[_type == "diary"]`,
            transformResponse: (response: DiaryEntryQuery) => response.result
        }),
        getHomePage: builder.query<HomePage, void>({
            query: () => `?query=*[_type == "homePage"]`,
            transformResponse: (response: HomePageQuery) => response.result[2],
        }),
        getImageUrl: builder.query<string, string | undefined>({
            query: (ref) => `?query=*[_type == "image"]{
                "imageUrl": image.asset->url
            }`
        }),
        getResume: builder.query<{resumeURL: string}, void>({
            query: () => `?query=*[_type == 'resume'] {
                "resumeURL": asset->url
              }`,
            transformResponse:(response: {'result': Array<{'resumeURL':string}>}) => response.result[0]
        }),
        getSlugs: builder.query<string[], void>({
            query: () => `?query=*[_type== "slug"]`,
        }),
        getWorkPDF: builder.query<WorkPDF, void>({
            query: () => `?query=*[_type == "workPDF"]{_id,"url": asset->url}`,
            transformResponse: (response: WorkPdfQuery) => response.result[0]
        }),
        getInfo: builder.query<any[], void> ({
            query: () => `?query=*[_type == "info"]`,
            transformResponse: (response: InfoQuery) => response.result[0].info
        })
    })
})

export const {
    useGetDiaryEntriesQuery,
    useGetHomePageQuery,
    useGetImageUrlQuery,
    useGetResumeQuery,
    useGetSlugsQuery,
    useGetWorkPDFQuery,
    useGetInfoQuery,
} = sanityApi



