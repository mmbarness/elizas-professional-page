import { Query, CoreResponse } from "../shared/basicSanityTypes";

export interface MyHusband extends CoreResponse {
    orderRank: string,
    titleOfWork: string,
    titleToDisplay: string,
    type: "link" |"video" | "text",
    video?: string
    Link?: string
    text?: any
}

export interface MyHusbandQuery extends Query {
    result: Array<MyHusband>
}   