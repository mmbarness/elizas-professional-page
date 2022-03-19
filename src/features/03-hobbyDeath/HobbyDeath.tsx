import { useState, useEffect } from "react"
import ReactPlayer from "react-player/lazy"
import { useGetHobbyDeathQuery } from "../shared/sanityAPI"
import { match, __ , not} from 'ts-pattern'
import { hobbyDeathPatterns } from "./patterns"
import { HobbyDeath as HobbyDeathReq } from "./types"
import { PortableText } from "@portabletext/react"

export const HobbyDeath = () => {

    const { data } = useGetHobbyDeathQuery()
    const [videoLink, setVideoLink] = useState("")
    const [videoDescription, setVideoDescription] = useState<any>([""])

    console.log({videoDescription})

    useEffect(() => {
        match(data)
            .with({
                hobbyDeathDescription: [not(__.nullish)],
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
                setVideoDescription(data.hobbyDeathDescription)
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
            <div className="hobby-death-description">
                <PortableText
                    value={videoDescription}
                />
            </div>
        </div>
    )
}