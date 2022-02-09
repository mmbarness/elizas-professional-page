export type BlockContent = {
    _key: string;
    _type: string;
    marks? : Array<String>;
    text?: string;
    level?: number,
    listItem?: string,
    markDefs?: Array<String>,
    style?: string
}

export interface CoreResponse  {
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

export type Slug = {
    _type: "slug";
    current: string;
}

export type Query = {
    ms: number;
    query: string;
}

export interface Link {
    _key: string;
    _type: string;
    link: string;
    title: string;
    displayText: string;
}