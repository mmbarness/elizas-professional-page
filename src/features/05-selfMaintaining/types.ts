import { Query, Slug, CoreResponse } from '../shared/basicSanityTypes'


export interface SelfMaintainingQuery extends Query {
    result: Array<SelfMaintaining>
}

export interface SelfMaintaining extends CoreResponse {
    slug: Slug;
    title: string;
    video: {
        videoURL: string,
        _key: string,
        _type: string,
    }
    _type: "selfMaintaining",
}