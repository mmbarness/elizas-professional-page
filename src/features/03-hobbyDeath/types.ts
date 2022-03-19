import { Query, CoreResponse, SanityImage } from "../shared/basicSanityTypes"

export interface HobbyDeath extends CoreResponse {
    hobbyDeathVideo: string,
    hobbyDeathDescription: Array<string>,
    hobbyDeathImages: [
        {
            _key:string,
            _type:"hobbyDeathImage",
            asset:{
                _ref: string,
                _type:string
            },
            caption: string | "",
        }
    ],
    slug: {
        _type: 'slug', current: string
    },
    title: string,
    _type: "hobbyDeath",
}

export interface HobbyDeathQuery extends Query {
    result: Array<HobbyDeath>
}