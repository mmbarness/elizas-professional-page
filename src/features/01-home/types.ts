import { Link, Query, CoreResponse, BlockContent } from '../shared/basicSanityTypes'

export interface HomePage extends CoreResponse {
    homePageText: BlockContent[]
    homePageImage: {
        asset: {
            _ref: string
            _type: "reference"
        }
    }
    socials: Link[]
}

export interface HomePageQuery extends Query {
    result: HomePage[]
}