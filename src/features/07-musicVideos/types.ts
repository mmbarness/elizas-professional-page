import { Query, CoreResponse } from "../shared/basicSanityTypes"

export interface MusicVideo extends CoreResponse {
    embedCode: string,
    link: string,
    orderRank: string,
    source: string,
    titleOfWork: string,
    titleToDisplay: string
}

export interface MusicVideoQuery extends Query {
    result: Array<MusicVideo>
}