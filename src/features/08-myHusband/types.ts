import { Query, CoreResponse } from "../shared/basicSanityTypes";

export interface MyHusband extends CoreResponse {
    orderRank: string,
    titleOfWork: string,
    titleToDisplay: string,
    type: "link" |"video",
    video?: string
    Link?: string
}

export interface MyHusbandQuery extends Query {
    result: Array<MyHusband>
}   