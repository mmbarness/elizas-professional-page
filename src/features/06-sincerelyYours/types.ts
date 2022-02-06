import {BlockContent, Slug} from '../shared/basicSanityTypes'

export type syVideo = {
    slug: Slug,
    assetType: "video",
    title: string,
    video: string,
    _key: string,
    _type: "assetBlock"
}

export type syImage = {
    assetType: "image",
    image: {
        _type: 'image', 
        asset: {
            _ref: string,
            _type: 'reference',
        }
    }
    slug: Slug,
    title: string,
    _key: string,
    _type: "assetBlock"
}

export type SincerelyYours = {
    assets: Array<syImage | syVideo>;
    chunkOfText: Array<BlockContent>;
    slug: Slug;
    title: string;
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: "sincerelyYours",
    _updatedAt: string,
}

export type SincerelyYoursQuery = {
    ms: number,
    query: "*[_type == \"sincerelyYours\"]",
    result: Array<SincerelyYours>
}