import { Link, Query, CoreResponse, BlockContent, SanityImage } from '../shared/basicSanityTypes'

export interface HomePage extends CoreResponse {
    homePageText: BlockContent[]
    homePageImage: SanityImage
    socials: Link[]
}

export interface HomePageQuery extends Query {
    result: HomePage[]
}

export interface DiaryEntry extends CoreResponse {
    orderRank: string;
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
