export type HobbyDeath = {
    hobbyDeathDescription: Array<string>,
    hobbyDeathVideo: string,
    slug: {
        _type: 'slug', current: string
    },
    title: string,
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: "hobbyDeath",
    _updatedAt: string,
}

export type HobbyDeathQuery = {
    ms: number,
    query: string,
    result: Array<HobbyDeath>
}