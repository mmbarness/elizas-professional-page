import {match, __} from 'ts-pattern'

export const hobbyDeathPatterns = {
    'successPattern': {
        hobbyDeathDescription: [__.string],
        hobbyDeathVideo: __.string,
        slug: {_type: 'slug', current: 'hobby-death'},
        title: "Hobby Death",
        _createdAt: __.string,
        _id: "hobbyDeath",
        _rev: "D0BPLNkr4jQkYfe4H2gD1C",
        _type: "hobbyDeath",
        _updatedAt: __.string
    }
}