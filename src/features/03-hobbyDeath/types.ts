import { Query, CoreResponse, SanityImage } from "../shared/basicSanityTypes"

export interface HobbyDeath extends CoreResponse {
    hobbyDeathVideo: string,
    hobbyDeathDescription: Array<string>,
    hobbyDeathImages: Array<SanityImage>,
    slug: {
        _type: 'slug', current: string
    },
    title: string,
    _type: "hobbyDeath",
}

export interface HobbyDeathQuery extends Query {
    result: Array<HobbyDeath>
}