import { Query, CoreResponse, Slug } from "../shared/basicSanityTypes"

export interface MyFavoriteMonumentQuery extends Query {
    result: Array<MyFavoriteMonument>
}

export interface MyFavoriteMonument extends CoreResponse {
    slug: Slug,
    title: string,
    _type: "myFavoriteMonument",
}