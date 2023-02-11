export type SocialLink = {
    displayText: string,
    link: string,
    title: string,
    _key: string,
    _type: string
}

export type ImageRef = {
    asset: Asset
    _type: "image"
}

export type Asset = {
    _ref: string,
    _type: string
}

export type TextBlock ={
    _key: 'string',
    _type: 'block',
    children: Array<{
        _key: 'string',
        _type: 'span',
        marks: Array<any>,
        text: string
    }>,
    markDefs: Array<any>,
    style: string
}

export type homepageRequest = {
    _id: string,
    homePageImage: ImageRef 
    homePageText: TextBlock,
    socials: Array<SocialLink>
}

export type WorkPDF = {
    _type: string,
    url: string,
}

