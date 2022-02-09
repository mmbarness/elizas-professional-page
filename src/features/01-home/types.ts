import { Link, Query, CoreResponse, BlockContent, SanityImage } from '../shared/basicSanityTypes'

export interface HomePage extends CoreResponse {
    homePageText: BlockContent[]
    homePageImage: SanityImage
    socials: Link[]
}

export interface HomePageQuery extends Query {
    result: HomePage[]
}