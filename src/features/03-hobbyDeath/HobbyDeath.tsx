import {Suspense, useCallback, useState, useEffect} from "react"
import ReactPlayer from "react-player/lazy"
import { useGetHobbyDeathQuery } from "../shared/sanityAPI"
import {match, __, not} from 'ts-pattern'
import { hobbyDeathPatterns } from "./patterns"
import { HobbyDeath as HobbyDeathReq } from "./types"

export const HobbyDeath = () => {

    const { isLoading, error, data } = useGetHobbyDeathQuery()
    const [videoLink, setVideoLink] = useState("")
    const [videoDescription, setVideoDescription] = useState("")

    useEffect(() => {
        match(data)
            .with({
                hobbyDeathDescription: [__.string],
                hobbyDeathVideo: __.string,
                slug: {_type: 'slug', current: 'hobby-death'},
                title: "Hobby Death",
                _createdAt: __.string,
                _id: "hobbyDeath",
                _rev: __.string,
                _type: "hobbyDeath",
                _updatedAt: __.string
            }, (data: HobbyDeathReq) => {
                setVideoLink(data.hobbyDeathVideo)
                setVideoDescription(data.hobbyDeathDescription[0])
            })
            .with(__.nullish, () => {})
            .run()
    },[data])
    
    return (
        <div id="hobby-death-container">
            <ReactPlayer
                url={videoLink}
                width="90%"
                height= "100%"
                controls={true}
                className="hobby-death-video"
            />
            <p className="hobby-death-description">{videoDescription}</p>
        </div>
    )
}