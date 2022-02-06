export type MyFavoriteMonumentQuery = {
    ms: number,
    query: string,
    result: Array<MyFavoriteMonument>
}

export type MyFavoriteMonument = {
    slug: {
        _type: 'slug',
        current: string
    },
    title: string,
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: "myFavoriteMonument",
    _updatedAt: string,
}