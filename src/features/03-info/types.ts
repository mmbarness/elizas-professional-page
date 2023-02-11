import { PortableTextBlockComponent } from "@portabletext/react"
import { Query } from "../shared/basicSanityTypes"

export type Info = {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
    info: Array<any>,
}

export interface InfoQuery extends Query {
    result: Array<Info>
}