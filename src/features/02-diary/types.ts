import { BlockContent } from "../shared/basicSanityTypes"
import { Query, CoreResponse } from "../shared/basicSanityTypes"

export interface DiaryEntry extends CoreResponse {
    title: string,
    slug?: {
        _type: string,
        current: string,
    },
    text: Array<BlockContent>
    _type: "diaryEntry"
}

export interface DiaryEntryQuery extends Query {
    result: Array<DiaryEntry>
}

export type InitialSliceState = {
    diaryEntries: Array<DiaryEntry>,
    isLoading: boolean,
    error: string | null,
}