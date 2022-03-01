import {ImageRef, TextBlock, SocialLink} from './sanityTypes'

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