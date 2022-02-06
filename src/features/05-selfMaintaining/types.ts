import {Slug} from '../shared/basicSanityTypes'

export type SelfMaintaining = {
    slug: Slug;
    title: string;
    video: {
        videoURL: string,
        _key: string,
        _type: string,
    }
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: "selfMaintaining",
    _updatedAt: string,
}

export type SelfMaintainingQuery = {
    ms: number,
    query: "*[_type == \"selfMaintaining\"]",
    result: Array<SelfMaintaining>
}