import {match, P} from 'ts-pattern'

export const hobbyDeathPatterns = {
    'successPattern': {
        hobbyDeathDescription: [P.string],
        hobbyDeathVideo: P.string,
        slug: {_type: 'slug', current: 'hobby-death'},
        title: "Hobby Death",
        _createdAt: P.string,
        _id: "hobbyDeath",
        _rev: "D0BPLNkr4jQkYfe4H2gD1C",
        _type: "hobbyDeath",
        _updatedAt: P.string
    }
}