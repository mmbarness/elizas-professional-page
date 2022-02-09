import {BlockContent, Query, Slug, CoreResponse} from '../shared/basicSanityTypes'

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

export interface SincerelyYours extends CoreResponse {
    assets: Array<syImage | syVideo>;
    chunkOfText: Array<BlockContent>;
    slug: Slug;
    title: string;
    _type: "sincerelyYours",
}

export interface SincerelyYoursQuery extends Query {
    result: Array<SincerelyYours>
}