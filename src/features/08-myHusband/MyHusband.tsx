import { PortableText } from "@portabletext/react"
import { Suspense } from "react"
import ReactPlayer from "react-player/lazy"
import { useGetMyHusbandQuery } from "../shared/sanityAPI"
import { MyHusband as MyHusbandObjType } from "./types" 

export const MyHusband = () => {

    const { isLoading, error, data } = useGetMyHusbandQuery()

    const renderLink = (linkObj: MyHusbandObjType) => {
        return (
            <div className="link-container">
                <a href={linkObj.Link} target="_blank" rel="noopener noreferrer">{linkObj.titleToDisplay}</a>
            </div>
        )
    }

    const renderVideo = (videoObj: MyHusbandObjType) => (
        <div className="video-container">
            <div className="player-wrapper">
                <Suspense fallback={<div></div>}>
                    <ReactPlayer
                        url={videoObj.video}
                        width="90%"
                        height= "90%"
                        light={false}
                        controls={true}
                        className="my-husband-video react-player"
                    />
                </Suspense>
            </div>
            {videoObj.text ? <div className="video-caption"><PortableText value={videoObj.text} /></div> : null}
        </div>
    )

    const renderOnLoad = () => (
        data?.map((obj:MyHusbandObjType) => (renderIndex[obj.type](obj))
    ))

    const renderIndex: {"link": Function, "video": Function, "text": Function} = { 
        "link": renderLink,
        "video": renderVideo,
        "text": (obj: any) => <PortableText value={obj.text}/>
    }

    return (
        <div id="my-husband-container">
            {isLoading ? <div>Loading...</div> : renderOnLoad()}
        </div>
    )
}