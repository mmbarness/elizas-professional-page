import { useState, useEffect } from "react"
import ReactPlayer from "react-player/lazy"
import { useGetHobbyDeathQuery } from "../shared/sanityAPI"
import { match, P,} from 'ts-pattern'
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
                hobbyDeathDescription: [P.not(P.nullish)],
                hobbyDeathVideo: P.string,
                hobbyDeathImages: [
                    {
                        _key: P.string, 
                        _type: P.string,
                        asset: {
                            _ref: P.string,
                            _type: P.string
                        },
                        caption: P.string || P.nullish
                    }
                ],
                slug: {_type: 'slug', current: 'hobby-death'},
                title: "Hobby Death",
                _createdAt: P.string,
                _id: "hobbyDeath",
                _rev: P.string,
                _type: "hobbyDeath",
                _updatedAt: P.string
            }, (data: hobbyDeathRequest) => {
                setVideoLink(data.hobbyDeathVideo)
                setVideoDescription(data.hobbyDeathDescription)
                sethobbydeathImages(transformImages(data.hobbyDeathImages))

            })
            .with({
                hobbyDeathDescription: [P.not(P.nullish)],
                hobbyDeathVideo: P.string,
                hobbyDeathImages: [
                    {
                        _key: P.string, 
                        _type: P.string,
                        asset: {
                            _ref: P.string,
                            _type: P.string
                        },
                    }
                ],
                slug: {_type: 'slug', current: 'hobby-death'},
                title: "Hobby Death",
                _createdAt: P.string,
                _id: "hobbyDeath",
                _rev: P.string,
                _type: "hobbyDeath",
                _updatedAt: P.string
            }, (data: hobbyDeathRequest) => {
                setVideoLink(data.hobbyDeathVideo)
                setVideoDescription(data.hobbyDeathDescription)
                sethobbydeathImages(transformImages(data.hobbyDeathImages))

            })
            .with(P.nullish, () => {})
            .run()
    },[data])
    
    return (
        <div id="hobby-death-container">
            <div id="hobby-death-video-container">
                <ReactPlayer
                    url={videoLink}
                    // height="15vh"
                    // width="auto"
                    width="100%"
                    height= "100%"
                    style={{
                        justifyContent: "left",
                        width:"100%",
                        height: "100%"
                    }}
                    controls={true}
                    className="hobby-death-video"
                />
            </div>
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