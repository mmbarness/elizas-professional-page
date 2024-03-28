import { Query } from '../features/shared/basicSanityTypes'
import { ImageRef, TextBlock, SocialLink, WorkPDF } from './sanityTypes'

export type HomePageNotLoaded = {
    LOADED: false
}

export type HomePage = {
    LOADED: boolean,
    _id: string,
    homePageImage: ImageRef
    homePageText: Array<TextBlock>,
    socials: Array<SocialLink>
}

export interface WorkPdfQuery extends Query {
    result: Array<WorkPDF>
}
