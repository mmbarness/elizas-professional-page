import { BlockContent } from "../shared/basicSanityTypes"

export type DiaryEntry = {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    title: string,
    slug?: {
        _type: string,
        current: string,
    },
    text: Array<BlockContent>
}

export type DiaryEntryQuery = {
    ms: number, 
    query: string,
    result: Array<DiaryEntry>
}

export type InitialSliceState = {
    diaryEntries: Array<DiaryEntry>,
    isLoading: boolean,
    error: string | null,
}