import { useState, useEffect } from "react"
import ReactPlayer from "react-player/lazy"
import { useGetHobbyDeathQuery } from "../shared/sanityAPI"
import { match, __ , not} from 'ts-pattern'
import { hobbyDeathPatterns } from "./patterns"
import { HobbyDeath as hobbyDeathRequest} from "./types"
import { PortableText } from "@portabletext/react"
import { SanityImage } from "../shared/basicSanityTypes"
import { RenderImage } from "../shared/components/renderImage"

export const HobbyDeath = () => {

    const { data } = useGetHobbyDeathQuery()
    const [videoLink, setVideoLink] = useState("")
    const [videoDescription, setVideoDescription] = useState<any>([""])
    const [hobbydeathImages, sethobbydeathImages] = useState<Array<SanityImage>>([] as Array<SanityImage>)

    const transformImages = (images: hobbyDeathRequest['hobbyDeathImages']) => (
        images.map(image => {
            const imageObj:SanityImage = {
                _type: "image",
                asset: {
                    _ref: image.asset._ref,
                    _type: image.asset._type
                },
                alt: image.caption
            }
            return imageObj
        })
    )

    const exampleImageFetch = {
        "_key":"5d37b4ecbdc8",
        "_type":"hobbyDeathImage",
        "asset":{
            "_ref":"image-4583366455ea8cbfd2e7559b6205047b30092481-1600x1067-jpg",
            "_type":"reference"
        }
    }

    useEffect(() => {
        match(data)
            .with({
                hobbyDeathDescription: [not(__.nullish)],
                hobbyDeathVideo: __.string,
                hobbyDeathImages: [
                    {
                        _key: __.string, 
                        _type: __.string,
                        asset: {
                            _ref: __.string,
                            _type: __.string
                        },
                        caption: __.string || __.nullish
                    }
                ],
                slug: {_type: 'slug', current: 'hobby-death'},
                title: "Hobby Death",
                _createdAt: __.string,
                _id: "hobbyDeath",
                _rev: __.string,
                _type: "hobbyDeath",
                _updatedAt: __.string
            }, (data: hobbyDeathRequest) => {
                setVideoLink(data.hobbyDeathVideo)
                setVideoDescription(data.hobbyDeathDescription)
                sethobbydeathImages(transformImages(data.hobbyDeathImages))

            })
            .with({
                hobbyDeathDescription: [not(__.nullish)],
                hobbyDeathVideo: __.string,
                hobbyDeathImages: [
                    {
                        _key: __.string, 
                        _type: __.string,
                        asset: {
                            _ref: __.string,
                            _type: __.string
                        },
                    }
                ],
                slug: {_type: 'slug', current: 'hobby-death'},
                title: "Hobby Death",
                _createdAt: __.string,
                _id: "hobbyDeath",
                _rev: __.string,
                _type: "hobbyDeath",
                _updatedAt: __.string
            }, (data: hobbyDeathRequest) => {
                setVideoLink(data.hobbyDeathVideo)
                setVideoDescription(data.hobbyDeathDescription)
                sethobbydeathImages(transformImages(data.hobbyDeathImages))

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
            <div id="hobby-death-images">
                {hobbydeathImages.map(image => (
                    <RenderImage value={image} isInline={false} />
                ))}
            </div>

        </div>
    )
}