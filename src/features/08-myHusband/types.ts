import { Query, CoreResponse } from "../shared/basicSanityTypes";

export interface MyHusband extends CoreResponse {
    orderRank: string,
    titleOfWork: string,
    titleToDisplay: string,
    type: string,
    video: string
}

export interface MyHusbandQuery extends Query {
    result: Array<MyHusband>
}   