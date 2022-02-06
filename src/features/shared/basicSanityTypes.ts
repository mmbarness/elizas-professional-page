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

export type Slug = {
    _type: "slug";
    current: string;
}