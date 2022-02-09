import { Query, CoreResponse } from "../shared/basicSanityTypes"

export interface HobbyDeath extends CoreResponse {
    hobbyDeathDescription: Array<string>,
    hobbyDeathVideo: string,
    slug: {
        _type: 'slug', current: string
    },
    title: string,
    _type: "hobbyDeath",
}

export interface HobbyDeathQuery extends Query {
    result: Array<HobbyDeath>
}